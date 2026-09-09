"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, ArrowUp, Code2, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#02040a]/95 text-white backdrop-blur-2xl transition-colors duration-300 overflow-hidden w-full max-w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-12 sm:py-16 grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        
        {/* LEFT: BRAND & DESCRIPTION */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-2xl font-black text-white font-display tracking-tight">
            Lalbabu<span className="text-orange-500">.</span>
          </h3>
          <p className="text-xs sm:text-sm text-orange-400 font-semibold font-mono">
            Software Engineer &middot; Full Stack Developer (MERN)
          </p>
          <p className="text-slate-400 text-xs max-w-sm mx-auto md:mx-0 font-sans leading-relaxed">
            Building scalable, production-ready web platforms, microservices, robust REST APIs, and multi-agent AI workflows.
          </p>
        </div>

        {/* CENTER: SOCIAL CHANNELS */}
        <div className="text-center space-y-3">
          <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">
            // CONNECT ACROSS CHANNELS
          </p>

          <div className="flex justify-center gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919113382362"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:border-emerald-400/50 hover:bg-emerald-500/20 transition-all cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            >
              <MessageCircle size={17} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/lalbabu-singh-b39308277/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-cyan-500/20 transition-all cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              <Linkedin size={17} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Lalbabu-Coder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-white/5 text-slate-200 border border-white/10 hover:border-orange-500/40 hover:bg-white/10 transition-all cursor-pointer shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              <Github size={17} />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/lalbabu/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="p-3 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 hover:border-amber-400/50 hover:bg-amber-500/20 transition-all cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            >
              <Code2 size={17} />
            </a>
          </div>
        </div>

        {/* RIGHT: CTA & BACK TO TOP */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end justify-center space-y-3">
          <p className="text-slate-400 text-xs font-mono">
            Bengaluru, India · Open for Roles
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:brightness-110 text-white font-bold text-xs transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] cursor-pointer"
            >
              Get In Touch →
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:text-white hover:bg-orange-500 transition-all cursor-pointer shadow-[0_0_15px_rgba(249,115,22,0.2)]"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* COPYRIGHT STRIP */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400 font-sans px-4 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto">
        <span>© 2026 <strong className="text-white font-mono">Lalbabu Singh</strong>. All Rights Reserved.</span>
        <span className="text-[11px] text-slate-500 font-mono mt-1 sm:mt-0">
          Built with React 19 · Three.js · GSAP · Next.js · WebGL
        </span>
      </div>
    </footer>
  );
}
