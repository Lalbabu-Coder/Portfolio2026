"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skills3DSphere from "./Skills3DSphere";
import {
  Sparkles,
  Cpu,
  Code2,
  Database,
  ShieldCheck,
  Server,
  Globe,
  Bot,
  Workflow,
  Zap,
  Boxes,
  Grid,
  Search,
  X,
  Layers,
  Terminal,
  CheckCircle2,
  SlidersHorizontal,
  LayoutGrid
} from "lucide-react";

interface SkillCard {
  name: string;
  category: "ai" | "frontend" | "backend" | "devops";
  badge: "Mastery" | "Expert" | "Specialized" | "Advanced";
  level: number; // 0 to 100
  description: string;
  iconPath?: string;
  lucideIcon?: any;
  tags: string[];
}

const allSkills: SkillCard[] = [
  // AI & Autonomous Agents
  {
    name: "LangGraph & AI Agents",
    category: "ai",
    badge: "Mastery",
    level: 95,
    description: "Multi-agent coordination, LangGraph state graphs, sub-agent delegation & execution loops.",
    lucideIcon: Cpu,
    tags: ["LangGraph", "Multi-Agent", "State Graphs"]
  },
  {
    name: "Groq & Gemini & OpenAI",
    category: "ai",
    badge: "Expert",
    level: 94,
    description: "LLM integration with Groq Llama 3.3 70B, Gemini 2.5 Flash, DeepSeek & OpenAI API.",
    lucideIcon: Bot,
    tags: ["Groq", "Gemini 2.5", "OpenAI", "DeepSeek"]
  },
  {
    name: "RAG & Qdrant Vector DB",
    category: "ai",
    badge: "Advanced",
    level: 92,
    description: "Semantic search pipelines, vector embeddings, chunking strategies & Qdrant vector database.",
    lucideIcon: Database,
    tags: ["Qdrant", "RAG Pipeline", "Vector DB"]
  },
  {
    name: "LangChain & Python",
    category: "ai",
    badge: "Advanced",
    level: 90,
    description: "Agentic workflows, context retrieval chains, Python scripting & async integrations.",
    iconPath: "/python.svg",
    tags: ["LangChain", "Python", "Tool Calling"]
  },

  // Frontend & UI Engineering
  {
    name: "React.js & Next.js",
    category: "frontend",
    badge: "Mastery",
    level: 96,
    description: "Component architecture, Next.js SSR/SSG, Server Actions, custom hooks & virtual DOM optimization.",
    iconPath: "/react.svg",
    tags: ["React.js", "Next.js", "Custom Hooks"]
  },
  {
    name: "JavaScript (ES6+) & TypeScript",
    category: "frontend",
    badge: "Mastery",
    level: 98,
    description: "Async/Await, Promises, Closures, DOM manipulation, TypeScript interfaces & type safety.",
    iconPath: "/js.svg",
    tags: ["JavaScript (ES6+)", "TypeScript", "Async"]
  },
  {
    name: "Redux Toolkit",
    category: "frontend",
    badge: "Advanced",
    level: 90,
    description: "Global state management, RTK Query caching & centralized store architecture.",
    iconPath: "/redux.svg",
    tags: ["RTK Query", "Global Store", "State Slices"]
  },
  {
    name: "Tailwind CSS & Responsive UI",
    category: "frontend",
    badge: "Mastery",
    level: 96,
    description: "Responsive layouts, HTML5/CSS3 semantic designs, dark mode themes & animations.",
    iconPath: "/tailwind.svg",
    tags: ["Tailwind CSS", "HTML5/CSS3", "Responsive"]
  },

  // Backend & APIs
  {
    name: "Node.js & Express.js",
    category: "backend",
    badge: "Mastery",
    level: 95,
    description: "High-throughput asynchronous servers, modular MVC controllers & RESTful API architecture.",
    iconPath: "/node.js.svg",
    tags: ["Node.js", "Express.js", "MVC Pattern"]
  },
  {
    name: "JWT Auth & RBAC Permissions",
    category: "backend",
    badge: "Expert",
    level: 94,
    description: "Stateless JWT authentication, bcrypt password hashing, and granular Role-Based Access Control.",
    lucideIcon: ShieldCheck,
    tags: ["JWT Auth", "RBAC", "Authorization"]
  },
  {
    name: "REST API & Microservices",
    category: "backend",
    badge: "Expert",
    level: 92,
    description: "Microservices architecture, API gateways, WebSockets, rate limiting, and Postman API testing.",
    lucideIcon: Server,
    tags: ["REST APIs", "Microservices", "WebSockets"]
  },

  // Databases & Cloud / DevOps
  {
    name: "MongoDB & Mongoose & Redis",
    category: "devops",
    badge: "Expert",
    level: 92,
    description: "MongoDB Atlas, Mongoose schemas, indexing strategies, aggregation pipelines, MySQL & Redis caching.",
    iconPath: "/mongo.svg",
    tags: ["MongoDB Atlas", "Mongoose", "MySQL", "Redis"]
  },
  {
    name: "AWS & Microsoft Azure Cloud",
    category: "devops",
    badge: "Advanced",
    level: 88,
    description: "Cloud infrastructure deployment using AWS (EC2, S3), Microsoft Azure, Vercel & Render.",
    lucideIcon: Globe,
    tags: ["AWS EC2/S3", "Azure", "Cloud"]
  },
  {
    name: "Docker & CI/CD Pipelines",
    category: "devops",
    badge: "Advanced",
    level: 90,
    description: "Docker containerization, multi-stage images, Git branching, GitHub Actions & CI/CD workflows.",
    lucideIcon: Boxes,
    tags: ["Docker", "CI/CD", "Git/GitHub"]
  },
  {
    name: "Data Structures & System Design",
    category: "devops",
    badge: "Expert",
    level: 92,
    description: "DSA problem solving, OOPs principles, SDLC lifecycle, Agile/Scrum & scalable system design.",
    lucideIcon: Code2,
    tags: ["DSA", "OOP", "SDLC", "System Design"]
  }
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "ai", label: "AI & Autonomous Agents" },
  { id: "frontend", label: "Frontend & UI" },
  { id: "backend", label: "Backend Architecture" },
  { id: "devops", label: "Database & DevOps" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "tags" | "sphere">("grid");

  const filteredSkills = useMemo(() => {
    return allSkills.filter((skill) => {
      const matchesCategory = activeCategory === "all" || skill.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        skill.name.toLowerCase().includes(query) ||
        skill.description.toLowerCase().includes(query) ||
        skill.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-16 overflow-hidden bg-[#070709] text-white w-full max-w-full border-t border-white/10"
    >
      {/* Background Ambient Glows */}
      <div className="absolute right-[-10%] top-[10%] w-[45vw] max-w-[500px] h-[45vw] max-h-[500px] bg-orange-600/15 blur-[170px] rounded-full pointer-events-none z-0" />
      <div className="absolute left-[-10%] bottom-[10%] w-[45vw] max-w-[500px] h-[45vw] max-h-[500px] bg-purple-900/20 blur-[170px] rounded-full pointer-events-none z-0" />

      {/* CONTINUOUS INFINITE TICKER MARQUEE */}
      <div className="relative z-10 w-full overflow-hidden mb-16 py-3 border-y border-white/10 bg-slate-950/40 backdrop-blur-md">
        <div className="flex w-max animate-marquee space-x-8">
          {[...allSkills, ...allSkills].map((skill, index) => {
            const IconComp = skill.lucideIcon;
            return (
              <div
                key={index}
                className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/40 transition-colors"
              >
                {skill.iconPath ? (
                  <img src={skill.iconPath} alt={skill.name} className="w-4 h-4 object-contain" />
                ) : IconComp ? (
                  <IconComp className="w-4 h-4 text-orange-400" />
                ) : (
                  <Zap className="w-4 h-4 text-orange-400" />
                )}
                <span className="text-xs font-semibold text-slate-200 whitespace-nowrap">{skill.name}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-orange-500/15 text-orange-400 font-bold">
                  {skill.level}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION HEADER */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4 font-mono"
        >
          <Sparkles size={14} />
          <span>Core Capabilities & Tech Stack</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-display tracking-tight"
        >
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">Skills & Mastery</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base font-sans leading-relaxed"
        >
          Production-proven engineering stack built for high-performance web applications, autonomous AI agent pipelines, and scalable microservices.
        </motion.p>
      </div>

      {/* CONTROLS BAR: CATEGORIES & VIEW MODES */}
      <div className="relative z-10 mt-10 sm:mt-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 p-1.5 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-xl w-full md:w-auto">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold font-sans transition-all duration-300 cursor-pointer ${
                  isActive ? "text-white font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBadge"
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* View Mode & Search */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          
          {/* View Mode Switcher */}
          <div className="flex items-center p-1 rounded-xl bg-slate-950/80 border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setViewMode("grid")}
              title="Grid View"
              className={`p-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-orange-500 text-white shadow-[0_0_12px_rgba(249,115,22,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setViewMode("tags")}
              title="Compact Tags"
              className={`p-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                viewMode === "tags"
                  ? "bg-orange-500 text-white shadow-[0_0_12px_rgba(249,115,22,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setViewMode("sphere")}
              title="3D Tag Sphere"
              className={`p-2 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                viewMode === "sphere"
                  ? "bg-orange-500 text-white shadow-[0_0_12px_rgba(249,115,22,0.4)]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Globe size={16} />
            </button>
          </div>

          {/* Search Box */}
          {viewMode !== "sphere" && (
            <div className="relative flex-1 md:w-60">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-orange-500/50 transition-all font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X size={13} />
                </button>
              )}
            </div>
          )}

        </div>

      </div>

      {/* MAIN VIEW CONTENT AREA */}
      <div className="relative z-10 mt-8 sm:mt-10 max-w-7xl mx-auto">
        {viewMode === "sphere" ? (
          /* 3D SPHERE DISPLAY CONTAINER */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-6 sm:p-10 rounded-3xl bg-slate-950/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] text-center relative overflow-hidden"
          >
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
              <span>Interactive 3D Tech Sphere • Drag or touch to rotate</span>
            </div>
            <Skills3DSphere />
          </motion.div>
        ) : viewMode === "tags" ? (
          /* COMPACT TAGS VIEW */
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/70 backdrop-blur-xl border border-white/10 flex flex-wrap justify-center gap-3">
            {filteredSkills.map((skill) => {
              const IconComp = skill.lucideIcon;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/10 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all cursor-default"
                >
                  {skill.iconPath ? (
                    <img src={skill.iconPath} alt={skill.name} className="w-5 h-5 object-contain" />
                  ) : IconComp ? (
                    <IconComp className="w-5 h-5 text-orange-400" />
                  ) : (
                    <Zap className="w-5 h-5 text-orange-400" />
                  )}
                  <span className="text-sm font-semibold text-white">{skill.name}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-orange-400 font-bold">
                    {skill.badge}
                  </span>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* SLEEK DETAILED CARDS GRID */
          <>
            {filteredSkills.length === 0 ? (
              <div className="p-12 text-center text-slate-400 font-sans rounded-3xl bg-slate-950/40 border border-white/10">
                <p className="text-base font-semibold">No skills matched "{searchQuery}"</p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                  className="mt-3 text-xs text-orange-400 underline cursor-pointer"
                >
                  Clear filters & show all skills
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <AnimatePresence mode="popLayout">
                  {filteredSkills.map((skill, index) => {
                    const IconComp = skill.lucideIcon;
                    return (
                      <motion.div
                        layout
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: index * 0.02 }}
                        className="
                          p-6 rounded-3xl
                          bg-slate-950/70 backdrop-blur-xl
                          border border-white/10
                          shadow-[0_4px_24px_rgba(0,0,0,0.4)]
                          hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.18)]
                          transition-all duration-300 group flex flex-col justify-between
                        "
                      >
                        <div>
                          {/* Top Row: Icon & Badge */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-colors">
                              {skill.iconPath ? (
                                <img
                                  src={skill.iconPath}
                                  alt={skill.name}
                                  className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                                />
                              ) : IconComp ? (
                                <IconComp className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                              ) : (
                                <Cpu className="w-6 h-6 text-orange-400" />
                              )}
                            </div>

                            <span className="text-[10px] font-mono font-extrabold tracking-wider px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 uppercase">
                              {skill.badge}
                            </span>
                          </div>

                          {/* Skill Title */}
                          <h3 className="text-base font-bold text-white font-display group-hover:text-orange-400 transition-colors">
                            {skill.name}
                          </h3>

                          {/* Description */}
                          <p className="mt-2 text-xs text-slate-300 font-sans leading-relaxed">
                            {skill.description}
                          </p>

                          {/* Level Progress Bar */}
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                              <span>Proficiency</span>
                              <span className="text-orange-400 font-bold">{skill.level}%</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Feature Tags */}
                        <div className="mt-5 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                          {skill.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-slate-400 group-hover:text-slate-200 transition-colors"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </>
        )}
      </div>

      {/* CORE ARCHITECTURE PANELS (BOTTOM HIGHLIGHT) */}
      <div className="relative z-10 mt-16 max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        
        <div className="p-6 rounded-3xl bg-slate-950/60 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-all text-left group">
          <div className="flex items-center gap-3 mb-3 text-orange-400 font-display font-extrabold text-lg">
            <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20 group-hover:scale-110 transition-transform">
              <Bot size={22} />
            </div>
            <span>AI & Autonomous Agents</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Specialized in orchestrating LangChain & OpenAI agent pipelines with custom tools, multi-agent swarms, zero-shot structured outputs, and RAG vector store queries.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-950/60 backdrop-blur-xl border border-white/10 hover:border-cyan-500/30 transition-all text-left group">
          <div className="flex items-center gap-3 mb-3 text-cyan-400 font-display font-extrabold text-lg">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 group-hover:scale-110 transition-transform">
              <Code2 size={22} />
            </div>
            <span>Full-Stack Next.js 15 & React 19</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Building end-to-end web applications with Next.js 15 App Router, React 19, Node.js controllers, TypeScript strict typing, and optimized MongoDB schemas.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-slate-950/60 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 transition-all text-left group">
          <div className="flex items-center gap-3 mb-3 text-purple-400 font-display font-extrabold text-lg">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 group-hover:scale-110 transition-transform">
              <Server size={22} />
            </div>
            <span>Microservices & Cloud DevOps</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            Deploying resilient backends with Docker containers, implementing JWT RBAC access control, optimizing serverless functions, and managing GitHub CI/CD pipelines.
          </p>
        </div>

      </div>

    </section>
  );
}
