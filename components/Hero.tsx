"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles, FileText, Download, Terminal as TerminalIcon } from "lucide-react";

const Hero3DVisualizer = dynamic(
  () => import("@/components/canvas/Hero3DVisualizer"),
  { ssr: false }
);

const specializations = [
  {
    tag: "MERN Stack & Scalable Systems",
    primary: "Software",
    secondary: "Engineer",
    gradient: "from-orange-400 via-amber-300 to-yellow-400",
    glow: "rgba(249, 115, 22, 0.4)",
    subtext: "Full Stack Developer · MERN · AI · Scalable Systems",
  },
  {
    tag: "React 19 & Next.js 15 App Architecture",
    primary: "Full Stack",
    secondary: "Developer",
    gradient: "from-cyan-400 via-sky-300 to-emerald-400",
    glow: "rgba(6, 182, 212, 0.4)",
    subtext: "High-throughput REST APIs, SSR, and microservices",
  },
  {
    tag: "LangGraph Multi-Agent & RAG Systems",
    primary: "Autonomous AI",
    secondary: "Engineer",
    gradient: "from-purple-400 via-fuchsia-300 to-rose-400",
    glow: "rgba(168, 85, 247, 0.4)",
    subtext: "LangGraph state graphs, Qdrant vector DB, and Groq LLMs",
  },
  {
    tag: "MongoDB, Redis & Cloud DevOps",
    primary: "Backend & Cloud",
    secondary: "Architect",
    gradient: "from-emerald-400 via-teal-300 to-cyan-400",
    glow: "rgba(16, 185, 129, 0.4)",
    subtext: "RBAC security matrices, Docker containerization, and AWS",
  },
];

const capabilities = [
  { num: "#01", title: "MERN Stack & Next.js 15", desc: "Full-Stack Enterprise Applications" },
  { num: "#02", title: "Multi-Agent AI & LangGraph", desc: "Autonomous Swarms & RAG" },
  { num: "#03", title: "REST APIs & RBAC Security", desc: "High-Throughput Microservices" },
  { num: "#04", title: "AWS, Azure & Docker", desc: "Cloud & Container Deployments" },
];

export default function Hero({ onOpenTerminal }: { onOpenTerminal?: () => void }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % specializations.length);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  const current = specializations[roleIndex];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-transparent text-white w-full max-w-full pt-28 sm:pt-36 pb-12 sm:pb-16 pointer-events-auto select-none"
    >
      {/* MAIN HERO CONTENT: 2-COLUMN BALANCED LAYOUT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 my-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: HERO HEADLINES & CALLS TO ACTION */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
          
          {/* Top Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md w-fit shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <Sparkles size={14} className="text-orange-400 animate-pulse shrink-0" />
            <span className="text-orange-400 font-bold text-xs sm:text-sm tracking-wide font-mono">
              Hey, I'm Lalbabu Singh
            </span>
          </motion.div>

          {/* DYNAMIC ROLE SWITCHER */}
          <div className="min-h-[140px] sm:min-h-[160px] md:min-h-[180px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-1.5"
              >
                {/* Specialization Category Tag */}
                <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping shrink-0" />
                  <span>{current.tag}</span>
                </div>

                {/* Main Gradient Role Title */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] font-black leading-[1.02] tracking-tight font-display">
                  <span
                    className={`block bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent pb-1`}
                    style={{ filter: `drop-shadow(0 0 30px ${current.glow})` }}
                  >
                    {current.primary}
                  </span>
                  <span className="block text-white font-extrabold tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                    {current.secondary}
                  </span>
                </h1>

                <p className="text-xs sm:text-sm md:text-base font-mono text-cyan-300 font-semibold pt-1">
                  {current.subtext}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Role switcher indicator pills */}
          <div className="flex items-center gap-2 pt-1">
            {specializations.map((_, idx) => (
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

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:brightness-110 text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_0_30px_rgba(249,115,22,0.45)] hover:shadow-[0_0_45px_rgba(249,115,22,0.65)] cursor-pointer"
            >
              <span>Let's Build Together</span>
              <div className="w-5 h-5 rounded-full bg-white text-orange-600 flex items-center justify-center font-bold">
                <ArrowRight size={11} />
              </div>
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base border border-white/10 hover:border-orange-500/40 transition-all duration-300 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4)] cursor-pointer"
            >
              <FileText size={16} className="text-orange-400" />
              <span>View Resume</span>
              <Download size={13} className="text-slate-400" />
            </a>

            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-mono text-xs sm:text-sm border border-white/10 transition-all cursor-pointer"
              >
                <TerminalIcon size={14} className="text-cyan-400" />
                <span>Launch CLI</span>
              </button>
            )}
          </motion.div>

        </div>

        {/* RIGHT COLUMN: CLEAN & PROFESSIONAL 3D TECH CORE */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <Hero3DVisualizer />
        </div>

      </div>

      {/* BOTTOM NUMBERED CAPABILITY PILLS */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 mt-12 pt-6 border-t border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col space-y-0.5 group cursor-default"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide font-sans">
                <span className="text-orange-500 font-extrabold font-mono text-sm group-hover:scale-110 transition-transform">
                  {cap.num}
                </span>
                <span className="text-slate-200 group-hover:text-white transition-colors">
                  {cap.title}
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono pl-7 hidden sm:inline">
                {cap.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}