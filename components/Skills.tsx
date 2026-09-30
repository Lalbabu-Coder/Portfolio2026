"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  ShieldCheck,
  Server,
  Globe,
  Bot,
  Zap,
  Boxes,
  Search,
  X,
  Layers,
  Terminal,
  Cloud,
  Cpu
} from "lucide-react";

export interface SkillItem {
  name: string;
  category: "languages" | "frontend" | "backend" | "databases" | "ai" | "devops";
  badge: string;
  description: string;
  icon: any;
}

export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & APIs" },
  { id: "databases", label: "Databases" },
  { id: "ai", label: "AI/ML Integration" },
  { id: "devops", label: "DevOps & Tools" },
];

export const allSkillsList: SkillItem[] = [
  // 1. Languages
  {
    name: "JavaScript (ES6+)",
    category: "languages",
    badge: "Core Language",
    description: "Modern ES6+, async/await, closures, prototypes, event loops, DOM APIs, and functional patterns.",
    icon: Code2,
  },
  {
    name: "TypeScript",
    category: "languages",
    badge: "Type Safety",
    description: "Strict static typing, interfaces, generics, type guards, and TS configurations.",
    icon: Code2,
  },
  {
    name: "Python",
    category: "languages",
    badge: "Proficient",
    description: "Scripting, asynchronous programming, automation, AI agent frameworks, and backend logic.",
    icon: Terminal,
  },
  {
    name: "Java",
    category: "languages",
    badge: "Object-Oriented",
    description: "Core OOP concepts, multithreading, data structures, and foundational algorithms.",
    icon: Code2,
  },

  // 2. Frontend
  {
    name: "React.js",
    category: "frontend",
    badge: "Specialized",
    description: "Component architecture, hooks, virtual DOM reconciliation, custom hooks, and state management.",
    icon: Code2,
  },
  {
    name: "Next.js",
    category: "frontend",
    badge: "Advanced",
    description: "App router, Server-Side Rendering (SSR), Server Components, and client hydration.",
    icon: Globe,
  },
  {
    name: "Redux Toolkit",
    category: "frontend",
    badge: "Global State",
    description: "Centralized state management, RTK slices, and predictable data flow architectures.",
    icon: Boxes,
  },
  {
    name: "Context API",
    category: "frontend",
    badge: "React State",
    description: "Lightweight state broadcasting, theme/auth providers, and decoupled UI layers.",
    icon: Layers,
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    badge: "Modern Styling",
    description: "Utility-first responsive layouts, custom design systems, dark modes, and CSS variables.",
    icon: Layers,
  },
  {
    name: "Framer Motion",
    category: "frontend",
    badge: "Interactions",
    description: "Fluid micro-interactions, layout transitions, exit animations, and gesture controls.",
    icon: Zap,
  },
  {
    name: "HTML5 & CSS3",
    category: "frontend",
    badge: "Semantic Web",
    description: "Semantic elements, modern flexbox/grid layouts, responsive typography, and accessibility.",
    icon: Globe,
  },

  // 3. Backend
  {
    name: "Node.js",
    category: "backend",
    badge: "Backend Runtime",
    description: "Asynchronous I/O, event-driven server design, streaming, and package management.",
    icon: Server,
  },
  {
    name: "Express.js",
    category: "backend",
    badge: "Server Framework",
    description: "Modular routing, middleware pipelines, error handling, and MVC controller patterns.",
    icon: Server,
  },
  {
    name: "REST APIs",
    category: "backend",
    badge: "API Architecture",
    description: "Resource-oriented endpoint design, CRUD operations, query filtering, and HTTP standards.",
    icon: Server,
  },
  {
    name: "JWT Authentication",
    category: "backend",
    badge: "Security",
    description: "Stateless JSON Web Tokens, cookie authentication, bcrypt password hashing, and token refresh.",
    icon: ShieldCheck,
  },
  {
    name: "Role-Based Access Control (RBAC)",
    category: "backend",
    badge: "Enterprise Security",
    description: "Permission matrices, role guards, and resource-level access enforcement.",
    icon: ShieldCheck,
  },
  {
    name: "Firebase Authentication",
    category: "backend",
    badge: "Auth Provider",
    description: "Google OAuth, social sign-ins, token verification, and session persistence.",
    icon: ShieldCheck,
  },
  {
    name: "Microservices Architecture",
    category: "backend",
    badge: "Scalable Systems",
    description: "Decoupled service design, API gateways, inter-service communication, and fault tolerance.",
    icon: Boxes,
  },
  {
    name: "MVC Architecture",
    category: "backend",
    badge: "Clean Architecture",
    description: "Model-View-Controller pattern enforcing clean separation of concerns and maintainability.",
    icon: Layers,
  },
  {
    name: "WebSockets",
    category: "backend",
    badge: "Real-Time",
    description: "Bidirectional full-duplex communication channels, live notifications, and real-time status updates.",
    icon: Zap,
  },

  // 4. Databases
  {
    name: "MongoDB",
    category: "databases",
    badge: "NoSQL DB",
    description: "Document-oriented databases, flexible schemas, indexing strategies, and high-throughput queries.",
    icon: Database,
  },
  {
    name: "MongoDB Atlas",
    category: "databases",
    badge: "Cloud DB",
    description: "Managed cloud clusters, replication, auto-scaling, backups, and security IP whitelisting.",
    icon: Cloud,
  },
  {
    name: "Mongoose ODM",
    category: "databases",
    badge: "Schema Modeling",
    description: "Data modeling, schema validation, middleware hooks, population, and query aggregation.",
    icon: Database,
  },
  {
    name: "Qdrant Vector DB",
    category: "databases",
    badge: "Vector Search",
    description: "High-dimensional vector storage, HNSW indexing, and sub-second similarity search for RAG.",
    icon: Database,
  },
  {
    name: "Redis",
    category: "databases",
    badge: "In-Memory Store",
    description: "In-memory key-value caching, session management, Pub/Sub messaging, and rate-limiting.",
    icon: Database,
  },

  // 5. AI/ML Integration
  {
    name: "LangGraph",
    category: "ai",
    badge: "Agent Orchestration",
    description: "Stateful multi-agent workflows, cyclical agent loops, human-in-the-loop, and condition branches.",
    icon: Cpu,
  },
  {
    name: "LangChain",
    category: "ai",
    badge: "AI Chains",
    description: "Context retrieval chains, document loaders, prompt chaining, and tool integration.",
    icon: Bot,
  },
  {
    name: "Multi-Agent Systems",
    category: "ai",
    badge: "Autonomous Swarms",
    description: "Coordinating specialized agents (Planner, Researcher, Coder, Critic) to solve complex goals.",
    icon: Cpu,
  },
  {
    name: "Groq Llama 3.3 70B",
    category: "ai",
    badge: "Fast Inference",
    description: "Ultra-fast LPUs, structured JSON outputs, reasoning chains, and prompt optimization.",
    icon: Bot,
  },
  {
    name: "Gemini API & 2.5 Flash",
    category: "ai",
    badge: "Multimodal AI",
    description: "Large context window reasoning, Gemini embeddings, and API function calling.",
    icon: Bot,
  },
  {
    name: "OpenAI API",
    category: "ai",
    badge: "LLM APIs",
    description: "Chat completions, tool calling, embeddings, system prompts, and temperature tuning.",
    icon: Bot,
  },
  {
    name: "RAG Pipelines",
    category: "ai",
    badge: "Knowledge Retrieval",
    description: "Semantic search, chunking strategies, vector embeddings, and hallucination reduction.",
    icon: Database,
  },
  {
    name: "Prompt Engineering",
    category: "ai",
    badge: "Model Steering",
    description: "Few-shot prompting, chain-of-thought, zero-shot system instruction, and guardrailing.",
    icon: Terminal,
  },

  // 6. DevOps & Tools
  {
    name: "Docker",
    category: "devops",
    badge: "Containerization",
    description: "Containerizing microservices, multi-stage builds, Dockerfiles, and container networking.",
    icon: Boxes,
  },
  {
    name: "CI/CD & GitHub Actions",
    category: "devops",
    badge: "Automation",
    description: "Automated test runs, build verification, and continuous deployment pipelines.",
    icon: Zap,
  },
  {
    name: "Git & GitHub",
    category: "devops",
    badge: "Version Control",
    description: "Branching strategies, pull requests, merge conflict resolution, and collaborative workflows.",
    icon: Code2,
  },
  {
    name: "Postman",
    category: "devops",
    badge: "API Testing",
    description: "REST API testing, automated collection runners, environment variables, and mock servers.",
    icon: Terminal,
  },
  {
    name: "Cloudinary",
    category: "devops",
    badge: "Media CDN",
    description: "Cloud image/video upload APIs, transformations, responsive compression, and media pipelines.",
    icon: Cloud,
  },
  {
    name: "Vercel & Render",
    category: "devops",
    badge: "Cloud Hosting",
    description: "Production deployments for frontend web apps, Node.js background workers, and web services.",
    icon: Globe,
  },
  {
    name: "AWS Basics",
    category: "devops",
    badge: "Cloud Infrastructure",
    description: "Foundational cloud services including EC2 compute instances, S3 object storage, and IAM roles.",
    icon: Cloud,
  },
];

interface SkillsProps {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

export default function Skills({ activeCategory, onCategoryChange }: SkillsProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSkills = useMemo(() => {
    return allSkillsList.filter((s) => {
      const matchesCat = activeCategory === "all" || s.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        s.name.toLowerCase().includes(query) ||
        s.description.toLowerCase().includes(query) ||
        s.badge.toLowerCase().includes(query);
      return matchesCat && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-6 sm:px-10 bg-[#14171f] text-white border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
              <span className="text-blue-500 font-extrabold text-sm">/</span>
              <span>TECHNICAL SKILLS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight font-display tracking-tight">
              Skills, Libraries & Tools
            </h2>

            <p className="text-slate-400 text-sm sm:text-base font-sans">
              Categorized technical proficiencies spanning full-stack languages, backend APIs, vector databases, and AI frameworks.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full pl-9 pr-8 py-2 rounded-lg bg-[#1a1e28] border border-white/10 text-white placeholder:text-slate-500 text-xs focus:outline-none focus:border-blue-500 transition-all font-sans"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X size={12} />
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white font-bold"
                    : "bg-[#1a1e28] text-slate-400 hover:text-white border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* SKILLS CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon || Code2;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: index * 0.015 }}
                  className="p-5 rounded-2xl bg-[#1a1e28] border border-white/5 hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform">
                        <Icon size={18} />
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                        {skill.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white font-display group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h3>

                    <p className="mt-1.5 text-xs text-slate-400 font-sans leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="capitalize">{skill.category}</span>
                    <span className="text-blue-400">✓ Production</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-400 text-sm font-sans">
            No skills found matching "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
}
