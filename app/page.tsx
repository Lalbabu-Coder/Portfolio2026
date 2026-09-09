"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import CustomCursor from "@/components/CustomCursor";
import WelcomeOverlay from "@/components/WelcomeOverlay";
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
import AITerminal from "@/components/AITerminal";

// Dynamically import SceneContainer with SSR disabled to ensure WebGL Canvas compatibility
const SceneContainer = dynamic(
  () => import("@/components/canvas/SceneContainer"),
  { ssr: false }
);

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedSkillCategory, setSelectedSkillCategory] = useState("all");
  const [showTerminalModal, setShowTerminalModal] = useState(false);

  // Active section intersection observer
  useEffect(() => {
    const sections = [
      "hero",
      "about",
      "experience",
      "skills",
      "projects",
      "architecture",
      "education",
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
  }, [hasEntered]);

  return (
    <SmoothScroll>
      {/* 1. Custom Glowing WebGL Cursor */}
      <CustomCursor />

      {/* 2. Fixed Fullscreen 3D WebGL Canvas Layer */}
      <SceneContainer
        hasEntered={hasEntered}
        activeSection={activeSection}
        selectedSkillCategory={selectedSkillCategory}
        onPortalClick={() => {
          const contactEl = document.getElementById("contact");
          contactEl?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* 3. Cinematic Welcome Gateway */}
      <AnimatePresence>
        {!hasEntered && (
          <WelcomeOverlay
            hasEntered={hasEntered}
            onEnter={() => setHasEntered(true)}
          />
        )}
      </AnimatePresence>

      {/* 4. Main Interactive Portfolio HUD & Content */}
      <div className={`relative z-10 w-full min-h-screen transition-opacity duration-1000 ${hasEntered ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <Navbar
          activeSection={activeSection}
          onOpenTerminal={() => setShowTerminalModal(true)}
        />

        <main className="w-full">
          <Hero onOpenTerminal={() => setShowTerminalModal(true)} />
          <About />
          <Experience />
          <Skills
            activeCategory={selectedSkillCategory}
            onCategoryChange={(cat) => setSelectedSkillCategory(cat)}
          />
          <Projects />
          <ArchitectureSection />
          <EducationHonors />
          <FAQs />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* 5. CLI Terminal Modal */}
      <AnimatePresence>
        {showTerminalModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <div className="w-full max-w-3xl relative">
              <button
                onClick={() => setShowTerminalModal(false)}
                className="absolute -top-10 right-0 text-white hover:text-orange-400 text-xs font-mono cursor-pointer px-3 py-1 rounded bg-white/10"
              >
                [ CLOSE TERMINAL ✕ ]
              </button>
              <AITerminal />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SmoothScroll>
  );
}
