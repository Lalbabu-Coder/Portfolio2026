"use client";
import { motion } from "framer-motion";
import Card3D from "@/components/Card3D";

const frontend = [
  { name: "React", icon: "/react.svg", glow: "shadow-cyan-500/40" },
  { name: "Next.js", icon: "/nextjs.svg", glow: "shadow-slate-400/40 dark:shadow-white/30" },
  { name: "Redux", icon: "/redux.svg", glow: "shadow-purple-500/40" },
  { name: "Tailwind", icon: "/tailwind.svg", glow: "shadow-sky-500/40" },
  { name: "JavaScript", icon: "/js.svg", glow: "shadow-yellow-400/40" },
  { name: "HTML5", icon: "/html.svg", glow: "shadow-orange-500/40" },
  { name: "CSS3", icon: "/css.svg", glow: "shadow-blue-500/40" },
];

const backend = [
  { name: "Node.js", icon: "/node.js.svg", glow: "shadow-green-500/40" },
  { name: "Express", icon: "/express.svg", glow: "shadow-slate-400/40" },
  { name: "MongoDB", icon: "/mongo.svg", glow: "shadow-emerald-500/40" },
  { name: "Firebase", icon: "/firebase.svg", glow: "shadow-amber-500/40" },
  { name: "Python", icon: "/python.svg", glow: "shadow-blue-500/40" },
  { name: "SQLite", icon: "/sqlite.svg", glow: "shadow-sky-500/40" },
];


export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 md:px-20">

      {/* SECTION HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          text-center text-4xl md:text-5xl font-extrabold
          bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400
          bg-clip-text text-transparent
          drop-shadow-[0_0_35px_rgba(59,130,246,0.3)]
          dark:drop-shadow-[0_0_35px_rgba(59,130,246,0.55)]
        "
      >
        My Skills
      </motion.h2>

      <p className="text-center mt-4 text-slate-500 dark:text-gray-400">
        A professional toolkit optimized for performance and scalability
      </p>

      {/* MAIN GRID */}
      <div className="mt-20 grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">

        {/* FRONTEND CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card3D className="
            group relative rounded-3xl p-8
            bg-white/60 dark:bg-white/5 backdrop-blur-xl
            border border-slate-200/80 dark:border-white/10
            shadow-[0_0_40px_rgba(59,130,246,0.06)] dark:shadow-[0_0_40px_rgba(59,130,246,0.08)]
            transition-all duration-300
            hover:border-blue-500/40
            hover:shadow-[0_0_80px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_0_80px_rgba(59,130,246,0.35)]
            cursor-default
          ">
            <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400 tracking-wide font-display">
              Frontend
            </h3>

            <div className="grid grid-cols-3 gap-5">
              {frontend.map((item, i) => (
                <div
                  key={i}
                  className={`
                    group/item rounded-xl p-4 flex flex-col items-center
                    border border-slate-200/80 dark:border-white/10
                    bg-slate-100/50 dark:bg-black/30
                    transition-all duration-300
                    hover:scale-110 hover:-translate-y-1
                    hover:shadow-lg ${item.glow}
                  `}
                  style={{ transform: "translateZ(20px)" }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="
                      w-9 h-9 mb-2
                      transition
                      group-hover/item:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]
                    "
                  />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 group-hover/item:text-slate-950 dark:group-hover/item:text-white transition-colors duration-200">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </Card3D>
        </motion.div>

        {/* BACKEND CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card3D className="
            group relative rounded-3xl p-8
            bg-white/60 dark:bg-white/5 backdrop-blur-xl
            border border-slate-200/80 dark:border-white/10
            shadow-[0_0_40px_rgba(59,130,246,0.06)] dark:shadow-[0_0_40px_rgba(59,130,246,0.08)]
            transition-all duration-300
            hover:border-blue-500/40
            hover:shadow-[0_0_80px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_0_80px_rgba(59,130,246,0.35)]
            cursor-default
          ">
            <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400 tracking-wide font-display">
              Backend
            </h3>

            <div className="grid grid-cols-3 gap-5">
              {backend.map((item, i) => (
                <div
                  key={i}
                  className={`
                    group/item rounded-xl p-4 flex flex-col items-center
                    border border-slate-200/80 dark:border-white/10
                    bg-slate-100/50 dark:bg-black/30
                    transition-all duration-300
                    hover:scale-110 hover:-translate-y-1
                    hover:shadow-lg ${item.glow}
                  `}
                  style={{ transform: "translateZ(20px)" }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="
                      w-9 h-9 mb-2
                      transition
                      group-hover/item:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]
                    "
                  />
                  <span className="text-xs sm:text-sm text-slate-600 dark:text-gray-300 group-hover/item:text-slate-950 dark:group-hover/item:text-white transition-colors duration-200">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </Card3D>
        </motion.div>

      </div>
    </section>
  );
}
