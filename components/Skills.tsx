"use client";
import { motion } from "framer-motion";

const frontend = [
  { name: "React", icon: "/react.svg", glow: "shadow-cyan-500/40" },
  { name: "Next.js", icon: "/nextjs.svg", glow: "shadow-white/30" },
  { name: "Redux", icon: "/redux.svg", glow: "shadow-purple-500/40" },
  { name: "Tailwind", icon: "/tailwind.svg", glow: "shadow-sky-500/40" },
  { name: "JavaScript", icon: "/js.svg", glow: "shadow-yellow-400/40" },
  { name: "HTML5", icon: "/html.svg", glow: "shadow-orange-500/40" },
  { name: "CSS3", icon: "/css.svg", glow: "shadow-blue-500/40" },
];

const backend = [
  { name: "Node.js", icon: "/node.js.svg" },
  { name: "Express", icon: "/express.svg" },
  { name: "MongoDB", icon: "/mongo.svg" },
  { name: "Firebase", icon: "/firebase.svg" },
  { name: "Python", icon: "/python.svg" },
  { name: "SQLite", icon: "/sqlite.svg" },
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
          bg-gradient-to-r from-blue-400 to-cyan-400
          bg-clip-text text-transparent
          drop-shadow-[0_0_35px_rgba(59,130,246,0.55)]
        "
      >
        My Skills
      </motion.h2>

      <p className="text-center mt-4 text-gray-400">
        A professional toolkit optimized for performance and scalability
      </p>

      {/* MAIN GRID */}
      <div className="mt-20 grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">

        {/* FRONTEND CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8 }}
          className="
            group relative rounded-3xl p-8
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-[0_0_40px_rgba(59,130,246,0.08)]
            transition-all duration-300
            hover:border-blue-500/40
            hover:shadow-[0_0_80px_rgba(59,130,246,0.35)]
          "
        >
          <h3 className="text-xl font-semibold mb-6 text-blue-400 tracking-wide">
            Frontend
          </h3>

          <div className="grid grid-cols-3 gap-5">
            {frontend.map((item, i) => (
              <div
                key={i}
                className={`
                  group/item rounded-xl p-4 flex flex-col items-center
                  border border-white/10
                  bg-black/30
                  transition-all duration-300
                  hover:scale-110 hover:-translate-y-1
                  hover:shadow-lg ${item.glow}
                `}
              >
                <img
                  src={item.icon}
                  className="
                    w-9 h-9 mb-2
                    transition
                    group-hover/item:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]
                  "
                />
                <span className="text-sm text-gray-300 group-hover/item:text-white">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* BACKEND CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8 }}
          className="
            group relative rounded-3xl p-8
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-[0_0_40px_rgba(59,130,246,0.08)]
            transition-all duration-300
            hover:border-blue-500/40
            hover:shadow-[0_0_80px_rgba(59,130,246,0.35)]
          "
        >
          <h3 className="text-xl font-semibold mb-6 text-blue-400 tracking-wide">
            Backend
          </h3>

          <div className="grid grid-cols-3 gap-6">
            {backend.map((item, i) => (
              <div
                key={i}
                className="
                  group/item flex flex-col items-center gap-3
                  transition-all duration-300
                  hover:scale-110
                "
              >
                <img
                  src={item.icon}
                  className="
                    w-10 h-10
                    transition
                    group-hover/item:drop-shadow-[0_0_18px_rgba(59,130,246,0.9)]
                  "
                />
                <span className="text-sm text-gray-400 group-hover/item:text-white">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
