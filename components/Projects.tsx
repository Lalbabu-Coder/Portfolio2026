"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Task Management System",
    image: "/Projects/Task management interface overview.png",
    description:
      "A structured task management platform with role-based workflow, deadline tracking, task lifecycle management, and multi-team execution support.",
    tech: ["Next.js", "MongoDB", "Node.js", "Express", "Tailwind CSS"],
    link: "https://task-management-liart-nu.vercel.app",
  },
  {
    title: "Furniture Website",
    image: "/Projects/Design your perfect sanctuary online.png",
    description:
      "A premium furniture landing page with elegant UI, luxury product presentation, and immersive modern design.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://furniture-website-8sts.vercel.app",
  },
  {
    title: "School Management Website",
    image: "/Projects/Grapura School homepage - inspiring education.png",
    description:
      "A school platform with admission flow, education branding, modern hero section, and responsive academic interface.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    link: "https://school-management-phi-sandy.vercel.app",
  },
  {
    title: "VR AND Sons E-Commerce",
    image: "/Projects/VR AND Sons e-commerce homepage design.png",
    description:
      "A modern export-import business website showcasing premium products with unique grid layout and elegant branding.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    link: "https://vrandsons.com",
  },
  {
    title: "Food Delivery Website",
    image: "/Projects/food.png",
    description:
      "A modern food delivery platform with cart system, authentication, and responsive ordering flow.",
    tech: ["React", "Next.js", "Tailwind", "MongoDB", "Node.js"],
    link: "https://your-food-link.vercel.app",
  },
  {
    title: "MultiCard E-Commerce Website",
    image: "/Projects/multicard.png",
    description:
      "An e-commerce platform featuring multiple product cards, filters, and cart interaction.",
    tech: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
    link: "https://multicart-sigma.vercel.app",
  },
  {
    title: "CRM Management System",
    image: "/Projects/crm.png",
    description:
      "CRM platform for lead tracking, sales dashboard, and role-based data management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://your-crm-link.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(59,130,246,0.6)]"
      >
        Projects
      </motion.h2>

      <p className="text-center mt-4 text-gray-400">
        Real-world projects showcasing my frontend & full-stack skills
      </p>

      {/* Grid */}
      <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.12)] hover:shadow-[0_0_70px_rgba(59,130,246,0.45)] hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-[240px] overflow-hidden bg-black/20">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 rounded-lg bg-blue-600/90 border border-blue-500/50 hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300 text-sm font-semibold"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}