"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal, ArrowRight, ShieldCheck, Cpu } from "lucide-react";

interface WelcomeOverlayProps {
  onEnter: () => void;
  hasEntered: boolean;
}

export default function WelcomeOverlay({ onEnter, hasEntered }: WelcomeOverlayProps) {
  const [phase, setPhase] = useState<number>(0);
  const [glitchActive, setGlitchActive] = useState<boolean>(false);

  useEffect(() => {
    // Phase 0: WELCOME
    const timer1 = setTimeout(() => setPhase(1), 800);
    // Phase 1: TO LALBABU'S DIGITAL WORLD
    const timer2 = setTimeout(() => setPhase(2), 1900);
    // Phase 2: LALBABU SINGH - SOFTWARE ENGINEER
    const timer3 = setTimeout(() => setPhase(3), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const handleEnterClick = () => {
    setGlitchActive(true);
    setTimeout(() => {
      onEnter();
    }, 400);
  };

  if (hasEntered) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-0 z-[500] flex flex-col items-center justify-between p-6 sm:p-12 select-none overflow-hidden transition-all ${
        glitchActive ? "brightness-150 saturate-200" : ""
      }`}
      style={{
        background: "radial-gradient(ellipse at center, rgba(10, 15, 30, 0.4) 0%, rgba(2, 4, 10, 0.85) 100%)",
        backdropFilter: "blur(6px)",
      }}
    >
      {/* TOP TELEMETRY STATUS BAR */}
      <div className="w-full max-w-7xl flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="tracking-widest uppercase text-cyan-300 font-semibold">
            SYSTEM_ONLINE // PROTOCOL 2026.4
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-slate-500">
          <span>LAT: 12.9716° N</span>
          <span>LON: 77.5946° E</span>
          <span className="text-orange-400/80">MERN · AI · WEBGL</span>
        </div>
      </div>

      {/* CENTER CINEMATIC HEADLINES */}
      <div className="my-auto text-center max-w-4xl px-4 flex flex-col items-center justify-center">
        {/* Step 1: Subtitle Tag */}
        <AnimatePresence mode="wait">
          {phase >= 0 && (
            <motion.div
              key="welcome-pill"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-[0.25em] mb-6 shadow-[0_0_20px_rgba(6,182,212,0.25)]"
            >
              <Sparkles size={14} className="text-cyan-400 animate-spin" style={{ animationDuration: "6s" }} />
              <span>
                {phase < 2 ? "WELCOME" : "INITIALIZING INTERACTIVE SPACE"}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 2: Main Dynamic Headline */}
        <div className="min-h-[140px] sm:min-h-[180px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.h1
                key="p0"
                initial={{ opacity: 0, scale: 0.9, letterSpacing: "0.2em" }}
                animate={{ opacity: 1, scale: 1, letterSpacing: "0.05em" }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(8px)" }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white uppercase drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
              >
                WELCOME
              </motion.h1>
            )}

            {phase === 1 && (
              <motion.h1
                key="p1"
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 uppercase drop-shadow-[0_0_35px_rgba(6,182,212,0.4)]"
              >
                TO LALBABU'S DIGITAL WORLD
              </motion.h1>
            )}

            {phase >= 2 && (
              <motion.div
                key="p2"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-3"
              >
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-white drop-shadow-[0_0_50px_rgba(249,115,22,0.35)]">
                  LALBABU <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">SINGH</span>
                </h1>
                <p className="text-xs sm:text-sm md:text-base font-mono tracking-[0.2em] sm:tracking-[0.3em] uppercase text-cyan-300/90 font-semibold">
                  SOFTWARE ENGINEER &middot; FULL STACK DEVELOPER
                </p>
                <p className="text-xs text-slate-400 font-sans max-w-lg mx-auto pt-2">
                  High-performance web architecture, autonomous AI agent pipelines, scalable MERN backends & interactive 3D WebGL.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Step 3: ENTER EXPERIENCE BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 sm:mt-12 flex flex-col items-center gap-4"
        >
          <button
            onClick={handleEnterClick}
            data-cursor="3d"
            className="group relative px-9 py-4 sm:px-12 sm:py-5 rounded-full font-display font-extrabold text-sm sm:text-base tracking-wider uppercase text-slate-950 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 hover:brightness-110 shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:shadow-[0_0_60px_rgba(249,115,22,0.9)] transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-3 overflow-hidden border border-amber-200/50"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            
            <Cpu className="w-5 h-5 text-slate-950 group-hover:rotate-90 transition-transform duration-500" />
            <span className="relative z-10">ENTER EXPERIENCE</span>
            <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1.5 transition-transform duration-300" />
          </button>

          <p className="text-[11px] font-mono text-slate-400 tracking-wider">
            [ WebGL 3D & GSAP Scroll Engine Active ]
          </p>
        </motion.div>
      </div>

      {/* BOTTOM FOOTER TELEMETRY */}
      <div className="w-full max-w-7xl flex items-center justify-between text-[10px] sm:text-xs font-mono text-slate-500 border-t border-white/5 pt-4">
        <span>© 2026 LALBABU SINGH</span>
        <span className="hidden sm:inline text-slate-400">REACT 19 · THREE.JS · GSAP · NEXT.JS</span>
        <div className="flex items-center gap-2 text-emerald-400">
          <ShieldCheck size={14} />
          <span>PRODUCTION READY</span>
        </div>
      </div>
    </motion.div>
  );
}
