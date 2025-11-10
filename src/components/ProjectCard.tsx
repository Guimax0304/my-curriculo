"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/ProjectCard.module.css";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.025 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </a>
    </motion.div>
  );
};

export default ProjectCard;
