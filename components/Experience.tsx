"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2, Sparkles, Building2, Terminal, Code2 } from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  time: string;
  current: boolean;
  type: string;
  summary: string;
  bullets: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "athenura",
    role: "Full Stack Developer",
    company: "Athenura",
    location: "Bengaluru, India",
    time: "Feb 2026 – Sep 2026",
    current: true,
    type: "Full-Time",
    summary: "Spearheaded core full-stack platforms, multi-tenant SaaS architecture, and REST API microservices for hackathons and client billing systems.",
    bullets: [
      "Developed and maintained full-stack modules for internal hackathon management and billing/CRM SaaS platforms using React.js, Node.js, Express.js, and MongoDB.",
      "Built and integrated high-throughput REST APIs to support core application features and improve backend functionality.",
      "Collaborated with cross-functional engineering teams to debug issues, perform code reviews, and deliver features in fast-paced agile sprints.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC", "REST APIs", "Agile"],
  },
  {
    id: "graphura",
    role: "MERN Stack Developer Intern",
    company: "Graphura India Private Limited",
    location: "Delhi, India",
    time: "Dec 2025 – Feb 2026",
    current: false,
    type: "Internship",
    summary: "Engineered scalable business applications, automated internal workflows, and instituted secure role-based access control tiers.",
    bullets: [
      "Engineered and maintained full-stack modules using React.js, Node.js, Express.js, and MongoDB for internal business applications.",
      "Designed and integrated REST APIs, streamlining backend workflows and improving operational efficiency.",
      "Implemented Authentication and Role-Based Access Control (RBAC) systems supporting multiple user roles with secure JWT authorization.",
    ],
    tech: ["MERN Stack", "JWT Auth", "RBAC", "Express.js", "MongoDB Atlas", "REST APIs"],
  },
  {
    id: "infowizz",
    role: "Software Development Intern",
    company: "Infowizz Software Solutions",
    location: "Chandigarh, India",
    time: "Aug 2022 – Sep 2022",
    current: false,
    type: "Internship",
    summary: "Constructed responsive web interfaces and assisted in backend testing and cross-browser performance optimizations.",
    bullets: [
      "Developed responsive user interfaces using Python, HTML5, CSS3, and JavaScript.",
      "Assisted in debugging application issues and performed cross-browser compatibility and responsiveness testing.",
    ],
    tech: ["Python", "JavaScript", "HTML5/CSS3", "UI/UX", "Debugging"],
  },
];

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState<string>("athenura");

  const active = experiences.find((e) => e.id === selectedExp) || experiences[0];

  return (
    <section
      id="experience"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-16 overflow-hidden bg-transparent text-white w-full max-w-full border-t border-white/10"
    >
      {/* SECTION HEADER */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono uppercase tracking-wider mb-4"
        >
          <Briefcase size={14} />
          <span>Professional Trajectory</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-display tracking-tight"
        >
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Milestones</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base font-sans"
        >
          Hands-on software development across enterprise SaaS products, hackathon infrastructure, and scalable MERN microservices.
        </motion.p>
      </div>

      {/* 3D INTERACTIVE TIMELINE PATH */}
      <div className="mt-14 sm:mt-20 max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* LEFT COLUMN: MILESTONE SELECTION BEACONS */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">
            // CAREER TIMELINE NODES
          </div>

          {experiences.map((exp, idx) => {
            const isSelected = selectedExp === exp.id;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedExp(exp.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? "bg-slate-900/90 border-orange-500/50 shadow-[0_0_30px_rgba(249,115,22,0.2)]"
                    : "bg-slate-950/50 border-white/10 hover:border-white/20 hover:bg-slate-900/40"
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        exp.current
                          ? "bg-emerald-400 animate-pulse"
                          : isSelected
                          ? "bg-orange-400"
                          : "bg-slate-500"
                      }`}
                    />
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {exp.time}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white font-display group-hover:text-orange-400 transition-colors">
                    {exp.company}
                  </h4>
                  <p className="text-xs text-cyan-400 font-mono">{exp.role}</p>
                </div>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    isSelected
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-white/5 text-slate-400 group-hover:text-white"
                  }`}
                >
                  0{idx + 1}
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: ACTIVE MILESTONE DEEP-DIVE HUD */}
        <div className="lg:col-span-8">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-9 rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] space-y-6"
          >
            {/* Header info */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold mb-2">
                  <Building2 size={13} />
                  <span>{active.company}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                  {active.role}
                </h3>
              </div>

              <div className="space-y-1 text-right font-mono text-xs text-slate-400">
                <div className="flex items-center justify-end gap-1.5 text-orange-400 font-semibold">
                  <Calendar size={13} />
                  <span>{active.time}</span>
                </div>
                <div className="flex items-center justify-end gap-1.5 text-slate-400">
                  <MapPin size={13} />
                  <span>{active.location}</span>
                </div>
              </div>
            </div>

            {/* Role Summary */}
            <p className="text-sm sm:text-base text-slate-200 font-sans leading-relaxed">
              {active.summary}
            </p>

            {/* Key Deliverables */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Key Engineering Deliverables & Impact
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-sans">
                {active.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-orange-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack Pills */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Applied Technologies
              </div>
              <div className="flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
