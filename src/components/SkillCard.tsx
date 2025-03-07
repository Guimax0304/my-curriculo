// SkillCard.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import styles from "../styles/SkillCard.module.css";

interface SkillCardProps {
  title: string;
  description: string;
  Icon?: IconType; // ícone opcional
}

const SkillCard: React.FC<SkillCardProps> = ({ title, description, Icon }) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Se houver ícone, renderiza-o */}
      {Icon && <Icon size={32} style={{ marginBottom: "10px" }} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default SkillCard;
