import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CategoryInfo } from "../types";
import * as Icons from "lucide-react";
import Mascot from "./Mascot";

interface CategoryIntroProps {
  category: CategoryInfo;
  onComplete: () => void;
  enableAnimations: boolean;
}

const SvgWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] mx-auto shrink-0 flex items-center justify-center">
    <svg
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid meet"
      className="block w-full h-full overflow-visible drop-shadow-xl"
      style={{ overflow: "visible" }}
    >
      {children}
    </svg>
  </div>
);

export default function CategoryIntro({ category, onComplete, enableAnimations }: CategoryIntroProps) {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onComplete]);

  const IconComponent = (Icons as any)[category.iconName] || Icons.HelpCircle;

  const renderIllustration = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
      className="flex items-center justify-center w-full h-full"
    >
      <Mascot mood="happy" enableSpeechBubble={false} />
    </motion.div>
  );

  return (
    <div id="category-intro-screen" className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-gradient-to-b from-[#4facfe] to-[#00f2fe] text-white p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4facfe]/95 to-[#00f2fe]/95 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-lg text-center flex flex-col items-center gap-5 sm:gap-6">
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/25 backdrop-blur-md border border-white/40 py-2 px-5 rounded-full flex items-center gap-2">
          <IconComponent className="w-5 h-5 text-yellow-300" />
          <span className="text-xs sm:text-sm font-black tracking-widest text-white uppercase">Kategória Sorsolva!</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none px-4 uppercase">
          {category.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.3 }}
          className="relative w-[220px] h-[190px] sm:w-[240px] sm:h-[200px] shrink-0 flex items-center justify-center overflow-visible"
        >
          {renderIllustration()}
        </motion.div>

        <div className="flex flex-col items-center gap-2 w-full max-w-xs shrink-0">
          <p className="text-sm text-white/80 font-bold uppercase tracking-wider">A játék másodperceken belül indul...</p>
          <AnimatePresence mode="wait">
            <motion.div key={countdown} initial={{ opacity: 0, scale: 1.5, y: -10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.7, y: 10 }} transition={{ duration: 0.25 }} className="text-6xl font-black text-yellow-300 drop-shadow-lg">
              {countdown}
            </motion.div>
          </AnimatePresence>
          <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden border border-white/10">
            <motion.div initial={{ width: "100%" }} animate={{ width: "0%" }} transition={{ duration: 3, ease: "linear" }} className="h-full bg-gradient-to-r from-yellow-300 to-amber-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
