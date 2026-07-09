import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface MascotProps {
  mood: "happy" | "neutral" | "sad" | "cheering";
  message?: string;
  enableSpeechBubble?: boolean;
}

export default function Mascot({ mood, message, enableSpeechBubble = true }: MascotProps) {
  const [wave, setWave] = useState(false);

  // Trigger waving animation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWave(true);
      setTimeout(() => setWave(false), 1200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Determine eye expression based on mood
  const getEyeExpression = () => {
    switch (mood) {
      case "happy":
      case "cheering":
        // Arch curves
        return (
          <>
            <path d="M 28 42 Q 33 34 38 42" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 62 42 Q 67 34 72 42" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        );
      case "sad":
        // Downward curves
        return (
          <>
            <path d="M 28 38 Q 33 44 38 38" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 62 38 Q 67 44 72 38" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        );
      default:
        // Round blinking eyes
        return (
          <>
            <motion.ellipse
              cx="33"
              cy="40"
              rx="4"
              ry="5"
              fill="#1e293b"
              animate={{ scaleY: [1, 1, 0.1, 1, 1, 1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, times: [0, 0.7, 0.72, 0.74, 0.9, 0.92, 0.94, 1] }}
            />
            <motion.ellipse
              cx="67"
              cy="40"
              rx="4"
              ry="5"
              fill="#1e293b"
              animate={{ scaleY: [1, 1, 0.1, 1, 1, 1, 0.1, 1] }}
              transition={{ repeat: Infinity, duration: 4, times: [0, 0.7, 0.72, 0.74, 0.9, 0.92, 0.94, 1] }}
            />
          </>
        );
    }
  };

  // Determine mouth expression based on mood
  const getMouthExpression = () => {
    switch (mood) {
      case "happy":
      case "cheering":
        return <path d="M 38 52 Q 50 64 62 52" stroke="#1e293b" strokeWidth="3" fill="#ef4444" strokeLinecap="round" />;
      case "sad":
        return <path d="M 40 56 Q 50 48 60 56" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />;
      default:
        return <path d="M 42 54 Q 50 58 58 54" stroke="#1e293b" strokeWidth="3" fill="none" strokeLinecap="round" />;
    }
  };

  return (
    <div id="police-mascot-container" className="flex items-center gap-4 select-none">
      <motion.div
        id="mascot-svg-wrapper"
        className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0"
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Shadow */}
          <ellipse cx="50" cy="94" rx="30" ry="4" fill="#cbd5e1" />

          {/* Body / Police Suit */}
          <path d="M 30 75 L 70 75 L 75 92 L 25 92 Z" fill="#1e3a8a" />
          {/* Tie & Collar */}
          <path d="M 44 75 L 50 84 L 56 75 Z" fill="#ffffff" />
          <path d="M 48 75 L 50 90 L 52 75 Z" fill="#ef4444" />
          {/* Golden Badge on suit */}
          <path d="M 60 80 L 64 77 L 68 80 L 66 84 L 62 84 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="0.5" />

          {/* Left Arm / Hand (Waving) */}
          <motion.path
            d="M 28 78 C 18 78 14 74 14 62 C 14 62 10 52 14 50 C 18 48 20 58 20 62 C 20 66 22 74 26 75"
            fill="#e2e8f0"
            stroke="#1e3a8a"
            strokeWidth="2"
            animate={wave || mood === "cheering" ? { rotate: [0, -25, 10, -25, 0] } : { rotate: 0 }}
            style={{ transformOrigin: "26px 75px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {/* Right Arm */}
          <path d="M 72 78 C 82 78 86 74 86 65 C 86 62 82 62 80 65" fill="#e2e8f0" stroke="#1e3a8a" strokeWidth="2" />

          {/* Head */}
          <circle cx="50" cy="48" r="24" fill="#fed7aa" stroke="#1e293b" strokeWidth="2" />

          {/* Rosy Cheeks */}
          <circle cx="34" cy="50" r="3" fill="#fca5a5" opacity="0.6" />
          <circle cx="66" cy="50" r="3" fill="#fca5a5" opacity="0.6" />

          {/* Cute Bear-like Police Ears */}
          <circle cx="30" cy="28" r="7" fill="#fed7aa" stroke="#1e293b" strokeWidth="2" />
          <circle cx="30" cy="28" r="4" fill="#fca5a5" />
          <circle cx="70" cy="28" r="7" fill="#fed7aa" stroke="#1e293b" strokeWidth="2" />
          <circle cx="70" cy="28" r="4" fill="#fca5a5" />

          {/* Face Elements */}
          {getEyeExpression()}
          {getMouthExpression()}

          {/* Nose */}
          <polygon points="48,46 52,46 50,49" fill="#f97316" stroke="#1e293b" strokeWidth="1" />

          {/* Hungarian Police Cap */}
          <path d="M 25 31 C 25 20 75 20 75 31 Z" fill="#1e3a8a" stroke="#1e293b" strokeWidth="2" />
          <path d="M 20 31 L 80 31 L 78 27 L 22 27 Z" fill="#0f172a" />
          <path d="M 23 27 C 35 15 65 15 77 27 Z" fill="#1e3a8a" />
          {/* Red-White-Green cockade (Hungarian police detail) */}
          <circle cx="50" cy="23" r="4" fill="#ef4444" />
          <circle cx="50" cy="23" r="2.5" fill="#ffffff" />
          <circle cx="50" cy="23" r="1.2" fill="#22c55e" />
          {/* Cap Visor */}
          <path d="M 26 31 Q 50 38 74 31 Q 50 34 26 31" fill="#0f172a" />
        </svg>
      </motion.div>

      {/* Speech Bubble */}
      <AnimatePresence mode="wait">
        {enableSpeechBubble && message && (
          <motion.div
            id="mascot-speech-bubble"
            key={message}
            initial={{ opacity: 0, scale: 0.8, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative bg-white text-slate-800 font-sans font-medium px-4 py-3 rounded-2xl shadow-lg border-2 border-slate-100 flex-1 min-w-0 max-w-xs md:max-w-md text-sm sm:text-base leading-snug"
          >
            {/* Bubble Tail */}
            <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rotate-45 border-b-2 border-l-2 border-slate-100"></div>
            <p className="relative z-10">{message}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
