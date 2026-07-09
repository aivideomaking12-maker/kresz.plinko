import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Settings, X, Lock, Unlock, Eye, EyeOff, RotateCcw } from "lucide-react";
import { GameSettings } from "../types";

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

  const handleOpen = () => {
    setIsOpen(true);
    setIsAuthenticated(false);
    setPinInput("");
    setPinError(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsAuthenticated(false);
    setPinInput("");
    setPinError(false);
  };

  const handlePinSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (pinInput === DEFAULT_PIN) {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
      setPinInput("");
      // Vibration effect or visual shake triggered automatically by error state
    }
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

  return (
    <>
      {/* Admin Settings Button */}
      <button
        id="admin-settings-button"
        onClick={handleOpen}
        className="fixed top-4 right-4 z-40 bg-white/80 hover:bg-white backdrop-blur-md p-3 rounded-full shadow-lg border border-slate-200/50 text-slate-600 hover:text-indigo-600 transition-colors duration-200 flex items-center justify-center cursor-pointer"
        aria-label="Adminisztrátori Beállítások"
      >
        <Settings className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Modal / Slide-over */}
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
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Content Card */}
            <motion.div
              id="admin-settings-card"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 z-10"
            >
              {/* Header */}
              <div className="bg-indigo-600 p-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6 animate-spin-slow" />
                  <h2 className="text-xl font-bold tracking-tight">Rendőrségi Admin Panel</h2>
                </div>
                <button
                  onClick={handleClose}
                  className="bg-indigo-700/50 hover:bg-indigo-700 p-2 rounded-full transition-colors cursor-pointer"
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
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">PIN Kód Szükséges</h3>
                  <p className="text-sm text-slate-500 mb-6 text-center">
                    A beállítások módosításához add meg az adminisztrátori PIN kódot!
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
                        className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center text-xl font-bold transition-all duration-150 ${
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
                    <p className="text-sm text-red-500 font-medium mb-4 animate-bounce">
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
                      className="bg-slate-50 hover:bg-slate-100 border border-slate-200/60 p-4 rounded-2xl font-bold text-sm text-slate-500 active:scale-95 cursor-pointer"
                    >
                      TÖRLÉS
                    </button>
                  </div>
                </div>
              ) : (
                /* Authenticated Settings View */
                <div className="p-6 max-h-[70vh] overflow-y-auto">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
                    <div className="flex items-center gap-2 text-emerald-600">
                      <Unlock className="w-5 h-5" />
                      <span className="font-semibold text-sm">Feloldva</span>
                    </div>
                    <button
                      onClick={() => {
                        updateSetting("questionCount", 3);
                        updateSetting("enableAnimations", true);
                        updateSetting("enableConfetti", true);
                        updateSetting("enableFireworks", true);
                        updateSetting("enableMascot", true);
                        updateSetting("enableMusic", true);
                        updateSetting("enableSFX", true);
                        updateSetting("timerDuration", 0);
                      }}
                      className="text-xs text-slate-500 hover:text-indigo-600 flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Alaphelyzet
                    </button>
                  </div>

                  {/* Settings Form */}
                  <div className="space-y-6">
                    {/* 1. Number of Questions */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 flex justify-between">
                        <span>Kérdések száma játékonként:</span>
                        <span className="text-indigo-600 font-bold">{settings.questionCount} db</span>
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[3, 5, 10].map((count) => (
                          <button
                            key={count}
                            onClick={() => updateSetting("questionCount", count)}
                            className={`py-3 px-4 rounded-2xl font-bold text-sm transition-all cursor-pointer ${
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
                      <label className="text-sm font-semibold text-slate-700 flex justify-between">
                        <span>Kérdés időkorlát (időzítő):</span>
                        <span className="text-indigo-600 font-bold">
                          {settings.timerDuration === 0 ? "KIKAPCSOLVA" : `${settings.timerDuration} másodperc`}
                        </span>
                      </label>
                      <div className="grid grid-cols-5 gap-1.5">
                        {[0, 20, 30, 45, 60].map((duration) => (
                          <button
                            key={duration}
                            onClick={() => updateSetting("timerDuration", duration)}
                            className={`py-2 px-1 rounded-xl font-bold text-xs transition-all cursor-pointer ${
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
                      <h4 className="text-sm font-bold text-slate-800 tracking-wide uppercase">Funkciók ki/be kapcsolása</h4>

                      {/* Mascot Toggle */}
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-700">Rendőr kabala (Mascot)</p>
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
                          <p className="text-sm font-semibold text-slate-700">Folyékony animációk</p>
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
                          <p className="text-sm font-semibold text-slate-700">Konfetti ünneplés</p>
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
                          <p className="text-sm font-semibold text-slate-700">Tűzijáték effektusok</p>
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
                          <p className="text-sm font-semibold text-slate-700">Háttérzene</p>
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
                          <p className="text-sm font-semibold text-slate-700">Hanghatások (SFX)</p>
                          <p className="text-xs text-slate-400">Kerékpörgetés, dings, rossz válasz zörej</p>
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
                  </div>

                  {/* Ready Action */}
                  <button
                    onClick={handleClose}
                    className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-indigo-150 transition-all duration-150 active:scale-98 cursor-pointer text-center"
                  >
                    Változtatások Mentése és Bezárás
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
