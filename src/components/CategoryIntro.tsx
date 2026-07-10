import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CategoryInfo } from "../types";
import * as Icons from "lucide-react";

interface CategoryIntroProps {
  category: CategoryInfo;
  onComplete: () => void;
  enableAnimations: boolean;
}

// Belső wrapper a grafikai szétcsúszások megakadályozására
const SvgWrapper = ({ children }: { children: React.ReactNode }) => (
  <svg 
    viewBox="0 0 200 200" 
    preserveAspectRatio="xMidYMid meet" 
    className="w-48 h-48 sm:w-56 sm:h-56 mx-auto drop-shadow-xl"
  >
    {children}
  </svg>
);

export default function CategoryIntro({ category, onComplete, enableAnimations }: CategoryIntroProps) {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeout(onComplete, 400); // slight buffer for transition
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onComplete]);

  // Dynamically import matching Lucide Icon
  const IconComponent = (Icons as any)[category.iconName] || Icons.HelpCircle;

  // Render a massive, child-friendly high-fidelity SVG illustration for each category
  const renderIllustration = () => {
    switch (category.id) {
      case "sebesség":
        return (
          <SvgWrapper>
            {/* Speedometer Gauges */}
            <path d="M 30 140 A 80 80 0 1 1 170 140" fill="none" stroke="#e2e8f0" strokeWidth="12" strokeLinecap="round" />
            <path d="M 30 140 A 80 80 0 1 1 125 45" fill="none" stroke="#ef4444" strokeWidth="12" strokeLinecap="round" />
            
            {/* Ticks */}
            {[30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, idx) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 100 + 74 * Math.cos(rad);
              const y1 = 100 + 74 * Math.sin(rad);
              const x2 = 100 + 66 * Math.cos(rad);
              const y2 = 100 + 66 * Math.sin(rad);
              return <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#475569" strokeWidth="2.5" />;
            })}

            {/* Needle */}
            <motion.g
              initial={{ rotate: -120 }}
              animate={enableAnimations ? { rotate: [ -120, 40, 0, 15, 5 ] } : { rotate: 5 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              style={{ transformOrigin: "100px 100px" }}
            >
              <line x1="100" y1="100" x2="160" y2="100" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
              <polygon points="150,96 164,100 150,104" fill="#ef4444" />
            </motion.g>
            <circle cx="100" cy="100" r="10" fill="#334155" />
            <circle cx="100" cy="100" r="4" fill="#ffffff" />

            {/* Speed Limit 50 Sign */}
            <g transform="translate(110, 110)" className="drop-shadow-md">
              <circle cx="35" cy="35" r="28" fill="#ffffff" stroke="#ef4444" strokeWidth="6" />
              <text x="35" y="35" dominantBaseline="central" textAnchor="middle" fill="#000000" className="font-sans font-black text-2xl">50</text>
            </g>
          </SvgWrapper>
        );

      case "kerekpar":
        return (
          <SvgWrapper>
            {/* Wheels */}
            <motion.g animate={enableAnimations ? { rotate: 360 } : {}} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ transformOrigin: "50px 120px" }}>
              <circle cx="50" cy="120" r="30" fill="none" stroke="#475569" strokeWidth="5" />
              <circle cx="50" cy="120" r="25" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="50" y1="90" x2="50" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="20" y1="120" x2="80" y2="120" stroke="#94a3b8" strokeWidth="1.5" />
            </motion.g>
            
            <motion.g animate={enableAnimations ? { rotate: 360 } : {}} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} style={{ transformOrigin: "150px 120px" }}>
              <circle cx="150" cy="120" r="30" fill="none" stroke="#475569" strokeWidth="5" />
              <circle cx="150" cy="120" r="25" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
              <line x1="150" y1="90" x2="150" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
              <line x1="120" y1="120" x2="180" y2="120" stroke="#94a3b8" strokeWidth="1.5" />
            </motion.g>

            {/* Frame */}
            <path d="M 50 120 L 85 80 L 130 75 L 150 120 M 85 80 L 95 120 L 130 75 M 50 120 L 95 120" stroke="#10b981" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            
            {/* Fork and Handlebar stem */}
            <path d="M 150 120 L 128 62" stroke="#475569" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            
            {/* Handlebar Grips */}
            <path d="M 118 62 H 134 Q 138 62 134 56" stroke="#475569" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            
            {/* Saddle post and Saddle */}
            <line x1="85" y1="80" x2="83" y2="72" stroke="#475569" strokeWidth="5" strokeLinecap="round" />
            <path d="M 72 70 H 92" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />

            {/* Chain and Pedals */}
            <circle cx="95" cy="120" r="10" fill="none" stroke="#1e293b" strokeWidth="2.5" />
            <line x1="95" y1="110" x2="95" y2="130" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M 90 110 H 100 M 90 130 H 100" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />

            {/* Safety Helmet above */}
            <motion.path
              d="M 85 40 Q 100 20 115 40 Z"
              fill="#fbbf24"
              stroke="#d97706"
              strokeWidth="1.5"
              animate={enableAnimations ? { y: [0, -3, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </SvgWrapper>
        );

      case "gyalogos":
        return (
          <SvgWrapper>
            {/* Zebra Crossing Lines */}
            <rect x="20" y="110" width="160" height="40" fill="#38bdf8" rx="5" />
            <rect x="35" y="115" width="15" height="30" fill="#ffffff" />
            <rect x="60" y="115" width="15" height="30" fill="#ffffff" />
            <rect x="85" y="115" width="15" height="30" fill="#ffffff" />
            <rect x="110" y="115" width="15" height="30" fill="#ffffff" />
            <rect x="135" y="115" width="15" height="30" fill="#ffffff" />
            <rect x="160" y="115" width="15" height="30" fill="#ffffff" />

            {/* Pedestrians */}
            <motion.g
              animate={enableAnimations ? { x: [0, 4, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              transform="translate(45, 68)"
            >
              <circle cx="30" cy="20" r="8" fill="#fdba74" stroke="#1e293b" strokeWidth="2" />
              <path d="M 22 18 C 22 8 38 8 38 18 Z" fill="#ef4444" />
              <path d="M 20 18 L 44 18" stroke="#ef4444" strokeWidth="2" />
              <path d="M 18 55 L 42 55 L 36 28 L 24 28 Z" fill="#3b82f6" stroke="#1e293b" strokeWidth="2" />
              <line x1="26" y1="55" x2="22" y2="72" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
              <line x1="34" y1="55" x2="38" y2="72" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
            </motion.g>

            {/* Smaller Child */}
            <motion.g
              animate={enableAnimations ? { x: [0, 3, 0], y: [0, -1, 0] } : {}}
              transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut", delay: 0.2 }}
              transform="translate(95, 88)"
            >
              <circle cx="20" cy="15" r="6" fill="#fdba74" stroke="#1e293b" strokeWidth="1.5" />
              <path d="M 12 40 L 28 40 L 24 21 L 16 21 Z" fill="#fbbf24" stroke="#1e293b" strokeWidth="1.5" />
              <line x1="17" y1="40" x2="14" y2="52" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="23" y1="40" x2="26" y2="52" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" />
            </motion.g>
          </SvgWrapper>
        );

      case "jelzesek":
        return (
          <SvgWrapper>
            {/* Traffic Light Post */}
            <rect x="95" y="120" width="10" height="70" fill="#64748b" />
            <rect x="75" y="20" width="50" height="110" fill="#1e293b" rx="10" stroke="#475569" strokeWidth="3" />
            
            {/* Side visors */}
            <path d="M 73 35 L 63 42 L 73 49" fill="#0f172a" />
            <path d="M 127 35 L 137 42 L 127 49" fill="#0f172a" />
            <path d="M 73 70 L 63 77 L 73 84" fill="#0f172a" />
            <path d="M 127 70 L 137 77 L 127 84" fill="#0f172a" />
            <path d="M 73 105 L 63 112 L 73 119" fill="#0f172a" />
            <path d="M 127 105 L 137 112 L 127 119" fill="#0f172a" />

            {/* Lights */}
            <circle cx="100" cy="42" r="14" fill="#ef4444" className="shadow-lg" />
            {enableAnimations && <circle cx="100" cy="42" r="14" fill="#ff8787" opacity="0.4" className="animate-pulse" />}

            <circle cx="100" cy="77" r="14" fill="#fbbf24" />
            
            <circle cx="100" cy="112" r="14" fill="#22c55e" />
            {enableAnimations && <circle cx="100" cy="112" r="14" fill="#86efac" opacity="0.4" className="animate-pulse" />}
          </SvgWrapper>
        );

      case "elsobbseg":
        return (
          <SvgWrapper>
            {/* Stop Sign on the left */}
            <g transform="translate(45, 60)" className="drop-shadow-md">
              <rect x="18" y="35" width="4" height="60" fill="#64748b" />
              <polygon points="10,0 30,0 40,10 40,30 30,40 10,40 0,30 0,10" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
              <text x="20" y="20" dominantBaseline="central" textAnchor="middle" fill="#ffffff" className="font-sans font-black text-[10px] tracking-wider">STOP</text>
            </g>

            {/* Priority Main Road Sign (Főútvonal) */}
            <g transform="translate(100, 40)" className="drop-shadow-md">
              <rect x="23" y="45" width="4" height="60" fill="#64748b" />
              <polygon points="25,5 45,25 25,45 5,25" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
              <polygon points="25,10 40,25 25,40 10,25" fill="#eab308" />
            </g>

            {/* Road Intersection Outline below */}
            <path d="M 20 150 L 180 150" stroke="#cbd5e1" strokeWidth="8" strokeLinecap="round" />
            <path d="M 100 120 L 100 180" stroke="#cbd5e1" strokeWidth="8" strokeLinecap="round" />
          </SvgWrapper>
        );

      case "megallas":
        return (
          <SvgWrapper>
            <g transform="translate(40, 50)" className="drop-shadow-md">
              <rect x="23" y="45" width="4" height="65" fill="#64748b" />
              <circle cx="25" cy="25" r="23" fill="#2563eb" stroke="#ef4444" strokeWidth="6" />
              <line x1="8" y1="8" x2="42" y2="42" stroke="#ef4444" strokeWidth="6" />
              <line x1="42" y1="8" x2="8" y2="42" stroke="#ef4444" strokeWidth="6" />
            </g>

            <g transform="translate(110, 50)" className="drop-shadow-md">
              <rect x="23" y="45" width="4" height="65" fill="#64748b" />
              <rect x="5" y="5" width="40" height="40" fill="#2563eb" rx="5" stroke="#ffffff" strokeWidth="1.5" />
              <text x="25" y="25" dominantBaseline="central" textAnchor="middle" fill="#ffffff" className="font-sans font-black text-3xl">P</text>
            </g>
          </SvgWrapper>
        );

      case "mikromobilitas":
        return (
          <SvgWrapper>
            <line x1="20" y1="150" x2="180" y2="150" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />

            <g transform="translate(40, 40)">
              <circle cx="20" cy="95" r="14" fill="#334155" stroke="#e2e8f0" strokeWidth="2" />
              <circle cx="20" cy="95" r="5" fill="#94a3b8" />
              
              <circle cx="95" cy="95" r="14" fill="#334155" stroke="#e2e8f0" strokeWidth="2" />
              <circle cx="95" cy="95" r="5" fill="#94a3b8" />

              <rect x="18" y="86" width="76" height="8" fill="#22d3ee" rx="3" stroke="#0891b2" strokeWidth="1.5" />
              <rect x="30" y="94" width="50" height="6" fill="#0891b2" rx="1" />

              <line x1="24" y1="88" x2="40" y2="18" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
              <circle cx="40" cy="18" r="3" fill="#334155" />
              <line x1="28" y1="18" x2="52" y2="18" stroke="#0891b2" strokeWidth="4" strokeLinecap="round" />

              {enableAnimations && (
                <motion.g animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }} transition={{ repeat: Infinity, duration: 1 }}>
                  <path d="M 68 80 L 72 74 L 76 78" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <path d="M 46 80 L 50 74 L 54 78" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </motion.g>
              )}
            </g>
          </SvgWrapper>
        );

      case "haladas":
        return (
          <SvgWrapper>
            <path d="M 100 40 L 15 170 L 185 170 Z" fill="#475569" stroke="#1e293b" strokeWidth="3" />
            <line x1="100" y1="50" x2="100" y2="70" stroke="#ffffff" strokeWidth="2" />
            <line x1="100" y1="85" x2="100" y2="110" stroke="#ffffff" strokeWidth="4" />
            <line x1="100" y1="125" x2="100" y2="160" stroke="#ffffff" strokeWidth="6" />

            <motion.g
              animate={enableAnimations ? { y: [0, -3, 0], scale: [1, 1.02, 1] } : {}}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              transform="translate(68, 100)"
            >
              <circle cx="15" cy="42" r="8" fill="#1e293b" />
              <circle cx="50" cy="42" r="8" fill="#1e293b" />
              <rect x="5" y="18" width="55" height="20" fill="#1e3a8a" rx="5" />
              <path d="M 15 18 L 22 6 L 44 6 L 50 18 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="1.5" />
              <rect x="24" y="9" width="16" height="7" fill="#60a5fa" />
              <ellipse cx="32" cy="4" rx="5" ry="2" fill="#ef4444" />
              <ellipse cx="32" cy="4" rx="2" ry="1" fill="#3b82f6" />
              {enableAnimations && <circle cx="32" cy="4" r="1" fill="#ffffff" className="animate-ping" />}
            </motion.g>
          </SvgWrapper>
        );

      case "tablak":
        return (
          <SvgWrapper>
            <g transform="translate(35, 50)" className="drop-shadow-md">
              <rect x="23" y="40" width="4" height="65" fill="#64748b" />
              <polygon points="25,5 48,45 2,45" fill="#ffffff" stroke="#ef4444" strokeWidth="5" strokeLinejoin="round" />
              <line x1="25" y1="18" x2="25" y2="33" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
              <circle cx="25" cy="39" r="2.2" fill="#000000" />
            </g>

            <g transform="translate(100, 50)" className="drop-shadow-md">
              <rect x="23" y="40" width="4" height="65" fill="#64748b" />
              <circle cx="25" cy="22" r="20" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M 14 22 L 32 22 M 26 16 L 33 22 L 26 28" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </SvgWrapper>
        );

      case "lathatosag":
        return (
          <SvgWrapper>
            <g transform="translate(45, 30)">
              <path d="M 15 20 C 35 15, 75 15, 95 20 L 105 105 C 105 105, 55 115, 5 105 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
              <path d="M 40 17 L 55 50 L 70 17 Z" fill="#60a5fa" />
              <path d="M 37 17 L 55 52 L 73 17" fill="none" stroke="#ca8a04" strokeWidth="2" />

              <rect x="11" y="65" width="88" height="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
              <rect x="13" y="85" width="84" height="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
              
              <line x1="32" y1="20" x2="32" y2="65" stroke="#e2e8f0" strokeWidth="8" />
              <line x1="78" y1="20" x2="78" y2="65" stroke="#e2e8f0" strokeWidth="8" />
            </g>

            {enableAnimations && (
              <motion.g animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <path d="M 30 50 L 33 55 L 38 56 L 34 60 L 35 65 L 30 62 L 25 65 L 26 60 L 22 56 L 27 55 Z" fill="#fef08a" />
                <path d="M 160 80 L 163 85 L 168 86 L 164 90 L 165 95 L 160 92 L 155 95 L 156 90 L 152 86 L 157 85 Z" fill="#fef08a" />
              </motion.g>
            )}
          </SvgWrapper>
        );

      case "vasut":
        return (
          <SvgWrapper>
            <line x1="20" y1="160" x2="180" y2="160" stroke="#475569" strokeWidth="6" />
            <line x1="20" y1="145" x2="180" y2="145" stroke="#475569" strokeWidth="6" />
            {[30, 50, 70, 90, 110, 130, 150, 170].map((x) => (
              <line key={x} x1={x} y1="140" x2={x} y2="165" stroke="#854d0e" strokeWidth="4" />
            ))}

            {/* Train Engine */}
            <motion.g
              animate={enableAnimations ? { x: [-20, 15, -20] } : {}}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              transform="translate(10, 80)"
            >
              <rect x="25" y="15" width="55" height="35" fill="#dc2626" rx="3" />
              <rect x="65" y="2" width="15" height="15" fill="#1e293b" />
              <rect x="25" y="25" width="20" height="25" fill="#334155" />
              
              <circle cx="35" cy="50" r="8" fill="#0f172a" />
              <circle cx="55" cy="50" r="8" fill="#0f172a" />
              <circle cx="75" cy="50" r="8" fill="#0f172a" />
              
              <rect x="48" y="20" width="15" height="12" fill="#bae6fd" />
            </motion.g>

            {/* Railway Gate */}
            <g transform="translate(130, 60)" className="drop-shadow-md">
              <rect x="22" y="25" width="6" height="75" fill="#64748b" />
              <motion.g
                animate={enableAnimations ? { rotate: [0, -60, 0] } : {}}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                style={{ transformOrigin: "25px 50px" }}
              >
                <line x1="25" y1="50" x2="-60" y2="50" stroke="#ef4444" strokeWidth="6" strokeDasharray="10,10" />
                <line x1="25" y1="50" x2="-60" y2="50" stroke="#ffffff" strokeWidth="6" strokeDasharray="10,10" strokeDashoffset="10" />
              </motion.g>

              <circle cx="12" cy="15" r="7" fill="#1e293b" />
              <circle cx="38" cy="15" r="7" fill="#1e293b" />
              <circle cx="25" cy="27" r="5" fill="#e2e8f0" />
              
              {enableAnimations && (
                <>
                  <motion.circle cx="12" cy="15" r="5" fill="#ef4444" animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} />
                  <motion.circle cx="38" cy="15" r="5" fill="#ef4444" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 0.8 }} />
                </>
              )}
            </g>
          </SvgWrapper>
        );

      case "kultura":
        return (
          <SvgWrapper>
            <motion.path
              d="M 100 80 Q 75 35 50 60 T 100 135 T 150 60 Q 125 35 100 80 Z"
              fill="#f472b6"
              opacity="0.3"
              animate={enableAnimations ? { scale: [1, 1.05, 1] } : {}}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              style={{ transformOrigin: "100px 80px" }}
            />

            <g transform="translate(15, 80)">
              <rect x="10" y="15" width="45" height="16" fill="#ef4444" rx="4" stroke="#1e293b" strokeWidth="2" />
              <path d="M 18 15 L 23 5 L 38 5 L 43 15 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
              <circle cx="20" cy="31" r="5" fill="#1e293b" stroke="#1e293b" strokeWidth="1" />
              <circle cx="45" cy="31" r="5" fill="#1e293b" stroke="#1e293b" strokeWidth="1" />
              <path d="M 12 25 Q 16 30 20 25" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="15" cy="20" r="1.5" fill="#ffffff" />
            </g>

            <g transform="translate(125, 80)">
              <rect x="10" y="15" width="45" height="16" fill="#3b82f6" rx="4" stroke="#1e293b" strokeWidth="2" />
              <path d="M 18 15 L 23 5 L 38 5 L 43 15 Z" fill="#ffffff" stroke="#1e293b" strokeWidth="2" />
              <circle cx="20" cy="31" r="5" fill="#1e293b" stroke="#1e293b" strokeWidth="1" />
              <circle cx="45" cy="31" r="5" fill="#1e293b" stroke="#1e293b" strokeWidth="1" />
              <path d="M 45 25 Q 49 30 53 25" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="50" cy="20" r="1.5" fill="#ffffff" />
            </g>

            <motion.g
              animate={enableAnimations ? { rotate: [-10, 15, -10, 15, -10] } : {}}
              transition={{ repeat: Infinity, duration: 2.2 }}
              transform="translate(85, 55)"
              style={{ transformOrigin: "15px 35px" }}
            >
              <path d="M 15 35 L 15 15 C 15 10 18 10 18 15 L 18 30 M 18 15 C 18 10 21 10 21 15 L 21 30 M 21 15 C 21 10 24 10 24 15 L 24 30 M 24 17 C 24 12 27 12 27 17 L 27 32" stroke="#fdba74" strokeWidth="4.5" strokeLinecap="round" fill="none" />
              <path d="M 10 35 L 15 35 C 15 35 15 25 10 25 C 8 25 8 28 10 29" stroke="#fdba74" strokeWidth="4.5" strokeLinecap="round" fill="none" />
              <rect x="12" y="30" width="13" height="15" fill="#fdba74" rx="2" />
            </motion.g>
          </SvgWrapper>
        );

      default:
        return (
          <div className="w-48 h-48 bg-slate-100 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <IconComponent className="w-24 h-24 text-slate-400" />
          </div>
        );
    }
  };

  return (
    <div id="category-intro-screen" className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-gradient-to-b from-[#4facfe] to-[#00f2fe] text-white p-6 overflow-hidden">
      {/* Decorative sky background details */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4facfe]/95 to-[#00f2fe]/95 pointer-events-none" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-white/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg text-center flex flex-col items-center space-y-6">
        {/* Animated Badge Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/25 backdrop-blur-md border border-white/40 py-2 px-5 rounded-full flex items-center gap-2"
        >
          <IconComponent className="w-5 h-5 text-yellow-300 drop-shadow-sm" />
          <span className="text-xs sm:text-sm font-black tracking-widest text-white uppercase drop-shadow-sm">Kategória Sorsolva!</span>
        </motion.div>

        {/* Category Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none px-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)] uppercase"
        >
          {category.name}
        </motion.h1>

        {/* Vector Illustration block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
          className="relative py-4"
        >
          {renderIllustration()}
        </motion.div>

        {/* Animated Countdown bar */}
        <div className="flex flex-col items-center space-y-2 w-full max-w-xs">
          <p className="text-sm text-white/80 font-bold uppercase tracking-wider">A játék másodperceken belül indul...</p>
          
          {/* Animated counter number */}
          <AnimatePresence mode="wait">
            <motion.div
              key={countdown}
              initial={{ opacity: 0, scale: 1.5, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: 10 }}
              transition={{ duration: 0.25 }}
              className="text-6xl font-black text-yellow-300 drop-shadow-lg"
            >
              {countdown}
            </motion.div>
          </AnimatePresence>

          {/* Graphical progress line */}
          <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden border border-white/10">
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 3, ease: "linear" }}
              className="h-full bg-gradient-to-r from-yellow-300 to-amber-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
