import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Settings as SettingsIcon,
  X,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  RotateCcw,
  Plus,
  Trash2,
  Edit2,
  Check,
  Search,
  Filter,
  Save,
  HelpCircle,
  AlertTriangle,
  FileText
} from "lucide-react";
import { GameSettings, Question, Difficulty } from "../types";
import { CATEGORIES } from "../data/categories";
import {
  getQuestionsFromStorage,
  saveQuestionsToStorage,
  resetQuestionsToDefault
} from "../data/questions";

interface AdminPanelProps {
  settings: GameSettings;
  onSaveSettings: (settings: GameSettings) => void;
}

const DEFAULT_PIN = "1234";

export default function AdminPanel({ settings, onSaveSettings }: AdminPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [showPin, setShowPin] = useState(false);
  const [pinError, setPinError] = useState(false);

  // Custom Tabs and CRUD State
  const [activeTab, setActiveTab] = useState<"settings" | "questions">("settings");
  const [questionsList, setQuestionsList] = useState<Question[]>([]);
  
  // Filtering and Searching
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Editor State
  const [editingQuestion, setEditingQuestion] = useState<Question | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  // Load questions from storage when panel is opened and authenticated
  useEffect(() => {
    if (isOpen && isAuthenticated) {
      setQuestionsList(getQuestionsFromStorage());
    }
  }, [isOpen, isAuthenticated]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsAuthenticated(false);
    setPinInput("");
    setPinError(false);
    setActiveTab("settings");
    setEditingQuestion(null);
    setIsAddingNew(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsAuthenticated(false);
    setPinInput("");
    setPinError(false);
    setEditingQuestion(null);
    setIsAddingNew(false);
  };

  const handleKeyPress = (num: string) => {
    setPinError(false);
    if (pinInput.length < 4) {
      const newPin = pinInput + num;
      setPinInput(newPin);
      if (newPin === DEFAULT_PIN) {
        setTimeout(() => {
          setIsAuthenticated(true);
        }, 150);
      } else if (newPin.length === 4) {
        setTimeout(() => {
          if (newPin !== DEFAULT_PIN) {
            setPinError(true);
            setPinInput("");
          }
        }, 200);
      }
    }
  };

  const handleBackspace = () => {
    setPinInput(pinInput.slice(0, -1));
  };

  const updateSetting = <K extends keyof GameSettings>(key: K, value: GameSettings[K]) => {
    onSaveSettings({
      ...settings,
      [key]: value,
    });
  };

  // --- CRUD Operations ---
  const handleAddNewQuestionClick = () => {
    setEditingQuestion({
      id: "",
      category: categoryFilter !== "all" ? categoryFilter : CATEGORIES[0].id,
      difficulty: "easy",
      question: "",
      answers: ["", "", ""],
      correctAnswer: 0,
      explanation: "",
    });
    setIsAddingNew(true);
  };

  const handleEditQuestionClick = (q: Question) => {
    setEditingQuestion({ ...q });
    setIsAddingNew(false);
  };

  const handleDeleteQuestion = (id: string) => {
    if (window.confirm("Biztosan törölni szeretnéd ezt a kérdést?")) {
      const updated = questionsList.filter((q) => q.id !== id);
      setQuestionsList(updated);
      saveQuestionsToStorage(updated);
    }
  };

  const handleResetQuestions = () => {
    if (
      window.confirm(
        "Biztosan szeretnéd visszaállítani az összes gyári kérdést? Minden egyedi kérdés és módosítás törlődik!"
      )
    ) {
      const defaults = resetQuestionsToDefault();
      setQuestionsList(defaults);
      setEditingQuestion(null);
      setIsAddingNew(false);
    }
  };

  const handleSaveQuestionForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingQuestion) return;

    // Validation
    const cleanQuestionText = editingQuestion.question.trim();
    if (!cleanQuestionText) {
      alert("Kérjük, írd be a kérdés szövegét!");
      return;
    }

    const cleanAnswers = editingQuestion.answers.map((a) => a.trim());
    if (cleanAnswers.some((a) => !a)) {
      alert("Minden válaszlehetőséget ki kell tölteni!");
      return;
    }

    if (editingQuestion.correctAnswer < 0 || editingQuestion.correctAnswer >= cleanAnswers.length) {
      alert("Kérjük, jelöld be a helyes választ!");
      return;
    }

    let updatedList: Question[] = [];
    if (isAddingNew) {
      const newQuestion: Question = {
        ...editingQuestion,
        id: `custom_${Date.now()}`,
        question: cleanQuestionText,
        answers: cleanAnswers,
      };
      updatedList = [newQuestion, ...questionsList];
    } else {
      updatedList = questionsList.map((q) =>
        q.id === editingQuestion.id
          ? {
              ...editingQuestion,
              question: cleanQuestionText,
              answers: cleanAnswers,
            }
          : q
      );
    }

    setQuestionsList(updatedList);
    saveQuestionsToStorage(updatedList);
    setEditingQuestion(null);
    setIsAddingNew(false);
  };

  const handleAnswerChange = (index: number, val: string) => {
    if (!editingQuestion) return;
    const nextAnswers = [...editingQuestion.answers];
    nextAnswers[index] = val;
    setEditingQuestion({
      ...editingQuestion,
      answers: nextAnswers,
    });
  };

  const handleAddAnswerOption = () => {
    if (!editingQuestion || editingQuestion.answers.length >= 6) return;
    setEditingQuestion({
      ...editingQuestion,
      answers: [...editingQuestion.answers, ""],
    });
  };

  const handleRemoveAnswerOption = (index: number) => {
    if (!editingQuestion || editingQuestion.answers.length <= 2) return;
    const nextAnswers = editingQuestion.answers.filter((_, i) => i !== index);
    
    // Adjust correct index if it was pointing to the deleted one or shifted
    let nextCorrect = editingQuestion.correctAnswer;
    if (nextCorrect === index) {
      nextCorrect = 0;
    } else if (nextCorrect > index) {
      nextCorrect--;
    }

    setEditingQuestion({
      ...editingQuestion,
      answers: nextAnswers,
      correctAnswer: nextCorrect,
    });
  };

  // Filter items in memory
  const filteredQuestions = questionsList.filter((q) => {
    const matchesCategory = categoryFilter === "all" || q.category === categoryFilter;
    const matchesDifficulty = difficultyFilter === "all" || q.difficulty === difficultyFilter;
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      searchQuery === "" ||
      q.question.toLowerCase().includes(searchLower) ||
      q.explanation.toLowerCase().includes(searchLower) ||
      q.answers.some((ans) => ans.toLowerCase().includes(searchLower));

    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyLabel = (diff: Difficulty) => {
    switch (diff) {
      case "easy":
        return "Könnyű";
      case "medium":
        return "Közepes";
      case "hard":
        return "Nehéz";
      default:
        return diff;
    }
  };

  return (
    <>
      {/* Admin Settings Button */}
      <button
        id="admin-settings-button"
        onClick={handleOpen}
        className="fixed top-4 right-4 z-40 bg-white/80 hover:bg-white backdrop-blur-md p-3 rounded-full shadow-lg border border-slate-200/50 text-slate-600 hover:text-indigo-600 transition-colors duration-200 flex items-center justify-center cursor-pointer"
        aria-label="Adminisztrátori Beállítások"
      >
        <SettingsIcon className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              id="admin-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            />

            {/* Content Card - Animates width dynamically depending on active tab! */}
            <motion.div
              id="admin-settings-card"
              layout="position"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className={`relative w-full ${
                activeTab === "questions" ? "max-w-4xl" : "max-w-lg"
              } bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10 transition-all duration-300`}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <SettingsIcon className="w-6 h-6 animate-spin-slow" />
                  <h2 className="text-xl font-black tracking-tight uppercase">Rendőrségi Adminisztráció</h2>
                </div>
                <button
                  onClick={handleClose}
                  className="bg-indigo-900/40 hover:bg-indigo-950 p-2 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Security Screen (PIN pad) */}
              {!isAuthenticated ? (
                <div className="p-6 flex flex-col items-center">
                  <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mb-3">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">PIN Kód Szükséges</h3>
                  <p className="text-sm text-slate-500 mb-6 text-center">
                    A beállítások módosításához add meg az adminisztrátori PIN kódot! (Gyári PIN: <span className="font-bold text-indigo-600">1234</span>)
                  </p>

                  {/* PIN Display */}
                  <motion.div
                    animate={pinError ? { x: [-10, 10, -10, 10, 0] } : {}}
                    transition={{ duration: 0.4 }}
                    className="flex justify-center gap-4 mb-6"
                  >
                    {[0, 1, 2, 3].map((index) => (
                      <div
                        key={index}
                        className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center text-xl font-black transition-all duration-150 ${
                          pinInput.length > index
                            ? "border-indigo-600 bg-indigo-50 text-indigo-600 scale-105"
                            : pinError
                            ? "border-red-500 bg-red-50"
                            : "border-slate-200 bg-slate-50 text-slate-400"
                        }`}
                      >
                        {pinInput.length > index ? (showPin ? pinInput[index] : "●") : ""}
                      </div>
                    ))}
                  </motion.div>

                  {pinError && (
                    <p className="text-sm text-red-500 font-bold mb-4 animate-bounce">
                      Helytelen PIN kód! Próbáld újra!
                    </p>
                  )}

                  {/* Number Pad */}
                  <div className="grid grid-cols-3 gap-3 w-full max-w-xs mb-4">
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
                      <button
                        key={num}
                        onClick={() => handleKeyPress(num)}
                        className="bg-slate-50 hover:bg-slate-100 border border-slate-200/60 p-4 rounded-2xl font-bold text-lg text-slate-700 transition-all active:scale-95 cursor-pointer"
                      >
                        {num}
                      </button>
                    ))}
                    <button
                      onClick={() => setShowPin(!showPin)}
                      className="bg-slate-50 hover:bg-slate-100 border border-slate-200/60 p-4 rounded-2xl flex items-center justify-center text-slate-500 cursor-pointer"
                    >
                      {showPin ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={() => handleKeyPress("0")}
                      className="bg-slate-50 hover:bg-slate-100 border border-slate-200/60 p-4 rounded-2xl font-bold text-lg text-slate-700 transition-all active:scale-95 cursor-pointer"
                    >
                      0
                    </button>
                    <button
                      onClick={handleBackspace}
                      className="bg-slate-50 hover:bg-slate-100 border border-slate-200/60 p-4 rounded-2xl font-black text-xs text-slate-500 active:scale-95 cursor-pointer uppercase tracking-wider"
                    >
                      Törlés
                    </button>
                  </div>
                </div>
              ) : (
                /* Authenticated Settings View */
                <div className="flex flex-col max-h-[80vh]">
                  
                  {/* Tab bar Navigation */}
                  <div className="flex bg-slate-50 border-b border-slate-150 px-6 pt-3">
                    <button
                      onClick={() => {
                        setActiveTab("settings");
                        setEditingQuestion(null);
                      }}
                      className={`px-4 pb-3 text-sm font-black uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                        activeTab === "settings"
                          ? "border-indigo-600 text-indigo-600"
                          : "border-transparent text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      Rendszerbeállítások
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("questions");
                        setEditingQuestion(null);
                      }}
                      className={`px-4 pb-3 text-sm font-black uppercase tracking-wider border-b-2 transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeTab === "questions"
                          ? "border-indigo-600 text-indigo-600"
                          : "border-transparent text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      <FileText className="w-4 h-4" />
                      Kérdések Adatbázisa
                    </button>
                  </div>

                  {/* Dynamic Panel Content Scroll Area */}
                  <div className="p-6 overflow-y-auto flex-1">
                    
                    {/* --- TAB A: SYSTEM SETTINGS --- */}
                    {activeTab === "settings" && (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                          <div className="flex items-center gap-2 text-emerald-600">
                            <Unlock className="w-5 h-5" />
                            <span className="font-bold text-xs uppercase tracking-wide">Feloldva</span>
                          </div>
                          <button
                            onClick={() => {
                              updateSetting("questionCount", 5);
                              updateSetting("enableAnimations", true);
                              updateSetting("enableConfetti", true);
                              updateSetting("enableFireworks", true);
                              updateSetting("enableMascot", true);
                              updateSetting("enableMusic", true);
                              updateSetting("enableSFX", true);
                              updateSetting("timerDuration", 0);
                            }}
                            className="text-xs text-slate-500 hover:text-indigo-600 flex items-center gap-1 cursor-pointer font-bold"
                          >
                            <RotateCcw className="w-3.5 h-3.5" />
                            Alaphelyzet
                          </button>
                        </div>

                        {/* 1. Number of Questions */}
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 flex justify-between">
                            <span>Kérdések száma játékonként:</span>
                            <span className="text-indigo-600 font-extrabold">{settings.questionCount} db</span>
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {[3, 5, 10].map((count) => (
                              <button
                                key={count}
                                onClick={() => updateSetting("questionCount", count)}
                                className={`py-3 px-4 rounded-2xl font-black text-sm transition-all cursor-pointer ${
                                  settings.questionCount === count
                                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                                    : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200"
                                }`}
                              >
                                {count} db
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 2. Timer Setup */}
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 flex justify-between">
                            <span>Kérdés időkorlát (időzítő):</span>
                            <span className="text-indigo-600 font-extrabold">
                              {settings.timerDuration === 0 ? "KIKAPCSOLVA" : `${settings.timerDuration} másodperc`}
                            </span>
                          </label>
                          <div className="grid grid-cols-5 gap-1.5">
                            {[0, 20, 30, 45, 60].map((duration) => (
                              <button
                                key={duration}
                                onClick={() => updateSetting("timerDuration", duration)}
                                className={`py-2 px-1 rounded-xl font-black text-xs transition-all cursor-pointer ${
                                  settings.timerDuration === duration
                                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-100"
                                    : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/80"
                                }`}
                              >
                                {duration === 0 ? "KI" : `${duration}s`}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* 3. Feature Toggles */}
                        <div className="space-y-4 pt-4 border-t border-slate-100">
                          <h4 className="text-xs font-black text-slate-800 tracking-wider uppercase mb-1">Játékelemek ki/be kapcsolása</h4>

                          {/* Mascot Toggle */}
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-bold text-slate-700">Rendőr kabala (Mascot)</p>
                              <p className="text-xs text-slate-400">Barátságos segítség beszédbuborékkal</p>
                            </div>
                            <button
                              onClick={() => updateSetting("enableMascot", !settings.enableMascot)}
                              className={`w-14 h-8 rounded-full transition-colors relative duration-200 cursor-pointer ${
                                settings.enableMascot ? "bg-indigo-600" : "bg-slate-200"
                              }`}
                            >
                              <div
                                className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-200 shadow-sm ${
                                  settings.enableMascot ? "left-7" : "left-1"
                                }`}
                              />
                            </button>
                          </div>

                          {/* Animations Toggle */}
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-bold text-slate-700">Folyékony animációk</p>
                              <p className="text-xs text-slate-400">Lebegő felhők, gördülékeny átmenetek</p>
                            </div>
                            <button
                              onClick={() => updateSetting("enableAnimations", !settings.enableAnimations)}
                              className={`w-14 h-8 rounded-full transition-colors relative duration-200 cursor-pointer ${
                                settings.enableAnimations ? "bg-indigo-600" : "bg-slate-200"
                              }`}
                            >
                              <div
                                className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-200 shadow-sm ${
                                  settings.enableAnimations ? "left-7" : "left-1"
                                }`}
                              />
                            </button>
                          </div>

                          {/* Confetti Toggle */}
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-bold text-slate-700">Konfetti ünneplés</p>
                              <p className="text-xs text-slate-400">Konfetti eső a sikeres válaszok után</p>
                            </div>
                            <button
                              onClick={() => updateSetting("enableConfetti", !settings.enableConfetti)}
                              className={`w-14 h-8 rounded-full transition-colors relative duration-200 cursor-pointer ${
                                settings.enableConfetti ? "bg-indigo-600" : "bg-slate-200"
                              }`}
                            >
                              <div
                                className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-200 shadow-sm ${
                                  settings.enableConfetti ? "left-7" : "left-1"
                                }`}
                              />
                            </button>
                          </div>

                          {/* Fireworks Toggle */}
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-bold text-slate-700">Tűzijáték effektusok</p>
                              <p className="text-xs text-slate-400">Ünnepi tűzijáték a győzelmi képernyőn</p>
                            </div>
                            <button
                              onClick={() => updateSetting("enableFireworks", !settings.enableFireworks)}
                              className={`w-14 h-8 rounded-full transition-colors relative duration-200 cursor-pointer ${
                                settings.enableFireworks ? "bg-indigo-600" : "bg-slate-200"
                              }`}
                            >
                              <div
                                className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-200 shadow-sm ${
                                  settings.enableFireworks ? "left-7" : "left-1"
                                }`}
                              />
                            </button>
                          </div>

                          {/* Background Music Toggle */}
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-bold text-slate-700">Háttérzene</p>
                              <p className="text-xs text-slate-400">Lágy háttér dallam játék közben</p>
                            </div>
                            <button
                              onClick={() => updateSetting("enableMusic", !settings.enableMusic)}
                              className={`w-14 h-8 rounded-full transition-colors relative duration-200 cursor-pointer ${
                                settings.enableMusic ? "bg-indigo-600" : "bg-slate-200"
                              }`}
                            >
                              <div
                                className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-200 shadow-sm ${
                                  settings.enableMusic ? "left-7" : "left-1"
                                }`}
                              />
                            </button>
                          </div>

                          {/* Sound Effects Toggle */}
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-bold text-slate-700">Hanghatások (SFX)</p>
                              <p className="text-xs text-slate-400">Sorsolás zörej, helyes és helytelen szignálok</p>
                            </div>
                            <button
                              onClick={() => updateSetting("enableSFX", !settings.enableSFX)}
                              className={`w-14 h-8 rounded-full transition-colors relative duration-200 cursor-pointer ${
                                settings.enableSFX ? "bg-indigo-600" : "bg-slate-200"
                              }`}
                            >
                              <div
                                className={`w-6 h-6 bg-white rounded-full absolute top-1 transition-all duration-200 shadow-sm ${
                                  settings.enableSFX ? "left-7" : "left-1"
                                }`}
                              />
                            </button>
                          </div>
                        </div>

                        {/* Save / Close bar */}
                        <button
                          onClick={handleClose}
                          className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black py-4 px-6 rounded-2xl shadow-lg shadow-indigo-100 transition-all text-center uppercase tracking-widest text-sm"
                        >
                          Változtatások Mentése és Bezárás
                        </button>
                      </div>
                    )}


                    {/* --- TAB B: QUESTIONS DATABASE MANAGER --- */}
                    {activeTab === "questions" && (
                      <div className="space-y-6">
                        
                        {/* 1. FORM SCREEN: Adding or Editing a Question */}
                        {editingQuestion ? (
                          <form onSubmit={handleSaveQuestionForm} className="space-y-5 bg-slate-50 p-6 rounded-3xl border border-slate-200">
                            <h3 className="text-lg font-black text-indigo-900 border-b pb-2 mb-3 flex items-center gap-2">
                              {isAddingNew ? <Plus className="w-5 h-5 text-emerald-500" /> : <Edit2 className="w-5 h-5 text-indigo-500" />}
                              {isAddingNew ? "Új KRESZ Kérdés Létrehozása" : "Kérdés Szerkesztése"}
                            </h3>

                            {/* Row: Category & Difficulty */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-1.5">
                                <label className="block text-xs font-black text-slate-500 uppercase tracking-wider">Kategória</label>
                                <select
                                  value={editingQuestion.category}
                                  onChange={(e) => setEditingQuestion({ ...editingQuestion, category: e.target.value })}
                                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 font-bold focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                >
                                  {CATEGORIES.map((cat) => (
                                    <option key={cat.id} value={cat.id}>
                                      {cat.name}
                                    </option>
                                  ))}
                                </select>
                              </div>

                              <div className="space-y-1.5">
                                <label className="block text-xs font-black text-slate-500 uppercase tracking-wider">Nehézségi szint</label>
                                <div className="grid grid-cols-3 gap-2">
                                  {(["easy", "medium", "hard"] as Difficulty[]).map((diff) => (
                                    <button
                                      type="button"
                                      key={diff}
                                      onClick={() => setEditingQuestion({ ...editingQuestion, difficulty: diff })}
                                      className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                                        editingQuestion.difficulty === diff
                                          ? "bg-slate-800 text-white border-slate-800 shadow-sm"
                                          : "bg-white text-slate-600 border-slate-300 hover:bg-slate-100"
                                      }`}
                                    >
                                      {getDifficultyLabel(diff)}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Input: Question Text */}
                            <div className="space-y-1.5">
                              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider">Kérdés Szövege</label>
                              <textarea
                                required
                                rows={2}
                                value={editingQuestion.question}
                                onChange={(e) => setEditingQuestion({ ...editingQuestion, question: e.target.value })}
                                placeholder="Pl. Mennyivel haladhatsz el egy iskola mellett kerékpárral?"
                                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                              />
                            </div>

                            {/* Answers List */}
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <label className="block text-xs font-black text-slate-500 uppercase tracking-wider">
                                  Válaszlehetőségek és Helyes válasz jelölés
                                </label>
                                <button
                                  type="button"
                                  onClick={handleAddAnswerOption}
                                  disabled={editingQuestion.answers.length >= 6}
                                  className="text-xs text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1 disabled:opacity-35"
                                >
                                  <Plus className="w-3.5 h-3.5" />
                                  Opció hozzáadása
                                </button>
                              </div>

                              <div className="space-y-2.5">
                                {editingQuestion.answers.map((answer, index) => {
                                  const isCorrect = editingQuestion.correctAnswer === index;
                                  return (
                                    <div key={index} className="flex items-center gap-2">
                                      {/* Correct Radio selector */}
                                      <button
                                        type="button"
                                        onClick={() => setEditingQuestion({ ...editingQuestion, correctAnswer: index })}
                                        className={`p-2 rounded-xl border-2 transition-all flex items-center justify-center ${
                                          isCorrect
                                            ? "bg-emerald-500 text-white border-emerald-500 scale-105"
                                            : "bg-white text-slate-300 border-slate-300 hover:border-slate-400"
                                        }`}
                                        title="Jelöld meg helyes válaszként"
                                      >
                                        <Check className="w-4 h-4 stroke-[3]" />
                                      </button>

                                      {/* Option Answer text */}
                                      <input
                                        type="text"
                                        required
                                        value={answer}
                                        onChange={(e) => handleAnswerChange(index, e.target.value)}
                                        placeholder={`Válasz opció ${index + 1}`}
                                        className={`flex-1 bg-white border rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
                                          isCorrect
                                            ? "border-emerald-500 bg-emerald-50/20 font-bold text-slate-800"
                                            : "border-slate-300 text-slate-700"
                                        }`}
                                      />

                                      {/* Delete Answer button */}
                                      {editingQuestion.answers.length > 2 && (
                                        <button
                                          type="button"
                                          onClick={() => handleRemoveAnswerOption(index)}
                                          className="text-slate-400 hover:text-red-500 p-2 rounded-xl hover:bg-slate-100 transition-colors"
                                          title="Opció törlése"
                                        >
                                          <Trash2 className="w-4 h-4" />
                                        </button>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Input: Explanation */}
                            <div className="space-y-1.5">
                              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider">
                                Magyarázat a helyes válaszhoz (gyerekbarát)
                              </label>
                              <textarea
                                rows={2}
                                value={editingQuestion.explanation}
                                onChange={(e) => setEditingQuestion({ ...editingQuestion, explanation: e.target.value })}
                                placeholder="Írd le röviden a szabályt, hogy a gyermek megértse, miért ez a jó válasz!"
                                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                              />
                            </div>

                            {/* Input: Optional Image URL */}
                            <div className="space-y-1.5">
                              <label className="block text-xs font-black text-slate-500 uppercase tracking-wider">
                                Kép URL (opcionális)
                              </label>
                              <input
                                type="text"
                                value={editingQuestion.image || ""}
                                onChange={(e) => setEditingQuestion({ ...editingQuestion, image: e.target.value })}
                                placeholder="Pl. https://helyszin.hu/kep.png"
                                className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                              />
                            </div>

                            {/* Actions bar for Editor */}
                            <div className="flex justify-end gap-3 pt-3 border-t">
                              <button
                                type="button"
                                onClick={() => {
                                  setEditingQuestion(null);
                                  setIsAddingNew(false);
                                }}
                                className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-sm rounded-xl transition-all cursor-pointer"
                              >
                                Mégse
                              </button>
                              <button
                                type="submit"
                                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                              >
                                <Save className="w-4 h-4" />
                                Kérdés Mentése
                              </button>
                            </div>
                          </form>
                        ) : (
                          
                          // 2. MAIN DATATABLE LIST SCREEN
                          <div className="space-y-5">
                            
                            {/* Summary Stat Header */}
                            <div className="bg-slate-50 border border-slate-200/60 p-4 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-3">
                              <div className="text-center sm:text-left">
                                <span className="text-xs font-black text-slate-400 uppercase tracking-widest block">Összesített állapot</span>
                                <h4 className="text-base font-black text-slate-800">
                                  Az adatbázis jelenleg <span className="text-indigo-600 font-black">{questionsList.length} db</span> kérdést tartalmaz
                                </h4>
                              </div>
                              
                              <div className="flex gap-2">
                                <button
                                  onClick={handleResetQuestions}
                                  className="px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                                  title="Minden egyedi módosítás törlése és visszaállás a gyári KRESZ kérdésekre"
                                >
                                  <RotateCcw className="w-3.5 h-3.5" />
                                  Gyári Visszaállítás
                                </button>
                                
                                <button
                                  onClick={handleAddNewQuestionClick}
                                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-100 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer"
                                >
                                  <Plus className="w-3.5 h-3.5 stroke-[3]" />
                                  Új Kérdés
                                </button>
                              </div>
                            </div>

                            {/* Search and filter controls bar */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              {/* 1. Category Filter Selector */}
                              <div className="space-y-1">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">Kategória szűrő</label>
                                <div className="relative">
                                  <select
                                    value={categoryFilter}
                                    onChange={(e) => setCategoryFilter(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-3 pr-8 py-2 text-xs font-bold text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 appearance-none"
                                  >
                                    <option value="all">Mindegyik Kategória</option>
                                    {CATEGORIES.map((cat) => (
                                      <option key={cat.id} value={cat.id}>
                                        {cat.name}
                                      </option>
                                    ))}
                                  </select>
                                  <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
                                </div>
                              </div>

                              {/* 2. Difficulty Filter Selector */}
                              <div className="space-y-1">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">Nehézség szűrő</label>
                                <div className="relative">
                                  <select
                                    value={difficultyFilter}
                                    onChange={(e) => setDifficultyFilter(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-3 pr-8 py-2 text-xs font-bold text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 appearance-none"
                                  >
                                    <option value="all">Mindegyik nehézség</option>
                                    <option value="easy">Könnyű</option>
                                    <option value="medium">Közepes</option>
                                    <option value="hard">Nehéz</option>
                                  </select>
                                  <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
                                </div>
                              </div>

                              {/* 3. Keyword Search Textfield */}
                              <div className="space-y-1">
                                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider">Keresés szövegre</label>
                                <div className="relative">
                                  <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Keresés kulcsszóra..."
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                  />
                                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
                                </div>
                              </div>
                            </div>

                            {/* Questions Table/List container */}
                            <div className="border border-slate-150 rounded-2xl overflow-hidden bg-slate-50">
                              
                              {/* Header panel */}
                              <div className="bg-slate-100 px-4 py-2 border-b border-slate-150 flex items-center justify-between">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                  Találatok: {filteredQuestions.length} db kérdés
                                </span>
                              </div>

                              {/* Questions rows wrapper */}
                              <div className="divide-y divide-slate-150 max-h-[42vh] overflow-y-auto pr-1">
                                {filteredQuestions.length === 0 ? (
                                  <div className="p-12 text-center text-slate-400 space-y-2">
                                    <AlertTriangle className="w-8 h-8 text-amber-500 mx-auto" />
                                    <p className="text-sm font-bold text-slate-600">Nem található kérdés a megadott szűrőkkel!</p>
                                    <p className="text-xs">Próbáld megváltoztatni a keresési kifejezést vagy a kategóriát.</p>
                                  </div>
                                ) : (
                                  filteredQuestions.map((q) => {
                                    // Match category info
                                    const categoryInfo = CATEGORIES.find((c) => c.id === q.category);
                                    
                                    return (
                                      <div
                                        key={q.id}
                                        className="p-4 hover:bg-slate-100/50 transition-colors flex flex-col md:flex-row gap-4 justify-between items-start"
                                      >
                                        <div className="space-y-2 flex-1">
                                          
                                          {/* Labels row */}
                                          <div className="flex flex-wrap items-center gap-1.5">
                                            {/* Category Pill */}
                                            {categoryInfo && (
                                              <span
                                                className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md text-white ${
                                                  categoryInfo.gradient
                                                    ? `bg-gradient-to-r ${categoryInfo.gradient}`
                                                    : "bg-indigo-600"
                                                }`}
                                              >
                                                {categoryInfo.name}
                                              </span>
                                            )}

                                            {/* Difficulty Pill */}
                                            <span
                                              className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${
                                                q.difficulty === "easy"
                                                  ? "bg-emerald-50 text-emerald-600 border-emerald-200"
                                                  : q.difficulty === "medium"
                                                  ? "bg-amber-50 text-amber-600 border-amber-200"
                                                  : "bg-red-50 text-red-600 border-red-200"
                                              }`}
                                            >
                                              {getDifficultyLabel(q.difficulty)}
                                            </span>

                                            {/* ID identifier */}
                                            <span className="text-[9px] font-mono text-slate-400 bg-slate-200/50 px-1 py-0.5 rounded-md">
                                              ID: {q.id}
                                            </span>
                                          </div>

                                          {/* Question Text */}
                                          <h5 className="text-sm font-black text-slate-800 leading-snug">
                                            {q.question}
                                          </h5>

                                          {/* Options grid */}
                                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                                            {q.answers.map((answer, index) => {
                                              const isCorrect = q.correctAnswer === index;
                                              return (
                                                <div
                                                  key={index}
                                                  className={`text-xs px-2.5 py-1.5 rounded-xl border flex items-center gap-1.5 ${
                                                    isCorrect
                                                      ? "bg-emerald-50 text-emerald-700 border-emerald-300 font-bold shadow-sm"
                                                      : "bg-white text-slate-500 border-slate-150"
                                                  }`}
                                                >
                                                  <div
                                                    className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black ${
                                                      isCorrect ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"
                                                    }`}
                                                  >
                                                    {String.fromCharCode(65 + index)}
                                                  </div>
                                                  <span className="truncate">{answer}</span>
                                                </div>
                                              );
                                            })}
                                          </div>

                                          {/* Explanation block */}
                                          {q.explanation && (
                                            <p className="text-xs text-slate-400 italic bg-white/50 border border-slate-100 p-2 rounded-xl">
                                              <span className="font-bold text-slate-500">Magyarázat:</span> {q.explanation}
                                            </p>
                                          )}
                                        </div>

                                        {/* Actions panel */}
                                        <div className="flex md:flex-col gap-2 self-stretch md:self-auto justify-end pt-2 md:pt-0">
                                          <button
                                            type="button"
                                            onClick={() => handleEditQuestionClick(q)}
                                            className="px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                                            title="Kérdés szerkesztése"
                                          >
                                            <Edit2 className="w-3.5 h-3.5" />
                                            <span>Szerkeszt</span>
                                          </button>

                                          <button
                                            type="button"
                                            onClick={() => handleDeleteQuestion(q.id)}
                                            className="px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                                            title="Kérdés végleges törlése"
                                          >
                                            <Trash2 className="w-3.5 h-3.5" />
                                            <span>Töröl</span>
                                          </button>
                                        </div>
                                      </div>
                                    );
                                  })
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
