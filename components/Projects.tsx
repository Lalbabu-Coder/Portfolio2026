"use client";

import { motion } from "framer-motion";
import Card3D from "@/components/Card3D";
import { Github, ExternalLink, Cpu } from "lucide-react";

interface ProjectItem {
  title: string;
  image: string;
  description: string;
  bullets: string[];
  tech: string[];
  link: string;
  github: string;
  featured?: boolean;
}

const projects: ProjectItem[] = [
  {
    title: "Multi-AI Agent Platform",
    image: "/Projects/multi_ai_agent_platform.png",
    description: "An autonomous multi-agent AI system orchestrating multiple specialized agents to complete workflows without manual intervention.",
    bullets: [
      "Orchestrated autonomous agents using OpenAI API and LangChain for conversation, content, and automation.",
      "Engineered communication and delegation logic to ensure coordination between agents.",
      "Adopted Microservices Architecture to decouple agents and improve service isolation.",
      "Containerized service modules using Docker for consistent cross-environment development."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "OpenAI API", "LangChain", "Docker"],
    link: "#",
    github: "https://github.com/Lalbabu-Coder",
    featured: true,
  },
  {
    title: "Task Management System",
    image: "/Projects/Task management interface overview.png",
    description: "A secure role-based workflow manager with distinct permission levels and progress tracking panels.",
    bullets: [
      "Built a role-based authorization hierarchy featuring Admin, Team Leader, and Employee dashboards.",
      "Designed and integrated 10+ RESTful APIs for performance monitoring and secure logins.",
      "Created fully responsive interfaces using Tailwind CSS to maintain consistent cross-device UX."
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "REST APIs", "Context API"],
    link: "https://task-management-liart-nu.vercel.app",
    github: "https://github.com/Lalbabu-Coder",
    featured: true,
  },
  {
    title: "VR AND Sons E-Commerce",
    image: "/Projects/VR AND Sons e-commerce homepage design.png",
    description: "A premium import-export business catalog showing luxury product galleries with fine animations.",
    bullets: [
      "Designed an elegant custom gallery grid showing luxury crafts and export items.",
      "Optimized assets and responsive viewport breakpoints for global buyers."
    ],
    tech: ["React", "Next.js", "Tailwind CSS"],
    link: "https://vrandsons.com",
    github: "https://github.com/Lalbabu-Coder",
  },
  {
    title: "Luxury Furniture Website",
    image: "/Projects/Design your perfect sanctuary online.png",
    description: "An immersive e-commerce catalog featuring aesthetic design, product sliders, and rich interactive layouts.",
    bullets: [
      "Crafted custom parallax layers and smooth scroll effects for premium furniture showcases.",
      "Designed responsive grids with dynamic hover highlights and product cards."
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://furniture-website-8sts.vercel.app",
    github: "https://github.com/Lalbabu-Coder",
  },
  {
    title: "School Management Website",
    image: "/Projects/Grapura School homepage - inspiring education.png",
    description: "A contemporary institutional portal facilitating admission details, departments showcase, and student guidelines.",
    bullets: [
      "Implemented a structured admissions workflow and dynamic academy landing pages.",
      "Enhanced browser loading speed by caching fonts and SVGs."
    ],
    tech: ["React", "Next.js", "Tailwind CSS"],
    link: "https://school-management-phi-sandy.vercel.app",
    github: "https://github.com/Lalbabu-Coder",
  },
  {
    title: "Food Delivery Website",
    image: "/Projects/food.png",
    description: "Full-stack food ordering platform with an active checkout cart system and user authentication.",
    bullets: [
      "Created interactive menu selections, persistent cart stores, and login checks.",
      "Integrated express order routing and mock transaction flows."
    ],
    tech: ["React", "Next.js", "Tailwind", "MongoDB", "Node.js"],
    link: "https://your-food-link.vercel.app",
    github: "https://github.com/Lalbabu-Coder",
  },
  {
    title: "CRM Management System",
    image: "/Projects/crm.png",
    description: "Business dashboard for monitoring leads, sales logs, client feedback, and team schedules.",
    bullets: [
      "Developed a centralized administration control panel with database aggregation metrics.",
      "Linked chart elements to reflect direct real-time server changes."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://your-crm-link.vercel.app",
    github: "https://github.com/Lalbabu-Coder",
  },
  {
    title: "MultiCard E-Commerce Website",
    image: "/Projects/multicard.png",
    description: "Responsive shopping center showing customizable cards, cart updates, and item search filters.",
    bullets: [
      "Crafted flexible grid filters allowing searches by category, price, and ratings.",
      "Set state-based cart counters and animated checkouts."
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    link: "https://multicart-sigma.vercel.app",
    github: "https://github.com/Lalbabu-Coder",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-20 relative overflow-visible">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.35)] dark:drop-shadow-[0_0_35px_rgba(59,130,246,0.65)] font-display"
        >
          My Creative Works
        </motion.h2>

        <p className="mt-4 text-slate-400 text-base md:text-lg font-sans">
          A showcase of full-stack CRM structures, interactive 3D portfolios, and autonomous AI microservices.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className={project.featured ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-12 gap-8 items-center bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_0_40px_rgba(59,130,246,0.05)] hover:shadow-[0_0_70px_rgba(59,130,246,0.2)] hover:border-cyan-500/30 transition-all duration-300 relative group" : "flex flex-col h-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.05)] hover:shadow-[0_0_70px_rgba(59,130,246,0.2)] hover:border-cyan-500/30 transition-all duration-300 relative group"}
          >
            {/* Neon Border Tracing wrapper */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1.5px] -z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 pointer-events-none" />

            {project.featured ? (
              // Featured (Full-width detailed card)
              <>
                {/* Visual half - 3D Parallax layered */}
                <div 
                  className="lg:col-span-5 h-[280px] lg:h-[360px] rounded-2xl overflow-hidden border border-white/5 bg-black/20 relative group"
                  style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                  <span 
                    className="absolute top-4 left-4 bg-blue-600 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <Cpu size={12} />
                    Featured Project
                  </span>
                </div>

                {/* Info half - 3D Parallax layers */}
                <div className="lg:col-span-7 mt-6 lg:mt-0 flex flex-col justify-between h-full" style={{ transformStyle: "preserve-3d" }}>
                  <div style={{ transformStyle: "preserve-3d" }}>
                    <h3 
                      className="text-2xl font-bold text-white font-display"
                      style={{ transform: "translateZ(25px)" }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-gray-300 text-sm mt-3 font-sans leading-relaxed"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      {project.description}
                    </p>
                    <ul 
                      className="mt-4 space-y-2 text-xs text-gray-400 font-sans list-inside"
                      style={{ transform: "translateZ(35px)" }}
                    >
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-500 shrink-0 mt-0.5">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6" style={{ transformStyle: "preserve-3d" }}>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(40px)" }}>
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/20 font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="mt-6 flex flex-wrap gap-3" style={{ transform: "translateZ(45px)" }}>
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all duration-300 text-xs font-semibold cursor-pointer border border-blue-500/30"
                        >
                          <ExternalLink size={14} />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 text-xs font-semibold cursor-pointer"
                      >
                        <Github size={14} />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Standard Grid Card (with individual Card3D tilt layout wrapper and translation depths)
              <Card3D className="flex flex-col h-full cursor-default bg-slate-950/20 rounded-3xl" tiltAngle={12} translateDepth={30}>
                <div 
                  className="relative h-[180px] overflow-hidden bg-black/20 rounded-t-3xl"
                  style={{ transform: "translateZ(15px)" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow" style={{ transformStyle: "preserve-3d" }}>
                  <div style={{ transformStyle: "preserve-3d" }}>
                    <h3 
                      className="text-lg font-bold text-white font-display" 
                      style={{ transform: "translateZ(25px)" }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-gray-400 text-xs mt-3 leading-relaxed font-sans min-h-[50px]" 
                      style={{ transform: "translateZ(30px)" }}
                    >
                      {project.description}
                    </p>
                    <ul 
                      className="mt-3 space-y-1.5 text-[11px] text-gray-400 font-sans list-inside" 
                      style={{ transform: "translateZ(35px)" }}
                    >
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-blue-500 shrink-0 mt-0.5">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5" style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 text-[10px] rounded-full bg-blue-500/10 text-cyan-400 border border-blue-500/20 font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2" style={{ transform: "translateZ(45px)" }}>
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-blue-600/90 border border-blue-500/30 hover:bg-blue-500 text-white shadow-[0_0_10px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 text-xs font-semibold cursor-pointer"
                        >
                          <ExternalLink size={12} />
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300 text-xs font-semibold cursor-pointer"
                      >
                        <Github size={12} />
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </Card3D>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}