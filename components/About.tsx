"use client";

import { motion } from "framer-motion";
import Card3D from "@/components/Card3D";
import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer Intern (MERN Stack)",
    company: "Graphura India Private Limited",
    location: "Delhi, India",
    time: "Dec 2025 – Present",
    points: [
      "Developed and maintained scalable MERN stack CRM and business solutions, delivering production-ready modules.",
      "Containerized backend services with Docker, facilitating seamless, uniform deployments across development & production.",
      "Designed and integrated 15+ secure RESTful APIs, boosting backend communication efficiency by 25%.",
      "Implemented JWT Authentication, Authorization, and Role-Based Access Control (RBAC) to secure application boundaries.",
      "Optimized MongoDB schema and indexing strategies, successfully reducing average API response times by ~30%.",
      "Collaborated in Agile sprints to troubleshoot and resolve 40+ high-priority issues across the stack."
    ]
  },
  {
    role: "Software Development Intern",
    company: "Infowizz Software Solutions",
    location: "Chandigarh, India",
    time: "Aug 2022 – Sep 2022",
    points: [
      "Developed interactive and responsive user interfaces using Python, HTML5, CSS3, and JavaScript.",
      "Followed clean coding patterns during debugging, compatibility testing, and SDLC alignments."
    ]
  }
];

const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Gurugram University",
    location: "Gurugram, Haryana",
    time: "2023 – 2026",
    points: [
      "Core focus on Algorithms, Database Systems, Web Architectures, and Operating Systems.",
      "Built multiple web systems, focusing on modern React, Next.js, and backend servers."
    ]
  },
  {
    degree: "Diploma in Computer Science Engineering",
    institution: "Government Polytechnic Hisar",
    location: "Hisar, Haryana",
    time: "2020 – 2023",
    points: [
      "Acquired fundamental computing skills including OOPs in C++, basic database designs, HTML5/CSS3, and JS script logic."
    ]
  }
];

const honors = [
  {
    title: "Achievements & Competitions",
    time: "Recognitions",
    points: [
      "🥇 First Prize in Pitch Tech Competition - Awarded for innovative business pitching and tech model.",
      "🥇 First Prize in Project Showcase Competition - Awarded for architectural execution and demo performance.",
      "Built and deployed over 7+ full-stack and frontend projects, focusing on database optimizations and responsive designs."
    ]
  },
  {
    title: "Certifications",
    time: "Credentials",
    points: [
      "📜 MERN Stack Development Certification",
      "📜 JavaScript Programming Certification",
      "📜 Web Development Professional Certification"
    ]
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-20 overflow-visible">
      {/* Background radial highlight */}
      <div className="absolute left-[10%] top-[10%] w-[35vw] h-[35vw] bg-indigo-600/5 dark:bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* HEADING */}
      <div className="text-center max-w-3xl mx-auto z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-4xl md:text-5xl font-extrabold
            bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500
            bg-clip-text text-transparent
            drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]
            dark:drop-shadow-[0_0_40px_rgba(59,130,246,0.7)]
            font-display
          "
        >
          My Journey & Experience
        </motion.h2>

        <p className="mt-4 text-slate-500 dark:text-gray-400 text-base md:text-lg font-sans">
          A narrative of my academic foundations, engineering internships, and developer milestones.
        </p>
      </div>

      <div className="mt-20 max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4"
        >
          <Card3D className="
            relative p-8 rounded-3xl
            bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl
            border border-slate-200/80 dark:border-white/10
            shadow-[0_0_45px_rgba(59,130,246,0.06)] dark:shadow-[0_0_45px_rgba(59,130,246,0.12)]
            hover:border-blue-500/40 transition-all duration-300 cursor-default
          ">
            <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/10 dark:bg-blue-500/20 blur-[30px] rounded-full pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white font-display mb-4">
              Lalbabu Singh
            </h3>
            
            <p className="text-sm text-blue-600 dark:text-cyan-400 font-semibold mb-6">
              MERN Stack Developer & CSE Student
            </p>

            <p className="text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-6 font-sans">
              I am a final-year B.Tech CSE student and a highly motivated MERN Stack Developer. 
              I specialize in creating clean, secure, and production-ready applications with customized APIs, 
              scalable container designs (Docker), and optimized database flows.
            </p>

            <div className="space-y-4 pt-6 border-t border-slate-200/60 dark:border-white/10 text-xs text-slate-500 dark:text-gray-400 font-sans">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-500" />
                <span>Delhi, India (Open to Relocation)</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase size={16} className="text-blue-500" />
                <span>Software Intern @ Graphura India</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap size={16} className="text-blue-500" />
                <span>Gurugram University CSE Student</span>
              </div>
            </div>
          </Card3D>
        </motion.div>

        {/* RIGHT DETAILS GRID */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* SECTION: EXPERIENCE */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3 font-display">
              <Briefcase className="text-blue-500" size={22} />
              Professional Experience
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card3D className="
                    p-6 rounded-2xl h-full
                    bg-white/60 dark:bg-white/[0.02] backdrop-blur-md
                    border border-slate-200/80 dark:border-white/5
                    shadow-[0_0_30px_rgba(59,130,246,0.03)] dark:shadow-[0_0_30px_rgba(59,130,246,0.06)]
                    hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]
                    transition-all duration-300
                  ">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10">
                      {exp.time}
                    </span>
                    <h4 className="text-base font-bold text-slate-800 dark:text-white mt-3 font-display">
                      {exp.role}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 font-sans">
                      {exp.company} &middot; {exp.location}
                    </p>
                    <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-gray-300 font-sans list-inside">
                      {exp.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-500 shrink-0 mt-0.5">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SECTION: EDUCATION */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3 font-display">
              <GraduationCap className="text-blue-500" size={24} />
              Education History
            </h3>
            
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
                    bg-white/60 dark:bg-white/[0.02] backdrop-blur-md
                    border border-slate-200/80 dark:border-white/5
                    shadow-[0_0_30px_rgba(59,130,246,0.03)] dark:shadow-[0_0_30px_rgba(59,130,246,0.06)]
                    hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]
                    transition-all duration-300
                  ">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10">
                      {edu.time}
                    </span>
                    <h4 className="text-base font-bold text-slate-800 dark:text-white mt-3 font-display">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-1 font-sans">
                      {edu.institution} &middot; {edu.location}
                    </p>
                    <ul className="mt-4 space-y-2 text-xs text-slate-600 dark:text-gray-300 font-sans list-inside">
                      {edu.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-500 shrink-0 mt-0.5">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </div>

          {/* SECTION: HONORS & CREDENTIALS */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-3 font-display">
              <Award className="text-blue-500" size={22} />
              Achievements & Certifications
            </h3>
            
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
                    bg-white/60 dark:bg-white/[0.02] backdrop-blur-md
                    border border-slate-200/80 dark:border-white/5
                    shadow-[0_0_30px_rgba(59,130,246,0.03)] dark:shadow-[0_0_30px_rgba(59,130,246,0.06)]
                    hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]
                    transition-all duration-300
                  ">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/10">
                      {honor.time}
                    </span>
                    <h4 className="text-base font-bold text-slate-800 dark:text-white mt-3 font-display">
                      {honor.title}
                    </h4>
                    <ul className="mt-4 space-y-2.5 text-xs text-slate-600 dark:text-gray-300 font-sans list-inside">
                      {honor.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-500 shrink-0 mt-0.5">▹</span>
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
