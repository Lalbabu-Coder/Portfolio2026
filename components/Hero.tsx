"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import DecryptedText from "@/components/DecryptedText";
import AITerminal from "@/components/AITerminal";

const roles = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "Software Developer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-20 overflow-hidden bg-transparent">
      {/* Background soft glowing blur spheres */}
      <div className="absolute left-[-5%] top-[15%] w-[35vw] h-[35vw] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute right-[-5%] bottom-[-5%] w-[30vw] h-[30vw] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none z-0"></div>

      <div className="grid lg:grid-cols-12 w-full max-w-7xl mx-auto items-center gap-12 relative z-20 pt-32 pb-16">
        
        {/* LEFT COLUMN: INTRO TEXT */}
        <div className="lg:col-span-6 relative text-center lg:text-left flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="self-center lg:self-start inline-flex items-center gap-2 mb-6 px-4.5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs md:text-sm font-semibold text-cyan-300 tracking-wider font-mono">
              SYSTEMS ACTIVE: SECURE CLI
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xl md:text-2xl font-medium text-slate-400 block mb-2 font-display">
              Hey! I’m
            </span>

            {/* Hacker Decrypted Text name header */}
            <span className="text-[2.6rem] sm:text-5xl md:text-[4.5rem] lg:text-[5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 block mb-3 leading-none font-display">
              <DecryptedText text="Lalbabu Singh" speed={40} />
            </span>

            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-300 block mt-3">
              A{" "}
              <span className="inline-flex text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-extrabold">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {roles[roleIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 mt-6 max-w-xl text-base md:text-lg leading-relaxed mx-auto lg:mx-0 font-sans"
          >
            Specialized Software Engineer Intern focused on full-stack MERN engineering, 
            microservices scaling, Docker deployments, and orchestration of autonomous AI agents.
          </motion.p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 font-semibold text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition duration-300 cursor-pointer border border-blue-400/20"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl bg-white/5 border border-white/10 px-8 py-3.5 font-semibold text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE CYBERNETIC AI TERMINAL */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-6 w-full flex justify-center items-center"
        >
          <AITerminal />
        </motion.div>

      </div>
    </section>
  );
}