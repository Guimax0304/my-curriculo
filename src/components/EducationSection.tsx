"use client";

import React from "react";
import CertificateCard from "./CertificateCard"; // importe o componente
import styles from "../styles/EducationSection.module.css";

const EducationSection = () => {
  // Array de certificados
  const certificates = [
    {
      id: 1,
      title: "Fundamentos de Linguagem Python para Análise de Dados e Data Science",
      issuer: "Data Science Academy",
      date: "24/01/2024",
      code: "", // Se não tiver código, deixe em branco ou remova
      pdfLink: "/certificates/certificate-fundamentos-python.pdf",
    },
    {
      id: 2,
      title: "Curso de Algoritmo com Gustavo Guanabara",
      issuer: "Curso em Vídeo",
      date: "22/06/2023",
      code: "",
      pdfLink: "/certificates/guilherme-viana-Algoritmo-Certificado-Curso-em-Video.pdf",
    },
    // Adicione mais certificados se quiser
  ];

  return (
    <section id="education" className={styles.education}>
      <h2>Educação e Certificações</h2>
      <div className={styles.certificatesGrid}>
        {certificates.map((cert) => (
          <CertificateCard
            key={cert.id}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            code={cert.code}
            pdfLink={cert.pdfLink}
          />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
