"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles, Volume2, VolumeX, Terminal } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onOpenTerminal?: () => void;
}

const navItems = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Architecture", href: "#architecture", id: "architecture" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar({ activeSection, onOpenTerminal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 sm:top-6 left-0 right-0 w-full max-w-full flex justify-center z-[200] px-4 sm:px-8"
      >
        <nav
          className={`flex items-center justify-between w-full max-w-7xl px-5 py-2.5 sm:py-3 rounded-full border transition-all duration-300 ${
            isScrolled
              ? "bg-[#050814]/90 backdrop-blur-2xl border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
              : "bg-slate-950/60 backdrop-blur-xl border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.5)]"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#hero"
            className="flex items-center gap-2 group font-display font-black text-white text-lg sm:text-xl tracking-tight"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 p-[1px] shadow-[0_0_15px_rgba(249,115,22,0.4)]">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-xs font-mono font-bold text-orange-400 group-hover:scale-105 transition-transform">
                LS
              </div>
            </div>
            <span>
              Lalbabu<span className="text-orange-500">.</span>
            </span>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/5 border border-white/5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-white font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-orange-500/20 border border-orange-500/40 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.3)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Terminal Launch Trigger */}
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                title="Open AI CLI Terminal"
                className="hidden sm:flex p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-orange-400 border border-white/10 transition-all cursor-pointer"
              >
                <Terminal size={15} />
              </button>
            )}

            {/* Direct Contact Button */}
            <a
              href="#contact"
              className="px-4 py-2 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.25)] flex items-center gap-2 cursor-pointer group"
            >
              <span>Get in touch</span>
              <div className="w-4 h-4 rounded-full bg-orange-500 text-white flex items-center justify-center text-[10px] font-extrabold group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={10} />
              </div>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-white/10 border border-white/10 text-gray-200 hover:text-white transition-all cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-20 z-[190] px-4 lg:hidden"
          >
            <div className="bg-slate-950/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-mono py-2.5 px-4 rounded-xl transition-all flex items-center justify-between ${
                    activeSection === item.id
                      ? "bg-orange-500/15 text-orange-400 border border-orange-500/30"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span>{item.name}</span>
                  <span className="text-xs text-orange-400">→</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}