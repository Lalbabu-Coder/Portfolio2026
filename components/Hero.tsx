"use client";

import { motion } from "framer-motion";
import { 
  Download, 
  Play, 
  ChevronUp, 
  Github, 
  Linkedin, 
  Code2, 
  MessageCircle, 
  Mail,
  ArrowRight
} from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#1d212c] text-white flex flex-col justify-between pt-28 sm:pt-36 pb-12 px-6 sm:px-12 overflow-hidden"
    >
      {/* BACKGROUND CONCENTRIC ORBITAL RINGS (LENDEX SIGNATURE DESIGN) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 lg:translate-x-10 w-[700px] sm:w-[900px] lg:w-[1100px] h-[700px] sm:h-[900px] lg:h-[1100px] pointer-events-none -z-0">
        <div className="absolute inset-0 rounded-full border border-white/[0.05]" />
        <div className="absolute inset-16 sm:inset-24 rounded-full border border-white/[0.06]" />
        <div className="absolute inset-32 sm:inset-48 rounded-full border border-white/[0.07]" />
        <div className="absolute inset-48 sm:inset-72 rounded-full border border-white/[0.08]" />
      </div>

      {/* MAIN 2-COLUMN BALANCED HERO GRID */}
      <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: GREETING, SERIF NAME & CTAS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 flex flex-col justify-center space-y-7"
        >
          {/* Main Title - Lendex Serif Typography */}
          <div className="space-y-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white leading-[1.08] tracking-tight">
              Hello! I’m <br />
              <span className="relative inline-block font-normal">
                Lalbabu Singh
                
                {/* Hand-drawn decorative wave underline from Lendex */}
                <svg 
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-full text-slate-400/60" 
                  viewBox="0 0 250 14" 
                  fill="none"
                >
                  <path 
                    d="M3 9 C 40 2, 60 14, 100 5 C 140 -2, 170 12, 210 5 C 225 2, 240 8, 248 6" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* Subtitle / Focus Statement */}
          <p className="text-slate-300/90 text-base sm:text-lg leading-relaxed max-w-lg font-sans">
            Software Developer specializing in the MERN Stack, Scalable Microservices & Autonomous AI Systems.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-6">
            
            {/* 1. Get Resume Button (Pill with border) */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/10 text-white text-sm font-medium transition-all duration-200 inline-flex items-center gap-2.5 shadow-sm cursor-pointer"
            >
              <span>Get Resume</span>
              <Download size={15} className="text-slate-300" />
            </a>

            {/* 2. Interactive Video / Explore Work Button (Nested Concentric Circles) */}
            <button
              onClick={scrollToAbout}
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-13 h-13 rounded-full border border-white/20 bg-white/[0.03] p-1 flex items-center justify-center transition-transform group-hover:scale-105">
                <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center bg-white/10 text-white">
                  <Play size={14} className="fill-white translate-x-0.5" />
                </div>
              </div>
              <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                Explore Work
              </span>
            </button>

          </div>
        </motion.div>

        {/* RIGHT COLUMN: CUTOUT PHOTO & ORBITAL SOCIAL CHANNELS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-6 flex items-center justify-center relative pt-4"
        >
          {/* Main Photo Wrapper */}
          <div className="relative w-full max-w-[440px] aspect-[3/4] flex items-end justify-center">
            
            {/* Cutout Photo seamlessly blending into #1d212c */}
            <img
              src="/hero-transparent.png"
              alt="Lalbabu Singh - Software Developer"
              className="w-full h-full object-cover object-top filter brightness-100 contrast-102 select-none pointer-events-none drop-shadow-2xl"
            />

            {/* Subtle bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#1d212c] to-transparent pointer-events-none" />
          </div>

          {/* CIRCULAR SOCIAL BUTTONS PLACED ALONG THE ORBITAL ARC (LENDEX SIGNATURE) */}
          <div className="hidden sm:flex flex-col items-center gap-5 absolute -right-2 sm:right-0 lg:-right-4 top-1/2 -translate-y-1/2 z-20">
            {/* GitHub */}
            <a
              href="https://github.com/Lalbabu-Coder"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-11 h-11 rounded-full border border-white/20 bg-[#1d212c]/90 backdrop-blur-md flex items-center justify-center text-white hover:border-white hover:scale-110 transition shadow-lg"
              title="GitHub"
            >
              <Github size={16} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lalbabu-singh-b39308277/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-full border border-white/20 bg-[#1d212c]/90 backdrop-blur-md flex items-center justify-center text-white hover:border-white hover:scale-110 transition shadow-lg font-mono text-xs font-bold"
              title="LinkedIn"
            >
              in
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/lalbabu/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="w-11 h-11 rounded-full border border-white/20 bg-[#1d212c]/90 backdrop-blur-md flex items-center justify-center text-white hover:border-white hover:scale-110 transition shadow-lg"
              title="LeetCode"
            >
              <Code2 size={16} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919113382362"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="w-11 h-11 rounded-full border border-white/20 bg-[#1d212c]/90 backdrop-blur-md flex items-center justify-center text-white hover:border-white hover:scale-110 transition shadow-lg"
              title="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>

            {/* Email */}
            <a
              href="mailto:lalbabusingh.dev@gmail.com"
              aria-label="Email"
              className="w-11 h-11 rounded-full border border-white/20 bg-[#1d212c]/90 backdrop-blur-md flex items-center justify-center text-white hover:border-white hover:scale-110 transition shadow-lg"
              title="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Bottom Right Floating Scroll-to-Top Button from Lendex */}
          <div className="absolute right-0 bottom-0 hidden lg:block">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-xl bg-white/[0.08] hover:bg-white/15 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
            >
              <ChevronUp size={18} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}