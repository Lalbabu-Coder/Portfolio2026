"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import DecryptedText from "@/components/DecryptedText";
import AITerminal from "@/components/AITerminal";
import { ArrowRight, Terminal as TerminalIcon, Sparkles } from "lucide-react";

const roles = [
  { main: "GenAI & MERN", sub: "Developer" },
  { main: "Autonomous AI", sub: "Engineer" },
  { main: "Full Stack", sub: "Developer" }
];

const bottomSkills = [
  { num: "#01", title: "Autonomous AI Agents" },
  { num: "#02", title: "MERN Stack Architecture" },
  { num: "#03", title: "Docker & Microservices" },
  { num: "#04", title: "RESTful APIs & Cloud" }
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [showTerminalModal, setShowTerminalModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#070709] text-white w-full max-w-full pt-28 pb-10">
      
      {/* 1. CINEMATIC HERO BACKGROUND WITH PORTRAIT & DUAL NEON LIGHTING (EXACT MATCH TO SCREENSHOT) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Background Image of User Portrait */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] h-full opacity-60 lg:opacity-90">
          <img
            src="/hero-bg.png"
            alt="Lalbabu Singh"
            className="w-full h-full object-cover object-center lg:object-top filter contrast-110 brightness-95"
          />
          {/* Gradient Masks for Seamless Blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/80 to-transparent lg:via-[#070709]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070709]/50 via-transparent to-[#070709]" />
        </div>

        {/* Purple/Magenta Glow on Left */}
        <div className="absolute -left-20 top-1/4 w-[40vw] max-w-[500px] h-[40vw] max-h-[500px] bg-purple-700/30 blur-[160px] rounded-full" />
        
        {/* Red/Orange Crimson Glow on Right */}
        <div className="absolute right-0 bottom-1/4 w-[45vw] max-w-[550px] h-[45vw] max-h-[550px] bg-red-600/30 blur-[170px] rounded-full" />

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070709_90%)]" />
      </div>

      {/* 2. MAIN HERO CONTENT GRID */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 my-auto grid lg:grid-cols-12 gap-8 items-center pt-8">
        
        {/* LEFT COLUMN: MAIN HEADLINE */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-500 font-bold text-base sm:text-lg md:text-xl tracking-tight mb-2 block font-display"
          >
            Hey, I'm a
          </motion.span>

          <AnimatePresence mode="wait">
            <motion.h1
              key={roleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.02] tracking-tight font-display"
            >
              <span className="block text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
                {roles[roleIndex].main}
              </span>
              <span className="block text-white/95">
                {roles[roleIndex].sub}
              </span>
            </motion.h1>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_35px_rgba(249,115,22,0.6)] cursor-pointer"
            >
              <span>Let's Build Together</span>
              <div className="w-7 h-7 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold">
                <ArrowRight size={14} />
              </div>
            </a>

            <button
              onClick={() => setShowTerminalModal(true)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-gray-200 text-sm font-semibold transition duration-300 backdrop-blur-md cursor-pointer"
            >
              <TerminalIcon size={16} className="text-cyan-400" />
              <span>Launch AI Terminal</span>
            </button>
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