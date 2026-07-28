"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24 sm:mt-32 border-t border-white/10 bg-[#070709] text-white backdrop-blur-xl transition-colors duration-300 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 py-12 sm:py-16 grid md:grid-cols-3 gap-8 md:gap-12 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-display">
            Lalbabu Singh
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-cyan-400 font-semibold">
            GenAI & MERN Stack Developer · Software Engineer
          </p>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm max-w-sm mx-auto md:mx-0 font-sans leading-relaxed">
            Building fast, scalable, and visually compelling web architectures
            with clean UI, robust APIs, and real-world microservices.
          </p>
        </div>

        {/* CENTER - SOCIAL */}
        <div className="text-center">
          <p className="text-slate-400 text-xs sm:text-sm mb-4 font-sans font-medium">
            Let’s stay connected
          </p>

          <div className="flex justify-center gap-6 sm:gap-8">
            {/* WhatsApp */}
            <motion.a
              whileHover={{ y: -6, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://wa.me/919113382362"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-3 rounded-full bg-green-500/10 text-green-400 border border-green-500/20
              shadow-[0_0_25px_rgba(34,197,94,0.3)] cursor-pointer"
            >
              <MessageCircle size={20} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ y: -6, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://www.linkedin.com/in/lalbabu-singh-b39308277/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20
              shadow-[0_0_25px_rgba(59,130,246,0.3)] cursor-pointer"
            >
              <Linkedin size={20} />
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ y: -6, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://github.com/Lalbabu-Coder"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-full bg-white/5 text-white border border-white/10
              shadow-[0_0_25px_rgba(255,255,255,0.15)] cursor-pointer hover:bg-white/10"
            >
              <Github size={20} />
            </motion.a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end justify-center">
          <p className="text-slate-400 text-xs sm:text-sm mb-3 font-sans">
            Open for software roles & freelance
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="
                inline-block px-5 sm:px-6 py-2.5 rounded-full
                bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm
                transition-all shadow-[0_0_25px_rgba(59,130,246,0.4)] cursor-pointer border border-blue-400/30
              "
            >
              Contact Me →
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500 font-sans px-4">
        © 2026 <span className="text-cyan-400 font-semibold">Lalbabu Singh</span>.  
        Crafted with React, Next.js & Tailwind CSS.
      </div>
    </footer>
  );
}

