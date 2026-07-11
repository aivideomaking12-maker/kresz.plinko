import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CATEGORIES } from "../data/categories";
import { soundManager } from "../utils/soundManager";
import * as Icons from "lucide-react";
import { CategoryInfo } from "../types";

interface PlinkoBoardProps {
  onSpinComplete: (category: CategoryInfo) => void;
  isSpinning: boolean;
  setIsSpinning: (spinning: boolean) => void;
  enableSFX: boolean;
}

const BOARD_WIDTH = 600;
const BOARD_HEIGHT = 780;
const MARGIN_LEFT = 40;
const MARGIN_RIGHT = 40;
const PLAYABLE_WIDTH = BOARD_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;

const ROW_COUNT = 9;
const ROW_SPACING = 42;
const TOP_MARGIN = 110;
const DIVIDER_Y = TOP_MARGIN + ROW_COUNT * ROW_SPACING + 15;
const SLOT_HEIGHT = 220;

interface Peg {
  id: string;
  x: number;
  y: number;
}

const PEGS: Peg[] = [];
for (let row = 0; row < ROW_COUNT; row++) {
  const y = TOP_MARGIN + row * ROW_SPACING;
  const isOdd = row % 2 !== 0;
  if (isOdd) {
    for (let i = 0; i < 12; i++) {
      const x = MARGIN_LEFT + (i + 0.5) * (PLAYABLE_WIDTH / 12);
      PEGS.push({ id: `peg-${row}-${i}`, x, y });
    }
  } else {
    for (let i = 1; i < 12; i++) {
      const x = MARGIN_LEFT + i * (PLAYABLE_WIDTH / 12);
      PEGS.push({ id: `peg-${row}-${i}`, x, y });
    }
  }
}

const DIVIDERS: number[] = [];
for (let i = 0; i < 13; i++) {
  DIVIDERS.push(MARGIN_LEFT + i * (PLAYABLE_WIDTH / 12));
}

const getCategoryColor = (id: string) => {
  switch (id) {
    case "sebesség": return "#ef4444";
    case "kerekpar": return "#10b981";
    case "gyalogos": return "#0ea5e9";
    case "jelzesek": return "#f59e0b";
    case "elsobbseg": return "#8b5cf6";
    case "megallas": return "#3b82f6";
    case "mikromobilitas": return "#06b6d4";
    case "haladas": return "#84cc16";
    case "tablak": return "#f97316";
    case "lathatosag": return "#eab308";
    case "vasut": return "#64748b";
    case "kultura": return "#ec4899";
    default: return "#6366f1";
  }
};

const getFontSize = (name: string, isLanded: boolean) => {
  const len = name.length;
  let baseSize = isLanded ? 18 : 14.5;
  if (len > 22) baseSize -= 4;
  else if (len > 16) baseSize -= 2.5;
  return `${baseSize}px`;
};

export default function PlinkoBoard({
  onSpinComplete,
  isSpinning,
  setIsSpinning,
  enableSFX,
}: PlinkoBoardProps) {
  const [discPos, setDiscPos] = useState({ x: 300, y: 70 });
  const [discVel, setDiscVel] = useState({ x: 0, y: 0 });
  const [isFalling, setIsFalling] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [landedSlot, setLandedSlot] = useState<number | null>(null);
  const [hitPegs, setHitPegs] = useState<{ [key: string]: number }>({});
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => { soundManager.setEnabled(enableSFX); }, [enableSFX]);

  useEffect(() => {
    if (isSpinning && !isFalling && landedSlot === null) handleDrop();
  }, [isSpinning]);

  useEffect(() => {
    if (!isFalling) return;
    let animFrame: number;
    let localPos = { ...discPos };
    let localVel = { ...discVel };
    let ticksInSamePlace = 0;
    let lastY = localPos.y;

    const tick = () => {
      localVel.y += 0.28;
      localVel.x *= 0.99;
      localVel.y *= 0.99;
      localPos.x += localVel.x;
      localPos.y += localVel.y;

      const discR = 14; 
      const leftBoundary = MARGIN_LEFT + 2;
      const rightBoundary = BOARD_WIDTH - MARGIN_RIGHT - 2;

      if (localPos.x - discR < leftBoundary) {
        localPos.x = leftBoundary + discR;
        localVel.x = Math.abs(localVel.x) * 0.55 + 0.5;
        soundManager.play("spin");
      } else if (localPos.x + discR > rightBoundary) {
        localPos.x = rightBoundary - discR;
        localVel.x = -Math.abs(localVel.x) * 0.55 - 0.5;
        soundManager.play("spin");
      }

      let hitPegId: string | null = null;
      for (const peg of PEGS) {
        const dx = localPos.x - peg.x;
        const dy = localPos.y - peg.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = discR + 4.5;
        if (dist < minDist) {
          hitPegId = peg.id;
          const nx = dx / dist;
          const ny = dy / dist;
          const overlap = minDist - dist;
          localPos.x += nx * overlap;
          localPos.y += ny * overlap;
          const velAlongNormal = localVel.x * nx + localVel.y * ny;
          if (velAlongNormal < 0) {
            const restitution = 0.52 + Math.random() * 0.15;
            const impulse = -(1 + restitution) * velAlongNormal;
            localVel.x += impulse * nx;
            localVel.y += impulse * ny;
            localVel.x += (Math.random() - 0.5) * 0.6;
            localVel.x = Math.max(-5.5, Math.min(5.5, localVel.x));
            localVel.y = Math.max(-3, Math.min(8, localVel.y));
          }
        }
      }

      if (hitPegId) {
        setHitPegs((prev) => ({ ...prev, [hitPegId!]: Date.now() }));
        soundManager.play("spin");
      }

      if (localPos.y > DIVIDER_Y - 5 && localPos.y < DIVIDER_Y + SLOT_HEIGHT) {
        for (const divX of DIVIDERS) {
          const dx = localPos.x - divX;
          if (Math.abs(dx) < discR + 1.5) {
            const pushSide = dx >= 0 ? 1 : -1;
            localPos.x = divX + pushSide * (discR + 1.5);
            localVel.x = -localVel.x * 0.45;
          }
        }
      }

      if (Math.abs(localPos.y - lastY) < 0.05) {
        ticksInSamePlace++;
        if (ticksInSamePlace > 20) {
          localVel.y = 2;
          localVel.x = (Math.random() - 0.5) * 3;
          ticksInSamePlace = 0;
        }
      } else { ticksInSamePlace = 0; }
      lastY = localPos.y;

      setDiscPos({ x: localPos.x, y: localPos.y });
      setDiscVel({ x: localVel.x, y: localVel.y });

      const slotWidth = PLAYABLE_WIDTH / 12;
      let currentSlot = Math.floor((localPos.x - MARGIN_LEFT) / slotWidth);
      currentSlot = Math.max(0, Math.min(11, currentSlot));

      if (localPos.y >= DIVIDER_Y + SLOT_HEIGHT - discR - 6) {
        setDiscPos({ x: localPos.x, y: DIVIDER_Y + SLOT_HEIGHT - discR - 6 });
        setDiscVel({ x: 0, y: 0 });
        setIsFalling(false);
        setLandedSlot(currentSlot);
        soundManager.play("correct");
        setTimeout(() => onSpinComplete(CATEGORIES[currentSlot]), 1200);
      } else {
        animFrame = requestAnimationFrame(tick);
      }
    };
    animFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame);
  }, [isFalling, discPos, discVel]);

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (isFalling || isSpinning || landedSlot !== null) return;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) * (BOARD_WIDTH / rect.width);
    const y = (e.clientY - rect.top) * (BOARD_HEIGHT / rect.height);
    if (Math.sqrt(Math.pow(x - discPos.x, 2) + Math.pow(y - discPos.y, 2)) < 45) {
      setIsDragging(true);
      svgRef.current?.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (isDragging) {
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;
      let x = (e.clientX - rect.left) * (BOARD_WIDTH / rect.width);
      x = Math.max(MARGIN_LEFT + 18, Math.min(BOARD_WIDTH - MARGIN_RIGHT - 18, x));
      setDiscPos({ x, y: 65 });
    }
  };

  const handlePointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    if (isDragging) setIsDragging(false);
  };

  const handleDrop = () => {
    if (isFalling || landedSlot !== null) return;
    setIsFalling(true);
    setIsSpinning(true);
    setDiscVel({ x: (Math.random() - 0.5) * 0.4, y: 1.5 });
  };

  const handleResetBoard = () => {
    setDiscPos({ x: 300, y: 70 });
    setIsFalling(false);
    setIsSpinning(false);
    setLandedSlot(null);
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <div className="w-full flex justify-center mb-6 z-20">
        <AnimatePresence mode="wait">
          {!isFalling && landedSlot === null && (
            <motion.button key="drop" onClick={handleDrop} className="px-10 py-5 bg-gradient-to-r from-emerald-400 to-teal-500 text-white font-black text-lg uppercase rounded-2xl border-b-4 border-emerald-700 shadow-xl flex items-center gap-2">
              <span>Engedd Le!</span>
              <Icons.ChevronDownSquare className="w-6 h-6" />
            </motion.button>
          )}
          {landedSlot !== null && (
            <motion.button key="reset" onClick={handleResetBoard} className="px-8 py-5 bg-slate-700 text-white font-black text-sm uppercase rounded-2xl border-b-4 border-slate-900 shadow-xl flex items-center gap-2">
              <span>Újra sorsol</span>
              <Icons.RotateCcw className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <div className="relative w-full aspect-[600/780] bg-slate-950 rounded-[36px] shadow-[0_25px_60px_rgba(0,0,0,0.8)] border-8 border-indigo-500 overflow-hidden z-10">
        <svg ref={svgRef} viewBox={`0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}`} className="w-full h-full touch-none" onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp}>
          {/* ... (SVG tartalma marad az előző kód alapján) ... */}
        </svg>
      </div>
    </div>
  );
}
