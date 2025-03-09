"use client";

import React from "react";
import styles from "../styles/EducationSection.module.css";

const EducationSection = () => {
  return (
    <section id="education" className={styles.education}>
      <h2>Educação e Certificações</h2>

      {/* Primeiro certificado */}
      <div className={styles.item}>
        <h3>
          Fundamentos de Linguagem Python para Análise de Dados e Data Science
        </h3>
        <p>Certificado emitido por:</p>
        <span>Data Science Academy - 24/01/2024</span>
        <a href="/certificates/certificate-fundamentos-python.pdf" download>
          Download Certificado
        </a>
      </div>

      {/* Segundo certificado */}
      <div className={styles.item}>
        <h3>Algoritmo [40 Horas] - Curso em Vídeo</h3>
        <p>Certificado emitido por: Curso em Vídeo</p>
        <span>Concluído em: 22 de junho de 2023</span>
        <span>Código: A2D92-6297-6</span>
        <a
          href="/certificates/guilherme-viana-Algoritmo-Certificado-Curso-em-Video.pdf"
          download
        >
          Download Certificado
        </a>
      </div>

      {/* Se houver outros itens, repita */}
    </section>
  );
};

export default EducationSection;
