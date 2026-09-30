"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight,
  Code2, 
  Cpu, 
  Server, 
  ShieldCheck,
  MapPin,
  Briefcase,
  GraduationCap,
  Phone,
  Mail,
  Download
} from "lucide-react";

const stats = [
  { value: "1+", label: "Years Experience", sub: "Production Full Stack" },
  { value: "100+", label: "Products Supported", sub: "MultiCard E-Commerce" },
  { value: "3x 🥇", label: "Hackathons & Competitions", sub: "1st Place Winner" },
  { value: "25+", label: "REST APIs Built", sub: "Microservices Architecture" },
];

const pillars = [
  {
    title: "Full-Stack MERN Architecture",
    description: "Hands-on experience in MongoDB, Express.js, React.js, and Node.js. Building responsive frontend interfaces with Next.js and robust backend services.",
    icon: Code2,
  },
  {
    title: "AI & Multi-Agent Orchestration",
    description: "Integrating modern generative AI into full-stack products, including multi-agent orchestration with LangGraph, RAG pipelines, and Qdrant vector database.",
    icon: Cpu,
  },
  {
    title: "REST APIs & Microservices",
    description: "Designing clean, scalable RESTful API endpoints, decoupled microservices architectures, and high-performance server-side data workflows.",
    icon: Server,
  },
  {
    title: "Authentication & RBAC Security",
    description: "Architecting secure authentication & authorization matrices with stateless JWT, Firebase Auth, and granular permissions across multi-tier user roles.",
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-6 sm:px-12 bg-[#171a23] text-white border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER & BIG TITLE */}
        <div className="space-y-4 max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
            <span className="text-white font-extrabold text-sm">/</span>
            <span>ABOUT ME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight tracking-tight">
            I’ve been developing scalable web applications, microservices, and AI agent architectures.
          </h2>

          <p className="text-slate-300/80 text-sm sm:text-base leading-relaxed font-sans pt-2">
            Software Developer with hands-on experience in the <strong className="text-white">MERN stack (MongoDB, Express.js, React.js, Node.js)</strong>, building and deploying scalable, production-ready web applications. Skilled in REST API design, authentication and authorization, Role-Based Access Control (RBAC), and microservices architecture. Additional experience integrating AI capabilities into full-stack products, including multi-agent orchestration with <strong className="text-white">LangGraph</strong> and <strong className="text-white">RAG pipelines</strong> with vector databases.
          </p>
        </div>

        {/* BIG NUMBERS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-white/[0.08]">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-200 font-sans">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 font-sans">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* TWO-COLUMN DETAILS: CREDENTIALS & PILLARS */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: QUICK PROFILE SPECS */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              // PROFILE SPECIFICATIONS
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 font-sans">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <MapPin size={18} className="text-white shrink-0" />
                <span>Bengaluru, India (Open to Remote / Relocation)</span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <Briefcase size={18} className="text-white shrink-0" />
                <span>Full Stack Engineer @ Athenura (Oct 2025 – Present)</span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <GraduationCap size={18} className="text-white shrink-0" />
                <span>B.Tech in CSE — Global Institute of Tech & Mgmt</span>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <Phone size={18} className="text-white shrink-0" />
                <a href="tel:+919113382362" className="hover:text-white transition-colors font-mono">
                  +91-9113382362
                </a>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                <Mail size={18} className="text-white shrink-0" />
                <a href="mailto:lalbabusingh.dev@gmail.com" className="hover:text-white transition-colors font-mono">
                  lalbabusingh.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/10 text-white font-medium text-xs sm:text-sm uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <span>Download Resume</span>
                <Download size={14} />
              </a>
            </div>
          </div>

          {/* RIGHT: CORE CAPABILITIES PILLARS */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              // TECHNICAL CAPABILITIES
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all space-y-2 group"
                  >
                    <div className="p-2.5 rounded-lg bg-white/5 text-white w-fit group-hover:scale-105 transition-transform">
                      <Icon size={18} />
                    </div>
                    <h4 className="text-base font-bold text-white font-display">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
