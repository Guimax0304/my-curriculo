"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/ProjectsSection.module.css";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Clinica Django",
      description: "Sistema de gerenciamento de clínica",
      link: "https://guilhermevl-clinica-django.hf.space/usuarios/login/",
    },
    // Adicione mais projetos conforme necessário
  ];

  return (
    <section id="projects" className={styles.projects}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Projetos
      </motion.h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
