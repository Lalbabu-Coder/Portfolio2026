"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#070709] text-white backdrop-blur-xl transition-colors duration-300 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-12 sm:py-16 grid md:grid-cols-3 gap-8 md:gap-12 items-center">

        {/* LEFT: BRAND & DESCRIPTION */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-black text-white font-display tracking-tight">
            Lalbabu<span className="text-orange-500">.</span>
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-orange-400 font-semibold font-mono">
            GenAI & MERN Stack Developer &middot; Software Engineer
          </p>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm max-w-sm mx-auto md:mx-0 font-sans leading-relaxed">
            Building fast, scalable, and visually compelling web architectures
            with clean UI, robust APIs, and real-world microservices.
          </p>
        </div>

        {/* CENTER: SOCIAL CHANNELS */}
        <div className="text-center">
          <p className="text-slate-400 text-xs sm:text-sm mb-4 font-sans font-medium">
            Let’s stay connected
          </p>

          <div className="flex justify-center gap-4 sm:gap-6">
            {/* WhatsApp */}
            <motion.a
              whileHover={{ y: -4, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://wa.me/919113382362"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20
              shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:border-emerald-400/50 cursor-pointer"
            >
              <MessageCircle size={18} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ y: -4, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://www.linkedin.com/in/lalbabu-singh-b39308277/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20
              shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:border-cyan-400/50 cursor-pointer"
            >
              <Linkedin size={18} />
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ y: -4, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://github.com/Lalbabu-Coder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-white/5 text-slate-200 border border-white/10
              shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/10 hover:border-orange-500/40 cursor-pointer"
            >
              <Github size={18} />
            </motion.a>
          </div>
        </div>

        {/* RIGHT: CTA & BACK TO TOP */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end justify-center">
          <p className="text-slate-400 text-xs sm:text-sm mb-3 font-sans">
            Open for software roles & freelance
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="
                inline-block px-5 sm:px-6 py-2.5 rounded-full
                bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm
                transition-all shadow-[0_0_25px_rgba(249,115,22,0.4)] cursor-pointer border border-orange-400/30
              "
            >
              Contact Me →
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:text-white hover:bg-orange-500 transition-all cursor-pointer shadow-[0_0_15px_rgba(249,115,22,0.2)]"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT STRIP */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400 font-sans px-4">
        © 2026 <span className="text-orange-400 font-bold font-mono">Lalbabu Singh</span>.  
        Crafted with React, Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}
