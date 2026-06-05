"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-6 left-0 w-full flex justify-center z-[100] px-4 md:px-8"
    >
      <nav className="flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_8px_32px_0_rgba(15,23,42,0.06)] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.05)] text-sm font-medium transition-all duration-300">
        
        {/* Left: Logo */}
        <Link
          href="/"
          className="font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 text-xl drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] tracking-wide"
        >
          {"{ L.S }"}
        </Link>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:-bottom-1 after:left-0 after:bg-blue-400/80 after:shadow-[0_0_8px_rgba(59,130,246,0.8)] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right: Actions (Theme Toggle & Resume) */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 border border-slate-200/80 dark:border-white/10 transition-all duration-300 cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-2 rounded-full font-semibold text-white bg-blue-600/90 hover:bg-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] border border-blue-400/30 hover:-translate-y-0.5"
          >
            Resume
          </a>
        </div>
      </nav>
    </motion.header>
  );
}