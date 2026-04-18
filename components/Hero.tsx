"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const techStack = [
  "/react.svg",
  "/node.js.svg",
  "/mongo.svg",
  "/express.svg",
  "/nextjs.svg",
  "/js.svg",
  "/html.svg",
  "/css.svg",
];

export default function Hero() {
  // Stable positions for hydration-safe rendering
  const positions = useMemo(() => [8, 20, 32, 44, 56, 68, 80, 90], []);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-24 overflow-hidden bg-[#03050d] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(28,49,119,0.15),rgba(255,255,255,0))]">

      {/* Falling Logos in Perfect Sequence */}
      {techStack.map((src, i) => {
        const delay = i * 1.8;

        return (
          <motion.img
            key={i}
            src={src}
            initial={{ y: -120, opacity: 0 }}
            animate={{
              y: "110vh",
              opacity: [0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 18,
              delay,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{
              scale: 1.4,
              y: -30,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 12,
              },
            }}
            className="absolute w-14 h-14 cursor-pointer z-10"
            style={{
              left: `${positions[i]}%`,
              filter:
                "brightness(2.5) drop-shadow(0 0 35px rgba(56,189,248,0.9)) drop-shadow(0 0 10px rgba(255,255,255,0.5))",
            }}
          />
        );
      })}

      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[10%] w-[40vw] h-[40vw] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute right-[-5%] bottom-[-10%] w-[35vw] h-[35vw] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="grid md:grid-cols-2 w-full max-w-7xl mx-auto items-center gap-8 md:gap-12 relative z-20 pt-24 pb-12">

        {/* LEFT */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 py-2 rounded-full bg-blue-950/40 border border-blue-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-sm font-medium text-blue-300 tracking-wide">
              MERN Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display"
          >
            <span className="text-2xl md:text-3xl font-medium text-gray-400 block mb-2 tracking-wide">
              Hey! I’m
            </span>

            <span className="text-[3.5rem] sm:text-6xl md:text-[5.5rem] font-extrabold leading-[1.1] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 block mb-3 md:mb-4 pb-2">
              Lalbabu Singh
            </span>

            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              A Software Developer.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 mt-6 md:mt-8 max-w-xl text-base md:text-lg leading-relaxed font-light"
          >
            Building scalable, high-performance web applications.
            I create seamless user experiences using modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 md:gap-6 mt-10 md:mt-12"
          >
            <a
              href="#projects"
              className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 md:px-8 py-3.5 md:py-4 font-semibold text-white transition-all hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
            </a>

            <a
              href="#contact"
              className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 px-6 md:px-8 py-3.5 md:py-4 font-semibold text-gray-300 transition-all hover:bg-white/10"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-end h-[450px] md:h-[600px] mt-12 md:mt-0 w-full"
        >
          <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

          <img
            src="/picc.png"
            alt="Lalbabu Singh"
            className="relative z-10 h-full w-auto object-contain drop-shadow-[0_0_20px_rgba(0,0,0,0.6)]"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}