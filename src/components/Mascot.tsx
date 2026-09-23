import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface MascotProps {
  mood: "happy" | "neutral" | "sad" | "cheering";
  message?: string;
  enableSpeechBubble?: boolean;
}

export default function Mascot({ message, enableSpeechBubble = true }: MascotProps) {
  return (
    <div className="flex items-center gap-4 select-none">
      {/* 
        A mascot mindenhol egyetlen PNG képből jelenik meg.
        A képet a public/figura.png fájlba kell feltölteni.
        A public mappából Vite alatt közvetlenül a /figura.png útvonalon érhető el.
      */}
      <div className="w-40 h-40 flex-shrink-0 flex items-center justify-center">
        <img
          src="/figura.png"
          alt="Rendőrségi kabalafigura"
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>

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
