"use client";

import React from "react";
import styles from "../styles/EducationSection.module.css";

const EducationSection = () => {
  return (
    <section id="education" className={styles.education}>
      <h2>Educação e Certificações</h2>
      <div className={styles.educationList}>
        <div className={styles.item}>
          <h3>
            Fundamentos de Linguagem Python para Análise de Dados e Data Science
          </h3>
          <p>Certificado emitido por:</p>
          <span>Data Science Academy - 24/01/2024</span>
          {/* Link para ver o PDF em nova aba */}
          <a href="/certificates/certificate-fundamentos-python.pdf" download>
            Download Certificado
          </a>
        </div>

        {/* Caso tenha mais itens, repita */}
      </div>
    </section>
  );
};

export default EducationSection;
