"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import ProjectDetailModal, { DetailedProject } from "./ProjectDetailModal";

const allProjects: DetailedProject[] = [
  {
    title: "NexusAI – Multi-Agent AI Platform",
    category: "AI & Microservices",
    tagline: "Autonomous Multi-Agent Orchestration & Real-Time RAG Pipeline",
    image: "/Projects/multi_ai_agent_platform.png",
    description: "A microservices-based platform (API Gateway, Auth, Chat, Agent Orchestration, Billing) with React, Node/Express, and MongoDB Atlas; orchestrated multiple AI agents via LangGraph across Groq Llama 3.3 70B, DeepSeek, and Gemini 2.5 Flash.",
    problem: "Executing multi-step automated workflows across disparate LLMs while enabling sub-second context retrieval from large proprietary document stores.",
    solution: "Engineered microservices for decoupled routing, LangGraph state graph agents, and an ultra-fast RAG pipeline with Gemini Embeddings and Qdrant Vector DB.",
    architecture: {
      frontend: "React.js 19, Next.js, Tailwind CSS",
      backend: "Node.js, Express.js, LangGraph State Graphs",
      database: "Qdrant Vector DB & MongoDB Atlas",
      auth: "Firebase Auth & Redis Session Cache",
      infra: "Docker Containers, Render & Vercel",
    },
    features: [
      "Microservices architecture: API Gateway, Auth, Chat, Agent Orchestration & Billing",
      "Multi-agent coordination via LangGraph across Groq Llama 3.3 70B, DeepSeek & Gemini",
      "Semantic search RAG pipeline using Gemini Embeddings and Qdrant Vector DB",
      "Firebase authentication and Redis session caching deployed with Docker",
    ],
    tech: ["LangGraph", "Groq Llama 3.3", "Gemini", "Qdrant", "MongoDB", "Docker", "Redis"],
    link: "https://nexus-ai-tau-black.vercel.app/",
    github: "https://github.com/Lalbabu-Coder/Nexus-AI",
    highlightMetric: "LangGraph Multi-Agent Swarms",
  },
  {
    title: "MultiCard E-Commerce Platform",
    category: "Full Stack MERN",
    tagline: "High-Performance Multi-Vendor E-Commerce Platform",
    image: "/Projects/multicard.png",
    description: "A MERN-based e-commerce platform supporting 100+ products with JWT authentication and OTP verification, improving order processing efficiency by 25%.",
    problem: "Handling high concurrency checkout requests, multi-vendor product approvals, and secure real-time digital payments without order dropped states.",
    solution: "Integrated Razorpay payment gateway, automated vendor onboarding approval workflows, an administrative telemetry dashboard, and Cloudinary media uploads.",
    architecture: {
      frontend: "React.js, Tailwind CSS, Redux Toolkit",
      backend: "Node.js, Express.js REST APIs",
      database: "MongoDB Atlas with Mongoose Schemas",
      auth: "JWT Authentication & OTP Verification",
      infra: "Vercel & Render Cloud Hosting",
    },
    features: [
      "100+ product catalog with instant category filtering and search",
      "Seamless Razorpay payment gateway integration with webhook validation",
      "Vendor approval workflow and comprehensive admin revenue dashboard",
      "Cloudinary media optimization improving media management efficiency by 20%",
    ],
    tech: ["MERN Stack", "JWT Auth", "Razorpay", "Cloudinary", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/Lalbabu-Coder",
    github: "https://github.com/Lalbabu-Coder",
    highlightMetric: "25% Order Efficiency Boost",
  },
  {
    title: "Task Management System (TMS)",
    category: "Enterprise SaaS",
    tagline: "Hierarchical Role-Based Task Delegation & Analytics Hub",
    image: "/Projects/athenura_tms.jpg",
    description: "A role-based task management system with Firebase Google Authentication for Admin, Team Lead, and Employee roles, designed with hierarchical task delegation.",
    problem: "Complex multi-tier corporate hierarchies struggle with unauthorized task manipulation and delayed visibility on sprint bottlenecks.",
    solution: "Architected a secure permission hierarchy (Admin → Team Lead → Employee) with role-tailored tracking dashboards and granular state management.",
    architecture: {
      frontend: "React.js, Tailwind CSS, Context API",
      backend: "Node.js, Express.js MVC Controllers",
      database: "MongoDB with Schema Validation",
      auth: "Firebase Google Authentication & RBAC",
      infra: "Vercel Cloud Deployment",
    },
    features: [
      "Hierarchical delegation workflow: Admin → Team Lead → Employee",
      "Dedicated role-specific dashboards with distinct permission boundaries",
      "Firebase Google Authentication integration with secure token verification",
      "Real-time status updates and team productivity tracking metrics",
    ],
    tech: ["MERN Stack", "Firebase", "Google Auth", "React.js", "Node.js", "Express.js", "RBAC"],
    link: "https://task-management-system-1foc.vercel.app/",
    github: "https://github.com/Lalbabu-Coder",
    highlightMetric: "Three-Tier RBAC Architecture",
  },
  {
    title: "ATH Hackathon 2026 Platform",
    category: "Full Stack MERN",
    tagline: "National Hackathon Management & Automated Scoring Ecosystem",
    image: "/Projects/ath_hackathon.jpg",
    description: "National-level hackathon and developer challenge ecosystem developed at Athenura handling registrations, evaluations, team formation, and dynamic certificate generation.",
    problem: "Coordinating thousands of participant registrations, multi-stage judge evaluations, and automated certificate distribution under strict deadlines.",
    solution: "Engineered an end-to-end MERN platform featuring Role-Based Access Control for organizers, judges, and participants with indexed MongoDB collections.",
    architecture: {
      frontend: "React.js, Tailwind CSS",
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
    highlightMetric: "Production Hackathon Infra",
  },
  {
    title: "Athenura Billing & CRM SaaS",
    category: "Enterprise SaaS",
    tagline: "Automated Invoicing & Multi-Client Lifecycle Platform",
    image: "/Projects/athenura_billing.jpg",
    description: "A multi-tenant SaaS billing and client relationship management platform automating invoicing, recurring client subscriptions, case tracking, and financial analytics.",
    problem: "Manual invoicing and tracking client contracts resulted in billing errors and untracked subscription renewals.",
    solution: "Constructed a centralized SaaS CRM featuring automated PDF invoice generation, payment status workflows, and segregated client data collections.",
    architecture: {
      frontend: "React.js, Lucide Icons, Tailwind CSS",
      backend: "Node.js, Express.js MVC",
      database: "MongoDB Atlas Multi-Tenant Collections",
      auth: "JWT Authorization with Role Guards",
      infra: "Vercel Cloud Deployment",
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
    title: "VR AND Sons E-Commerce Platform",
    category: "Full Stack Web",
    tagline: "Luxury Product Showcase & Global Trade Catalog",
    image: "/Projects/VR AND Sons e-commerce homepage design.png",
    description: "A responsive product catalog and trade inquiry platform showcasing luxury export collections with fluid animations and responsive interactions.",
    problem: "Delivering high-resolution visual catalogs across global markets without sacrificing mobile load performance.",
    solution: "Architected a responsive luxury catalog with Next.js image optimization, fast page rendering, and direct trade inquiry portals.",
    architecture: {
      frontend: "React.js, Next.js, Tailwind CSS",
      backend: "RESTful API Endpoints",
      database: "Catalog Data Store",
      auth: "Inquiry Management Layer",
      infra: "Vercel Global Edge Network",
    },
    features: [
      "Interactive luxury showcase grid with responsive zoom previews",
      "Export product specification filters and direct trade inquiry portals",
      "Optimized asset loading and mobile touch support",
    ],
    tech: ["React.js", "Next.js", "Tailwind CSS", "REST APIs"],
    link: "https://vrandsons.com",
    github: "https://github.com/Lalbabu-Coder",
    highlightMetric: "Global Edge Network",
  },
];

const categories = ["All", "AI & Microservices", "Full Stack MERN", "Enterprise SaaS"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  const filteredProjects = allProjects.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 px-6 sm:px-10 bg-[#1a1e28] text-white border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
              <span className="text-blue-500 font-extrabold text-sm">/</span>
              <span>MY WORK</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight font-display tracking-tight">
              Featured Projects & Systems
            </h2>

            <p className="text-slate-400 text-sm sm:text-base font-sans">
              Production-ready web applications, autonomous AI agent platforms, and scalable SaaS solutions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white font-bold"
                    : "bg-[#14171f] text-slate-400 hover:text-white border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col justify-between bg-[#14171f] border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300"
            >
              <div>
                {/* Image */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative h-48 overflow-hidden bg-black/40 border-b border-white/5 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase bg-[#14171f]/90 text-blue-400 border border-white/10">
                    {project.category}
                  </div>
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-[#14171f]/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-white font-display group-hover:text-blue-400 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 pt-1 text-xs text-slate-400 font-sans">
                    {project.features.slice(0, 2).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 truncate">
                        <span className="text-blue-400 shrink-0">▹</span>
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  {project.link !== "#" && project.link.startsWith("http") ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all text-xs font-bold cursor-pointer"
                    >
                      <ExternalLink size={13} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all text-xs font-semibold cursor-pointer border border-white/5"
                    >
                      <span>Details</span>
                    </button>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 transition-all text-xs font-semibold cursor-pointer border border-white/5"
                  >
                    <Github size={13} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}