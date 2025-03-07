"use client";

import React from "react";
import HeroSection from "../components/HeroSection";
import SobreSection from "../components/SobreSection";
import SkillsSection from "../components/SkillsSection"; // <-- adicione aqui
import ProjectsSection from "../components/ProjectsSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <SobreSection />
      <SkillsSection /> {/* Seção Habilidades */}
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Outras seções ou elementos animados */}
      </motion.div>
      <ScrollToTopButton />
    </div>
  );
}
