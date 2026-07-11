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

// Geometry configuration
const BOARD_WIDTH = 600;
const BOARD_HEIGHT = 780;
const MARGIN_LEFT = 40;
const MARGIN_RIGHT = 40;
const PLAYABLE_WIDTH = BOARD_WIDTH - MARGIN_LEFT - MARGIN_RIGHT; // 520

const ROW_COUNT = 9;
const ROW_SPACING = 42;
const TOP_MARGIN = 110;
const DIVIDER_Y = TOP_MARGIN + ROW_COUNT * ROW_SPACING + 15; // 110 + 9 * 42 + 15 = 503
const SLOT_HEIGHT = 220;

interface Peg {
  id: string;
  x: number;
  y: number;
}

// Symmetrical, staggered peg grid
const PEGS: Peg[] = [];
for (let row = 0; row < ROW_COUNT; row++) {
  const y = TOP_MARGIN + row * ROW_SPACING;
  const isOdd = row % 2 !== 0;
  if (isOdd) {
    // 12 staggered pegs
    const count = 12;
    for (let i = 0; i < count; i++) {
      const x = MARGIN_LEFT + (i + 0.5) * (PLAYABLE_WIDTH / 12);
      PEGS.push({ id: `peg-${row}-${i}`, x, y });
    }
  } else {
    // 11 normal pegs (Skipped i=0 and i=12 to prevent getting stuck on the walls!)
    for (let i = 1; i < 12; i++) {
      const x = MARGIN_LEFT + i * (PLAYABLE_WIDTH / 12);
      PEGS.push({ id: `peg-${row}-${i}`, x, y });
    }
  }
}

// 13 dividers to split the bottom into 12 columns
const DIVIDERS: number[] = [];
for (let i = 0; i < 13; i++) {
  DIVIDERS.push(MARGIN_LEFT + i * (PLAYABLE_WIDTH / 12));
}

// Vibrant theme colors for each category
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

const getCategoryIndexByX = (x: number) => {
  const slotWidth = PLAYABLE_WIDTH / 12;
  let idx = Math.floor((x - MARGIN_LEFT) / slotWidth);
  return Math.max(0, Math.min(11, idx));
};

const getPegColor = (x: number) => {
  const idx = getCategoryIndexByX(x);
  return getCategoryColor(CATEGORIES[idx].id);
};

// Megnövelt betűméretek a jobb olvashatóságért
const getFontSize = (name: string, isLanded: boolean) => {
  const len = name.length;
  let baseSize = isLanded ? 18 : 14.5;
  if (len > 22) {
    baseSize -= 4;
  } else if (len > 16) {
    baseSize -= 2.5;
  }
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

  useEffect(() => {
    soundManager.setEnabled(enableSFX);
  }, [enableSFX]);

  useEffect(() => {
    if (isSpinning && !isFalling && landedSlot === null) {
      handleDrop();
    }
  }, [isSpinning]);

  // Simulated physics frame loop
  useEffect(() => {
    if (!isFalling) return;

    let animFrame: number;
    let localPos = { ...discPos };
    let localVel = { ...discVel };
    
    let ticksInSamePlace = 0;
    let lastY = localPos.y;

    const tick = () => {
      // 1. Physical forces (gravity and subtle drag)
      localVel.y += 0.28;
      localVel.x *= 0.99;
      localVel.y *= 0.99;

      // 2. Position update
      localPos.x += localVel.x;
      localPos.y += localVel.y;

      // 3. Keep within side wall boundaries (Nagyobb disc radius: 14)
      const discR = 14; 
      const leftBoundary = MARGIN_LEFT + 2;
      const rightBoundary = BOARD_WIDTH - MARGIN_RIGHT - 2;

      if (localPos.x - discR < leftBoundary) {
        localPos.x = leftBoundary + discR;
        localVel.x = Math.abs(localVel.x) * 0.55 + 0.5; // push inward
        soundManager.play("spin");
      } else if (localPos.x + discR > rightBoundary) {
        localPos.x = rightBoundary - discR;
        localVel.x = -Math.abs(localVel.x) * 0.55 - 0.5; // push inward
        soundManager.play("spin");
      }

      // 4. Peg collision test
      let hitPegId: string | null = null;
      for (const peg of PEGS) {
        const dx = localPos.x - peg.x;
        const dy = localPos.y - peg.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const minDist = discR + 4.5; // disc radius + peg radius

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

      // 5. Bottom slot dividers collision
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

      // Stuck recovery helper
      if (Math.abs(localPos.y - lastY) < 0.05) {
        ticksInSamePlace++;
        if (ticksInSamePlace > 20) {
          localVel.y = 2;
          localVel.x = (Math.random() - 0.5) * 3;
          ticksInSamePlace = 0;
        }
      } else {
        ticksInSamePlace = 0;
      }
      lastY = localPos.y;

      setDiscPos({ x: localPos.x, y: localPos.y });
      setDiscVel({ x: localVel.x, y: localVel.y });

      const slotWidth = PLAYABLE_WIDTH / 12;
      let currentSlot = Math.floor((localPos.x - MARGIN_LEFT) / slotWidth);
      currentSlot = Math.max(0, Math.min(11, currentSlot));

      if (localPos.y >= DIVIDER_Y + SLOT_HEIGHT - discR - 6) {
        const finalY = DIVIDER_Y + SLOT_HEIGHT - discR - 6;
        setDiscPos({ x: localPos.x, y: finalY });
        setDiscVel({ x: 0, y: 0 });
        
        setIsFalling(false);
        setLandedSlot(currentSlot);
        soundManager.play("correct");

        setTimeout(() => {
          onSpinComplete(CATEGORIES[currentSlot]);
        }, 1200);
      } else {
        animFrame = requestAnimationFrame(tick);
      }
    };

    animFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame);
  }, [isFalling, discPos, discVel]);

  const handlePointerDown = (e: React.PointerEvent<SVGSVGElement>) => {
    if (isFalling || isSpinning || landedSlot !== null) return;
    updatePositionFromEvent(e);
    setIsDragging(true);
    svgRef.current?.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (isFalling || isSpinning || landedSlot !== null) return;
    if (!isDragging) return;
    updatePositionFromEvent(e);
  };

  const handlePointerUp = (e: React.PointerEvent<SVGSVGElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    svgRef.current?.releasePointerCapture(e.pointerId);
  };

  const updatePositionFromEvent = (e: React.PointerEvent<SVGSVGElement>) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;

    const clientX = e.clientX - rect.left;
    const scaleX = BOARD_WIDTH / rect.width;
    let x = clientX * scaleX;

    const minX = MARGIN_LEFT + 18;
    const maxX = BOARD_WIDTH - MARGIN_RIGHT - 18;
    x = Math.max(minX, Math.min(maxX, x));

    setDiscPos({ x, y: 65 });
    setDiscVel({ x: 0, y: 0 });
  };

  const handleDrop = () => {
    if (isFalling || landedSlot !== null) return;
    
    setIsFalling(true);
    setIsSpinning(true);
    
    setDiscVel({
      x: (Math.random() - 0.5) * 0.4,
      y: 1.5,
    });
  };

  const handleResetBoard = () => {
    setDiscPos({ x: 300, y: 70 });
    setDiscVel({ x: 0, y: 0 });
    setIsFalling(false);
    setIsSpinning(false);
    setLandedSlot(null);
  };

  return (
    <div className="w-full relative max-w-xl mx-auto">
      
      {/* Interactive Plinko Canvas Container */}
      <div className="relative w-full aspect-[600/780] bg-slate-950 rounded-[36px] shadow-[0_25px_60px_rgba(0,0,0,0.8)] border-8 border-indigo-500 overflow-hidden select-none z-10">
        
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />
        
        <div className="absolute bottom-0 inset-x-0 h-44 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08),rgba(255,255,255,0.08)_24px,transparent_24px,transparent_48px)] pointer-events-none" />

        <svg
          ref={svgRef}
          viewBox={`0 0 ${BOARD_WIDTH} ${BOARD_HEIGHT}`}
          className="relative w-full h-full z-10 touch-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fde047" />
              <stop offset="30%" stopColor="#ca8a04" />
              <stop offset="50%" stopColor="#fef08a" />
              <stop offset="75%" stopColor="#854d0e" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>

            <radialGradient id="peg-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ca8a04" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* 1. SOLID VIBRANT LANE STRIPES Behind Pegs */}
          <g>
            {CATEGORIES.map((cat, idx) => {
              const xLeft = DIVIDERS[idx];
              const xRight = DIVIDERS[idx + 1];
              const slotW = xRight - xLeft;
              const catColor = getCategoryColor(cat.id);
              const isLanded = landedSlot === idx;
              return (
                <rect
                  key={`lane-${cat.id}`}
                  x={xLeft}
                  y="100"
                  width={slotW}
                  height={DIVIDER_Y + SLOT_HEIGHT - 100}
                  fill={catColor}
                  opacity={isLanded ? 0.65 : 0.28}
                  className="transition-all duration-300"
                />
              );
            })}
          </g>

          {/* 2. Launcher Track Zone */}
          <g opacity="0.95">
            <rect
              x={MARGIN_LEFT}
              y="40"
              width={PLAYABLE_WIDTH}
              height="50"
              rx="15"
              fill="#1e293b"
              stroke="#334155"
              strokeWidth="2.5"
            />
            
            <line
              x1={MARGIN_LEFT + 15}
              y1="65"
              x2={BOARD_WIDTH - MARGIN_RIGHT - 15}
              y2="65"
              stroke="#e2e8f0"
              strokeWidth="2"
              strokeDasharray="4 6"
              opacity="0.3"
            />

            <text
              x="300"
              y="32"
              textAnchor="middle"
              className="fill-indigo-300 font-sans font-extrabold text-[12px] uppercase tracking-wider select-none pointer-events-none"
            >
              {!isFalling && landedSlot === null ? "Húzd és engedd el a korongot az indításhoz!" : "Sorsolás folyamatban..."}
            </text>
          </g>

          {/* 3. Staggered Pegs (Akadályok) */}
          <g>
            {PEGS.map((peg) => {
              const lastHitTime = hitPegs[peg.id] || 0;
              const isHitActive = Date.now() - lastHitTime < 280;
              const pegColor = getPegColor(peg.x);
              
              return (
                <g key={peg.id}>
                  {/* Villanás effekt KÖZÉPRE igazítva a transformOrigin segítségével */}
                  {isHitActive && (
                    <circle
                      cx={peg.x}
                      cy={peg.y}
                      r="20"
                      fill="url(#peg-glow)"
                      className="animate-ping"
                      opacity="0.65"
                      style={{ transformOrigin: `${peg.x}px ${peg.y}px` }}
                    />
                  )}
                  <circle
                    cx={peg.x}
                    cy={peg.y}
                    r={isHitActive ? 7 : 5.5}
                    fill={isHitActive ? "#ffffff" : pegColor}
                    stroke={isHitActive ? "#ca8a04" : "#0f172a"}
                    strokeWidth={isHitActive ? 3 : 1.8}
                    style={{
                      transformOrigin: `${peg.x}px ${peg.y}px`,
                      transition: "transform 0.05s ease-out",
                    }}
                    className={isHitActive ? "scale-125" : ""}
                  />
                  <circle
                    cx={peg.x - 1.2}
                    cy={peg.y - 1.2}
                    r="1.5"
                    fill="#ffffff"
                    opacity="0.9"
                  />
                </g>
              );
            })}
          </g>

          {/* 4. Bottom Dividers & Slots */}
          <g>
            {CATEGORIES.map((cat, idx) => {
              const xLeft = DIVIDERS[idx];
              const xRight = DIVIDERS[idx + 1];
              const slotW = xRight - xLeft;
              const catColor = getCategoryColor(cat.id);
              const isLanded = landedSlot === idx;

              return (
                <g key={`slot-bg-${cat.id}`}>
                  <rect
                    x={xLeft + 1.5}
                    y={DIVIDER_Y}
                    width={slotW - 3}
                    height={SLOT_HEIGHT}
                    rx="10"
                    fill={catColor}
                    opacity={isLanded ? 1.0 : 0.82}
                    stroke={isLanded ? "#ffffff" : "rgba(255,255,255,0.4)"}
                    strokeWidth={isLanded ? "4" : "1.5"}
                    className="transition-all duration-200"
                    style={{ filter: isLanded ? "drop-shadow(0px 0px 12px rgba(255,255,255,0.6))" : "none" }}
                  />

                  <rect
                    x={xLeft + 3}
                    y={DIVIDER_Y + SLOT_HEIGHT - 12}
                    width={slotW - 6}
                    height="8"
                    rx="4"
                    fill="#0f172a"
                    opacity="0.45"
                  />

                  <g transform={`translate(${xLeft + slotW / 2}, ${DIVIDER_Y + SLOT_HEIGHT / 2})`}>
                    {/* Megnövelt kategória betűméret */}
                    <text
                      transform="rotate(-90)"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#ffffff"
                      className={`font-sans uppercase tracking-wider select-none pointer-events-none transition-all duration-150`}
                      style={{
                        fontSize: getFontSize(cat.name, isLanded),
                        fontWeight: "900",
                        textShadow: "0px 2px 4px rgba(0,0,0,0.95), 0px 0px 10px rgba(0,0,0,0.6)"
                      }}
                    >
                      {cat.name}
                    </text>
                  </g>
                </g>
              );
            })}

            {DIVIDERS.map((divX, idx) => (
              <g key={`divider-${idx}`}>
                <line x1={divX} y1={DIVIDER_Y} x2={divX} y2={DIVIDER_Y + SLOT_HEIGHT} stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                <line x1={divX} y1={DIVIDER_Y} x2={divX} y2={DIVIDER_Y + SLOT_HEIGHT} stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx={divX} cy={DIVIDER_Y} r="6" fill="#f1f5f9" stroke="#0f172a" strokeWidth="2" />
              </g>
            ))}
          </g>

          {/* 5. Physical Falling Coin/Disc (Megnövelt méret) */}
          <g>
            <circle cx={discPos.x} cy={discPos.y + 4} r="16" fill="#000000" opacity="0.4" />

            <g transform={`translate(${discPos.x}, ${discPos.y})`}>
              <circle r="18" fill="url(#gold-gradient)" stroke="#78350f" strokeWidth="2.5" />
              <circle r="13" fill="#ffffff" stroke="#f59e0b" strokeWidth="1.5" />
              
              <image
                href="/SVMBB.png"
                x="-10"
                y="-10"
                width="20"
                height="20"
                preserveAspectRatio="xMidYMid meet"
                className="pointer-events-none select-none"
              />

              {!isFalling && landedSlot === null && (
                <circle r="25" fill="none" stroke="#facc15" strokeWidth="3" className="animate-ping opacity-75" style={{ pointerEvents: "none" }} />
              )}
            </g>
          </g>
        </svg>

        <div className="absolute inset-0 rounded-[28px] border-[10px] border-indigo-950 pointer-events-none z-20" />
      </div>

      {/* --- Controls bar: Asztali gépen jobb oldalt lebeg, mobilon alul marad --- */}
      <div className="mt-6 flex justify-center lg:absolute lg:top-1/2 lg:-right-8 lg:translate-x-full lg:-translate-y-1/2 lg:mt-0 z-30">
        {!isFalling && landedSlot === null && (
          <motion.button
            id="plinko-drop-btn"
            onClick={handleDrop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white font-black text-lg tracking-widest uppercase rounded-2xl border-b-4 border-emerald-700 shadow-[0_10px_30px_rgba(16,185,129,0.5)] cursor-pointer flex items-center gap-2 active:translate-y-[2px] active:border-b-2"
          >
            <span>Engedd Le!</span>
            <Icons.ChevronDownSquare className="w-6 h-6 stroke-[2.5]" />
          </motion.button>
        )}

        {landedSlot !== null && (
          <motion.button
            id="plinko-reset-btn"
            onClick={handleResetBoard}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-5 bg-slate-700 hover:bg-slate-600 text-white font-black text-sm tracking-widest uppercase rounded-2xl border-b-4 border-slate-900 shadow-xl cursor-pointer flex items-center gap-2"
          >
            <span>Újra sorsol</span>
            <Icons.RotateCcw className="w-5 h-5" />
          </motion.button>
        )}
      </div>

    </div>
  );
}
