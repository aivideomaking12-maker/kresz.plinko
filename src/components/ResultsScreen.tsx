import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Award, RotateCcw, Eye, Sparkles, Shield, Star } from "lucide-react";
import { GameSettings, CategoryInfo } from "../types";
import Mascot from "./Mascot";

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  category: CategoryInfo;
  settings: GameSettings;
  onRestart: () => void;
  onReview: () => void;
}

export default function ResultsScreen({
  score,
  totalQuestions,
  category,
  settings,
  onRestart,
  onReview,
}: ResultsScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const percentage = Math.round((score / totalQuestions) * 100);

  // Police grade assignment
  const getPoliceRank = () => {
    if (percentage === 100) {
      return {
        title: "KRESZ Bajnok",
        description: "Tökéletes teljesítmény! Te vagy a közlekedés abszolút bajnoka! A Rendőrség büszke rád!",
        stars: 5,
        color: "text-amber-500",
        badgeBg: "bg-amber-100 border-amber-200",
      };
    } else if (percentage >= 70) {
      return {
        title: "Közlekedési Főtörzsőrmester",
        description: "Kiváló tudás! Már majdnem mindent tökéletesen tudsz. Igazi példakép vagy a társaidnak!",
        stars: 4,
        color: "text-indigo-600",
        badgeBg: "bg-indigo-50 border-indigo-100",
      };
    } else if (percentage >= 40) {
      return {
        title: "Közlekedési Őrmester",
        description: "Jó úton haladsz! Ismered a legfontosabb szabályokat, de érdemes még egy kicsit gyakorolnod!",
        stars: 3,
        color: "text-emerald-600",
        badgeBg: "bg-emerald-50 border-emerald-100",
      };
    } else {
      return {
        title: "Közlekedési Kadét",
        description: "Bátor szárnypróbálgatás! Sokat tanultál ma, próbáld meg még egyszer, hogy még ügyesebb legyél!",
        stars: 1,
        color: "text-slate-500",
        badgeBg: "bg-slate-100 border-slate-200",
      };
    }
  };

  const rank = getPoliceRank();

  // Canvas particle physics effect (Confetti and Fireworks)
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
      rotation: number;
      rotationSpeed: number;
      type: "confetti" | "spark";
    }> = [];

    // Fit canvas to window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Color palettes
    const colors = ["#f59e0b", "#10b981", "#3b82f6", "#ec4899", "#8b5cf6", "#ef4444", "#06b6d4"];

    // Spawn Confetti
    const spawnConfetti = () => {
      if (!settings.enableConfetti) return;
      for (let i = 0; i < 8; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: -20,
          vx: (Math.random() - 0.5) * 6,
          vy: Math.random() * 4 + 3,
          size: Math.random() * 8 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 5,
          type: "confetti",
        });
      }
    };

    // Spawn Fireworks
    const spawnFirework = () => {
      if (!settings.enableFireworks) return;
      const x = Math.random() * canvas.width;
      const y = Math.random() * (canvas.height * 0.6);
      const fireworkColor = colors[Math.floor(Math.random() * colors.length)];
      
      for (let i = 0; i < 40; i++) {
        const angle = (i * Math.PI * 2) / 40 + (Math.random() - 0.5) * 0.2;
        const speed = Math.random() * 5 + 3;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: Math.random() * 3 + 1.5,
          color: fireworkColor,
          alpha: 1,
          rotation: 0,
          rotationSpeed: 0,
          type: "spark",
        });
      }
    };

    // Spawn initial explosions
    if (score > 0) {
      setTimeout(spawnFirework, 200);
      setTimeout(spawnFirework, 800);
      setTimeout(spawnFirework, 1500);
    }

    // Interval timers
    const confettiInterval = setInterval(spawnConfetti, 150);
    const fireworksInterval = setInterval(spawnFirework, 1800);

    const updatePhysics = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.type === "confetti") {
          p.vy += 0.05; // gravity
          p.rotation += p.rotationSpeed;
        } else {
          p.vy += 0.12; // slightly heavier gravity
          p.alpha -= 0.015; // spark fade
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);

        if (p.type === "confetti") {
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }

        ctx.restore();

        // Delete dead particles
        if (p.y > canvas.height || p.alpha <= 0) {
          particles.splice(index, 1);
        }
      });

      animationId = requestAnimationFrame(updatePhysics);
    };

    updatePhysics();

    return () => {
      clearInterval(confettiInterval);
      clearInterval(fireworksInterval);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [score, settings.enableConfetti, settings.enableFireworks]);

  return (
    <div id="results-screen-layout" className="min-h-screen bg-transparent flex flex-col pt-12 pb-24 px-4 sm:px-6 relative select-none overflow-hidden">
      
      {/* Canvas Layer for physical particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none w-full h-full" />

      <div className="relative z-10 w-full max-w-2xl mx-auto text-center flex flex-col items-center space-y-8">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/20 backdrop-blur-md border border-white/30 py-2 px-5 rounded-full flex items-center gap-2 shadow-sm text-white"
        >
          <Award className="w-5 h-5 animate-bounce text-yellow-300" />
          <span className="text-xs sm:text-sm font-black tracking-widest uppercase">Játék Sikeresen Befejezve!</span>
        </motion.div>

        {/* Big Police Shield badge holding rank */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className={`p-6 sm:p-8 rounded-[40px] border-4 w-full shadow-xl flex flex-col items-center relative overflow-hidden bg-white/95 backdrop-blur-md ${rank.badgeBg}`}
        >
          {/* Animated Glow in background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-indigo-500/5 to-transparent pointer-events-none" />

          {/* Big Shield Badge */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center mb-4">
            {/* Golden shield vector background */}
            <Shield className="w-full h-full text-amber-400 fill-amber-50 drop-shadow-md" />
            <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[58%] font-black text-amber-600 tracking-tight ${
              percentage === 100 ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
            }`}>
              {percentage}%
            </span>
          </div>

          {/* Police rank title */}
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-black leading-tight tracking-tight ${rank.color}`}>
            {rank.title}
          </h2>

          {/* Stars rating */}
          <div className="flex gap-2 my-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star
                key={idx}
                className={`w-7 h-7 sm:w-8 sm:h-8 ${
                  idx < rank.stars ? "text-amber-400 fill-amber-400" : "text-slate-200"
                } drop-shadow-sm`}
              />
            ))}
          </div>

          {/* Police feedback text */}
          <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            {rank.description}
          </p>
        </motion.div>

        {/* Detailed stats overview cards */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {/* Correct Answers card */}
          <div className="bg-emerald-100/90 backdrop-blur-sm rounded-2xl p-4 border border-emerald-300 shadow-lg text-center">
            <p className="text-xs font-black text-emerald-800 uppercase tracking-wider mb-1">Helyes válaszok</p>
            <p className="text-3xl font-black text-emerald-950">{score} db</p>
          </div>

          {/* Total Questions card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-white/30 shadow-lg text-center">
            <p className="text-xs font-black text-indigo-800 uppercase tracking-wider mb-1">Összes kérdés</p>
            <p className="text-3xl font-black text-indigo-950">{totalQuestions} db</p>
          </div>
        </div>

        {/* Police Mascot saying goodbye or praising the child */}
        {settings.enableMascot && (
          <div className="bg-white/80 backdrop-blur-md p-5 rounded-3xl border border-white/40 shadow-xl w-full">
            <Mascot
              mood={percentage >= 70 ? "cheering" : "happy"}
              message={`Szuper munka! Büszke vagyok a teljesítményedre. A mai naptól kezdve sokkal biztonságosabban közlekedsz majd az utakon!`}
            />
          </div>
        )}

        {/* Buttons: Review Answers and Reset App (kiosk flow) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          {/* Review Button */}
          <button
            onClick={onReview}
            className="flex-1 bg-white/90 hover:bg-white border-2 border-white/60 p-4 rounded-2xl font-black text-slate-800 text-sm uppercase tracking-wide shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Eye className="w-5 h-5 text-indigo-600" />
            Válaszok ellenőrzése
          </button>

          {/* Reset button (instantly prepares app for next kid!) */}
          <button
            onClick={onRestart}
            className="flex-1 bg-gradient-to-b from-[#43e97b] to-[#38f9d7] hover:from-[#43e97b] hover:to-[#38f9d7] text-white p-4 rounded-2xl font-black text-sm uppercase tracking-wide shadow-lg border-b-4 border-[#2d8e5e] transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" />
            Új játék indítása
          </button>
        </div>
      </div>
    </div>
  );
}
