"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/SobreSection.module.css";

const SobreSection = () => {
  return (
    <section id="about" className={styles.about}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Sobre Mim
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Sou um estudante de Ciência da Computação na Estácio e desenvolvedor
        Full Stack em formação. Apaixonado por tecnologia, estou sempre
        aprendendo e desenvolvendo novos projetos para aprimorar minhas
        habilidades.
      </motion.p>
    </section>
  );
};

export default SobreSection;
