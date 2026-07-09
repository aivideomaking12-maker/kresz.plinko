import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Question, GameSettings, CategoryInfo } from "../types";
import { soundManager } from "../utils/soundManager";
import { Check, X, AlertTriangle, Clock, Award, HelpCircle } from "lucide-react";
import * as Icons from "lucide-react";
import Mascot from "./Mascot";

interface QuestionScreenProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  settings: GameSettings;
  category: CategoryInfo;
  onAnswerSubmitted: (isCorrect: boolean, selectedIdx: number) => void;
  onNextQuestion: () => void;
  currentScore: number;
}

export default function QuestionScreen({
  question,
  questionIndex,
  totalQuestions,
  settings,
  category,
  onAnswerSubmitted,
  onNextQuestion,
  currentScore,
}: QuestionScreenProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(settings.timerDuration);
  const [timerExpired, setTimerExpired] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Restart timer when a new question loads
  useEffect(() => {
    setSelectedIdx(null);
    setIsLocked(false);
    setTimerExpired(false);
    setTimeLeft(settings.timerDuration);

    if (settings.timerDuration > 0) {
      if (timerRef.current) clearInterval(timerRef.current);
      
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            handleTimerExpire();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [question.id, settings.timerDuration]);

  const handleTimerExpire = () => {
    setTimerExpired(true);
    setIsLocked(true);
    soundManager.play("wrong");
    onAnswerSubmitted(false, -1); // submitted -1 to indicate timeout
    setTimeout(() => {
      onNextQuestion();
    }, 800);
  };

  const handleAnswerClick = (index: number) => {
    if (isLocked) return;

    // Clear timer
    if (timerRef.current) clearInterval(timerRef.current);

    setSelectedIdx(index);
    setIsLocked(true);

    const isCorrect = index === question.correctAnswer;
    if (isCorrect) {
      soundManager.play("correct");
    } else {
      soundManager.play("wrong");
    }

    onAnswerSubmitted(isCorrect, index);

    // Automatically transition to the next question after 600ms
    setTimeout(() => {
      onNextQuestion();
    }, 600);
  };

  // Helper to dynamically render a high-fidelity KRESZ sign based on the question
  const renderKreszSignSvg = () => {
    const text = (question.question + " " + question.explanation).toLowerCase();
    const qId = question.id;

    // Detect Stop Sign
    if (text.includes("stop") || text.includes("állj! elsőbbségadás")) {
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto drop-shadow-md">
          <polygon points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" fill="#dc2626" stroke="#ffffff" strokeWidth="3" />
          <text x="50" y="58" textAnchor="middle" fill="#ffffff" className="font-sans font-black text-xl tracking-wider">STOP</text>
        </svg>
      );
    }

    // Elsőbbségadás kötelező (Yield)
    if (text.includes("elsőbbségadás kötelező") || text.includes("háromszög alakú tábla") && text.includes("csúcsára állítva")) {
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto drop-shadow-md">
          <polygon points="50,90 10,20 90,20" fill="#ffffff" stroke="#ef4444" strokeWidth="8" strokeLinejoin="round" />
        </svg>
      );
    }

    // Főútvonal (Priority road)
    if (text.includes("főútvonal") || text.includes("sárga négyzet") || qId === "tab_1") {
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto drop-shadow-md">
          <polygon points="50,10 90,50 50,90 10,50" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
          <polygon points="50,16 84,50 50,84 16,50" fill="#fbbf24" />
        </svg>
      );
    }

    // Megállni tilos (No stopping)
    if (text.includes("megállni tilos") || qId === "tab_2") {
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto drop-shadow-md">
          <circle cx="50" cy="50" r="42" fill="#2563eb" stroke="#ef4444" strokeWidth="10" />
          <line x1="20" y1="20" x2="80" y2="80" stroke="#ef4444" strokeWidth="10" />
          <line x1="80" y1="20" x2="20" y2="80" stroke="#ef4444" strokeWidth="10" />
        </svg>
      );
    }

    // Várakozni tilos (No parking)
    if (text.includes("várakozni tilos") || text.includes("parkolni tilos") || qId === "tab_3") {
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto drop-shadow-md">
          <circle cx="50" cy="50" r="42" fill="#2563eb" stroke="#ef4444" strokeWidth="10" />
          <line x1="20" y1="20" x2="80" y2="80" stroke="#ef4444" strokeWidth="10" />
        </svg>
      );
    }

    // Behajtani tilos (No entry, red circle with white horizontal strip)
    if (text.includes("behajtani tilos") && text.includes("vízszintes fehér") || qId === "tab_5") {
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto drop-shadow-md">
          <circle cx="50" cy="50" r="42" fill="#ef4444" />
          <rect x="15" y="40" width="70" height="20" fill="#ffffff" rx="2" />
        </svg>
      );
    }

    // Mindkét irányból behajtani tilos (No entry both directions, white with red border)
    if (text.includes("behajtani tilos") && text.includes("fehér") || qId === "tab_4") {
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto drop-shadow-md">
          <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#ef4444" strokeWidth="10" />
        </svg>
      );
    }

    // Kerékpárút (Bicycle lane blue circle)
    if (text.includes("kerékpárút") || qId === "tab_7") {
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto drop-shadow-md">
          <circle cx="50" cy="50" r="42" fill="#2563eb" stroke="#ffffff" strokeWidth="2.5" />
          {/* High-fidelity perfectly joined bicycle vector */}
          <g stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Wheels */}
            <circle cx="30" cy="58" r="11" />
            <circle cx="70" cy="58" r="11" />
            
            {/* Frame Rear Triangle */}
            <path d="M 30 58 L 41 36 M 30 58 L 45 56 M 45 56 L 41 36" />
            
            {/* Frame Front Triangle */}
            <polygon points="45,56 60,34 41,36" />
            
            {/* Fork */}
            <line x1="70" y1="58" x2="60" y2="34" />
            
            {/* Seat & Handlebars */}
            <line x1="41" y1="36" x2="40" y2="29" />
            <path d="M 33 29 H 45" />
            <line x1="60" y1="34" x2="58" y2="28" />
            <path d="M 52 28 H 62" />
          </g>
        </svg>
      );
    }

    // Gyalogosok (Pedestrians warning triangle)
    if (text.includes("gyalogosok") && text.includes("veszély") || qId === "tab_6") {
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto drop-shadow-md">
          <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#ef4444" strokeWidth="8" strokeLinejoin="round" />
          {/* Zebra crossing markings on road */}
          <line x1="36" y1="73" x2="64" y2="73" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
          <line x1="32" y1="77" x2="68" y2="77" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
          {/* Proportioned Pedestrian */}
          <circle cx="50" cy="34" r="4.5" fill="#000000" />
          <line x1="50" y1="39" x2="50" y2="52" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 50 52 L 44 68 M 50 52 L 56 68" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 50 41 L 41 51 M 50 41 L 59 51" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      );
    }

    // Iskola, gyermekek (Children warning triangle)
    if (text.includes("gyermekek") || text.includes("iskola") || qId === "tab_8") {
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto drop-shadow-md">
          <polygon points="50,10 92,85 8,85" fill="#ffffff" stroke="#ef4444" strokeWidth="8" strokeLinejoin="round" />
          {/* Child 1 (taller) */}
          <circle cx="42" cy="38" r="3.5" fill="#000000" />
          <line x1="42" y1="42" x2="42" y2="52" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
          <path d="M 42 52 L 35 66 M 42 52 L 48 64" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 42 44 L 49 46 M 42 44 L 54 49" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
          
          {/* Child 2 (smaller, holding hands) */}
          <circle cx="58" cy="43" r="2.8" fill="#000000" />
          <line x1="58" y1="46" x2="58" y2="54" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 58 54 L 53 66 M 58 54 L 63 64" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
          <path d="M 58 48 L 54 49 M 58 48 L 64 52" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    }

    // Sebességkorlátozás 30 vagy 50
    if (text.includes("sebességkorlátozás") || text.includes("sebességkorlátozó")) {
      const value = text.includes("30") ? "30" : "50";
      return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto drop-shadow-md">
          <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#ef4444" strokeWidth="10" />
          <text x="50" y="60" textAnchor="middle" fill="#000000" className="font-sans font-black text-3xl">{value}</text>
        </svg>
      );
    }

    return null;
  };

  const hasKreszSign = () => {
    const text = (question.question + " " + question.explanation).toLowerCase();
    const qId = question.id;
    return (
      text.includes("stop") ||
      text.includes("állj! elsőbbségadás") ||
      text.includes("elsőbbségadás kötelező") ||
      (text.includes("háromszög alakú tábla") && text.includes("csúcsára állítva")) ||
      text.includes("főútvonal") ||
      text.includes("sárga négyzet") ||
      qId === "tab_1" ||
      text.includes("megállni tilos") ||
      qId === "tab_2" ||
      text.includes("várakozni tilos") ||
      text.includes("parkolni tilos") ||
      qId === "tab_3" ||
      (text.includes("behajtani tilos") && text.includes("vízszintes fehér")) ||
      qId === "tab_5" ||
      (text.includes("behajtani tilos") && text.includes("fehér")) ||
      qId === "tab_4" ||
      text.includes("kerékpárút") ||
      qId === "tab_7" ||
      (text.includes("gyalogosok") && text.includes("veszély")) ||
      qId === "tab_6" ||
      text.includes("gyermekek") ||
      text.includes("iskola") ||
      qId === "tab_8" ||
      text.includes("sebességkorlátozás") ||
      text.includes("sebességkorlátozó")
    );
  };

  // Import matching category icon dynamically
  const CategoryIcon = (Icons as any)[category.iconName] || Icons.BookOpen;

  // Determine correct mascot status speech message
  const getMascotMessage = () => {
    if (!isLocked) {
      if (settings.timerDuration > 0 && timeLeft < 6) {
        return "Gyorsan! Ketyeg az óra! Melyik lesz a helyes?";
      }
      return "Olvasd el figyelmesen a kérdést, és válaszd ki a legbiztonságosabb választ!";
    }
    if (timerExpired) {
      return "Sajnos lejárt az időd! De semmi baj, nézzük meg együtt a magyarázatot!";
    }
    const isCorrect = selectedIdx === question.correctAnswer;
    return isCorrect
      ? "Szenzációs! Pontosan ez a helyes szabály! Nagyon ügyes vagy!"
      : "Ó, ez most nem talált. De ne szomorkodj, tanuljunk belőle! Olvasd el a magyarázatot!";
  };

  return (
    <div id="question-screen-layout" className="min-h-screen bg-transparent flex flex-col pt-16 pb-32 px-4 sm:px-6 select-none relative">
      
      {/* 1. Header Progress Area */}
      <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        {/* Left Side: Category info and count */}
        <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md border border-white/30 p-2.5 rounded-2xl shadow-sm">
          <div className={`p-2.5 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-md`}>
            <CategoryIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xs font-black text-white/90 uppercase tracking-wider">{category.name}</h3>
            <p className="text-sm font-black text-white">
              Kérdés: <span className="text-yellow-300 text-lg">{questionIndex + 1}</span> / {totalQuestions}
            </p>
          </div>
        </div>

        {/* Center: Graphical Fluid Progress Bar */}
        <div className="flex-1 max-w-sm h-3 bg-white/20 backdrop-blur-sm border border-white/10 rounded-full overflow-hidden shadow-inner mx-2 hidden md:block">
          <motion.div
            initial={{ width: `${(questionIndex / totalQuestions) * 100}%` }}
            animate={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-yellow-300 to-amber-400"
          />
        </div>

        {/* Right Side: Circular Timer & Current Score */}
        <div className="flex items-center gap-4 self-end sm:self-auto">
          {/* Current Score Pill */}
          <div className="bg-white/20 backdrop-blur-md border border-white/30 py-1.5 px-3.5 rounded-2xl flex items-center gap-1.5 shadow-sm text-white font-black">
            <Award className="w-4 h-4 text-yellow-300" />
            <span className="text-xs font-black uppercase">Pontszám:</span>
            <span className="font-black text-base text-yellow-300">{currentScore}</span>
          </div>

          {/* Time Clock (rendered conditionally) */}
          {settings.timerDuration > 0 && (
            <div className="flex items-center gap-2">
              <div className="relative w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="4" />
                  <motion.circle
                    cx="24"
                    cy="24"
                    r="20"
                    fill="none"
                    stroke={timeLeft < 6 ? "#ef4444" : "#facc15"}
                    strokeWidth="4"
                    strokeDasharray="125.6"
                    animate={{ strokeDashoffset: 125.6 - (125.6 * timeLeft) / settings.timerDuration }}
                    transition={{ duration: 1, ease: "linear" }}
                  />
                </svg>
                <div className={`absolute font-black text-xs ${timeLeft < 6 ? "text-red-500 animate-pulse scale-110" : "text-white"}`}>
                  {timeLeft}s
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Graphical Progress Bar for Mobile */}
      <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden shadow-inner mb-6 md:hidden">
        <div
          style={{ width: `${((questionIndex + 1) / totalQuestions) * 100}%` }}
          className={`h-full bg-gradient-to-r ${category.gradient} transition-all duration-300`}
        />
      </div>

      {/* 2. Main Question Grid */}
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        
        {/* Question Card Block (Takes 7 or 8 cols depending on sign rendering, or 12 if no sign) */}
        <div className={`bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl border border-white/40 space-y-6 flex flex-col justify-between min-h-[160px] sm:min-h-[200px] ${
          hasKreszSign() ? "md:col-span-8" : "md:col-span-12"
        }`}>
          <div className="space-y-4">
            {/* Difficulty Badge */}
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              question.difficulty === "easy" ? "bg-green-100 text-green-800" :
              question.difficulty === "medium" ? "bg-amber-100 text-amber-800" :
              "bg-red-100 text-red-800"
            }`}>
              {question.difficulty === "easy" ? "Kezdő" :
               question.difficulty === "medium" ? "Haladó" : "Profi"}
            </span>

            {/* Question Text */}
            <h1 className="text-xl sm:text-2xl font-black text-slate-800 leading-snug font-sans">
              {question.question}
            </h1>
          </div>

          {/* Dynamic Sign visualizer embedded directly inside the question layout */}
          {hasKreszSign() && (
            <div className="md:hidden pt-2">
              {renderKreszSignSvg()}
            </div>
          )}
        </div>

        {/* Sidebar KRESZ Sign visualizer for Desktop */}
        {hasKreszSign() && (
          <div className="hidden md:flex bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/40 md:col-span-4 h-full items-center justify-center min-h-[200px]">
            <div className="text-center space-y-3">
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest">KRESZ Jelzés</h4>
              {renderKreszSignSvg()}
            </div>
          </div>
        )}
      </div>

      {/* 3. Answers options block */}
      <div className="w-full max-w-4xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {question.answers.map((answer, index) => {
          const isSelected = selectedIdx === index;
          const isCorrectAnswer = index === question.correctAnswer;
          const showSuccess = isLocked && isCorrectAnswer;
          const showFailure = isLocked && isSelected && !isCorrectAnswer;
          
          let cardStyle = "bg-white/90 hover:bg-white border-white/40 text-slate-800 hover:border-white shadow-lg";
          if (isLocked) {
            if (showSuccess) {
              cardStyle = "bg-emerald-100/95 border-emerald-400 text-emerald-900 shadow-emerald-200/50 scale-[1.02] font-extrabold";
            } else if (showFailure) {
              cardStyle = "bg-red-100/95 border-red-400 text-red-900 shadow-red-200/50 scale-98";
            } else {
              cardStyle = "bg-white/40 border-white/10 text-slate-500 opacity-60 pointer-events-none scale-95";
            }
          }

          return (
            <motion.button
              key={index}
              onClick={() => handleAnswerClick(index)}
              disabled={isLocked}
              whileTap={{ scale: isLocked ? 1 : 0.98 }}
              className={`p-5 rounded-2xl border-2 text-left font-bold text-sm sm:text-base leading-snug transition-all duration-150 flex items-start gap-4 shadow-md group ${cardStyle} cursor-pointer min-h-[70px]`}
            >
              {/* Answer Prefix Bubble (A, B, C, D) */}
              <div className={`w-8 h-8 rounded-xl flex-shrink-0 flex items-center justify-center font-black text-xs sm:text-sm shadow-sm transition-all ${
                showSuccess
                  ? "bg-emerald-600 text-white"
                  : showFailure
                  ? "bg-red-600 text-white"
                  : "bg-slate-100 text-slate-500 group-hover:bg-indigo-600 group-hover:text-white"
              }`}>
                {showSuccess ? <Check className="w-4 h-4" /> : showFailure ? <X className="w-4 h-4" /> : ["A", "B", "C", "D"][index]}
              </div>

              {/* Answer Content */}
              <div className="flex-1 font-extrabold">{answer}</div>
            </motion.button>
          );
        })}
      </div>

      {/* 4. Explanation and Mascot Bar */}
      <div className="w-full max-w-4xl mx-auto mt-6 pt-4 border-t border-white/20">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-white/40 shadow-xl">
          {/* Active Mascot Speech */}
          <Mascot
            mood={
              !isLocked
                ? settings.timerDuration > 0 && timeLeft < 6 ? "neutral" : "happy"
                : timerExpired
                ? "sad"
                : selectedIdx === question.correctAnswer
                ? "cheering"
                : "sad"
            }
            message={getMascotMessage()}
            enableSpeechBubble={settings.enableMascot}
          />
        </div>
      </div>
    </div>
  );
}
