"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-slate-200/80 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 grid md:grid-cols-3 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
            Lalbabu Singh
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-gray-400">
            MERN Stack Developer · Frontend Focused
          </p>
          <p className="mt-4 text-slate-500 dark:text-gray-400 text-sm max-w-sm font-sans">
            I build fast, scalable and visually appealing web applications
            with a strong focus on clean UI, performance and real-world usability.
          </p>
        </div>

        {/* CENTER - SOCIAL */}
        <div className="text-center">
          <p className="text-slate-600 dark:text-gray-400 mb-6 font-sans">
            Let’s stay connected
          </p>

          <div className="flex justify-center gap-8">
            {/* WhatsApp */}
            <motion.a
              whileHover={{ y: -8, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              className="p-3 rounded-full bg-green-500/10 text-green-500 dark:text-green-400
              shadow-[0_0_25px_rgba(34,197,94,0.2)] dark:shadow-[0_0_25px_rgba(34,197,94,0.45)] cursor-pointer"
            >
              <MessageCircle size={22} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ y: -8, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://www.linkedin.com/in/lalbabu-singh-b39308277/"
              target="_blank"
              className="p-3 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400
              shadow-[0_0_25px_rgba(59,130,246,0.2)] dark:shadow-[0_0_25px_rgba(59,130,246,0.45)] cursor-pointer"
            >
              <Linkedin size={22} />
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ y: -8, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="https://github.com/Lalbabu-Coder"
              target="_blank"
              className="p-3 rounded-full bg-slate-200/50 hover:bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white
              shadow-[0_0_25px_rgba(0,0,0,0.05)] dark:shadow-[0_0_25px_rgba(255,255,255,0.25)] cursor-pointer"
            >
              <Github size={22} />
            </motion.a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="text-center md:text-right">
          <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 font-sans">
            Open to freelance & internships
          </p>

          <a
            href="#contact"
            className="
              inline-block px-6 py-3 rounded-full
              bg-blue-600 hover:bg-blue-500 text-white
              transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] dark:shadow-[0_0_30px_rgba(59,130,246,0.5)] cursor-pointer
            "
          >
            Start a conversation →
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-slate-200/80 dark:border-white/10 py-6 text-center text-sm text-slate-500 dark:text-gray-400 font-sans">
        © 2026 <span className="text-blue-600 dark:text-blue-400 font-semibold">Lalbabu Singh</span>.  
        Coded with intent, designed with care.
      </div>
    </footer>
  );
}
