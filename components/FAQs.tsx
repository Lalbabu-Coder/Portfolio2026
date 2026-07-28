"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card3D from "@/components/Card3D";
import { 
  Sparkles, 
  Cpu, 
  Code2, 
  Layers, 
  Terminal, 
  Rocket, 
  ChevronDown 
} from "lucide-react";

const faqs = [
  {
    icon: Cpu,
    q: "What technologies & frameworks do you specialize in?",
    a: "I specialize in autonomous AI Agent development (LangChain, OpenAI API, RAG/Vector DBs) and full-stack MERN engineering (React, Next.js, Node.js, Express, MongoDB). I containerize services using Docker and build high-performance microservices.",
  },
  {
    icon: Code2,
    q: "What production-ready projects have you engineered?",
    a: "I've built end-to-end full-stack systems including an Enterprise CRM platform, an AI-powered Code Assistant Terminal, a Multi-Card E-Commerce Engine, and a Real-time Food Delivery Web Application with JWT authentication, RBAC, and payment integrations.",
  },
  {
    icon: Layers,
    q: "How do you handle backend security and authorization?",
    a: "I implement JSON Web Token (JWT) stateless auth, bcrypt password hashing, and granular Role-Based Access Control (RBAC). For microservices, I configure CORS, rate limiting, and input sanitization middleware.",
  },
  {
    icon: Terminal,
    q: "How do you optimize database queries and API response times?",
    a: "I utilize MongoDB compound indexing, projection optimization, lean queries, and caching strategies. At Graphura India, I reduced average API response times by ~30% through index tuning and database refactoring.",
  },
  {
    icon: Rocket,
    q: "How do you approach cloud deployment & CI/CD workflows?",
    a: "I containerize web applications using Docker, deploy frontends on Vercel with automatic edge network caching, host backend APIs on cloud platforms, and enforce clean environment separation using .env configurations.",
  },
];

export default function FAQs() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 sm:py-32 px-4 sm:px-6 md:px-16 overflow-hidden bg-[#070709] text-white w-full max-w-full border-t border-white/10 relative">
      
      {/* Background Ambient Glows */}
      <div className="absolute left-[-10%] top-[20%] w-[45vw] max-w-[500px] h-[45vw] max-h-[500px] bg-purple-900/20 blur-[170px] rounded-full pointer-events-none z-0" />
      <div className="absolute right-[-10%] bottom-[20%] w-[45vw] max-w-[500px] h-[45vw] max-h-[500px] bg-cyan-600/15 blur-[170px] rounded-full pointer-events-none z-0" />

      {/* HEADING */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4 font-mono"
        >
          <Sparkles size={14} />
          <span>Engineering Knowledge Base</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight font-display tracking-tight"
        >
          Technical <span className="text-orange-500">Insights</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-sans"
        >
          Explore my technical architecture decisions, system performance optimizations, and full-stack engineering standards.
        </motion.p>
      </div>

      {/* FAQ LIST */}
      <div className="mt-12 sm:mt-16 max-w-4xl mx-auto space-y-4 sm:space-y-5 relative z-10">

        {faqs.map((item, i) => {
          const Icon = item.icon;
          const isOpen = active === i;

          return (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="w-full"
            >
              <Card3D
                tiltAngle={3}
                translateDepth={10}
                className={`
                  bg-slate-950/60 backdrop-blur-2xl
                  border transition-all duration-300 rounded-2xl overflow-hidden cursor-default
                  ${isOpen 
                    ? "border-orange-500/40 shadow-[0_0_35px_rgba(249,115,22,0.15)]" 
                    : "border-white/10 hover:border-white/20 shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
                  }
                `}
              >
                {/* QUESTION BUTTON */}
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="
                    w-full flex justify-between items-center gap-4
                    px-5 sm:px-6 py-4 sm:py-5 text-left
                    text-white font-semibold text-sm sm:text-base md:text-lg cursor-pointer font-display
                  "
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-xl transition-colors shrink-0 ${
                      isOpen ? "bg-orange-500/20 text-orange-400" : "bg-white/5 text-slate-400"
                    }`}>
                      <Icon size={18} />
                    </div>
                    <span>{item.q}</span>
                  </div>

                  <div className={`
                    p-1.5 rounded-full transition-all duration-300 shrink-0
                    ${isOpen ? "bg-orange-500 text-white rotate-180" : "bg-white/5 text-slate-400"}
                  `}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {/* ANSWER CONTENT */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 sm:px-6 pb-5 pt-1 text-slate-300 leading-relaxed text-xs sm:text-sm md:text-base font-sans border-t border-white/5"
                    >
                      <p className="pl-[2.75rem]">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card3D>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
