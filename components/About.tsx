"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Layers, 
  Rocket, 
  ShieldCheck, 
  Server,
  Zap
} from "lucide-react";

const stats = [
  { label: "Production Platforms", value: "8+", icon: Rocket, color: "#f97316" },
  { label: "REST APIs Engineered", value: "25+", icon: Server, color: "#06b6d4" },
  { label: "MERN Stack Mastery", value: "100%", icon: Code2, color: "#10b981" },
  { label: "Competitions Won", value: "2x 🥇", icon: Sparkles, color: "#a855f7" },
];

const pillars = [
  {
    title: "Full-Stack Web Architecture",
    description: "Specialized in React.js 19, Next.js 15 App Router, Node.js, Express.js MVC controllers, and optimized MongoDB Atlas databases.",
    icon: Code2,
    color: "#06b6d4",
  },
  {
    title: "Autonomous AI & Agent Swarms",
    description: "Orchestrating multi-agent state graphs using LangGraph, zero-shot structured outputs, RAG retrieval pipelines, and Qdrant vector database.",
    icon: Cpu,
    color: "#f97316",
  },
  {
    title: "Microservices & Cloud Security",
    description: "Designing decoupled microservices, stateless JWT authentication, Role-Based Access Control (RBAC), and Docker container deployments.",
    icon: ShieldCheck,
    color: "#a855f7",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-16 overflow-hidden bg-transparent text-white w-full max-w-full border-t border-white/10"
    >
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-wider mb-4"
        >
          <Sparkles size={14} />
          <span>Core Profile & Identity</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-display tracking-tight"
        >
          Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">Scalable Systems</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base font-sans"
        >
          Software Engineer specializing in full-stack MERN engineering, autonomous AI workflows, and high-throughput backend infrastructure.
        </motion.p>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="mt-14 sm:mt-20 max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* LEFT COLUMN: HOLOGRAPHIC DEVELOPER PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Main Glass HUD Card */}
          <div className="p-7 sm:p-8 rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] space-y-6">
            
            {/* Status Pill & Tag */}
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>AVAILABLE FOR HIRE</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">B.TECH CSE (2026)</span>
            </div>

            {/* Profile Title */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                Lalbabu Singh
              </h3>
              <p className="text-sm font-semibold text-orange-400 font-mono mt-1">
                Software Engineer &middot; Full Stack Developer (MERN)
              </p>
            </div>

            {/* Core Summary */}
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              Software Engineer with hands-on experience in the MERN stack (MongoDB, Express.js, React.js, Node.js), building and deploying scalable, production-ready web applications, microservices, RESTful APIs, and autonomous AI systems.
            </p>

            {/* Telemetry Specs */}
            <div className="space-y-3 pt-5 border-t border-white/10 text-xs text-slate-300 font-sans">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-orange-500/10 text-orange-400">
                  <MapPin size={15} />
                </div>
                <span>Bengaluru, India &middot; Open to Relocation / Remote</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Briefcase size={15} />
                </div>
                <span>Full Stack Developer @ Athenura</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400">
                  <GraduationCap size={15} />
                </div>
                <span>B.Tech CSE &middot; Gurugram University</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 backdrop-blur-xl text-center group hover:border-orange-500/30 transition-all"
              >
                <div className="text-2xl font-black text-white font-display group-hover:text-orange-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-1 font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: CORE TECHNICAL PILLARS */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
            // CORE TECHNICAL PILLARS
          </div>

          <div className="space-y-5">
            {pillars.map((pillar, i) => {
              const IconComp = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-6 sm:p-7 rounded-3xl bg-slate-950/70 backdrop-blur-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.4)] group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="p-3.5 rounded-2xl border shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${pillar.color}15`,
                        borderColor: `${pillar.color}40`,
                        color: pillar.color,
                      }}
                    >
                      <IconComp size={22} />
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-lg font-bold text-white font-display group-hover:text-orange-400 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Highlight Strip */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-orange-500/10 via-amber-500/5 to-cyan-500/10 border border-white/10 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-white font-display">
                Ready for scalable production deployments
              </div>
              <div className="text-xs text-slate-400 font-sans mt-0.5">
                Experienced with full-lifecycle MERN, AI integration & CI/CD
              </div>
            </div>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] cursor-pointer"
            >
              Discuss a Project →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
