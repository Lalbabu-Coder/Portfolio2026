"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2, Building2 } from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  time: string;
  current: boolean;
  type: string;
  bullets: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "athenura",
    role: "Full Stack Engineer",
    company: "Athenura",
    location: "India",
    time: "Oct 2025 – Present",
    current: true,
    type: "Full-Time",
    bullets: [
      "Developed and maintained full-stack modules for internal hackathon management and billing/CRM SaaS platforms using React.js, Node.js, Express.js, and MongoDB.",
      "Built and integrated REST APIs to support core application features and improve backend functionality.",
      "Collaborated with the team to debug issues, review code, and deliver features in an agile development environment.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "RBAC", "Agile"],
  },
  {
    id: "graphura",
    role: "MERN Stack Developer Intern",
    company: "Graphura India Private Limited",
    location: "Gurugram, Haryana (Remote)",
    time: "Aug 2025 – Oct 2025",
    current: false,
    type: "Internship",
    bullets: [
      "Engineered and maintained full-stack modules using React.js, Node.js, Express.js, and MongoDB for internal business applications.",
      "Designed and integrated REST APIs, streamlining backend workflows and improving operational efficiency.",
      "Implemented authentication and Role-Based Access Control (RBAC) systems supporting multiple user roles.",
    ],
    tech: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "RBAC", "REST APIs"],
  },
  {
    id: "infowizz",
    role: "Software Development Intern",
    company: "Infowizz Software Solutions",
    location: "Chandigarh, India",
    time: "Aug 2022 – Oct 2022",
    current: false,
    type: "Internship",
    bullets: [
      "Developed responsive user interfaces using Python, HTML5, CSS3, and JavaScript.",
      "Assisted in debugging and cross-browser compatibility testing.",
    ],
    tech: ["Python", "JavaScript", "HTML5", "CSS3", "UI/UX", "Cross-Browser Testing"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 px-6 sm:px-10 bg-[#14171f] text-white border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
            <span className="text-blue-500 font-extrabold text-sm">/</span>
            <span>EXPERIENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight font-display tracking-tight">
            Work History & Engineering Roles
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Hands-on software development across enterprise SaaS products, hackathon platforms, and scalable MERN microservices.
          </p>
        </div>

        {/* TIMELINE LIST */}
        <div className="space-y-6 max-w-5xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#1a1e28] border border-white/5 hover:border-blue-500/40 transition-all space-y-5"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/5">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-blue-500/10 border border-blue-500/30 text-blue-400">
                        Current
                      </span>
                    )}
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 text-slate-300">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-blue-400 font-mono">
                    <Building2 size={15} />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Calendar size={13} className="text-blue-400" />
                    <span>{exp.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-blue-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Applied Tech Tags */}
              <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-slate-400 mr-1">
                  Technologies:
                </span>
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
