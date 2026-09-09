"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, Trophy, BookOpen, ShieldCheck, Sparkles } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Gurugram University",
    location: "Gurugram, Haryana",
    time: "2023 – 2026",
    color: "#06b6d4",
    points: [
      "Core focus on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Architectures, and SDLC.",
      "Developed full-stack web applications, microservices, and AI-integrated systems.",
    ],
  },
  {
    degree: "Diploma in Computer Science Engineering",
    institution: "Government Polytechnic, Adampur Mandi",
    location: "Hisar, Haryana",
    time: "2020 – 2023",
    color: "#a855f7",
    points: [
      "Built a strong foundation in core computer science fundamentals, OOP concepts, DBMS, and responsive front-end engineering.",
    ],
  },
];

const achievements = [
  {
    title: "1st Prize — Pitch Tech Competition",
    tag: "National Competition",
    description: "Awarded First Prize for innovative technical architecture, microservices design, and rapid solution prototyping.",
    badge: "Gold Medalist",
  },
  {
    title: "1st Prize — Project Showcase Competition",
    tag: "Engineering Showcase",
    description: "Recognized for best product execution, flawless live engineering demonstration, and high-performance MERN architecture.",
    badge: "1st Place Winner",
  },
];

const certifications = [
  { name: "Certified in MERN Stack Development", issuer: "Professional Certification", icon: "⚛️" },
  { name: "Certified in JavaScript Programming", issuer: "Advanced Programming", icon: "📜" },
  { name: "Certified in Web Development", issuer: "Full-Stack Web Architecture", icon: "🌐" },
];

export default function EducationHonors() {
  return (
    <section
      id="education"
      className="relative py-28 sm:py-36 px-4 sm:px-6 md:px-16 overflow-hidden bg-transparent text-white w-full max-w-full border-t border-white/10"
    >
      {/* SECTION HEADER */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider mb-4"
        >
          <GraduationCap size={14} />
          <span>Academic & Credentials</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-display tracking-tight"
        >
          Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400">Achievements</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base font-sans"
        >
          Formal computer science foundations, competitive engineering awards, and verified technical credentials.
        </motion.p>
      </div>

      {/* TWO-COLUMN GRID */}
      <div className="mt-14 sm:mt-20 max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* LEFT COLUMN: ACADEMIC DEGREES */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2.5 text-cyan-400 font-display font-bold text-lg">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <BookOpen size={18} />
            </div>
            <span>Academic Background</span>
          </div>

          <div className="space-y-5">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 sm:p-7 rounded-3xl bg-slate-950/70 backdrop-blur-xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    {edu.time}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{edu.location}</span>
                </div>

                <h4 className="text-lg font-bold text-white font-display mt-2">
                  {edu.degree}
                </h4>
                <p className="text-xs text-slate-300 font-mono mt-0.5">
                  {edu.institution}
                </p>

                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                  {edu.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 shrink-0">▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: AWARDS & CERTIFICATIONS */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-2.5 text-purple-400 font-display font-bold text-lg">
            <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <Trophy size={18} />
            </div>
            <span>Honors & Certifications</span>
          </div>

          {/* Awards */}
          <div className="space-y-4">
            {achievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-3xl bg-slate-950/70 backdrop-blur-xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 font-bold">
                    {ach.tag}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                    🥇 {ach.badge}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white font-display">
                  {ach.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {ach.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications Card */}
          <div className="p-6 rounded-3xl bg-slate-950/70 backdrop-blur-xl border border-white/10 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
              Verified Technical Credentials
            </div>
            <div className="space-y-2.5">
              {certifications.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/15 transition-all text-xs text-slate-200"
                >
                  <span className="text-base">{c.icon}</span>
                  <div className="flex-1">
                    <div className="font-bold text-white font-sans">{c.name}</div>
                    <div className="text-[10px] text-slate-400 font-mono">{c.issuer}</div>
                  </div>
                  <ShieldCheck size={16} className="text-emerald-400" />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
