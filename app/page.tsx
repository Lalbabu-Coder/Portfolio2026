"use client";

import { useState, useEffect } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ArchitectureSection from "@/components/ArchitectureSection";
import EducationHonors from "@/components/EducationHonors";
import FAQs from "@/components/FAQs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedSkillCategory, setSelectedSkillCategory] = useState("all");

  // Active section intersection observer
  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "experience",
      "projects",
      "skills",
      "education",
      "architecture",
      "faqs",
      "contact",
    ];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: [0.25, 0.5, 0.75],
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SmoothScroll>
      <div className="relative z-10 w-full min-h-screen bg-[#02040a] text-slate-100">
        <Navbar activeSection={activeSection} />

        <main className="w-full">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills
            activeCategory={selectedSkillCategory}
            onCategoryChange={(cat) => setSelectedSkillCategory(cat)}
          />
          <EducationHonors />
          <ArchitectureSection />
          <FAQs />
          <Contact />
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
