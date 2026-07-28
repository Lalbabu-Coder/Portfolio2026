"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-4 sm:top-6 left-0 right-0 w-full max-w-full flex justify-center z-[100] px-4 sm:px-8 md:px-12"
      >
        <nav className="flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full bg-slate-950/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] text-sm font-medium transition-all duration-300">
          
          {/* Left: Logo */}
          <Link
            href="/"
            className="font-display font-black text-white text-xl sm:text-2xl tracking-tight hover:opacity-90 transition-opacity"
          >
            Lalbabu<span className="text-orange-500">.</span>
          </Link>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right: Get in Touch Button (White Pill with Orange Arrow Icon) */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2 cursor-pointer group"
            >
              <span>Get in touch</span>
              <div className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center font-extrabold group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={12} />
              </div>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/10 border border-white/10 text-gray-200 hover:text-white transition-all cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-20 z-[99] px-4 md:hidden"
          >
            <div className="bg-slate-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-200 hover:text-orange-400 py-2 px-3 rounded-lg hover:bg-white/5 transition-all flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-xs text-orange-400 font-mono">→</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
