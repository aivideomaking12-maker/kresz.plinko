import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface MascotProps {
  mood: "happy" | "neutral" | "sad" | "cheering";
  message?: string;
  enableSpeechBubble?: boolean;
}

export default function Mascot({ mood, message, enableSpeechBubble = true }: MascotProps) {
  const [wave, setWave] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWave(true);
      setTimeout(() => setWave(false), 1200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getEyeExpression = () => {
    switch (mood) {
      case "happy":
      case "cheering":
        return (
          <>
            <path d="M 32 54 Q 39 42 46 54" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M 54 54 Q 61 42 68 54" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="none" />
          </>
        );
      case "sad":
        return (
          <>
            <path d="M 32 48 Q 39 58 46 48" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M 54 48 Q 61 58 68 48" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" fill="none" />
          </>
        );
      default:
        return (
          <>
            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1, 1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, times: [0, 0.7, 0.72, 0.74, 0.9, 0.92, 0.94, 1] }}
              style={{ transformOrigin: "39px 54px" }}
            >
              <ellipse cx="39" cy="54" rx="8" ry="10" fill="#ffffff" />
              <ellipse cx="39" cy="54" rx="7.5" ry="9.5" fill="url(#eyeShadow)" />
              <ellipse cx="39" cy="54.5" rx="5.5" ry="7" fill="#451a03" />
              <circle cx="39" cy="55.5" r="3.5" fill="#020617" />
              <circle cx="36.5" cy="51.5" r="2.5" fill="#ffffff" opacity="0.9" />
              <circle cx="41.5" cy="57.5" r="1" fill="#ffffff" opacity="0.8" />
            </motion.g>

            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1, 1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, times: [0, 0.7, 0.72, 0.74, 0.9, 0.92, 0.94, 1] }}
              style={{ transformOrigin: "61px 54px" }}
            >
              <ellipse cx="61" cy="54" rx="8" ry="10" fill="#ffffff" />
              <ellipse cx="61" cy="54" rx="7.5" ry="9.5" fill="url(#eyeShadow)" />
              <ellipse cx="61" cy="54.5" rx="5.5" ry="7" fill="#451a03" />
              <circle cx="61" cy="55.5" r="3.5" fill="#020617" />
              <circle cx="58.5" cy="51.5" r="2.5" fill="#ffffff" opacity="0.9" />
              <circle cx="63.5" cy="57.5" r="1" fill="#ffffff" opacity="0.8" />
            </motion.g>
          </>
        );
    }
  };

  const getMouthExpression = () => {
    switch (mood) {
      case "happy":
      case "cheering":
        return (
          <g>
            <path d="M 42 66 C 42 66, 50 82, 58 66 Z" fill="#9f1239" stroke="#0f172a" strokeWidth="2" strokeLinejoin="round" />
            <path d="M 45 69 Q 50 78 55 69 Z" fill="#f43f5e" />
          </g>
        );
      case "sad":
        return <path d="M 44 71 Q 50 63 56 71" stroke="#0f172a" strokeWidth="3" fill="none" strokeLinecap="round" />;
      default:
        return <path d="M 44 66 Q 50 71 56 66" stroke="#0f172a" strokeWidth="2.5" fill="none" strokeLinecap="round" />;
    }
  };

  return (
    <div className="flex items-center gap-4 select-none">
      <motion.div
        className="w-40 h-40 flex-shrink-0"
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl overflow-visible">
          <defs>
            <radialGradient id="bodyBaseGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="90%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#172554" />
            </radialGradient>
            <radialGradient id="bodyInnerShadow" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="#000" stopOpacity="0" />
              <stop offset="100%" stopColor="#020617" stopOpacity="0.4" />
            </radialGradient>
            <radialGradient id="eyeShadow" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="#000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000" stopOpacity="0.2" />
            </radialGradient>
            <linearGradient id="capGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="80%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <linearGradient id="visorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="30%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="batonRed" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#991b1b" />
              <stop offset="30%" stopColor="#ef4444" />
              <stop offset="70%" stopColor="#f87171" />
              <stop offset="100%" stopColor="#7f1d1d" />
            </linearGradient>
            <linearGradient id="batonWhite" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="30%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
            <radialGradient id="gloveGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </radialGradient>
            <linearGradient id="shoeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="40%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
            <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#020617" floodOpacity="0.5"/>
            </filter>

            {/* Magyar zászló hard-stop gradiens a címerhez */}
            <linearGradient id="hunFlag" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="33%" stopColor="#ef4444" />
              <stop offset="33.1%" stopColor="#ffffff" />
              <stop offset="66%" stopColor="#ffffff" />
              <stop offset="66.1%" stopColor="#22c55e" />
            </linearGradient>
          </defs>

          {/* Talaj árnyék */}
          <ellipse cx="50" cy="94" rx="25" ry="4" fill="#020617" opacity="0.3" filter="blur(2px)" />

          {/* Lábak */}
          <path d="M 38 82 L 38 88" stroke="#1e3a8a" strokeWidth="8" strokeLinecap="round" />
          <path d="M 62 82 L 62 88" stroke="#1e3a8a" strokeWidth="8" strokeLinecap="round" />

          {/* Cipők */}
          <g>
            <path d="M 33 86 C 33 82, 45 82, 45 86 C 45 92, 43 94, 39 94 C 33 94, 33 92, 33 86 Z" fill="url(#shoeGrad)" />
            <path d="M 35 84.5 Q 39 83 43 84.5" stroke="#ffffff" strokeWidth="1" opacity="0.3" fill="none" strokeLinecap="round" />
          </g>
          <g>
            <path d="M 55 86 C 55 82, 67 82, 67 86 C 67 92, 65 94, 61 94 C 55 94, 55 92, 55 86 Z" fill="url(#shoeGrad)" />
            <path d="M 57 84.5 Q 61 83 65 84.5" stroke="#ffffff" strokeWidth="1" opacity="0.3" fill="none" strokeLinecap="round" />
          </g>

          {/* Fő Test */}
          <path id="body-shape" d="M 50 25 C 20 25, 12 50, 15 72 C 18 88, 35 90, 50 90 C 65 90, 82 88, 85 72 C 88 50, 80 25, 50 25 Z" fill="url(#bodyBaseGrad)" />
          <path d="M 50 25 C 20 25, 12 50, 15 72 C 18 88, 35 90, 50 90 C 65 90, 82 88, 85 72 C 88 50, 80 25, 50 25 Z" fill="url(#bodyInnerShadow)" />

          {/* Arcpír */}
          <circle cx="28" cy="62" r="6" fill="#fca5a5" opacity="0.35" filter="blur(2px)" />
          <circle cx="72" cy="62" r="6" fill="#fca5a5" opacity="0.35" filter="blur(2px)" />

          {/* Karszalag / Címer */}
          <g transform="translate(14, 55) rotate(-15)">
            <path d="M 0 0 L 8 0 L 8 6 Q 4 10 0 6 Z" fill="#1e1b4b" stroke="#fbbf24" strokeWidth="0.8" />
            <rect x="1" y="2" width="6" height="1.5" fill="#ef4444" />
            <rect x="1" y="3.5" width="6" height="1.5" fill="#ffffff" />
            <rect x="1" y="5" width="6" height="1.5" fill="#22c55e" />
          </g>

          {/* Bal Kar (Integető) */}
          <motion.g
            animate={wave || mood === "cheering" ? { rotate: [0, -20, 10, -20, 0] } : { rotate: [0, 2, 0] }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "82px 65px" }}
          >
            <path d="M 82 65 Q 92 65 90 52" stroke="url(#bodyBaseGrad)" strokeWidth="11" strokeLinecap="round" fill="none" />
            <circle cx="90" cy="51" r="5" fill="url(#gloveGrad)" />
            <path d="M 86 48 L 88 42 A 2 2 0 0 1 91 42 L 89 48" fill="url(#gloveGrad)" />
            <path d="M 89 48 L 92 40 A 2 2 0 0 1 95 41 L 91 49" fill="url(#gloveGrad)" />
            <path d="M 91 49 L 95 44 A 2 2 0 0 1 98 46 L 93 51" fill="url(#gloveGrad)" />
            <path d="M 85 52 L 82 48 A 2 2 0 0 1 85 46 L 88 50" fill="url(#gloveGrad)" />
          </motion.g>

          {/* Jobb Kar (Botot tartó) - Teljesen újraírt bottal */}
          <motion.g
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            style={{ transformOrigin: "18px 65px" }}
          >
            <path d="M 18 65 Q 10 65 12 55" stroke="url(#bodyBaseGrad)" strokeWidth="11" strokeLinecap="round" fill="none" />
            
            <g transform="translate(12, 54) rotate(-15)">
              {/* Markolat, amely lefelé lóg a kézből */}
              <rect x="-4" y="0" width="8" height="14" fill="#0f172a" rx="1.5" />
              {/* Bot színes sávjai (felfelé építkezve a kézből) */}
              <rect x="-4" y="-6" width="8" height="6" fill="url(#batonWhite)" />
              <rect x="-4" y="-12" width="8" height="6" fill="url(#batonRed)" />
              <rect x="-4" y="-18" width="8" height="6" fill="url(#batonWhite)" />
              <rect x="-4" y="-24" width="8" height="6" fill="url(#batonRed)" />
              <rect x="-4" y="-30" width="8" height="6" fill="url(#batonWhite)" />
              {/* Lekerekített, hibátlan piros bot-tető */}
              <path d="M -4 -30 L -4 -33 C -4 -38, 4 -38, 4 -33 L 4 -30 Z" fill="url(#batonRed)" />
              {/* Hosszú 3D műanyag csillogás a teljes boton */}
              <rect x="-1" y="-35" width="1.5" height="48" fill="#ffffff" opacity="0.4" rx="0.75" />
            </g>

            {/* Kesztyű (a botra rajzolva) */}
            <circle cx="12" cy="54" r="5.5" fill="url(#gloveGrad)" />
            <circle cx="9" cy="52" r="2.5" fill="url(#gloveGrad)" />
            <circle cx="15" cy="52" r="2.5" fill="url(#gloveGrad)" />
          </motion.g>

          <path d="M 30 43 Q 38 38 45 43" stroke="#020617" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M 55 43 Q 62 38 70 43" stroke="#020617" strokeWidth="3.5" strokeLinecap="round" fill="none" />

          {getEyeExpression()}
          <circle cx="50" cy="59" r="4" fill="#3b82f6" />
          <circle cx="49" cy="58" r="1.5" fill="#93c5fd" />
          {getMouthExpression()}

          {/* RENDŐRSAPKA - Javított, zárt ívekkel */}
          <g filter="url(#dropShadow)" transform="translate(0, -2)">
            {/* Fehér kupola */}
            <path d="M 23 30 Q 50 38 77 30 C 95 12, 75 4, 50 4 C 25 4, 5 12, 23 30 Z" fill="url(#capGrad)" stroke="#64748b" strokeWidth="1" />
            
            {/* Sötétkék Pánt (Pontosan csatlakozik a sültjéhez) */}
            <path d="M 23 30 Q 50 38 77 30 L 79 36 Q 50 44 21 36 Z" fill="#0f172a" />
            
            {/* Sapka sültje (Tömör, zárt forma, nincs lyuk) */}
            <path d="M 21 36 Q 50 44 79 36 Q 50 55 21 36 Z" fill="url(#visorGrad)" stroke="#020617" strokeWidth="1" />
            {/* Sült csillogás */}
            <path d="M 26 38.5 Q 50 45 74 38.5" stroke="#ffffff" strokeWidth="1" opacity="0.25" fill="none" />

            {/* Arany Fonat (Tökéletesen a pánt alján) */}
            <path d="M 21 36 Q 50 44 79 36" stroke="#92400e" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 21 36 Q 50 44 79 36" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="2.5 1.5" fill="none" strokeLinecap="round" />
            <circle cx="21" cy="36" r="2.5" fill="#fbbf24" />
            <circle cx="79" cy="36" r="2.5" fill="#fbbf24" />

            {/* Egyszerűsített, letisztult Magyar Zászló Címer */}
            <circle cx="50" cy="18" r="5" fill="url(#hunFlag)" stroke="#fbbf24" strokeWidth="1.5" />
          </g>
        </svg>
      </motion.div>

      <AnimatePresence mode="wait">
        {enableSpeechBubble && message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-white text-slate-800 font-sans font-medium px-4 py-3 rounded-xl shadow-xl border border-slate-200 flex-1 min-w-0 max-w-xs text-sm"
          >
            <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-b border-l border-slate-200"></div>
            <p className="relative z-10 m-0">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
