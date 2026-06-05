"use client";
import { motion } from "framer-motion";
import Card3D from "@/components/Card3D";

const cards = [
  {
    title: "MERN Stack Developer",
    points: [
      "Strong expertise in React.js, Next.js, Tailwind CSS for frontend",
      "Backend development using Node.js, Express.js & MongoDB",
      "Experience building scalable dashboards, CRM systems & REST APIs",
      "Focus on performance, clean architecture, and real-world usability",
    ],
    time: "2024 – Present",
  },
  {
    title: "B.Tech – Computer Science Engineering",
    points: [
      "Pursuing B.Tech from Gurugram University (GITM, Farrukhnagar)",
      "Strong foundation in DSA, databases, OS, and software engineering",
      "Hands-on experience with real-world academic & self projects",
      "CGPA: 7.5 / 10",
    ],
    time: "2023 – 2026",
  },
  {
    title: "Diploma – Computer Science & Engineering",
    points: [
      "Completed Diploma from Govt. Polytechnic Adampur, Hisar (HSBTE)",
      "Learned C, C++, HTML, CSS, JavaScript & database fundamentals",
      "Built early-stage web projects and logical programming skills",
      "CGPA: 6.5 / 10",
    ],
    time: "2020 – 2023",
  },
  {
    title: "Internship Experience",
    points: [
      "Software Engineer Intern (MERN) at Graphura India Pvt. Ltd.",
      "Working on live CRM & business applications (Remote)",
      "Handled API integration, bug fixing & deployment tasks",
      "Earlier intern at Infowizz Software Solutions (Python + Web)",
    ],
    time: "2022 – Present",
  },
  {
    title: "Certifications & Learning",
    points: [
      "2-Month Internship Certification – Infowizz (2022)",
      "Certified in JavaScript, React.js & MongoDB",
      "Hands-on learning via real projects & documentation",
      "AI-assisted development using ChatGPT & GitHub Copilot",
    ],
    time: "Continuous Learning",
  },
  {
    title: "Achievements & College Highlights",
    points: [
      "🥇 1st Position – Pitch Deck Competition (2024)",
      "🥇 1st Position – Project Showcase Competition (2024)",
      "Built Food Delivery App, MultiCard E-Commerce & CRM System",
      "Strong problem-solving mindset with DSA using Python",
    ],
    time: "Key Achievements",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-20">
      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          text-center text-4xl md:text-5xl font-extrabold
          bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600
          bg-clip-text text-transparent
          drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]
          dark:drop-shadow-[0_0_40px_rgba(59,130,246,0.75)]
        "
      >
        About My Journey
      </motion.h2>

      <p className="mt-6 max-w-3xl mx-auto text-center text-slate-600 dark:text-gray-300 leading-relaxed font-sans">
        I’m <span className="text-blue-500 dark:text-blue-400 font-semibold">Lalbabu Singh</span>,  
        a MERN Stack Developer passionate about building scalable, secure, and
        visually impressive web applications. I enjoy solving real-world
        problems through clean code, performance-focused design, and continuous learning.
      </p>

      {/* CARDS */}
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <Card3D className="
              group relative p-8 rounded-3xl
              bg-white/60 dark:bg-white/5 backdrop-blur-xl
              border border-slate-200/80 dark:border-white/10 border-t-blue-500/20 dark:border-t-blue-500/20
              shadow-[0_0_35px_rgba(59,130,246,0.06)] dark:shadow-[0_0_35px_rgba(59,130,246,0.15)]
              hover:border-blue-500/50 hover:border-t-blue-400/80
              hover:shadow-[0_0_80px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_0_80px_rgba(59,130,246,0.55)]
              transition-all duration-300 cursor-default
            ">
              {/* Glow */}
              <div
                className="
                  absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100
                  transition
                  bg-gradient-to-br from-blue-500/5 via-cyan-400/2 to-transparent dark:from-blue-500/10 dark:via-cyan-400/5
                "
              />

              <h3 className="relative text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4 font-display" style={{ transform: "translateZ(20px)" }}>
                {card.title}
              </h3>

              <ul className="relative space-y-2 text-slate-600 dark:text-gray-300 text-sm" style={{ transform: "translateZ(10px)" }}>
                {card.points.map((point, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-blue-500 dark:text-blue-400">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <span className="relative block mt-4 text-sm font-semibold text-blue-600 dark:text-blue-400" style={{ transform: "translateZ(15px)" }}>
                {card.time}
              </span>
            </Card3D>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
