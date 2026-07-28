"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Cpu, Code2, Database, Terminal, ShieldCheck, Layers, Server } from "lucide-react";

interface SkillCard {
  name: string;
  category: "genai" | "frontend" | "backend" | "devops";
  badge: string;
  level: number;
  description: string;
  iconPath?: string;
}

const allSkills: SkillCard[] = [
  // GenAI & LLMs
  {
    name: "OpenAI API & GPT-4o",
    category: "genai",
    badge: "Expert",
    level: 95,
    description: "Structured JSON outputs, function calling & assistant API orchestration.",
    iconPath: "/next.svg"
  },
  {
    name: "LangChain & LlamaIndex",
    category: "genai",
    badge: "Expert",
    level: 92,
    description: "Agentic workflows, document retrieval chains & contextual memory.",
  },
  {
    name: "Autonomous AI Agents",
    category: "genai",
    badge: "Specialized",
    level: 90,
    description: "Multi-agent coordination, service isolation & autonomous task delegation.",
  },
  {
    name: "RAG & Vector Embeddings",
    category: "genai",
    badge: "Advanced",
    level: 88,
    description: "Semantic search, vector store integration & knowledge base querying.",
  },
  {
    name: "Prompt Engineering",
    category: "genai",
    badge: "Mastery",
    level: 96,
    description: "Chain-of-thought, zero/few-shot prompting & system instructions.",
  },

  // Frontend & MERN
  {
    name: "React.js",
    category: "frontend",
    badge: "Expert",
    level: 95,
    description: "Component lifecycle, custom hooks & high-performance state management.",
    iconPath: "/react.svg"
  },
  {
    name: "Next.js 15 / App Router",
    category: "frontend",
    badge: "Expert",
    level: 92,
    description: "SSR, SSG, Server Actions, Turbopack & SEO optimizations.",
    iconPath: "/nextjs.svg"
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    badge: "Mastery",
    level: 96,
    description: "Custom design tokens, dark mode systems & glassmorphism UI.",
    iconPath: "/tailwind.svg"
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    badge: "Mastery",
    level: 95,
    description: "Async/Await, Promises, Closures, DOM manipulation & ES Next syntax.",
    iconPath: "/js.svg"
  },
  {
    name: "Redux Toolkit / Context",
    category: "frontend",
    badge: "Advanced",
    level: 88,
    description: "Global state slices, RTK query caching & provider architecture.",
    iconPath: "/redux.svg"
  },

  // Backend & APIs
  {
    name: "Node.js & Express.js",
    category: "backend",
    badge: "Expert",
    level: 92,
    description: "Event-driven asynchronous architecture & custom middleware pipelines.",
    iconPath: "/node.js.svg"
  },
  {
    name: "RESTful API Engineering",
    category: "backend",
    badge: "Mastery",
    level: 95,
    description: "Secure API endpoints, payload optimization & HTTP status handling.",
  },
  {
    name: "JWT Auth & RBAC Security",
    category: "backend",
    badge: "Expert",
    level: 90,
    description: "Stateless security tokens, refresh tokens & role-based access locks.",
  },

  // Database & DevOps
  {
    name: "MongoDB & Mongoose",
    category: "devops",
    badge: "Advanced",
    level: 90,
    description: "NoSQL schema design, aggregation pipelines & document modeling.",
    iconPath: "/mongo.svg"
  },
  {
    name: "Docker Containerization",
    category: "devops",
    badge: "Advanced",
    level: 85,
    description: "Multi-stage Dockerfiles, compose environments & microservice isolation.",
  },
  {
    name: "Git & CI/CD Pipelines",
    category: "devops",
    badge: "Expert",
    level: 92,
    description: "Version control branching, PR workflows & automated Vercel deployments.",
  },
];

const categories = [
  { id: "all", label: "All Arsenal" },
  { id: "genai", label: "GenAI & Agents" },
  { id: "frontend", label: "Frontend / MERN" },
  { id: "backend", label: "Backend & APIs" },
  { id: "devops", label: "Databases & DevOps" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills = activeCategory === "all" 
    ? allSkills 
    : allSkills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-20 overflow-hidden bg-[#070709] text-white w-full max-w-full border-t border-white/10">
      
      {/* Front-page matching Purple & Cyan Ambient Neon Glows */}
      <div className="absolute right-[-10%] top-[15%] w-[40vw] max-w-[450px] h-[40vw] max-h-[450px] bg-purple-700/20 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute left-[-10%] bottom-[15%] w-[40vw] max-w-[450px] h-[40vw] max-h-[450px] bg-cyan-600/20 blur-[160px] rounded-full pointer-events-none z-0" />

      {/* SECTION HEADING */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-display tracking-tight"
        >
          My Technical <span className="text-orange-500">Arsenal</span>
        </motion.h2>

        <p className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base md:text-lg font-sans">
          A verified engineering toolkit structured for autonomous AI orchestration, clean code, and microservice performance.
        </p>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="relative z-10 mt-10 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border ${
              activeCategory === cat.id
                ? "bg-orange-500 text-white border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                : "bg-slate-900/80 border-white/10 text-slate-300 hover:text-white hover:border-white/20"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* SKILLS CARDS GRID */}
      <div className="relative z-10 mt-12 sm:mt-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="p-5 sm:p-6 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,0.2)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Rating */}
                <div className="flex items-center justify-between mb-4">
                  {skill.iconPath ? (
                    <img src={skill.iconPath} alt={skill.name} className="w-8 h-8 object-contain filter group-hover:scale-110 transition-transform duration-300" />
                  ) : (
                    <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20 flex items-center justify-center font-bold text-xs">
                      <Cpu size={18} />
                    </div>
                  )}

                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400">
                    {skill.badge}
                  </span>
                </div>

                {/* Skill Title */}
                <h3 className="text-base font-extrabold text-white font-display group-hover:text-orange-400 transition-colors">
                  {skill.name}
                </h3>

                {/* Skill Description */}
                <p className="mt-2 text-xs text-slate-300 font-sans leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar & Level */}
              <div className="mt-5 pt-3 border-t border-white/10">
                <div className="flex justify-between items-center text-[11px] font-mono mb-1.5">
                  <span className="text-slate-400">Proficiency</span>
                  <span className="text-orange-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="h-full bg-gradient-to-r from-purple-500 via-orange-500 to-amber-400 rounded-full"
                  />
                </div>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* CORE ARCHITECTURE PANELS (BOTTOM HIGHLIGHT) */}
      <div className="relative z-10 mt-16 max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 text-left">
          <div className="flex items-center gap-3 mb-3 text-orange-400 font-display font-extrabold text-lg">
            <Sparkles size={20} />
            <span>Autonomous AI Workflows</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Specialized in orchestrating LangChain & OpenAI agent pipelines with custom tools, multi-agent delegation, and RAG vector store queries.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 text-left">
          <div className="flex items-center gap-3 mb-3 text-cyan-400 font-display font-extrabold text-lg">
            <Code2 size={20} />
            <span>MERN Stack Architecture</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            End-to-end full-stack web applications using React.js, Next.js 15, Node.js, Express.js controllers, and optimized MongoDB databases.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 text-left">
          <div className="flex items-center gap-3 mb-3 text-purple-400 font-display font-extrabold text-lg">
            <Server size={20} />
            <span>Docker & Microservices</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Containerizing backend microservices with Docker, building secure RESTful APIs with JWT RBAC locks, and automated Vercel deployments.
          </p>
        </div>

      </div>

    </section>
  );
}

