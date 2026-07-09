import React from "react";
import { Question, CategoryInfo, GameSettings } from "../types";
import { ArrowLeft, Check, X, AlertTriangle, RotateCcw, HelpCircle } from "lucide-react";
import { soundManager } from "../utils/soundManager";

interface ReviewScreenProps {
  questions: Question[];
  userAnswers: { [questionId: string]: number };
  category: CategoryInfo;
  settings: GameSettings;
  onBackToResults: () => void;
  onRestart: () => void;
}

export default function ReviewScreen({
  questions,
  userAnswers,
  category,
  settings,
  onBackToResults,
  onRestart,
}: ReviewScreenProps) {
  
  // Helper to dynamically render a high-fidelity KRESZ sign based on the question
  const renderKreszSignSvg = (question: Question) => {
    const text = (question.question + " " + question.explanation).toLowerCase();
    const qId = question.id;

    if (text.includes("stop") || text.includes("állj! elsőbbségadás")) {
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto drop-shadow-sm">
          <polygon points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" fill="#dc2626" stroke="#ffffff" strokeWidth="2.5" />
          <text x="50" y="58" textAnchor="middle" fill="#ffffff" className="font-sans font-black text-sm tracking-wider">STOP</text>
        </svg>
      );
    }
    if (text.includes("elsőbbségadás kötelező") || text.includes("háromszög alakú tábla") && text.includes("csúcsára állítva")) {
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto drop-shadow-sm">
          <polygon points="50,90 10,20 90,20" fill="#ffffff" stroke="#ef4444" strokeWidth="6" strokeLinejoin="round" />
        </svg>
      );
    }
    if (text.includes("főútvonal") || text.includes("sárga négyzet") || qId === "tab_1") {
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto drop-shadow-sm">
          <polygon points="50,10 90,50 50,90 10,50" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
          <polygon points="50,16 84,50 50,84 16,50" fill="#fbbf24" />
        </svg>
      );
    }
    if (text.includes("megállni tilos") || qId === "tab_2") {
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto drop-shadow-sm">
          <circle cx="50" cy="50" r="42" fill="#2563eb" stroke="#ef4444" strokeWidth="8" />
          <line x1="22" y1="22" x2="78" y2="78" stroke="#ef4444" strokeWidth="8" />
          <line x1="78" y1="22" x2="22" y2="78" stroke="#ef4444" strokeWidth="8" />
        </svg>
      );
    }
    if (text.includes("várakozni tilos") || text.includes("parkolni tilos") || qId === "tab_3") {
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto drop-shadow-sm">
          <circle cx="50" cy="50" r="42" fill="#2563eb" stroke="#ef4444" strokeWidth="8" />
          <line x1="22" y1="22" x2="78" y2="78" stroke="#ef4444" strokeWidth="8" />
        </svg>
      );
    }
    if (text.includes("behajtani tilos") && text.includes("vízszintes fehér") || qId === "tab_5") {
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto drop-shadow-sm">
          <circle cx="50" cy="50" r="42" fill="#ef4444" />
          <rect x="18" y="42" width="64" height="16" fill="#ffffff" rx="1.5" />
        </svg>
      );
    }
    if (text.includes("behajtani tilos") && text.includes("fehér") || qId === "tab_4") {
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto drop-shadow-sm">
          <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#ef4444" strokeWidth="8" />
        </svg>
      );
    }
    if (text.includes("kerékpárút") || qId === "tab_7") {
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto drop-shadow-sm">
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
    if (text.includes("gyalogosok") && text.includes("veszély") || qId === "tab_6") {
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto drop-shadow-sm">
          <polygon points="50,12 90,83 10,83" fill="#ffffff" stroke="#ef4444" strokeWidth="6.5" strokeLinejoin="round" />
          {/* Zebra crossing markings on road */}
          <line x1="36" y1="71" x2="64" y2="71" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="32" y1="75" x2="68" y2="75" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
          {/* Proportioned Pedestrian */}
          <circle cx="50" cy="35" r="4" fill="#000000" />
          <line x1="50" y1="39" x2="50" y2="51" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
          <path d="M 50 51 L 44 66 M 50 51 L 56 66" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
          <path d="M 50 41 L 42 50 M 50 41 L 58 50" stroke="#000000" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      );
    }
    if (text.includes("gyermekek") || text.includes("iskola") || qId === "tab_8") {
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto drop-shadow-sm">
          <polygon points="50,12 90,83 10,83" fill="#ffffff" stroke="#ef4444" strokeWidth="6.5" strokeLinejoin="round" />
          {/* Child 1 (taller) */}
          <circle cx="42" cy="38" r="3.2" fill="#000000" />
          <line x1="42" y1="42" x2="42" y2="51" stroke="#000000" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M 42 51 L 35 64 M 42 51 L 48 62" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M 42 43 L 49 45 M 42 43 L 54 48" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
          
          {/* Child 2 (smaller, holding hands) */}
          <circle cx="58" cy="43" r="2.5" fill="#000000" />
          <line x1="58" y1="46" x2="58" y2="53" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M 58 53 L 53 64 M 58 53 L 63 62" stroke="#000000" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 58 48 L 54 49 M 58 48 L 64 52" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    }
    if (text.includes("sebességkorlátozás") || text.includes("sebességkorlátozó")) {
      const value = text.includes("30") ? "30" : "50";
      return (
        <svg viewBox="0 0 100 100" className="w-16 h-16 mx-auto drop-shadow-sm">
          <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#ef4444" strokeWidth="8" />
          <text x="50" y="58" textAnchor="middle" fill="#000000" className="font-sans font-black text-xl">{value}</text>
        </svg>
      );
    }

    return null;
  };

  const hasKreszSign = (q: Question) => {
    const text = (q.question + " " + q.explanation).toLowerCase();
    const qId = q.id;
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

  return (
    <div id="review-screen-layout" className="min-h-screen bg-transparent flex flex-col pt-16 pb-32 px-4 sm:px-6 select-none relative">
      
      {/* Top sticky header bar */}
      <div className="w-full max-w-4xl mx-auto flex items-center justify-between border-b border-white/20 pb-4 mb-6 bg-white/20 backdrop-blur-md p-4 rounded-3xl shadow-sm border border-white/30">
        <button
          onClick={onBackToResults}
          className="flex items-center gap-2 text-white hover:text-yellow-100 font-black text-xs sm:text-sm uppercase tracking-wide cursor-pointer group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Eredményekhez
        </button>
        <h2 className="text-lg sm:text-xl font-black text-white tracking-tight uppercase">Válaszok ellenőrzése</h2>
        <button
          onClick={onRestart}
          className="bg-gradient-to-b from-[#43e97b] to-[#38f9d7] hover:from-[#43e97b] hover:to-[#38f9d7] text-white font-black py-2.5 px-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-md border-b-2 border-[#2d8e5e] transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          Új játék
        </button>
      </div>

      {/* Main vertical loop of answered questions */}
      <div className="w-full max-w-4xl mx-auto space-y-6">
        {questions.map((q, qIndex) => {
          const selectedAnswerIdx = userAnswers[q.id];
          const isCorrect = selectedAnswerIdx === q.correctAnswer;
          const isTimedOut = selectedAnswerIdx === -1 || selectedAnswerIdx === undefined;

          return (
            <div
              key={q.id}
              className={`bg-white/90 backdrop-blur-md rounded-3xl p-6 shadow-xl border-2 overflow-hidden relative ${
                isCorrect ? "border-emerald-400" : isTimedOut ? "border-amber-400" : "border-red-400"
              }`}
            >
              {/* Question status badge corner */}
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 mb-4">
                <span className="font-sans font-black text-slate-500 text-xs sm:text-sm uppercase tracking-wider">
                  {qIndex + 1}. Kérdés ({q.difficulty === "easy" ? "Kezdő" : q.difficulty === "medium" ? "Haladó" : "Profi"})
                </span>
                
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                  isCorrect
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                    : isTimedOut
                    ? "bg-amber-100 text-amber-800 border border-amber-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}>
                  {isCorrect ? (
                    <>
                      <Check className="w-3.5 h-3.5" strokeWidth={3} /> Helyes
                    </>
                  ) : isTimedOut ? (
                    "Lejárt az idő"
                  ) : (
                    <>
                      <X className="w-3.5 h-3.5" strokeWidth={3} /> Rossz válasz
                    </>
                  )}
                </span>
              </div>

              {/* Main content grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                
                {/* Left Section: Question and Options (Takes 9 columns with illustration, 12 columns without) */}
                <div className={`${hasKreszSign(q) ? "md:col-span-9" : "md:col-span-12"} space-y-4`}>
                  <h3 className="text-base sm:text-lg font-black text-slate-800 leading-snug">
                    {q.question}
                  </h3>

                  {/* Options layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {q.answers.map((answer, aIdx) => {
                      const isCorrectChoice = aIdx === q.correctAnswer;
                      const isSelectedChoice = aIdx === selectedAnswerIdx;

                      let style = "bg-white/50 border-slate-200 text-slate-600 opacity-85";
                      let icon = null;

                      if (isCorrectChoice) {
                        style = "bg-emerald-100 border-emerald-400 text-emerald-900 font-extrabold scale-[1.01] shadow-sm";
                        icon = <Check className="w-4 h-4 text-emerald-700 flex-shrink-0" strokeWidth={3} />;
                      } else if (isSelectedChoice && !isCorrectChoice) {
                        style = "bg-red-100 border-red-400 text-red-900 font-extrabold scale-[0.99] shadow-sm";
                        icon = <X className="w-4 h-4 text-red-700 flex-shrink-0" strokeWidth={3} />;
                      }

                      return (
                        <div
                          key={aIdx}
                          className={`p-3.5 rounded-xl border-2 text-xs sm:text-sm leading-snug flex items-center justify-between gap-3 ${style}`}
                        >
                          <span className="font-extrabold">{answer}</span>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Section: Sign Graphic visualizer (Only rendered if illustration exists) */}
                {hasKreszSign(q) && (
                  <div className="md:col-span-3 flex items-center justify-center p-3 bg-white/70 border border-slate-100 rounded-2xl min-h-[100px] shadow-inner">
                    {renderKreszSignSvg(q)}
                  </div>
                )}
              </div>

              {/* Police Knowledge base card for learning */}
              <div className="mt-5 bg-yellow-50 border border-yellow-200 rounded-2xl p-4 flex gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-800 flex-shrink-0 shadow-sm">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-black text-xs text-yellow-800 uppercase tracking-wider mb-0.5">Rendőrségi Tudástár</h4>
                  <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-extrabold">
                    {q.explanation}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer back button */}
      <div className="w-full max-w-4xl mx-auto mt-8 flex justify-center pb-12">
        <button
          onClick={onBackToResults}
          className="bg-white/90 hover:bg-white text-slate-800 font-black py-4 px-8 rounded-2xl text-sm uppercase tracking-widest shadow-xl border-2 border-white/60 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-600" strokeWidth={3} />
          Vissza az eredményekhez
        </button>
      </div>
    </div>
  );
}
