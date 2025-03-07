"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import styles from "../styles/ContactSection.module.css";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_496npwj",
        "template_ivawhyi",
        formRef.current,
        "axDpUwjtML5UT5VVc"
      )
      .then((result) => {
        console.log(result.text);
        alert("Mensagem enviada com sucesso!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.log(error.text);
        alert("Erro ao enviar mensagem.");
      });
  };

  return (
    <section id="contact" className={styles.contact}>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Contato
      </motion.h2>
      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <input type="text" name="name" placeholder="Seu Nome" required />
        <input type="email" name="email" placeholder="Seu Email" required />
        <textarea name="message" placeholder="Sua Mensagem" required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactSection;
