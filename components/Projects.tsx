"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles, Layers, ArrowUpRight, Cpu, ShieldCheck } from "lucide-react";
import ProjectDetailModal, { DetailedProject } from "./ProjectDetailModal";

const allProjects: DetailedProject[] = [
  {
    title: "ATH Hackathon 2026 Platform",
    category: "Full Stack MERN",
    tagline: "National-Level Hackathon Management & Submission Ecosystem",
    image: "/Projects/ath_hackathon.jpg",
    description: "National-level hackathon and developer challenge ecosystem developed at Athenura handling registrations, evaluations, team formation, and automated certificate generation.",
    problem: "Managing thousands of hackathon participants with live project submissions, multi-judge scoring tiers, and automated leaderboards without latency bottlenecks.",
    solution: "Engineered an end-to-end MERN platform featuring Role-Based Access Control (RBAC) for organizers, judges, and participants with optimized MongoDB indexing and REST APIs.",
    architecture: {
      frontend: "React.js 19, Tailwind CSS",
      backend: "Node.js, Express.js REST APIs",
      database: "MongoDB Atlas with Aggregations",
      auth: "JWT & Multi-Tier RBAC",
      infra: "Vercel & Render Cloud",
    },
    features: [
      "End-to-end candidate registration and automated team formation logic",
      "Multi-criteria judge evaluation matrix with live weighted scoring",
      "High-throughput REST APIs supporting live national hackathon events",
      "Dynamic certificate generation and real-time announcement broadcaster",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC", "REST APIs"],
    link: "https://hackathon.athenura.in/",
    github: "https://github.com/Lalbabu-Coder",
    highlightMetric: "Production Hackathon Infrastructure",
  },
  {
    title: "Athenura TaskFlow (TMS)",
    category: "Enterprise SaaS",
    tagline: "Role-Based Task Management System & Analytics Hub",
    image: "/Projects/athenura_tms.jpg",
    description: "Enterprise role-based project and task management system with intelligent team monitoring, sprint metrics, and permission-isolated administrative views.",
    problem: "Coordinating multi-tier company structures with varying permission levels while maintaining real-time task status synchronization.",
    solution: "Constructed a secure role-based hierarchy featuring Admin, Team Leader, and Employee dashboards with distinct permission tiers and persistent state management.",
    architecture: {
      frontend: "React.js, Tailwind CSS, Context API",
      backend: "Node.js, Express.js Controllers",
      database: "MongoDB with Schema Validation",
      auth: "Stateless JWT Authentication",
      infra: "Cloud Deployment",
    },
    features: [
      "Three-tier dashboard suite (Admin, Team Leader, Employee)",
      "Integrated 10+ RESTful APIs for team velocity and performance analytics",
      "Real-time activity audit logs and status transition workflows",
      "Persistent state management with client caching",
    ],
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "REST APIs", "Context API"],
    link: "https://task-management-system-1foc.vercel.app/",
    github: "https://github.com/Lalbabu-Coder",
    highlightMetric: "10+ Custom REST Endpoints",
  },
  {
    title: "Athenura Billing & CRM SaaS",
    category: "Multi-Tenant SaaS",
    tagline: "Automated Invoicing & Client Lifecycle Platform",
    image: "/Projects/athenura_billing.jpg",
    description: "A multi-tenant SaaS billing and client relationship management platform automating invoicing, recurring client subscriptions, case tracking, and financial analytics.",
    problem: "Manual billing and client onboarding led to inconsistent invoice generation, missed renewal tracking, and disjointed client communication.",
    solution: "Developed a centralized CRM and financial SaaS platform enabling automated invoice PDF generation, payment status tracking, and secure multi-client data partitioning.",
    architecture: {
      frontend: "React.js, Lucide Icons, Tailwind CSS",
      backend: "Node.js, Express.js MVC",
      database: "MongoDB Atlas Multi-Tenant Collections",
      auth: "JWT Authorization with Role Guards",
      infra: "Vercel / Cloud Database",
    },
    features: [
      "Automated tax and subtotal computation with printable invoice outputs",
      "Client relationship timeline with historical interaction tracking",
      "Multi-client data segregation and financial revenue summaries",
      "Instant payment status updating and client onboarding wizard",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs"],
    link: "https://athenura-billing-system-f.vercel.app/",
    github: "https://github.com/Lalbabu-Coder",
    highlightMetric: "Automated Financial Workflows",
  },
  {
    title: "NexusAI – Multi-Agent AI Platform",
    category: "AI & Microservices",
    tagline: "Autonomous Agent Swarms & Real-Time RAG Pipeline",
    image: "/Projects/multi_ai_agent_platform.png",
    description: "A microservices-based AI platform orchestrating autonomous multi-agent systems, real-time RAG pipelines, and high-performance LLM routing across Groq and Gemini.",
    problem: "Complex multi-step generative tasks require coordination across different specialized LLMs and instant retrieval from high-dimensional vector documents.",
    solution: "Engineered microservices for API Gateway, Auth, Chat, Agent Orchestration via LangGraph, and integrated ultra-fast semantic search with Qdrant Vector DB.",
    architecture: {
      frontend: "Next.js 15, React 19, Tailwind CSS",
      backend: "Node.js, LangGraph, Python Scripts",
      database: "Qdrant Vector DB & MongoDB",
      auth: "JWT & API Key Ingestion",
      infra: "Docker Containerization & GitHub CI/CD",
    },
    features: [
      "Multi-agent coordination via LangGraph state graphs",
      "Dynamic routing between Groq Llama 3.3 70B, DeepSeek, and Gemini 2.5 Flash",
      "Ultra-fast semantic RAG pipeline using Qdrant Vector database",
      "Dockerized microservices deployment with decoupled gateways",
    ],
    tech: ["LangGraph", "Groq", "Gemini", "Qdrant", "MongoDB", "Docker", "Node.js"],
    link: "https://nexus-ai-tau-black.vercel.app/",
    github: "https://github.com/Lalbabu-Coder/Nexus-AI",
    highlightMetric: "LangGraph Multi-Agent Swarms",
  },
  {
    title: "VR AND Sons E-Commerce",
    category: "E-Commerce",
    tagline: "Luxury Import-Export Product Showcase & Catalog",
    image: "/Projects/VR AND Sons e-commerce homepage design.png",
    description: "A premium import-export business catalog showing luxury product galleries, international trade collections, and fluid responsive interactions.",
    problem: "Showcasing high-end handcrafted goods with high-resolution visual fidelity without compromising mobile load speeds.",
    solution: "Designed a responsive luxury catalog with Next.js image optimization, progressive image blur placeholders, and smooth transitions.",
    architecture: {
      frontend: "Next.js, React, Tailwind CSS",
      backend: "REST API Endpoint Layer",
      database: "Product Catalog Store",
      auth: "Inquiry Management Auth",
      infra: "Vercel Global Edge Network",
    },
    features: [
      "Interactive luxury showcase grid with responsive zoom previews",
      "Export product specification filters and direct trade inquiry portals",
      "Optimized asset loading and mobile touch support",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
    link: "https://vrandsons.com",
    github: "https://github.com/Lalbabu-Coder",
  },
  {
    title: "Food Delivery Platform",
    category: "Full Stack Web",
    tagline: "Real-Time Food Ordering & Cart Management Platform",
    image: "/Projects/food.png",
    description: "Full-stack food ordering platform featuring interactive menus, persistent checkout cart systems, and authenticated customer ordering flows.",
    problem: "Real-time state synchronization between menu selection, dynamic cart price calculation, and order dispatching.",
    solution: "Engineered Express order routing with MongoDB collections and client-side persistent cart storage.",
    architecture: {
      frontend: "React.js, Next.js, Tailwind CSS",
      backend: "Node.js, Express.js",
      database: "MongoDB Atlas",
      auth: "User Authentication",
      infra: "Vercel / Cloud Backend",
    },
    features: [
      "Interactive menu categorization with live search and price filters",
      "Persistent cart checkout with total recalculations",
      "Authenticated customer order dashboard",
    ],
    tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://your-food-link.vercel.app",
    github: "https://github.com/Lalbabu-Coder",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  return (
    <section
      id="projects"
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
          <Sparkles size={14} />
          <span>Featured Portfolio</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-display tracking-tight"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">Engineering Systems</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base font-sans"
        >
          Full-stack CRM architectures, national hackathon platforms, autonomous AI swarms, and responsive production SaaS.
        </motion.p>
      </div>

      {/* 3D PROJECT CARDS GRID */}
      <div className="mt-14 sm:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto relative z-10">
        {allProjects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative flex flex-col justify-between bg-slate-950/70 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.5)] hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] transition-all duration-300"
          >
            <div>
              {/* Image banner with scanline overlay */}
              <div
                onClick={() => setSelectedProject(project)}
                className="relative h-[210px] overflow-hidden bg-black/50 border-b border-white/10 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-slate-950/80 backdrop-blur-md border border-white/15 text-orange-400">
                  {project.category}
                </div>

                {/* Inspect hint overlay */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Text details */}
              <div className="p-6 space-y-3">
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-lg sm:text-xl font-bold text-white font-display group-hover:text-orange-400 transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-1.5 pt-1 text-xs text-slate-400 font-sans">
                  {project.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 truncate">
                      <span className="text-orange-400 shrink-0">▹</span>
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="p-6 pt-0 space-y-4">
              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-white/5 border border-white/10 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all text-xs font-bold cursor-pointer"
                  >
                    <ExternalLink size={13} />
                    <span>Live Demo</span>
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-all text-xs font-semibold cursor-pointer"
                >
                  <Github size={13} />
                  <span>Source</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DETAILED PROJECT MODAL */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}