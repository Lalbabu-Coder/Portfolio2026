"use client";

import { motion } from "framer-motion";
import Card3D from "@/components/Card3D";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Code2, 
  Cpu, 
  Layers, 
  Rocket 
} from "lucide-react";

const stats = [
  { label: "Production Platforms", value: "8+" },
  { label: "REST APIs Engineered", value: "25+" },
  { label: "MERN Stack Mastery", value: "100%" },
  { label: "Competitions Won", value: "2x 🥇" },
];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Athenura",
    location: "Bengaluru, India",
    time: "Feb 2026 – Sep 2026",
    current: true,
    points: [
      "Developed and maintained full-stack modules for internal hackathon management and billing/CRM SaaS platforms using React.js, Node.js, Express.js, and MongoDB.",
      "Built and integrated REST APIs to support core application features and improve backend functionality.",
      "Collaborated with the team to debug issues, review code, and deliver features in an agile development environment."
    ]
  },
  {
    role: "MERN Stack Developer Intern",
    company: "Graphura India Private Limited",
    location: "Delhi, India",
    time: "Dec 2025 – Feb 2026",
    current: false,
    points: [
      "Engineered and maintained full-stack modules using React.js, Node.js, Express.js, and MongoDB for internal business applications.",
      "Designed and integrated REST APIs, streamlining backend workflows and improving operational efficiency.",
      "Implemented Authentication and Role-Based Access Control (RBAC) systems supporting multiple user roles."
    ]
  },
  {
    role: "Software Development Intern",
    company: "Infowizz Software Solutions",
    location: "Chandigarh, India",
    time: "Aug 2022 – Sep 2022",
    current: false,
    points: [
      "Developed responsive user interfaces using Python, HTML5, CSS3, and JavaScript.",
      "Assisted in debugging application issues and performed cross-browser compatibility testing."
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution: "Gurugram University",
    location: "Gurugram, Haryana",
    time: "2023 – 2026",
    points: [
      "Core focus on Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Architectures, and SDLC.",
      "Developed full-stack web applications, microservices, and AI-integrated systems."
    ]
  },
  {
    degree: "Diploma in Computer Science Engineering",
    institution: "Government Polytechnic, Adampur Mandi",
    location: "Hisar, Haryana",
    time: "2020 – 2023",
    points: [
      "Built a strong foundation in core computer science fundamentals, OOP concepts, DBMS, and responsive front-end engineering."
    ]
  }
];

const honors = [
  {
    title: "Achievements & Competitions",
    time: "Honors",
    points: [
      "🥇 First Prize in the Pitch Tech Competition - Recognized for technical innovation and system architecture.",
      "🥇 First Prize in the Project Showcase Competition - Awarded for product execution and live engineering demo.",
      "Built and deployed full-stack SaaS and microservices platforms with modern MERN and AI workflows."
    ]
  },
  {
    title: "Certifications",
    time: "Credentials",
    points: [
      "📜 Certified in MERN Stack Development",
      "📜 Certified in JavaScript Programming",
      "📜 Certified in Web Development"
    ]
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-16 overflow-hidden bg-transparent text-white w-full max-w-full border-t border-white/10">
      
      {/* Background Ambient Glows (Consistent with Hero theme) */}
      <div className="absolute left-[-5%] top-[15%] w-[45vw] max-w-[500px] h-[45vw] max-h-[500px] bg-violet-600/20 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute right-[-5%] bottom-[15%] w-[45vw] max-w-[500px] h-[45vw] max-h-[500px] bg-cyan-600/18 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] max-w-[400px] h-[40vw] max-h-[400px] bg-blue-600/10 blur-[170px] rounded-full pointer-events-none z-0" />

      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <Sparkles size={14} />
          <span>About Me</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-display tracking-tight"
        >
          My Journey & <span className="text-orange-500">Experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-slate-300 text-sm sm:text-base md:text-lg font-sans"
        >
          Engineering scalable web architectures, autonomous AI workflows, and high-performance backend systems.
        </motion.p>
      </div>

      {/* MAIN GRID CONTENT */}
      <div className="mt-14 sm:mt-20 max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-10 items-start relative z-10">
        
        {/* LEFT COLUMN: PROFILE CARD & QUICK STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 space-y-6"
        >
          {/* Main Card */}
          <Card3D className="
            relative p-6 sm:p-8 rounded-3xl
            bg-slate-950/70 backdrop-blur-2xl
            border border-white/10
            shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
            hover:border-orange-500/40 transition-all duration-300 cursor-default
          ">
            {/* Status Pill */}
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Hire</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">B.Tech CSE</span>
            </div>
            
            <h3 className="text-2xl font-black text-white font-display">
              Lalbabu Singh
            </h3>
            
            <p className="text-sm text-orange-400 font-semibold mt-1 mb-4 font-mono">
              Software Engineer &middot; Full Stack Developer (MERN)
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
              Software Engineer with hands-on experience in the MERN stack (MongoDB, Express.js, React.js, Node.js),
              building and deploying scalable, production-ready web applications, microservices, RESTful APIs, and autonomous AI systems.
            </p>

            {/* Quick Location & Work Specs */}
            <div className="space-y-3 pt-6 border-t border-white/10 text-xs text-slate-300 font-sans">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400">
                  <MapPin size={16} />
                </div>
                <span>Bengaluru, India &middot; Open to Relocation / Remote</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Briefcase size={16} />
                </div>
                <span>Full Stack Developer @ Athenura</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <GraduationCap size={16} />
                </div>
                <span>B.Tech CSE &middot; Gurugram University</span>
              </div>
            </div>
          </Card3D>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-950/50 border border-white/10 backdrop-blur-xl text-center group hover:border-orange-500/30 transition-all"
              >
                <div className="text-xl sm:text-2xl font-black text-white font-display group-hover:text-orange-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: TIMELINE & DETAILS */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* 1. PROFESSIONAL EXPERIENCE */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white font-display">
                Professional Experience
              </h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card3D className="
                    p-6 sm:p-7 rounded-2xl h-full
                    bg-slate-950/60 backdrop-blur-xl
                    border border-white/10
                    shadow-[0_4px_25px_rgba(0,0,0,0.4)]
                    hover:border-orange-500/30 hover:shadow-[0_0_35px_rgba(249,115,22,0.12)]
                    transition-all duration-300
                  ">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                        exp.current 
                          ? "bg-orange-500/10 text-orange-400 border-orange-500/20 font-mono" 
                          : "bg-white/5 text-slate-300 border-white/10 font-mono"
                      }`}>
                        {exp.time}
                      </span>
                      <span className="text-xs text-slate-400 font-sans">{exp.location}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white mt-2 font-display">
                      {exp.role}
                    </h4>
                    <p className="text-xs font-semibold text-cyan-400 mt-0.5 font-mono">
                      {exp.company}
                    </p>

                    <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="text-orange-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 2. EDUCATION HISTORY */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white font-display">
                Education History
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card3D className="
                    p-6 rounded-2xl h-full
                    bg-slate-950/60 backdrop-blur-xl
                    border border-white/10
                    shadow-[0_4px_25px_rgba(0,0,0,0.4)]
                    hover:border-cyan-500/30 hover:shadow-[0_0_35px_rgba(6,182,212,0.12)]
                    transition-all duration-300
                  ">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                      {edu.time}
                    </span>
                    <h4 className="text-base font-bold text-white mt-3 font-display">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      {edu.institution} &middot; {edu.location}
                    </p>
                    <ul className="mt-4 space-y-2 text-xs text-slate-300 font-sans">
                      {edu.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-cyan-400 shrink-0 mt-0.5">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3. ACHIEVEMENTS & CERTIFICATIONS */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Award size={20} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white font-display">
                Achievements & Credentials
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {honors.map((honor, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card3D className="
                    p-6 rounded-2xl h-full
                    bg-slate-950/60 backdrop-blur-xl
                    border border-white/10
                    shadow-[0_4px_25px_rgba(0,0,0,0.4)]
                    hover:border-purple-500/30 hover:shadow-[0_0_35px_rgba(168,85,247,0.12)]
                    transition-all duration-300
                  ">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 font-mono">
                      {honor.time}
                    </span>
                    <h4 className="text-base font-bold text-white mt-3 font-display">
                      {honor.title}
                    </h4>
                    <ul className="mt-4 space-y-2.5 text-xs text-slate-300 font-sans">
                      {honor.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-purple-400 shrink-0 mt-0.5">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
