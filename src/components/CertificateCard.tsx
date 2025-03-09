"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./CertificateCard.module.css";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  code?: string;         // Pode ser opcional
  pdfLink: string;       // Caminho para o arquivo PDF
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  issuer,
  date,
  code,
  pdfLink,
}) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3>{title}</h3>
      <p>Emitido por: {issuer}</p>
      <p>Concluído em: {date}</p>
      {code && <p>Código: {code}</p>}
      <a href={pdfLink} download>
        Download Certificado
      </a>
    </motion.div>
  );
};

export default CertificateCard;
