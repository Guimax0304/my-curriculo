// src/components/SkillCard.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import styles from "../styles/SkillCard.module.css";

interface SkillCardProps {
  title: string;
  description: string;
  Icon?: IconType;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, Icon, className }) => {
  return (
    <motion.article
      className={`${styles.card} ${className ?? ""}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      aria-label={`Habilidade: ${title}`}
      tabIndex={0}
    >
      {Icon && <Icon className={styles.icon} aria-hidden />}
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.article>
  );
};

export default SkillCard;
