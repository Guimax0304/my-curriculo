"use client";

import React from "react";
import { motion } from "framer-motion";
import Interactive3D from "@/components/Interactive3D";
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        {/* Coluna esquerda: imagem + texto + botões */}
        <div className={styles.textColumn}>
          {/* Foto de perfil */}
          <motion.div
            className={styles.profileContainer}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.profileCircle}>
              <img
                src="/perfil1.jpg"
                alt="Guilherme Viana"
                className={styles.profileImage}
              />
            </div>
          </motion.div>

          {/* Texto principal */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Olá,eu sou Guilherme Viana
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Desenvolvedor Full Stack apaixonado por tecnologia e criação de
            experiências digitais modernas.
          </motion.p>
        </div>

        {/* Coluna direita: robô 3D */}
        <motion.div
          className={styles.robotContainer}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Interactive3D />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
