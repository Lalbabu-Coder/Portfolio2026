"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Database, Server, Cpu, Zap, CheckCircle2 } from "lucide-react";

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
    color: "#2563eb",
    role: "Next.js 15 & React 19 Frontend",
    description: "Server-side rendering, instant client hydration, optimistic UI updates, and WebSocket subscriptions.",
    specs: ["App Router Architecture", "Server Components", "Tailwind CSS Layouts", "Client State Management"],
  },
  {
    step: "02",
    title: "Gateway & Security",
    icon: ShieldCheck,
    color: "#3b82f6",
    role: "API Gateway & Security Proxy",
    description: "SSL termination, CORS policy enforcement, IP-based rate limiting, and request sanitization.",
    specs: ["Reverse Proxy Routing", "Rate Limiting", "Payload Validation", "Token Ingestion"],
  },
  {
    step: "03",
    title: "Authentication & RBAC",
    icon: ShieldCheck,
    color: "#60a5fa",
    role: "JWT Authorization Matrix",
    description: "Stateless JSON Web Token verification with granular permissions for Admins, Team Leads, and Employees.",
    specs: ["Bcrypt Password Hashing", "Role Permission Trees", "Session Invalidation", "Secure HTTP Cookies"],
  },
  {
    step: "04",
    title: "Services & AI Swarms",
    icon: Zap,
    color: "#3b82f6",
    role: "Node.js / Express & LangGraph",
    description: "High-throughput asynchronous controllers orchestrating REST endpoints and autonomous multi-agent swarms.",
    specs: ["MVC Controller Pattern", "LangGraph State Graphs", "Groq Llama 3.3 70B", "Gemini 2.5 Flash Tools"],
  },
  {
    step: "05",
    title: "Persistence & Vectors",
    icon: Database,
    color: "#2563eb",
    role: "MongoDB Atlas & Qdrant Vector DB",
    description: "Relational document modeling, schema validation, indexing strategies, and semantic vector embeddings.",
    specs: ["Mongoose Schema Middleware", "Qdrant HNSW Indexing", "Redis Cache Invalidation", "Multi-Tenant Collections"],
  },
];

export default function ArchitectureSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const active = pipelineSteps[activeStepIndex];
  const IconComponent = active.icon;

  return (
    <section
      id="architecture"
      className="relative py-24 sm:py-32 px-6 sm:px-10 bg-[#14171f] text-white border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Heading */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
            <span className="text-blue-500 font-extrabold text-sm">/</span>
            <span>SYSTEM DESIGN</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight font-display tracking-tight">
            Scalable System Architecture
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-sans">
            End-to-end data pipeline powering production MERN platforms, multi-agent AI orchestrations, and secure RBAC infrastructures.
          </p>
        </div>

        {/* PIPELINE CONTROLLER */}
        <div className="space-y-6 max-w-5xl">
          {/* Step Buttons Horizontal Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {pipelineSteps.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[85px] ${
                    isSelected
                      ? "bg-[#1a1e28] border-blue-500 text-white shadow-md shadow-blue-500/10"
                      : "bg-[#1a1e28]/50 border-white/5 text-slate-400 hover:text-white hover:border-white/10"
                  }`}
                >
                  <span className="text-[11px] font-mono font-bold">
                    STEP {step.step}
                  </span>
                  <div className="text-xs font-bold font-display truncate mt-1">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep Dive Display */}
          <motion.div
            key={active.step}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-2xl bg-[#1a1e28] border border-white/5 grid md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-7 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                  <IconComponent size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold">
                    STAGE {active.step} SPECIFICATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {active.role}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed pt-1">
                {active.description}
              </p>
            </div>

            <div className="md:col-span-5 bg-[#14171f] border border-white/5 rounded-xl p-5 space-y-2.5">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Technical Highlights
              </div>
              <div className="space-y-2">
                {active.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-sans">
                    <CheckCircle2 size={13} className="text-blue-500 shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
