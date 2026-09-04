"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import DecryptedText from "@/components/DecryptedText";
import AITerminal from "@/components/AITerminal";
import { ArrowRight, Terminal as TerminalIcon, Sparkles, FileText, Download } from "lucide-react";

const roles = [
  { 
    badge: "MERN Stack & Scalable Systems",
    main: "Software", 
    sub: "Engineer", 
    gradient: "from-orange-400 via-amber-300 to-yellow-400",
    glow: "rgba(249, 115, 22, 0.5)"
  },
  { 
    badge: "React.js & Node.js Architecture",
    main: "Full Stack", 
    sub: "Developer", 
    gradient: "from-cyan-400 via-sky-300 to-emerald-400",
    glow: "rgba(6, 182, 212, 0.5)"
  },
  { 
    badge: "MongoDB & RESTful APIs & RBAC",
    main: "MERN Stack", 
    sub: "Developer", 
    gradient: "from-emerald-400 via-teal-300 to-cyan-400",
    glow: "rgba(16, 185, 129, 0.5)"
  },
  { 
    badge: "LangGraph & Vector DBs & Docker",
    main: "Multi-Agent AI", 
    sub: "Engineer", 
    gradient: "from-purple-400 via-fuchsia-300 to-rose-400",
    glow: "rgba(168, 85, 247, 0.5)"
  }
];

const bottomSkills = [
  { num: "#01", title: "MERN Stack & Next.js" },
  { num: "#02", title: "Multi-Agent AI & LangGraph" },
  { num: "#03", title: "REST APIs & RBAC Security" },
  { num: "#04", title: "AWS, Azure & Docker" }
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [showTerminalModal, setShowTerminalModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentRole = roles[roleIndex];

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#070709] text-white w-full max-w-full pt-24 sm:pt-28 pb-8 sm:pb-10">
      
      {/* 1. CLEAN HIGH-CONTRAST PORTRAIT BACKGROUND WITH AMBIENT NEON GLOW */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        
        {/* Ambient Neon Glows BEHIND the Image */}
        <div className="absolute -left-20 top-1/3 w-[50vw] sm:w-[35vw] max-w-[450px] h-[50vw] sm:h-[35vw] max-h-[450px] bg-purple-600/20 blur-[120px] sm:blur-[140px] rounded-full" />
        <div className="absolute right-0 top-1/4 w-[50vw] sm:w-[40vw] max-w-[500px] h-[50vw] sm:h-[40vw] max-h-[500px] bg-orange-600/20 blur-[130px] sm:blur-[150px] rounded-full" />

        {/* Mobile & Desktop High-Visibility Portrait Container */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[54%] h-full opacity-80 sm:opacity-90 lg:opacity-100">
          <img
            src="/hero-bg.png"
            alt="Lalbabu Singh"
            className="w-full h-full object-cover object-top filter contrast-105 brightness-110 saturate-105"
          />
          {/* Smooth Left Side Blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/75 sm:via-[#070709]/60 to-transparent lg:via-[#070709]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/60 via-transparent to-transparent" />
        </div>

      </div>

      {/* 2. MAIN HERO CONTENT GRID */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 my-auto grid lg:grid-cols-12 gap-8 items-center pt-4 sm:pt-8">
        
        {/* LEFT COLUMN: MAIN HEADLINE */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          
          {/* TOP ACCENT BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/10 backdrop-blur-md w-fit mb-3 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <Sparkles size={14} className="text-orange-400 animate-pulse shrink-0" />
            <span className="text-orange-400 font-bold text-xs sm:text-sm tracking-wide font-mono">
              Hey, I'm Lalbabu Singh
            </span>
          </motion.div>

          {/* DYNAMIC STYLISH SWITCHING HEADLINE - OPTIMIZED FOR MOBILE */}
          <div className="min-h-[130px] sm:min-h-[160px] md:min-h-[190px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-1"
              >
                {/* Role Category Tag */}
                <div className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase font-mono text-slate-300 flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping shrink-0" />
                  <span>{currentRole.badge}</span>
                </div>

                {/* Stylish Gradient Role Title */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[5rem] font-black leading-[1.05] tracking-tight font-display">
                  <span 
                    className={`block bg-gradient-to-r ${currentRole.gradient} bg-clip-text text-transparent pb-1`}
                    style={{
                      filter: `drop-shadow(0 0 35px ${currentRole.glow})`
                    }}
                  >
                    {currentRole.main}
                  </span>
                  <span className="block text-white font-extrabold tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                    {currentRole.sub}
                  </span>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ROLE SWITCHER PILL INDICATORS */}
          <div className="flex items-center gap-2 my-3 sm:my-4">
            {roles.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setRoleIndex(idx)}
                aria-label={`Select role ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === roleIndex 
                    ? "w-8 bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]" 
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* CLEAN HIGH-IMPACT PRIMARY CTA BUTTON */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.45)] hover:shadow-[0_0_45px_rgba(249,115,22,0.65)] cursor-pointer text-center"
            >
              <span>Let's Build Together</span>
              <div className="w-6 h-6 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold">
                <ArrowRight size={13} />
              </div>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base border border-white/10 hover:border-orange-500/40 transition-all duration-300 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] cursor-pointer text-center"
            >
              <FileText size={16} className="text-orange-400" />
              <span>View Resume</span>
              <Download size={14} className="text-slate-400" />
            </a>
          </motion.div>

        </div>

      </div>

      {/* 3. BOTTOM ROW: NUMBERED SKILL PILLS (EXACT MATCH TO SCREENSHOT #01 #02 #03 #04 ROW) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-12 pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {bottomSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wide font-sans group cursor-default"
            >
              <span className="text-orange-500 font-extrabold font-mono text-sm sm:text-base group-hover:scale-110 transition-transform">
                {skill.num}
              </span>
              <span className="text-slate-200 group-hover:text-white transition-colors">
                {skill.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CLI TERMINAL MODAL */}
      <AnimatePresence>
        {showTerminalModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <div className="w-full max-w-3xl relative">
              <button
                onClick={() => setShowTerminalModal(false)}
                className="absolute -top-10 right-0 text-white hover:text-orange-400 text-sm font-mono cursor-pointer"
              >
                [ CLOSE TERMINAL ✕ ]
              </button>
              <AITerminal />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}