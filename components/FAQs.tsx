"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card3D from "@/components/Card3D";

const faqs = [
  {
    q: "What technologies do you specialize in?",
    a: "I specialize in frontend-focused full-stack development using React, Next.js, Tailwind CSS, and JavaScript. On the backend, I work with Node.js, Express, MongoDB, and REST APIs to build scalable and production-ready applications.",
  },
  {
    q: "What kind of projects have you built?",
    a: "I’ve built real-world projects including a Food Delivery Website, a Multi-Card E-Commerce Platform, and a CRM Management System. These projects include authentication, dashboards, role-based access, carts, filters, and responsive UI.",
  },
  {
    q: "Do you have experience with full-stack development?",
    a: "Yes. While my strength is frontend development, I actively build full-stack applications by integrating APIs, managing databases, handling authentication, and designing backend workflows using Node.js and MongoDB.",
  },
  {
    q: "How do you ensure code quality and performance?",
    a: "I focus on clean component architecture, reusable code, proper state management, and performance optimization. I also follow best practices like modular design, optimized rendering, and consistent UI patterns.",
  },
  {
    q: "Do you have experience with deployment and hosting?",
    a: "Yes. I deploy projects using platforms like Vercel and manage environment variables, builds, and production-ready setups to ensure smooth performance and reliability.",
  },
];

export default function FAQs() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-32 px-6 md:px-20">

      {/* HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          text-center text-4xl md:text-5xl font-extrabold
          bg-gradient-to-r from-blue-500 to-cyan-400
          bg-clip-text text-transparent
          drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]
          dark:drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]
        "
      >
        Technical Insights
      </motion.h2>

      <p className="text-center mt-4 text-slate-600 dark:text-gray-400 max-w-2xl mx-auto font-sans">
        Explore my technical skills, development mindset, and how I build
        scalable, clean, and performance-driven applications.
      </p>

      {/* FAQ LIST */}
      <div className="mt-16 max-w-4xl mx-auto space-y-5">

        {faqs.map((item, i) => (
          <div key={i} className="w-full">
            <Card3D
              tiltAngle={6}
              translateDepth={15}
              className="
                bg-white/60 dark:bg-white/5 backdrop-blur-xl
                border border-slate-200/80 dark:border-white/10
                rounded-2xl overflow-hidden
                shadow-[0_0_35px_rgba(59,130,246,0.06)] dark:shadow-[0_0_35px_rgba(59,130,246,0.12)]
                hover:shadow-[0_0_55px_rgba(59,130,246,0.25)] dark:hover:shadow-[0_0_55px_rgba(59,130,246,0.35)]
                transition-all duration-300 cursor-default
              "
            >
              {/* QUESTION */}
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="
                  w-full flex justify-between items-center
                  px-6 py-5 text-left
                  text-slate-800 dark:text-white font-medium text-lg cursor-pointer
                "
              >
                {item.q}
                <span
                  className={`
                    text-2xl text-blue-500 dark:text-blue-400 transition-transform
                    ${active === i ? "rotate-45" : ""}
                  `}
                >
                  +
                </span>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-5 text-slate-600 dark:text-gray-400 leading-relaxed text-sm md:text-base font-sans"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </Card3D>
          </div>
        ))}

      </div>
    </section>
  );
}
