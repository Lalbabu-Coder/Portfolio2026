"use client";

import { Github, Linkedin, MessageCircle, ArrowUp, Code2 } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#101319] text-white py-12 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* BRAND */}
        <div className="flex items-center gap-2">
          <span className="text-blue-500 font-extrabold text-lg">&lt;/&gt;</span>
          <span className="font-display font-bold text-base text-white">
            Lalbabu Singh
          </span>
          <span className="text-slate-500 text-xs pl-2">
            &middot; Software Developer
          </span>
        </div>

        {/* SOCIALS */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://github.com/Lalbabu-Coder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <Github size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/lalbabu-singh-b39308277/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={17} />
          </a>
          <a
            href="https://leetcode.com/u/lalbabu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="hover:text-amber-400 transition"
          >
            <Code2 size={17} />
          </a>
          <a
            href="https://wa.me/919113382362"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-emerald-400 transition"
          >
            <MessageCircle size={17} />
          </a>
        </div>

        {/* BACK TO TOP */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-sans">
            © 2026 Lalbabu Singh
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="p-2 rounded-lg bg-[#1a1e28] text-slate-400 hover:text-white transition cursor-pointer"
          >
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
}
