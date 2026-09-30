"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Cpu, Code2, Layers, Terminal, Rocket } from "lucide-react";

const faqs = [
  {
    icon: Cpu,
    q: "What technologies & frameworks do you specialize in?",
    a: "I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, and autonomous AI Agent systems (LangGraph, Groq Llama 3.3 70B, Gemini API, Qdrant Vector DB, and RAG pipelines). I containerize applications using Docker and build high-performance microservices.",
  },
  {
    icon: Code2,
    q: "What production-ready projects have you engineered?",
    a: "I have built end-to-end full-stack platforms including NexusAI (a multi-agent AI orchestration platform), MultiCard E-Commerce (handling 100+ products with Razorpay and Cloudinary), and a Role-Based Task Management System (TMS) with Firebase authentication and hierarchical delegation.",
  },
  {
    icon: Layers,
    q: "How do you handle backend security and authorization?",
    a: "I implement JSON Web Token (JWT) stateless auth, bcrypt password hashing, and granular Role-Based Access Control (RBAC). For microservices, I configure CORS, rate limiting, and input sanitization middleware.",
  },
  {
    icon: Terminal,
    q: "How do you optimize database queries and API response times?",
    a: "I utilize MongoDB compound indexing, projection optimization, lean queries, and Redis caching strategies. I optimize REST endpoints to maintain sub-100ms response times for high-frequency queries.",
  },
  {
    icon: Rocket,
    q: "How do you approach cloud deployment & CI/CD workflows?",
    a: "I containerize web applications using Docker, deploy frontends on Vercel with automatic edge network caching, host backend APIs on cloud platforms (Render, AWS basics), and enforce clean environment separation using .env configurations.",
  },
];

export default function FAQs() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="relative py-24 sm:py-32 px-6 sm:px-10 bg-[#1a1e28] text-white border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* HEADING */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-slate-300">
            <span className="text-blue-500 font-extrabold text-sm">/</span>
            <span>FAQ</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight font-display tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Technical architecture decisions, performance optimizations, and full-stack engineering standards.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-3.5">
          {faqs.map((item, i) => {
            const Icon = item.icon;
            const isOpen = active === i;

            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#14171f] border-blue-500/50"
                    : "bg-[#14171f] border-white/5 hover:border-white/15"
                }`}
              >
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex justify-between items-center gap-4 px-6 py-4 sm:py-5 text-left text-white font-semibold text-base sm:text-lg cursor-pointer font-display"
                >
                  <div className="flex items-center gap-3.5">
                    <Icon size={18} className={isOpen ? "text-blue-400" : "text-slate-400"} />
                    <span>{item.q}</span>
                  </div>

                  <div className={`p-1.5 rounded-full transition-transform duration-300 shrink-0 ${
                    isOpen ? "rotate-180 text-blue-400" : "text-slate-400"
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-5 pt-0 text-slate-300 leading-relaxed text-xs sm:text-sm font-sans border-t border-white/5"
                    >
                      <p className="pt-3">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
