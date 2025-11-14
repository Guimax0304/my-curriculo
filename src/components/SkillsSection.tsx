// src/components/SkillsSection.tsx
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import styles from "../styles/SkillsSection.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  SiC,
  SiSharp,
  SiCss3,
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiReact,
  SiDocker,
  SiPostgresql,
  SiNodedotjs,
  SiTypescript,
  SiBootstrap,
  SiNextdotjs,
} from "react-icons/si";

const SkillsSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 320;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 320;
    }
  };

  return (
    <section
      id="skills"
      className={styles.skills}
      aria-labelledby="skills-title"
      role="region"
    >
      <h2 id="skills-title">Habilidades</h2>
      <p className={styles.subtitle}>
        Tecnologias que utilizo no dia a dia para construir aplicações web
        modernas, do front-end ao back-end.
      </p>

      <div className={styles.carouselContainer}>
        <button
          onClick={scrollLeft}
          className={styles.arrowButton}
          type="button"
          aria-label="Deslizar habilidades para a esquerda"
        >
          <ChevronLeft size={20} aria-hidden />
        </button>

        <motion.div
          className={styles.skillsCarousel}
          ref={carouselRef}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Mais relevantes / modernas */}
          <SkillCard
            title="TypeScript"
            description="JavaScript tipado para código seguro e escalável."
            Icon={SiTypescript}
            className={styles.skillCard}
          />
          <SkillCard
            title="React"
            description="Interfaces reativas, performáticas e componentizadas."
            Icon={SiReact}
            className={styles.skillCard}
          />
          <SkillCard
            title="Next.js"
            description="Aplicações full stack com SSR, SSG e API Routes."
            Icon={SiNextdotjs}
            className={styles.skillCard}
          />
          <SkillCard
            title="Node.js"
            description="APIs modernas, serviços back-end e microserviços."
            Icon={SiNodedotjs}
            className={styles.skillCard}
          />
          <SkillCard
            title="C#"
            description="Sistemas corporativos, APIs e aplicações robustas."
            Icon={SiSharp}
            className={styles.skillCard}
          />

          {/* Stack de infraestrutura e dados */}
          <SkillCard
            title="Docker"
            description="Containerização e ambientes reprodutíveis."
            Icon={SiDocker}
            className={styles.skillCard}
          />
          <SkillCard
            title="PostgreSQL"
            description="Banco de dados relacional de alta performance."
            Icon={SiPostgresql}
            className={styles.skillCard}
          />

          {/* Back-end e linguagem geral */}
          <SkillCard
            title="Django"
            description="Framework back-end poderoso e seguro."
            Icon={SiDjango}
            className={styles.skillCard}
          />
          <SkillCard
            title="Python"
            description="APIs, automações e scripts para backend."
            Icon={SiPython}
            className={styles.skillCard}
          />
          <SkillCard
            title="JavaScript"
            description="Linguagem fundamental do desenvolvimento web."
            Icon={SiJavascript}
            className={styles.skillCard}
          />
          <SkillCard
            title="SQL"
            description="Modelagem e consultas em bancos relacionais."
            Icon={SiMysql}
            className={styles.skillCard}
          />

          {/* Base da web / estilo */}
          <SkillCard
            title="HTML"
            description="Estruturação semântica de interfaces."
            Icon={SiHtml5}
            className={styles.skillCard}
          />
          <SkillCard
            title="CSS"
            description="Layouts responsivos e estilização moderna."
            Icon={SiCss3}
            className={styles.skillCard}
          />
          <SkillCard
            title="Bootstrap"
            description="Protótipos rápidos com grid responsivo."
            Icon={SiBootstrap}
            className={styles.skillCard}
          />

          {/* Fundamento de baixo nível */}
          <SkillCard
            title="C"
            description="Fundamentos de computação e baixo nível."
            Icon={SiC}
            className={styles.skillCard}
          />
        </motion.div>

        <button
          onClick={scrollRight}
          className={styles.arrowButton}
          type="button"
          aria-label="Deslizar habilidades para a direita"
        >
          <ChevronRight size={20} aria-hidden />
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;
