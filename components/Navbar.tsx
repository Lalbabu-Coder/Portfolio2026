"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-[200] transition-all duration-300 ${
          isScrolled
            ? "bg-[#1d212c]/95 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-lg shadow-black/20"
            : "bg-transparent py-6 sm:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          
          {/* Brand Logo - Lendex Style with White Emblem */}
          <a
            href="#hero"
            className="flex items-center gap-3 font-serif font-bold text-white text-2xl tracking-wide group"
          >
            {/* Geometric Open Emblem Icon */}
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#1d212c] font-black text-base shadow-sm">
              <span className="font-serif italic font-bold">L</span>
            </div>
            <span>
              Lalbabu <span className="font-sans font-light text-slate-300 text-lg">Singh</span>
            </span>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-300/80 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Pill Button 'Hire Me »' */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full border border-white/20 bg-white/[0.03] hover:bg-white/10 text-white text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Hire Me</span>
              <span className="text-slate-300 text-sm">»</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-slate-300 transition cursor-pointer p-1"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-[190] px-4 md:hidden"
          >
            <div className="bg-[#171a23] border border-white/10 rounded-2xl p-6 shadow-2xl space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-sm py-2 px-3 rounded-lg transition ${
                    activeSection === item.id
                      ? "text-white font-bold bg-white/10"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center py-2.5 rounded-full border border-white/20 bg-white/5 text-white text-xs font-semibold uppercase tracking-wider"
                >
                  Hire Me »
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}