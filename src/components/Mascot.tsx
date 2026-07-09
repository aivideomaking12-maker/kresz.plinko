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
            <path d="M 32 54 Q 39 44 46 54" stroke="#1e293b" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 54 54 Q 61 44 68 54" stroke="#1e293b" strokeWidth="4" fill="none" strokeLinecap="round" />
          </>
        );
      case "sad":
        return (
          <>
            <path d="M 32 50 Q 39 58 46 50" stroke="#1e293b" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M 54 50 Q 61 58 68 50" stroke="#1e293b" strokeWidth="4" fill="none" strokeLinecap="round" />
          </>
        );
      default:
        return (
          <>
            {/* 3D-sített Szemek */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1, 1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, times: [0, 0.7, 0.72, 0.74, 0.9, 0.92, 0.94, 1] }}
              style={{ transformOrigin: "39px 54px" }}
            >
              <ellipse cx="39" cy="54" rx="8" ry="10" fill="#ffffff" stroke="#1e293b" strokeWidth="1" />
              <ellipse cx="39" cy="54" rx="7.5" ry="9.5" fill="url(#eyeGrad)" />
              <ellipse cx="39" cy="54.5" rx="5.5" ry="7" fill="#451a03" />
              <circle cx="39" cy="55.5" r="3.5" fill="#020617" />
              <circle cx="37" cy="51.5" r="2" fill="#ffffff" />
              <circle cx="41.5" cy="57.5" r="0.8" fill="#ffffff" />
            </motion.g>

            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1, 1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, times: [0, 0.7, 0.72, 0.74, 0.9, 0.92, 0.94, 1] }}
              style={{ transformOrigin: "61px 54px" }}
            >
              <ellipse cx="61" cy="54" rx="8" ry="10" fill="#ffffff" stroke="#1e293b" strokeWidth="1" />
              <ellipse cx="61" cy="54" rx="7.5" ry="9.5" fill="url(#eyeGrad)" />
              <ellipse cx="61" cy="54.5" rx="5.5" ry="7" fill="#451a03" />
              <circle cx="61" cy="55.5" r="3.5" fill="#020617" />
              <circle cx="59" cy="51.5" r="2" fill="#ffffff" />
              <circle cx="63.5" cy="57.5" r="0.8" fill="#ffffff" />
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
            <path d="M 42 66 Q 50 78 58 66 Z" fill="#9f1239" stroke="#1e293b" strokeWidth="2" strokeLinejoin="round" />
            <path d="M 45 69 Q 50 75 55 69 Z" fill="#f43f5e" />
          </g>
        );
      case "sad":
        return <path d="M 45 72 Q 50 65 55 72" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />;
      default:
        return <path d="M 44 67 Q 50 72 56 67" stroke="#1e293b" strokeWidth="2.5" fill="none" strokeLinecap="round" />;
    }
  };

  return (
    <div className="flex items-center gap-4 select-none">
      <motion.div
        className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0"
        animate={{ y: [0, -4, 0], scaleY: [1, 1.02, 1], scaleX: [1, 0.98, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
          <defs>
            {/* Textúra Generátor a Plüss/Bolyhos hatáshoz */}
            <filter id="fuzzTexture">
              <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" result="noise" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.15 0" in="noise" result="coloredNoise" />
              <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="texture" />
              <feBlend mode="multiply" in="texture" in2="SourceGraphic" />
            </filter>

            {/* Fényes 3D Gömbszerű Színátmenetek */}
            <radialGradient id="body3DGrad" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="40%" stopColor="#3b82f6" />
              <stop offset="85%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0f172a" />
            </radialGradient>

            <radialGradient id="noseGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="70%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </radialGradient>

            <linearGradient id="capTopGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            <linearGradient id="visorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="30%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            <linearGradient id="gloveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            <linearGradient id="shoeGrad" x1="30%" y1="0%" x2="70%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
            
            <radialGradient id="eyeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="80%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.8" />
            </radialGradient>
          </defs>

          {/* Föld Árnyék */}
          <ellipse cx="50" cy="95" rx="30" ry="5" fill="#000000" opacity="0.25" filter="blur(2px)" />

          {/* Lábak */}
          <rect x="36" y="80" width="7" height="10" fill="#1e3a8a" rx="1" />
          <rect x="57" y="80" width="7" height="10" fill="#1e3a8a" rx="1" />
          <rect x="36" y="80" width="7" height="10" fill="url(#body3DGrad)" opacity="0.6" rx="1" />
          <rect x="57" y="80" width="7" height="10" fill="url(#body3DGrad)" opacity="0.6" rx="1" />

          {/* Cipők 3D Hatással */}
          <g>
            <path d="M 31 85 C 31 82 46 82 46 85 C 46 88 45 93 38 93 C 31 93 31 88 31 85 Z" fill="url(#shoeGrad)" stroke="#0f172a" strokeWidth="0.5" />
            <ellipse cx="36" cy="84" rx="4" ry="1.5" fill="#ffffff" opacity="0.15" /> {/* Cipőorr becsillanás */}
            <path d="M 34 85 L 43 85 M 35 87 L 42 87" stroke="#1e293b" strokeWidth="0.5" fill="none" /> {/* Fűzők */}
          </g>
          <g>
            <path d="M 54 85 C 54 82 69 82 69 85 C 69 88 68 93 61 93 C 54 93 54 88 54 85 Z" fill="url(#shoeGrad)" stroke="#0f172a" strokeWidth="0.5" />
            <ellipse cx="59" cy="84" rx="4" ry="1.5" fill="#ffffff" opacity="0.15" />
            <path d="M 57 85 L 66 85 M 58 87 L 65 87" stroke="#1e293b" strokeWidth="0.5" fill="none" />
          </g>

          {/* Fő Test (Plüss Filterrel és 3D gradienssel) */}
          <path
            d="M 50 28 C 24 28 18 48 18 70 C 18 84 30 88 50 88 C 70 88 82 84 82 70 C 82 48 76 28 50 28 Z"
            fill="url(#body3DGrad)"
            filter="url(#fuzzTexture)"
          />

          {/* Karszalag/Jelvény 3D ráhajlás */}
          <path d="M 20 58 Q 18 62 21 66 Q 24 62 23 58 Z" fill="#1e1b4b" stroke="#fbbf24" strokeWidth="0.8" />
          <path d="M 19.5 59 L 23.5 59" stroke="#ef4444" strokeWidth="1" />
          <path d="M 19.5 60.5 L 23.5 60.5" stroke="#ffffff" strokeWidth="1" />
          <path d="M 19.5 62 L 23.5 62" stroke="#22c55e" strokeWidth="1" />

          {/* Integető Kar */}
          <motion.g
            animate={wave || mood === "cheering" ? { rotate: [0, -22, 14, -22, 0] } : { rotate: [0, 2, 0] }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "78px 66px" }}
          >
            <path d="M 78 66 Q 89 68 87 56" stroke="url(#body3DGrad)" strokeWidth="8" strokeLinecap="round" fill="none" filter="url(#fuzzTexture)" />
            {/* Kesztyű */}
            <path d="M 83 58 Q 80 55 86 54 Q 89 57 85 59 Z" fill="url(#gloveGrad)" />
            <rect x="83" y="46" width="3" height="8" rx="1.5" fill="url(#gloveGrad)" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="86" y="44" width="3.5" height="10" rx="1.7" fill="url(#gloveGrad)" stroke="#94a3b8" strokeWidth="0.5" />
            <rect x="89.5" y="46" width="3" height="8" rx="1.5" fill="url(#gloveGrad)" stroke="#94a3b8" strokeWidth="0.5" />
            <path d="M 81 52 Q 78 50 81 48 Q 83 50 83 52 Z" fill="url(#gloveGrad)" stroke="#94a3b8" strokeWidth="0.5" />
          </motion.g>

          {/* Gumibotos Kar */}
          <motion.g
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            style={{ transformOrigin: "22px 66px" }}
          >
            <path d="M 22 66 Q 11 64 12 52" stroke="url(#body3DGrad)" strokeWidth="8" strokeLinecap="round" fill="none" filter="url(#fuzzTexture)" />
            {/* Kesztyű és gumibot markolat */}
            <g transform="translate(11, 40) rotate(-12)">
              <rect x="-4" y="8" width="8" height="10" fill="#0f172a" rx="1" />
              {/* Bot Árnyékolás a 3D henger hatáshoz */}
              <rect x="-4.5" y="2" width="9" height="6" fill="#f8fafc" />
              <rect x="-4.5" y="-4" width="9" height="6" fill="#ef4444" />
              <rect x="-4.5" y="-10" width="9" height="6" fill="#f8fafc" />
              <rect x="-4.5" y="-16" width="9" height="6" fill="#ef4444" />
              <rect x="-4.5" y="-22" width="9" height="6" fill="#f8fafc" />
              <path d="M -4.5 -22 Q 0 -28 4.5 -22 Z" fill="#ef4444" />
              {/* Henger csillogás */}
              <rect x="-2" y="-24" width="2" height="34" fill="#ffffff" opacity="0.3" />
            </g>
            <circle cx="12" cy="51" r="5.5" fill="url(#gloveGrad)" stroke="#94a3b8" strokeWidth="0.5" />
            <circle cx="8" cy="50" r="2.5" fill="url(#gloveGrad)" stroke="#94a3b8" strokeWidth="0.5" />
          </motion.g>

          {/* Arc: Pír és Orr */}
          <circle cx="31" cy="63" r="5" fill="#fca5a5" opacity="0.4" filter="blur(1px)" />
          <circle cx="69" cy="63" r="5" fill="#fca5a5" opacity="0.4" filter="blur(1px)" />
          <circle cx="50" cy="62" r="4.5" fill="url(#noseGrad)" filter="url(#fuzzTexture)" />
          <ellipse cx="49" cy="60.5" rx="1.5" ry="1" fill="#93c5fd" opacity="0.8" /> {/* Orr csillogás */}

          {getEyeExpression()}
          {getMouthExpression()}

          {/* Vastagabb Szemöldökök 3D árnyékkal */}
          <path d="M 30 42 Q 38 37 45 42" stroke="#020617" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M 55 42 Q 62 37 70 42" stroke="#020617" strokeWidth="3" fill="none" strokeLinecap="round" />

          {/* Rendőrsapka (Nagyon részletes) */}
          <g transform="translate(0, -3)">
            {/* Fehér kupola */}
            <path d="M 24 35 C 10 20 25 8 50 8 C 75 8 90 20 76 35 C 64 30 36 30 24 35 Z" fill="url(#capTopGrad)" stroke="#64748b" strokeWidth="1" />
            
            {/* Sötétkék Pánt */}
            <path d="M 26 34 C 35 29 65 29 74 34 L 72 40 C 62 35 38 35 28 40 Z" fill="#0f172a" stroke="#020617" strokeWidth="1" />
            
            {/* Silt (Visor) 3D becsillanással */}
            <path d="M 25 38 Q 50 48 75 38 Q 50 41 25 38" fill="url(#visorGrad)" stroke="#000000" strokeWidth="1" />
            <path d="M 30 39.5 Q 50 44 70 39.5" stroke="#ffffff" strokeWidth="0.8" opacity="0.2" fill="none" /> {/* Visor highlight */}

            {/* Arany Fonott Zsinór (dupla stroke trükkel textúrázva) */}
            <path d="M 27 37 C 36 32 64 32 73 37" stroke="#b45309" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 27 37 C 36 32 64 32 73 37" stroke="#fcd34d" strokeWidth="1.5" strokeDasharray="2 2" fill="none" strokeLinecap="round" />
            <circle cx="27" cy="37" r="2" fill="#fbbf24" stroke="#b45309" strokeWidth="0.5" />
            <circle cx="73" cy="37" r="2" fill="#fbbf24" stroke="#b45309" strokeWidth="0.5" />

            {/* Magyar Címer */}
            <g transform="translate(0, -1)">
              <path d="M 47 21 Q 50 17 53 21 L 53 25 Q 50 29 47 25 Z" fill="#b91c1c" stroke="#fbbf24" strokeWidth="1" />
              <path d="M 47.5 24 Q 50 25 52.5 24 L 52.5 24.5 Q 50 26 47.5 24.5 Z" fill="#16a34a" />
              <path d="M 50 20 L 50 24 M 48.5 21 L 51.5 21 M 49 22.5 L 51 22.5" stroke="#f8fafc" strokeWidth="0.6" strokeLinecap="round" />
              <path d="M 46.5 17 Q 50 15 53.5 17 L 52 18.5 Q 50 18 48 18.5 Z" fill="#fbbf24" />
              <circle cx="50" cy="16" r="0.8" fill="#fbbf24" /> {/* Korona kereszt */}
            </g>
          </g>
        </svg>
      </motion.div>

      {/* Szövegbuborék maradt a régi */}
      <AnimatePresence mode="wait">
        {enableSpeechBubble && message && (
          <motion.div
            key={message}
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-white text-slate-800 font-sans font-medium px-4 py-3 rounded-2xl shadow-lg border-2 border-slate-100 flex-1 min-w-0 max-w-xs md:max-w-md text-sm sm:text-base leading-snug"
          >
            <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-b-2 border-l-2 border-slate-100"></div>
            <p className="relative z-10">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
