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
        // Cheerful curved smiling eyes
        return (
          <>
            <path
              d="M 33 56 Q 39 48 45 56"
              stroke="#1e293b"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 55 56 Q 61 48 67 56"
              stroke="#1e293b"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
          </>
        );
      case "sad":
        // Downward drooping concerned eyes
        return (
          <>
            <path
              d="M 33 54 Q 39 60 45 54"
              stroke="#1e293b"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 55 54 Q 61 60 67 54"
              stroke="#1e293b"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
            />
          </>
        );
      default:
        // Round blinking eyes with pupils and reflections
        return (
          <>
            {/* Left Eye Group */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1, 1, 0.1, 1] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                times: [0, 0.7, 0.72, 0.74, 0.9, 0.92, 0.94, 1],
              }}
              style={{ transformOrigin: "39px 54px" }}
            >
              <ellipse cx="39" cy="54" rx="7.5" ry="9" fill="#ffffff" stroke="#1e293b" strokeWidth="1.2" />
              <ellipse cx="39" cy="55" rx="5" ry="6" fill="#78350f" />
              <circle cx="39" cy="55.5" r="3" fill="#0f172a" />
              <circle cx="37.5" cy="53" r="1.3" fill="#ffffff" />
              <circle cx="40.5" cy="57" r="0.6" fill="#ffffff" />
            </motion.g>

            {/* Right Eye Group */}
            <motion.g
              animate={{ scaleY: [1, 1, 0.1, 1, 1, 1, 0.1, 1] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                times: [0, 0.7, 0.72, 0.74, 0.9, 0.92, 0.94, 1],
              }}
              style={{ transformOrigin: "61px 54px" }}
            >
              <ellipse cx="61" cy="54" rx="7.5" ry="9" fill="#ffffff" stroke="#1e293b" strokeWidth="1.2" />
              <ellipse cx="61" cy="55" rx="5" ry="6" fill="#78350f" />
              <circle cx="61" cy="55.5" r="3" fill="#0f172a" />
              <circle cx="59.5" cy="53" r="1.3" fill="#ffffff" />
              <circle cx="62.5" cy="57" r="0.6" fill="#ffffff" />
            </motion.g>
          </>
        );
    }
  };

  // Determine mouth expression based on mood
  const getMouthExpression = () => {
    switch (mood) {
      case "happy":
      case "cheering":
        return (
          <path
            d="M 44 65 Q 50 75 56 65"
            stroke="#1e293b"
            strokeWidth="3"
            fill="#f43f5e"
            strokeLinecap="round"
          />
        );
      case "sad":
        return (
          <path
            d="M 45 70 Q 50 63 55 70"
            stroke="#1e293b"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        );
      default:
        return (
          <path
            d="M 46 66 Q 50 69 54 66"
            stroke="#1e293b"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        );
    }
  };

  return (
    <div id="police-mascot-container" className="flex items-center gap-4 select-none">
      <motion.div
        id="mascot-svg-wrapper"
        className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0"
        animate={{
          y: [0, -3, 0],
          scaleY: [1, 1.03, 1],
          scaleX: [1, 0.98, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          <defs>
            {/* 3D Radial Gradient for the Droplet Blue Body */}
            <radialGradient id="bodyGrad" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="45%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </radialGradient>

            {/* Linear Gradient for the White Crown */}
            <linearGradient id="capGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="80%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>

            {/* Gradient for the Visor */}
            <linearGradient id="visorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>

          {/* Shadow */}
          <ellipse cx="50" cy="94" rx="28" ry="4" fill="#cbd5e1" opacity="0.8" />

          {/* Legs */}
          <rect x="36" y="80" width="6" height="8" fill="#1e3a8a" rx="1" />
          <rect x="58" y="80" width="6" height="8" fill="#1e3a8a" rx="1" />

          {/* Left Boot */}
          <g>
            <path
              d="M 32 86 C 32 84 44 84 44 86 C 44 88 43 92 38 92 C 32 92 32 88 32 86 Z"
              fill="#0f172a"
              stroke="#1e293b"
              strokeWidth="0.8"
            />
            <ellipse cx="36" cy="87.5" rx="1.5" ry="0.8" fill="#ffffff" opacity="0.35" />
          </g>

          {/* Right Boot */}
          <g>
            <path
              d="M 56 86 C 56 84 68 84 68 86 C 68 88 67 92 62 92 C 56 92 56 88 56 86 Z"
              fill="#0f172a"
              stroke="#1e293b"
              strokeWidth="0.8"
            />
            <ellipse cx="60" cy="87.5" rx="1.5" ry="0.8" fill="#ffffff" opacity="0.35" />
          </g>

          {/* Body (droplet shape) */}
          <path
            d="M 50 30 C 28 30 22 48 22 68 C 22 81 32 85 50 85 C 68 85 78 81 78 68 C 78 48 72 30 50 30 Z"
            fill="url(#bodyGrad)"
            stroke="#1d4ed8"
            strokeWidth="1.2"
          />

          {/* Armband/Badge on left side (Mascot's right sleeve) */}
          <path
            d="M 23 58 Q 21 61 24 64 Q 27 61 25 58 Z"
            fill="#1e1b4b"
            stroke="#fbbf24"
            strokeWidth="0.5"
          />
          {/* Inside Hungarian Flag Color Stripes for Sleeve Badge */}
          <rect x="22.8" y="59" width="2.4" height="1" fill="#ef4444" />
          <rect x="22.8" y="60" width="2.4" height="1" fill="#ffffff" />
          <rect x="22.8" y="61" width="2.4" height="1" fill="#22c55e" />

          {/* Left Arm Waving (on the Right Side of canvas) */}
          <motion.g
            animate={wave || mood === "cheering" ? { rotate: [0, -18, 12, -18, 0] } : { rotate: [0, 1.5, 0] }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ transformOrigin: "75px 66px" }}
          >
            {/* Arm */}
            <path
              d="M 75 66 Q 84 68 83 58"
              stroke="#1e3a8a"
              strokeWidth="6.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Glove base */}
            <ellipse cx="82" cy="57" rx="3.5" ry="2.5" fill="#ffffff" stroke="#1e293b" strokeWidth="0.8" />
            {/* Fingers */}
            <rect x="79" y="48" width="2" height="6" rx="1.5" fill="#ffffff" stroke="#1e293b" strokeWidth="0.6" />
            <rect x="81.5" y="46.5" width="2" height="7.5" rx="1.5" fill="#ffffff" stroke="#1e293b" strokeWidth="0.6" />
            <rect x="84" y="47.5" width="2" height="6.5" rx="1.5" fill="#ffffff" stroke="#1e293b" strokeWidth="0.6" />
            <rect x="86.5" y="49.5" width="2" height="5" rx="1.5" fill="#ffffff" stroke="#1e293b" strokeWidth="0.6" />
            {/* Thumb */}
            <path d="M 77.5" fill="#ffffff" />
            <path
              d="M 78 54 Q 74 53 76 50 Q 78 48 79 51 Z"
              fill="#ffffff"
              stroke="#1e293b"
              strokeWidth="0.6"
            />
          </motion.g>

          {/* Right Arm holding Baton (on the Left Side of canvas) */}
          <motion.g
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            style={{ transformOrigin: "25px 66px" }}
          >
            {/* Arm */}
            <path
              d="M 25 66 Q 16 64 16 52"
              stroke="#1e3a8a"
              strokeWidth="6.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Glove gripping */}
            <circle cx="16" cy="51" r="4.5" fill="#ffffff" stroke="#1e293b" strokeWidth="0.8" />
            <circle cx="13" cy="51" r="2" fill="#ffffff" stroke="#1e293b" strokeWidth="0.6" />
            <circle cx="14" cy="48" r="2" fill="#ffffff" stroke="#1e293b" strokeWidth="0.6" />

            {/* Red & White Traffic Police Baton */}
            <g transform="translate(16, 42) rotate(-8)">
              {/* Black handle */}
              <rect x="-3" y="10" width="6" height="8" fill="#1e293b" rx="1" />
              {/* Stripes */}
              <rect x="-3.5" y="4" width="7" height="6" fill="#f1f5f9" />
              <rect x="-3.5" y="-2" width="7" height="6" fill="#ef4444" />
              <rect x="-3.5" y="-8" width="7" height="6" fill="#f1f5f9" />
              <rect x="-3.5" y="-14" width="7" height="6" fill="#ef4444" />
              <rect x="-3.5" y="-20" width="7" height="6" fill="#f1f5f9" />
              {/* Red rounded cap */}
              <path d="M -3.5 -20 Q 0 -25 3.5 -20 Z" fill="#ef4444" />
            </g>
          </motion.g>

          {/* Rosy Cheeks */}
          <circle cx="31" cy="65" r="3.5" fill="#fca5a5" opacity="0.65" />
          <circle cx="69" cy="65" r="3.5" fill="#fca5a5" opacity="0.65" />

          {/* Face Expression Elements */}
          {getEyeExpression()}
          {getMouthExpression()}

          {/* Eyebrows/Eyelashes */}
          <path d="M 31 44 Q 39 40 46 44" stroke="#1e293b" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M 54 44 Q 61 40 69 44" stroke="#1e293b" strokeWidth="2.2" fill="none" strokeLinecap="round" />

          {/* Hungarian Police Cap */}
          <g>
            {/* Crown (White peak) */}
            <path
              d="M 28 32 C 18 22 28 12 50 12 C 72 12 82 22 72 32 C 62 29 38 29 28 32 Z"
              fill="url(#capGrad)"
              stroke="#1e293b"
              strokeWidth="1.2"
            />
            {/* Dark navy band */}
            <path
              d="M 29 31 C 36 27 64 27 71 31 L 69 36 C 62 32 38 32 31 36 Z"
              fill="#1e1b4b"
              stroke="#1e293b"
              strokeWidth="0.8"
            />
            {/* Golden braided cord */}
            <path
              d="M 30 33 C 37 29 63 29 70 33"
              stroke="#d97706"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M 30 33 C 37 29 63 29 70 33"
              stroke="#fbbf24"
              strokeWidth="1.5"
              strokeDasharray="3 1.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Visor */}
            <path
              d="M 28 34 Q 50 42 72 34 Q 50 36 28 34"
              fill="url(#visorGrad)"
              stroke="#0f172a"
              strokeWidth="0.8"
            />
            {/* Hungarian Coat of Arms crest in the center */}
            <g>
              {/* Red Shield */}
              <path
                d="M 48 20 Q 50 17 52 20 L 52 23 Q 50 26 48 23 Z"
                fill="#b91c1c"
                stroke="#fbbf24"
                strokeWidth="0.8"
              />
              {/* Green hills base inside crest */}
              <path d="M 48.5 22 Q 50 23 51.5 22 L 51.5 22.5 Q 50 23.5 48.5 22.5 Z" fill="#16a34a" />
              {/* Silver double cross */}
              <path
                d="M 50 19 L 50 22 M 49 20 L 51 20 M 49.3 21 L 50.7 21"
                stroke="#f1f5f9"
                strokeWidth="0.5"
                strokeLinecap="round"
              />
              {/* Gold Crown */}
              <path d="M 47.5 17 Q 50 16 52.5 17 L 51.5 18 L 48.5 18 Z" fill="#fbbf24" />
            </g>
          </g>
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
