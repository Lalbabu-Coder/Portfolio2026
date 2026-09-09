"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Layers, Cpu, CheckCircle2, Server, Database, Shield, Zap } from "lucide-react";

export interface DetailedProject {
  title: string;
  category: string;
  tagline: string;
  image: string;
  description: string;
  problem: string;
  solution: string;
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    auth: string;
    infra: string;
  };
  features: string[];
  tech: string[];
  link: string;
  github: string;
  highlightMetric?: string;
}

interface ProjectDetailModalProps {
  project: DetailedProject | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[600] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#070b18]/95 border border-white/15 rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden z-10 my-auto text-white flex flex-col max-h-[90vh]"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-orange-500/15 text-orange-400 border border-orange-500/30">
                {project.category}
              </span>
              <span className="hidden sm:inline text-xs font-mono text-slate-400">
                // SYSTEM_SPEC_ID: {project.title.replace(/\s+/g, "_").toUpperCase()}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-all cursor-pointer border border-white/10"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Hero Banner Grid */}
            <div className="grid lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7 space-y-3">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-display tracking-tight text-white">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base font-medium text-cyan-400 font-mono">
                  {project.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-1">
                  {project.description}
                </p>

                {/* Metric Callout if present */}
                {project.highlightMetric && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold mt-2">
                    <Zap size={14} />
                    <span>{project.highlightMetric}</span>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 group aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Problem & Solution Dual Columns */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase mb-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  <span>The Engineering Challenge</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 backdrop-blur-md">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-bold uppercase mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>The Implemented Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Architecture Matrix */}
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold uppercase text-orange-400">
                <Layers size={16} />
                <span>End-to-End System Architecture</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Frontend</div>
                  <div className="text-xs font-bold text-white mt-1 font-sans">{project.architecture.frontend}</div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Backend</div>
                  <div className="text-xs font-bold text-cyan-400 mt-1 font-sans">{project.architecture.backend}</div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Database / Storage</div>
                  <div className="text-xs font-bold text-amber-400 mt-1 font-sans">{project.architecture.database}</div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Security & Auth</div>
                  <div className="text-xs font-bold text-purple-400 mt-1 font-sans">{project.architecture.auth}</div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">DevOps / Cloud</div>
                  <div className="text-xs font-bold text-emerald-400 mt-1 font-sans">{project.architecture.infra}</div>
                </div>
              </div>
            </div>

            {/* Key Features Bullet List */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Key Engineering Highlights & Features
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-white/5 text-xs sm:text-sm text-slate-300 font-sans">
                    <CheckCircle2 size={16} className="text-orange-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Technologies & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-white/10 bg-slate-950/80 backdrop-blur-md">
            <span className="text-xs font-mono text-slate-400">
              Verified Production Architecture
            </span>

            <div className="flex items-center gap-3">
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 transition shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center gap-1.5 cursor-pointer"
                >
                  <ExternalLink size={14} />
                  <span>Launch Live Platform</span>
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition border border-white/10 flex items-center gap-1.5 cursor-pointer"
              >
                <Github size={14} />
                <span>View Source Repository</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
