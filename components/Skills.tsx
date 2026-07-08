"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card3D from "@/components/Card3D";
import Skills3DSphere from "@/components/Skills3DSphere";

interface SkillItem {
  name: string;
  level: number; // percentage (e.g., 90)
  rating: string; // e.g., "Expert", "Advanced"
  detail: string; // Brief description/note
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
  themeColor: string; // tailwind color class
  accentGradient: string; // gradient classes
}

const skillCategories: Record<string, SkillCategory> = {
  frontend: {
    title: "Frontend Development",
    themeColor: "text-cyan-600 dark:text-cyan-400 border-cyan-500/20 bg-cyan-500/5",
    accentGradient: "from-cyan-500 via-blue-500 to-indigo-500",
    skills: [
      { name: "React.js", level: 92, rating: "Expert", detail: "Component architecture, hooks, state management" },
      { name: "Next.js", level: 88, rating: "Expert", detail: "App router, SSR, SSG, server actions, api routes" },
      { name: "Redux Toolkit", level: 85, rating: "Advanced", detail: "Global slice state, RTK Query, middleware" },
      { name: "Context API", level: 90, rating: "Expert", detail: "Lightweight state sharing, provider patterns" },
      { name: "TanStack Query", level: 82, rating: "Advanced", detail: "Server state caching, prefetching, mutations" },
      { name: "Framer Motion", level: 80, rating: "Advanced", detail: "Production micro-interactions, 3D/page transitions" },
      { name: "Material UI (MUI)", level: 85, rating: "Advanced", detail: "Theme customizations, responsive layouts" },
      { name: "Tailwind CSS", level: 95, rating: "Expert", detail: "Utility first, layouts, custom responsive systems" },
      { name: "HTML5 & CSS3", level: 95, rating: "Expert", detail: "Semantic markup, flexbox, grid, keyframe anims" },
      { name: "Responsive Web Design", level: 95, rating: "Expert", detail: "Mobile-first layouts, breakpoints optimization" },
    ],
  },
  backend: {
    title: "Backend Engineering",
    themeColor: "text-green-600 dark:text-green-400 border-green-500/20 bg-green-500/5",
    accentGradient: "from-green-500 via-teal-500 to-blue-500",
    skills: [
      { name: "Node.js", level: 90, rating: "Expert", detail: "Event-driven architecture, asynchronous processing" },
      { name: "Express.js", level: 90, rating: "Expert", detail: "Custom middlewares, router structures, robust controllers" },
      { name: "RESTful APIs", level: 92, rating: "Expert", detail: "Secure endpoint design, optimized payload, response codes" },
      { name: "JWT Authentication", level: 88, rating: "Advanced", detail: "Stateless security, token signing & refresh mechanisms" },
      { name: "Role-Based Access Control (RBAC)", level: 85, rating: "Advanced", detail: "Multi-role dashboards, resource locks" },
      { name: "MVC Architecture", level: 90, rating: "Expert", detail: "Clean separation of model, view, controller logs" },
      { name: "Microservices", level: 78, rating: "Proficient", detail: "Service isolation, REST coordination, scalability" },
    ],
  },
  databases: {
    title: "Databases & Storage",
    themeColor: "text-emerald-600 dark:text-emerald-400 border-emerald-500/20 bg-emerald-500/5",
    accentGradient: "from-emerald-500 via-teal-500 to-cyan-500",
    skills: [
      { name: "MongoDB", level: 88, rating: "Advanced", detail: "NoSQL architecture, schema design, collections" },
      { name: "MongoDB Atlas", level: 85, rating: "Advanced", detail: "Cloud hosting, clusters maintenance, security rules" },
      { name: "Mongoose", level: 88, rating: "Advanced", detail: "ODM modeling, subdocuments, hooks & validations" },
      { name: "MySQL", level: 80, rating: "Proficient", detail: "Relational tables, complex joins, indexing" },
      { name: "Database Design", level: 85, rating: "Advanced", detail: "Normalization, indexing strategies for performance" },
    ],
  },
  languages: {
    title: "Programming Languages",
    themeColor: "text-yellow-600 dark:text-yellow-400 border-yellow-500/20 bg-yellow-500/5",
    accentGradient: "from-yellow-500 via-orange-500 to-amber-500",
    skills: [
      { name: "JavaScript (ES6+)", level: 92, rating: "Expert", detail: "OOP, event loop, closures, functional coding" },
      { name: "Python", level: 78, rating: "Proficient", detail: "Data structures, scripting, algorithm building" },
    ],
  },
  devops: {
    title: "DevOps & Tooling",
    themeColor: "text-indigo-600 dark:text-indigo-400 border-indigo-500/20 bg-indigo-500/5",
    accentGradient: "from-indigo-500 via-purple-500 to-blue-500",
    skills: [
      { name: "Docker", level: 82, rating: "Advanced", detail: "Containerizing microservices, dockerfiles, compose" },
      { name: "Git", level: 90, rating: "Expert", detail: "Branching workflows, merge conflict resolutions, rebase" },
      { name: "GitHub", level: 90, rating: "Expert", detail: "Repository hosting, actions, pull request management" },
      { name: "VS Code", level: 95, rating: "Expert", detail: "Optimized environment, workspace configurations" },
      { name: "Cloudinary", level: 85, rating: "Advanced", detail: "Media assets storage, optimization, upload API" },
      { name: "Vercel", level: 88, rating: "Advanced", detail: "Serverless web deployment, environment variables" },
      { name: "AWS Basics", level: 70, rating: "Proficient", detail: "S3 hosting, EC2 instances, basic configuration" },
      { name: "CI/CD", level: 75, rating: "Proficient", detail: "Automated pipelines, build & test scripts integration" },
    ],
  },
  testing: {
    title: "Testing & QA Methodologies",
    themeColor: "text-rose-600 dark:text-rose-400 border-rose-500/20 bg-rose-500/5",
    accentGradient: "from-rose-500 via-pink-500 to-orange-500",
    skills: [
      { name: "API Testing", level: 88, rating: "Advanced", detail: "Postman test scripts, payload validation, status codes" },
      { name: "Manual Testing", level: 85, rating: "Advanced", detail: "Use-case validations, edge scenarios discovery" },
      { name: "Postman", level: 90, rating: "Expert", detail: "Collections, environments, requests chaining" },
      { name: "Selenium (Basic)", level: 65, rating: "Proficient", detail: "Web automation scripts, element selectors" },
      { name: "SDLC & STLC", level: 88, rating: "Advanced", detail: "Agile sprints, bug lifecycle, software methodologies" },
    ],
  },
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("frontend");

  const currentCategory = skillCategories[activeTab];

  return (
    <section id="skills" className="relative py-32 px-6 md:px-20 overflow-visible">
      {/* Background radial effects */}
      <div className="absolute right-[5%] top-[15%] w-[35vw] h-[35vw] bg-blue-600/5 dark:bg-blue-600/10 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute left-[5%] bottom-[15%] w-[30vw] h-[30vw] bg-cyan-600/5 dark:bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none z-0" />

      {/* SECTION HEADING */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-4xl md:text-5xl font-extrabold
            bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500
            bg-clip-text text-transparent
            drop-shadow-[0_0_35px_rgba(59,130,246,0.35)]
            dark:drop-shadow-[0_0_35px_rgba(59,130,246,0.65)]
            font-display
          "
        >
          My Technical Arsenal
        </motion.h2>

        <p className="mt-4 text-slate-500 dark:text-gray-400 text-base md:text-lg font-sans">
          A fully verified engineering toolkit structured for robustness, clean code, and performance optimization.
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mt-20 grid lg:grid-cols-12 gap-10 max-w-7xl mx-auto items-start">
        
        {/* LEFT COLUMN: 3D SPHERE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex flex-col items-center justify-center"
        >
          <Card3D className="
            w-full rounded-3xl p-8
            bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl
            border border-slate-200/80 dark:border-white/10
            shadow-[0_0_50px_rgba(59,130,246,0.05)] dark:shadow-[0_0_50px_rgba(59,130,246,0.1)]
            transition-all duration-500 hover:border-blue-500/30
            hover:shadow-[0_0_80px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_0_80px_rgba(59,130,246,0.35)]
          ">
            <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400 tracking-wide font-display text-center">
              Interactive 3D Tech Cloud
            </h3>
            <p className="text-xs text-slate-500 dark:text-gray-400 text-center mb-4">
              Hover inside the sphere to guide the spin. Drag to rotate in 3D.
            </p>
            
            <Skills3DSphere />
            
            <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-white/10 text-center">
              <span className="inline-block text-xs font-semibold px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                ⚡ Interactive Hologram
              </span>
            </div>
          </Card3D>
        </motion.div>

        {/* RIGHT COLUMN: CATEGORIZED DETAILED DASHBOARD */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="w-full rounded-3xl p-6 md:p-8 bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.05)] dark:shadow-[0_0_50px_rgba(59,130,246,0.1)]">
            
            {/* TABS SELECTOR */}
            <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200/60 dark:border-white/10">
              {Object.entries(skillCategories).map(([key, category]) => {
                const isActive = activeTab === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`
                      px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer border
                      ${
                        isActive
                          ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                          : "bg-slate-100 hover:bg-slate-200 dark:bg-white/5 border-slate-200/50 dark:border-white/5 text-slate-600 dark:text-gray-400 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
                      }
                    `}
                  >
                    {category.title.split(" ")[0]} {/* First word for simplicity */}
                  </button>
                );
              })}
            </div>

            {/* TAB CONTENT PANEL */}
            <div className="mt-8 min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white font-display">
                      {currentCategory.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${currentCategory.themeColor}`}>
                      {currentCategory.skills.length} Skills
                    </span>
                  </div>

                  {/* SKILLS DETAILED PROGRESS BARS */}
                  <div className="space-y-6">
                    {currentCategory.skills.map((skill, index) => (
                      <div key={index} className="group/bar">
                        {/* Label & Rating */}
                        <div className="flex justify-between items-end mb-2">
                          <div>
                            <span className="text-sm font-bold text-slate-800 dark:text-white group-hover/bar:text-blue-500 dark:group-hover/bar:text-cyan-400 transition-colors duration-200">
                              {skill.name}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-gray-400 ml-2 hidden sm:inline font-sans">
                              — {skill.detail}
                            </span>
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xs font-bold text-slate-500 dark:text-gray-400 font-sans">
                              {skill.rating}
                            </span>
                            <span className="text-sm font-extrabold text-blue-600 dark:text-cyan-400">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Visual bar tracker */}
                        <div className="h-2 w-full bg-slate-200 dark:bg-slate-800/80 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: index * 0.05 }}
                            className={`h-full bg-gradient-to-r ${currentCategory.accentGradient} rounded-full`}
                          />
                        </div>
                        
                        {/* Mobile description only */}
                        <div className="sm:hidden mt-1 text-[11px] text-slate-500 dark:text-gray-400 leading-normal font-sans">
                          {skill.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
}
