"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy, BookOpen, ShieldCheck } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Global Institute of Technology and Management, Farrukhnagar",
    location: "Gurugram, Haryana",
    points: [
      "Core focus on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, and Web Application Architecture.",
      "Engineered end-to-end full-stack web platforms, microservices, and AI-integrated systems.",
    ],
  },
  {
    degree: "Diploma in Computer Science Engineering",
    institution: "Government Polytechnic, Adampur Mandi",
    location: "Hisar, Haryana",
    points: [
      "Solid foundation in computer science fundamentals, programming logic, relational databases, and responsive UI engineering.",
    ],
  },
];

const achievements = [
  {
    title: "First Prize – Hackathon, College Level",
    badge: "1st Place Winner",
    description: "Ranked 1st among all participating teams in the college-level hackathon for developing an end-to-end technical solution.",
  },
  {
    title: "First Prize – Project Showcase Competition",
    badge: "Top Position",
    description: "Awarded top position for exemplary project presentation, architecture design, and live product execution.",
  },
  {
    title: "First Prize – Pitch Tech Competition",
    badge: "1st Place",
    description: "Won 1st place for pitching a technical product idea, outlining system feasibility, market applicability, and architecture.",
  },
];

const certifications = [
  { 
    name: "MERN Stack Development", 
    issuer: "Certified Developer",
    desc: "MongoDB, Express.js, React.js, and Node.js full-stack development"
  },
  { 
    name: "JavaScript Programming", 
    issuer: "Advanced Certification",
    desc: "Modern ES6+, asynchronous programming, closures, and performance optimization"
  },
  { 
    name: "Web Development", 
    issuer: "Full-Stack Web Engineering",
    desc: "Responsive web standards, RESTful APIs, HTML5/CSS3, and UI/UX design"
  },
];

export default function EducationHonors() {
  return (
    <section
      id="education"
      className="relative py-24 sm:py-32 px-6 sm:px-10 bg-[#1a1e28] text-white border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
            <span className="text-blue-500 font-extrabold text-sm">/</span>
            <span>CREDENTIALS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight font-display tracking-tight">
            Education, Awards & Certifications
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Formal computer science foundations, competitive engineering awards, and verified technical credentials.
          </p>
        </div>

        {/* TWO-COLUMN GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: EDUCATION */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider font-mono">
              <BookOpen size={16} className="text-blue-500" />
              <span>ACADEMIC FOUNDATION</span>
            </div>

            <div className="space-y-5">
              {education.map((edu, i) => (
                <div
                  key={edu.degree}
                  className="p-6 rounded-2xl bg-[#14171f] border border-white/5 hover:border-blue-500/40 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-blue-400 font-semibold">
                      {edu.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-slate-300 font-mono font-medium">
                    {edu.institution}
                  </p>

                  <ul className="space-y-1.5 pt-2 text-xs sm:text-sm text-slate-400 font-sans">
                    {edu.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-blue-400 shrink-0">▹</span>
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: ACHIEVEMENTS & CERTIFICATIONS */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider font-mono">
              <Trophy size={16} className="text-blue-500" />
              <span>AWARDS & CERTIFICATIONS</span>
            </div>

            {/* Awards */}
            <div className="space-y-4">
              {achievements.map((ach, i) => (
                <div
                  key={ach.title}
                  className="p-5 rounded-2xl bg-[#14171f] border border-white/5 hover:border-blue-500/40 transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-blue-400 font-bold">
                      🥇 {ach.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white font-display">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Verified Certifications */}
            <div className="p-6 rounded-2xl bg-[#14171f] border border-white/5 space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Technical Certifications
              </div>
              <div className="space-y-2.5">
                {certifications.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-200"
                  >
                    <ShieldCheck size={16} className="text-blue-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="font-bold text-white font-sans">{c.name}</div>
                      <div className="text-[11px] text-slate-400 font-sans mt-0.5">{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
