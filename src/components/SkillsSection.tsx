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
    <section id="skills" className={styles.skills}>
      <h2>Habilidades</h2>
      <div className={styles.carouselContainer}>
        <button onClick={scrollLeft} className={styles.arrowButton}>
          <ChevronLeft size={24} />
        </button>

        {/* Animação de fade-in ao entrar na tela */}
        <motion.div
          className={styles.skillsCarousel}
          ref={carouselRef}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          /* once: true -> anima só a primeira vez que aparecer na tela */
        >
          <SkillCard
            title="HTML"
            description="Estruturação de páginas"
            Icon={SiHtml5}
          />
          <SkillCard
            title="CSS"
            description="Estilos responsivos"
            Icon={SiCss3}
          />
          <SkillCard
            title="React"
            description="Biblioteca front-end"
            Icon={SiReact}
          />
          <SkillCard
            title="Next.js"
            description="Framework React com SSR"
            Icon={SiNextdotjs}
          />
          <SkillCard
            title="Bootstrap"
            description="Framework CSS"
            Icon={SiBootstrap}
          />
          <SkillCard
            title="JavaScript"
            description="Linguagem de programação"
            Icon={SiJavascript}
          />
          <SkillCard
            title="TypeScript"
            description="JavaScript tipado"
            Icon={SiTypescript}
          />
          <SkillCard
            title="Node.js"
            description="JavaScript no back-end"
            Icon={SiNodedotjs}
          />
          <SkillCard
            title="Django"
            description="Framework web em Python"
            Icon={SiDjango}
          />
          <SkillCard
            title="Python"
            description="Linguagem de programação"
            Icon={SiPython}
          />
          <SkillCard
            title="C"
            description="Linguagem de programação"
            Icon={SiC}
          />          
          <SkillCard
            title="SQL"
            description="Banco de dados relacional"
            Icon={SiMysql}
          />
          <SkillCard
            title="PostgreSQL"
            description="Banco de dados relacional avançado"
            Icon={SiPostgresql}
          />
          <SkillCard
            title="Docker"
            description="Containerização de aplicações"
            Icon={SiDocker}
          />
        </motion.div>
        <button onClick={scrollRight} className={styles.arrowButton}>
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;
