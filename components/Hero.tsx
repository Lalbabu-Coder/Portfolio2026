"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-24 overflow-hidden bg-[#03050d] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(28,49,119,0.15),rgba(255,255,255,0))]">

      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[10%] w-[40vw] h-[40vw] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute right-[-5%] bottom-[-10%] w-[35vw] h-[35vw] bg-cyan-600/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="grid md:grid-cols-2 w-full max-w-7xl mx-auto items-center gap-10 md:gap-12 relative z-20 pt-24 pb-12">

        {/* LEFT */}
        <div className="relative text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-950/40 border border-blue-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]"
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
          >
            <span className="text-2xl md:text-3xl font-medium text-gray-400 block mb-2">
              Hey! I’m
            </span>

            <span className="text-[2.8rem] sm:text-5xl md:text-[5.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 block mb-3 leading-tight">
              Lalbabu Singh
            </span>

            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              A Software Developer.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-gray-400 mt-6 max-w-xl text-base md:text-lg leading-relaxed mx-auto md:mx-0"
          >
            Building scalable, high-performance web applications.
            I create seamless user experiences using modern technologies.
          </motion.p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl bg-white/5 border border-white/10 px-8 py-4 font-semibold text-gray-300 hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center h-[380px] sm:h-[450px] md:h-[600px]">

          {/* Orbit */}
          <motion.div
            animate={{ rotate: paused ? 0 : 360 }}
            transition={{
              duration: 8,
              ease: "linear",
              repeat: Infinity,
            }}
            className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[550px] md:h-[550px]"
          >
            {techStack.map((icon, index) => {
              const angle = (360 / techStack.length) * index;

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `rotate(${angle}deg) translate(clamp(130px,18vw,250px)) rotate(-${angle}deg)`,
                    transformOrigin: "center",
                  }}
                >
                  <img
                    src={icon}
                    alt=""
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onClick={() => setPaused(!paused)}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 cursor-pointer transition hover:scale-125"
                    style={{
                      filter:
                        "drop-shadow(0 0 18px rgba(59,130,246,0.9)) brightness(1.2)",
                    }}
                  />
                </div>
              );
            })}
          </motion.div>

          {/* Glow */}
          <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] bg-blue-500/20 blur-[140px] rounded-full"></div>

          {/* Image */}
          <img
            src="/picc.png"
            alt="Lalbabu Singh"
            className="relative z-10 h-[320px] sm:h-[400px] md:h-full w-auto object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.7)]"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}