// src/components/SkillsSection.tsx
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import styles from "../styles/SkillsSection.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  SiC,
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
      carouselRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 300;
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

      <div className={styles.carouselContainer}>
        <button
          onClick={scrollLeft}
          className={styles.arrowButton}
          type="button"
          aria-label="Deslizar habilidades para a esquerda"
        >
          <ChevronLeft size={24} aria-hidden />
        </button>

        <motion.div
          className={styles.skillsCarousel}
          ref={carouselRef}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SkillCard title="HTML"        description="Estruturação de páginas"                 Icon={SiHtml5}      className={styles.skillCard} />
          <SkillCard title="CSS"         description="Estilos responsivos"                     Icon={SiCss3}       className={styles.skillCard} />
          <SkillCard title="React"       description="Biblioteca front-end"                    Icon={SiReact}      className={styles.skillCard} />
          <SkillCard title="Next.js"     description="Framework React com SSR"                 Icon={SiNextdotjs}  className={styles.skillCard} />
          <SkillCard title="Bootstrap"   description="Framework CSS"                           Icon={SiBootstrap}  className={styles.skillCard} />
          <SkillCard title="JavaScript"  description="Linguagem de programação"                Icon={SiJavascript} className={styles.skillCard} />
          <SkillCard title="TypeScript"  description="JavaScript tipado"                       Icon={SiTypescript} className={styles.skillCard} />
          <SkillCard title="Node.js"     description="JavaScript no back-end"                  Icon={SiNodedotjs}  className={styles.skillCard} />
          <SkillCard title="Django"      description="Framework web em Python"                 Icon={SiDjango}     className={styles.skillCard} />
          <SkillCard title="Python"      description="Linguagem de programação"                Icon={SiPython}     className={styles.skillCard} />
          <SkillCard title="C"           description="Linguagem de programação"                Icon={SiC}          className={styles.skillCard} />
          <SkillCard title="SQL"         description="Banco de dados relacional"               Icon={SiMysql}      className={styles.skillCard} />
          <SkillCard title="PostgreSQL"  description="Banco de dados relacional avançado"      Icon={SiPostgresql} className={styles.skillCard} />
          <SkillCard title="Docker"      description="Containerização de aplicações"           Icon={SiDocker}     className={styles.skillCard} />
        </motion.div>

        <button
          onClick={scrollRight}
          className={styles.arrowButton}
          type="button"
          aria-label="Deslizar habilidades para a direita"
        >
          <ChevronRight size={24} aria-hidden />
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;
