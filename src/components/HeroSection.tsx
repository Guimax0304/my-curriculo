"use client";

import React from "react";
import Image from "next/image"; // Import do Next.js para otimizar imagens
import styles from "../styles/HeroSection.module.css";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        className={styles.profileContainer}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/perfil.jpg" // Caminho relativo à pasta /public
          alt="Minha foto de perfil" // Descrição para acessibilidade
          width={200} // Largura desejada
          height={200} // Altura desejada
          className={styles.profileImage}
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Olá, eu sou Guilherme Viana
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Aspirante a desenvolvedor Full Stack
      </motion.p>
      <motion.a
        href="/curriculo.pdf"
        download
        className={styles.downloadButton}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Download PDF
      </motion.a>
    </section>
  );
};

export default HeroSection;
