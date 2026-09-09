"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Database, Server, Cpu, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

interface PipelineStep {
  step: string;
  title: string;
  icon: any;
  color: string;
  role: string;
  description: string;
  specs: string[];
}

const pipelineSteps: PipelineStep[] = [
  {
    step: "01",
    title: "Client & Presentation",
    icon: Cpu,
    color: "#06b6d4",
    role: "Next.js 15 & React 19 Frontend",
    description: "Server-side rendering, instant client hydration, optimistic UI updates, and WebSocket subscriptions.",
    specs: ["App Router Architecture", "Server Actions", "Framer Motion & Three.js", "Tailwind CSS v4"],
  },
  {
    step: "02",
    title: "Gateway & Throttling",
    icon: ShieldCheck,
    color: "#38bdf8",
    role: "API Gateway & Security Proxy",
    description: "SSL termination, CORS policy enforcement, IP-based rate limiting, and request sanitization.",
    specs: ["Reverse Proxy Routing", "DDoS Protection", "Payload Validation", "Token Ingestion"],
  },
  {
    step: "03",
    title: "Authentication & RBAC",
    icon: ShieldCheck,
    color: "#f59e0b",
    role: "JWT Authorization Matrix",
    description: "Stateless JSON Web Token verification with granular permissions for Admins, Team Leads, and Employees.",
    specs: ["Bcrypt Password Hashing", "Role Permission Trees", "Session Invalidation", "Secure HTTP-Only Cookies"],
  },
  {
    step: "04",
    title: "Services & AI Swarms",
    icon: Zap,
    color: "#f97316",
    role: "Node.js / Express & LangGraph",
    description: "High-throughput asynchronous controllers orchestrating REST endpoints and autonomous multi-agent swarms.",
    specs: ["MVC Controller Pattern", "LangGraph State Graphs", "Groq Llama 3.3 70B", "Gemini 2.5 Flash Tools"],
  },
  {
    step: "05",
    title: "Persistence & Vectors",
    icon: Database,
    color: "#10b981",
    role: "MongoDB Atlas & Qdrant Vector DB",
    description: "Relational document modeling, schema validation, indexing strategies, and semantic vector embeddings.",
    specs: ["Mongoose Schema Middleware", "Qdrant HNSW Indexing", "Redis Cache Invalidation", "Multi-Tenant Isolation"],
  },
];

export default function ArchitectureSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const active = pipelineSteps[activeStepIndex];
  const IconComponent = active.icon;

  return (
    <section
      id="architecture"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-16 overflow-hidden bg-transparent text-white w-full max-w-full border-t border-white/10"
    >
      {/* Heading */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4"
        >
          <Layers size={14} />
          <span>Systems Architecture</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-display tracking-tight"
        >
          Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">System Design</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base font-sans"
        >
          Interactive end-to-end data pipeline powering production MERN platforms, multi-agent AI orchestrations, and secure RBAC infrastructures.
        </motion.p>
      </div>

      {/* PIPELINE CONTROLLER HUD */}
      <div className="mt-14 sm:mt-18 max-w-6xl mx-auto relative z-10 space-y-8">
        
        {/* Step Buttons Horizontal Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {pipelineSteps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[90px] ${
                  isSelected
                    ? "bg-slate-900/90 border-cyan-500/60 shadow-[0_0_25px_rgba(6,182,212,0.25)]"
                    : "bg-slate-950/50 border-white/10 hover:border-white/20 hover:bg-slate-900/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    STEP {step.step}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: isSelected ? step.color : "#475569" }}
                  />
                </div>
                <div className="text-xs font-bold text-white font-display truncate mt-2">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Telemetry Display */}
        <motion.div
          key={active.step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="p-6 sm:p-10 rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] grid md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="p-3 rounded-2xl border"
                style={{
                  backgroundColor: `${active.color}15`,
                  borderColor: `${active.color}40`,
                  color: active.color,
                }}
              >
                <IconComponent size={24} />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase text-slate-400">
                  STAGE {active.step} SPECIFICATION
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                  {active.role}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
              {active.description}
            </p>
          </div>

          <div className="md:col-span-5 bg-black/50 border border-white/10 rounded-2xl p-5 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Technical Capabilities
            </div>
            <div className="space-y-2">
              {active.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300 font-sans">
                  <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
