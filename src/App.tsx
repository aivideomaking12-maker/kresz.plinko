import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GameSettings, CategoryInfo, Question } from "./types";
import { CATEGORIES } from "./data/categories";
import { getQuestionsForCategory } from "./data/questions";
import { soundManager } from "./utils/soundManager";

// Import Components
import PlinkoBoard from "./components/PlinkoBoard";
import CategoryIntro from "./components/CategoryIntro";
import QuestionScreen from "./components/QuestionScreen";
import ResultsScreen from "./components/ResultsScreen";
import ReviewScreen from "./components/ReviewScreen";
import AdminPanel from "./components/AdminPanel";
import Mascot from "./components/Mascot";

import { ShieldAlert, Info, HelpCircle, Sparkles } from "lucide-react";

const SETTINGS_KEY = "kresz_kerek_settings_v1";

const DEFAULT_SETTINGS: GameSettings = {
  questionCount: 5,
  enableAnimations: true,
  enableConfetti: true,
  enableFireworks: true,
  enableMascot: true,
  enableMusic: true,
  enableSFX: true,
  timerDuration: 0, // OFF by default
};

export default function App() {
  // --- 1. Load Persisted Settings ---
  const [settings, setSettings] = useState<GameSettings>(() => {
    try {
      const saved = window.localStorage.getItem(SETTINGS_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  });

  // Save settings whenever they change
  const handleSaveSettings = (newSettings: GameSettings) => {
    setSettings(newSettings);
    try {
      window.localStorage.setItem(SETTINGS_KEY, JSON.stringify(newSettings));
    } catch (e) {
      console.warn("Could not save settings to localStorage:", e);
    }
  };

  // --- 2. Active Session State ---
  const [currentScreen, setCurrentScreen] = useState<
    "home" | "spinning" | "category-intro" | "question" | "results" | "review"
  >("home");
  
  const [selectedCategory, setSelectedCategory] = useState<CategoryInfo | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [questionId: string]: number }>({});
  const [score, setScore] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  // Background synthesized music loop state
  const musicTimerRef = useRef<NodeJS.Timeout | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // --- 3. Kiosk Soft Background Music Synth ---
  const playBackgroundMusicNode = () => {
    if (!settings.enableMusic || currentScreen === "results" || currentScreen === "review") return;

    try {
      if (!audioCtxRef.current) {
        const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtxClass) {
          audioCtxRef.current = new AudioCtxClass();
        }
      }

      const ctx = audioCtxRef.current;
      if (!ctx) return;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Gentle, friendly chiptune major scale chord arpeggio
      const chords = [
        [523.25, 659.25, 783.99, 987.77], // Cmaj7 (C5, E5, G5, B5)
        [440.00, 523.25, 659.25, 783.99], // Am7 (A4, C5, E5, G5)
        [349.23, 440.00, 523.25, 698.46], // Fmaj7 (F4, A4, C5, F5)
        [392.00, 493.88, 587.33, 783.99], // G7 (G4, B4, D5, G5)
      ];

      // Choose a random chord for the current loop bar
      const now = ctx.currentTime;
      const selectedChord = chords[Math.floor(Math.random() * chords.length)];

      selectedChord.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Very soft triangle wave
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.45);

        // Soft volume envelope to avoid clicking or disturbing the child
        gain.gain.setValueAtTime(0, now + idx * 0.45);
        gain.gain.linearRampToValueAtTime(0.02, now + idx * 0.45 + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.45 + 1.2);

        // Soft filter to remove high-frequency noise
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(800, now);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.45);
        osc.stop(now + idx * 0.45 + 1.4);
      });
    } catch (e) {
      console.warn("Background music synth failed:", e);
    }
  };

  // Keep background music running smoothly
  useEffect(() => {
    if (settings.enableMusic && currentScreen !== "results") {
      // Trigger first note after interaction
      playBackgroundMusicNode();
      musicTimerRef.current = setInterval(playBackgroundMusicNode, 6000);
    } else {
      if (musicTimerRef.current) {
        clearInterval(musicTimerRef.current);
        musicTimerRef.current = null;
      }
    }

    return () => {
      if (musicTimerRef.current) {
        clearInterval(musicTimerRef.current);
        musicTimerRef.current = null;
      }
    };
  }, [settings.enableMusic, currentScreen]);

  // --- 4. Game Navigation Actions ---
  
  // Triggered when spin completes
  const handleSpinComplete = (category: CategoryInfo) => {
    setSelectedCategory(category);
    
    // Retrieve and shuffle questions for this specific category
    const categoryQuestions = getQuestionsForCategory(category.id, settings.questionCount);
    setQuestions(categoryQuestions);
    setCurrentQuestionIdx(0);
    setUserAnswers({});
    setScore(0);

    // Proceed to category transition screen
    setCurrentScreen("category-intro");
  };

  const handleStartSpin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setCurrentScreen("spinning");

    // Resume audio context on user interaction
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  };

  const handleAnswerSubmitted = (isCorrect: boolean, selectedIdx: number) => {
    const activeQuestion = questions[currentQuestionIdx];
    setUserAnswers((prev) => ({
      ...prev,
      [activeQuestion.id]: selectedIdx,
    }));

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      // Game over! Play triumph chiptune and show results
      soundManager.play("victory");
      setCurrentScreen("results");
    }
  };

  // INSTANT RESET (Kiosk mode essential: zero traces, ready for next kid)
  const handleInstantReset = () => {
    setSelectedCategory(null);
    setQuestions([]);
    setCurrentQuestionIdx(0);
    setUserAnswers({});
    setScore(0);
    setIsSpinning(false);
    setCurrentScreen("home");
  };

  const handleReviewAnswers = () => {
    setCurrentScreen("review");
  };

  const handleBackToResults = () => {
    setCurrentScreen("results");
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-to-b from-[#4facfe] to-[#00f2fe] text-slate-800 overflow-x-hidden">
      
      {/* Vibrant Palette Blur Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-12 left-10 w-48 h-16 bg-white/60 rounded-full blur-md" />
        <div className="absolute top-32 right-12 w-64 h-20 bg-white/40 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-20 w-80 h-24 bg-white/30 rounded-full blur-2xl" />
      </div>

      {/* Dynamic Background Elements: Floating Clouds for Playful atmosphere */}
      {settings.enableAnimations && currentScreen === "home" && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Cloud 1 */}
          <motion.div
            animate={{ x: ["-10vw", "110vw"] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="absolute top-[12%] left-0 opacity-40"
          >
            <div className="w-24 h-10 bg-white rounded-full shadow-[0_4px_10px_rgba(255,255,255,0.8)]" />
            <div className="w-14 h-14 bg-white rounded-full -mt-10 ml-5 shadow-[0_4px_10px_rgba(255,255,255,0.8)]" />
          </motion.div>

          {/* Cloud 2 */}
          <motion.div
            animate={{ x: ["110vw", "-10vw"] }}
            transition={{ repeat: Infinity, duration: 55, ease: "linear" }}
            className="absolute top-[25%] left-0 opacity-25"
          >
            <div className="w-32 h-12 bg-white rounded-full shadow-md" />
            <div className="w-16 h-16 bg-white rounded-full -mt-12 ml-8 shadow-md" />
          </motion.div>

          {/* Cloud 3 */}
          <motion.div
            animate={{ x: ["-15vw", "115vw"] }}
            transition={{ repeat: Infinity, duration: 48, ease: "linear", delay: 10 }}
            className="absolute bottom-[35%] left-0 opacity-30"
          >
            <div className="w-28 h-10 bg-white rounded-full shadow-md" />
            <div className="w-14 h-14 bg-white rounded-full -mt-10 ml-6 shadow-md" />
          </motion.div>
        </div>
      )}

      {/* Admin Settings Panel (Top Right overlay across all screens) */}
      <AdminPanel settings={settings} onSaveSettings={handleSaveSettings} />

      {/* --- Main Routing View --- */}
      <div className="flex-1 z-10">
        <AnimatePresence mode="wait">
          
          {/* SCREEN: HOME & SPINNING (Combined cleanly for organic spinning transition) */}
          {(currentScreen === "home" || currentScreen === "spinning") && (
            <motion.div
              key="home-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex flex-col items-center justify-center p-6 md:p-8"
            >
              <div className="w-full max-w-[1300px] flex flex-col items-center space-y-10">
                
                 {/* 1. Header / Title Block */}
                <div className="text-center space-y-4">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter drop-shadow-[0_5px_10px_rgba(0,0,0,0.25)] mb-2 uppercase">
                    KRESZ <span className="text-yellow-300">Plinkó</span>
                  </h1>
                  
                  <div className="inline-block px-6 py-2 bg-white/25 backdrop-blur-md rounded-full border border-white/30 shadow-inner">
                    <p className="text-white font-black text-sm sm:text-base tracking-widest uppercase italic">
                      Ejtsd le és Tanulj!
                    </p>
                  </div>
                  
                  <p className="text-sm sm:text-base text-white/95 font-bold max-w-md mx-auto leading-relaxed drop-shadow-sm">
                    Kerékpáros és gyalogos közúti biztonsági játék gyermekeknek. Ejtsd le a korongot és tanulj játszva!
                  </p>
                </div>

                {/* 2. Side-by-side PlinkoBoard and Mascot Row (desktop) or stacked (mobile) */}
                <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-16 pt-2">
                  
                  {/* Left/Center Column: Plinko Board Game */}
                  <div className="w-full max-w-xl flex flex-col items-center">
                    <PlinkoBoard
                      onSpinComplete={handleSpinComplete}
                      isSpinning={isSpinning}
                      setIsSpinning={setIsSpinning}
                      enableSFX={settings.enableSFX}
                    />
                  </div>

                  {/* Right Column: Welcome Mascot Speech Bubble */}
                  {settings.enableMascot && !isSpinning && (
                    <div className="w-full max-w-md lg:self-center">
                      <Mascot
                        mood="happy"
                        message="Szia! Üdvözöllek a KRESZ Plinkó játékban! Húzd a korongot a tábla tetején a kívánt indítóhelyre, majd engedd el vagy kattints az Engedd Le gombra, hogy kisorsold a mai KRESZ témakörödet!"
                      />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* SCREEN: CATEGORY INTRO WITH COUNTDOWN */}
          {currentScreen === "category-intro" && selectedCategory && (
            <motion.div
              key="category-intro-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <CategoryIntro
                category={selectedCategory}
                enableAnimations={settings.enableAnimations}
                onComplete={() => setCurrentScreen("question")}
              />
            </motion.div>
          )}

          {/* SCREEN: QUESTION CARD LOOP */}
          {currentScreen === "question" && selectedCategory && questions.length > 0 && (
            <motion.div
              key="question-screen"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <QuestionScreen
                question={questions[currentQuestionIdx]}
                questionIndex={currentQuestionIdx}
                totalQuestions={questions.length}
                settings={settings}
                category={selectedCategory}
                onAnswerSubmitted={handleAnswerSubmitted}
                onNextQuestion={handleNextQuestion}
                currentScore={score}
              />
            </motion.div>
          )}

          {/* SCREEN: RESULTS GAUGE & DECORATIONS */}
          {currentScreen === "results" && selectedCategory && (
            <motion.div
              key="results-screen"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ResultsScreen
                score={score}
                totalQuestions={questions.length}
                category={selectedCategory}
                settings={settings}
                onRestart={handleInstantReset}
                onReview={handleReviewAnswers}
              />
            </motion.div>
          )}

          {/* SCREEN: REVIEW LOGS */}
          {currentScreen === "review" && selectedCategory && (
            <motion.div
              key="review-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ReviewScreen
                questions={questions}
                userAnswers={userAnswers}
                category={selectedCategory}
                settings={settings}
                onBackToResults={handleBackToResults}
                onRestart={handleInstantReset}
              />
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* --- Footer Kiosk notice --- */}
      {currentScreen === "home" && (
        <footer className="py-4 border-t border-slate-200/50 text-center text-[10px] text-slate-400 font-medium tracking-wider z-10 bg-white/40 backdrop-blur-sm">
          KRESZ PLINKÓ OKTATÓ JÁTÉK • SOMOGY VÁRMEGYEI BALESETMEGELŐZÉSI BIZOTTSÁG
        </footer>
      )}
    </div>
  );
}
