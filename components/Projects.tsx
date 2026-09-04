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
}

const projects: ProjectItem[] = [
  {
    title: "NexusAI – Multi-Agent AI Platform",
    image: "/Projects/multi_ai_agent_platform.png",
    description: "A microservices-based AI platform orchestrating autonomous multi-agent systems and real-time RAG pipelines.",
    bullets: [
      "Built a microservices-based AI platform with services for API Gateway, Authentication, Chat, Agent Orchestration, and Billing.",
      "Orchestrated multiple AI agents via LangGraph across Groq Llama 3.3 70B, DeepSeek, and Gemini 2.5 Flash models.",
      "Implemented an ultra-fast semantic RAG pipeline using Qdrant Vector DB with Dockerized deployments."
    ],
    tech: ["LangGraph", "Groq", "Gemini", "Qdrant", "MongoDB", "Docker", "Node.js"],
    link: "https://nexus-ai-tau-black.vercel.app/",
    github: "https://github.com/Lalbabu-Coder/Nexus-AI",
  },
  {
    title: "Hackathon Management Platform",
    image: "/Projects/Task management interface overview.png",
    description: "An end-to-end hackathon ecosystem developed at Athenura handling registration, evaluations, and certifications.",
    bullets: [
      "Built an end-to-end hackathon management platform covering candidate registration, submission tracking, evaluation, and certificate generation.",
      "Implemented Role-Based Access Control (RBAC) for organizers, judges, and participants with a robust MERN backend.",
      "Engineered responsive UI dashboards in React.js connected to scalable Express.js REST APIs."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC", "REST APIs"],
    link: "https://task-management-liart-nu.vercel.app",
    github: "https://github.com/Lalbabu-Coder",
  },
  {
    title: "Billing & CRM SaaS Platform",
    image: "/Projects/crm.png",
    description: "A multi-tenant SaaS billing and customer relationship management platform engineered at Athenura.",
    bullets: [
      "Developed a SaaS-based billing and CRM platform enabling client management, invoicing, and case tracking workflows.",
      "Built REST APIs and designed MongoDB schemas to support multi-client data handling and analytics.",
      "Streamlined client onboarding with automated invoice generation and secure JWT authorization."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    link: "https://your-crm-link.vercel.app",
    github: "https://github.com/Lalbabu-Coder",
  },
  {
    title: "Task Management & RBAC System",
    image: "/Projects/Task management interface overview.png",
    description: "A secure role-based workflow manager with granular permission levels and live progress monitoring.",
    bullets: [
      "Built a role-based authorization hierarchy featuring Admin, Team Leader, and Employee dashboards.",
      "Designed and integrated 10+ RESTful APIs for performance monitoring, task assignments, and secure logins.",
      "Created fully responsive interfaces using Tailwind CSS with persistent state management."
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "REST APIs", "Context API"],
    link: "https://task-management-liart-nu.vercel.app",
    github: "https://github.com/Lalbabu-Coder",
  },
  {
    title: "VR AND Sons E-Commerce",
    image: "/Projects/VR AND Sons e-commerce homepage design.png",
    description: "A premium import-export business catalog showing luxury product galleries with fine animations.",
    bullets: [
      "Designed an elegant custom gallery grid showing luxury crafts and export items.",
      "Optimized assets and responsive viewport breakpoints for global buyers."
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
    link: "https://vrandsons.com",
    github: "https://github.com/Lalbabu-Coder",
  },
  {
    title: "Food Delivery Platform",
    image: "/Projects/food.png",
    description: "Full-stack food ordering platform with active checkout cart system and user authentication.",
    bullets: [
      "Created interactive menu selections, persistent cart stores, and authenticated checkout flows.",
      "Integrated Express order routing and MongoDB collections for restaurant menu management."
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://your-food-link.vercel.app",
    github: "https://github.com/Lalbabu-Coder",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 md:px-20 relative overflow-hidden bg-[#070709] text-white w-full max-w-full border-t border-white/10">
      {/* Front-page matching purple/red ambient neon glows */}
      <div className="absolute left-[-10%] top-[20%] w-[45vw] max-w-[500px] h-[45vw] max-h-[500px] bg-purple-700/20 blur-[170px] rounded-full pointer-events-none z-0" />
      <div className="absolute right-[-10%] bottom-[20%] w-[45vw] max-w-[500px] h-[45vw] max-h-[500px] bg-red-600/20 blur-[170px] rounded-full pointer-events-none z-0" />

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto z-10 relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-display tracking-tight"
        >
          My Creative <span className="text-orange-500">Works</span>
        </motion.h2>

        <p className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base md:text-lg font-sans">
          A showcase of full-stack CRM structures, interactive 3D portfolios, and autonomous AI microservices.
        </p>
      </div>

      {/* Projects Uniform Grid */}
      <div className="mt-12 sm:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto relative z-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="flex flex-col h-full bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-orange-500/40 hover:shadow-[0_0_50px_rgba(249,115,22,0.2)] transition-all duration-300 relative group"
          >
            {/* Image banner */}
            <div className="relative h-[200px] overflow-hidden bg-black/40 border-b border-white/5">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content info */}
            <div className="p-6 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg font-extrabold text-white font-display">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-xs mt-2 leading-relaxed font-sans min-h-[38px]">
                  {project.description}
                </p>
                <ul className="mt-3.5 space-y-1.5 text-xs text-slate-400 font-sans">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-orange-500 shrink-0 mt-0.5">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 text-[11px] rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 font-mono font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all duration-300 text-xs font-bold cursor-pointer"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all duration-300 text-xs font-semibold cursor-pointer"
                  >
                    <Github size={13} />
                    Source
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}