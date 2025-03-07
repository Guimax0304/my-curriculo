"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/Sidebar.module.css";
import { motion } from "framer-motion";
import { Home, User, Code, Linkedin, Github, Menu } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Sidebar = () => {
  // Controla qual seção está ativa (Intersection Observer)
  const [activeSection, setActiveSection] = useState("");

  // Controla se a sidebar está aberta ou fechada (Menu Hambúrguer)
  const [isOpen, setIsOpen] = useState(false);

  // CONFIGURANDO O INTERSECTION OBSERVER
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {/* Botão de menu hambúrguer - aparece em telas menores */}
      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <Menu size={24} />
      </button>

      {/* SIDEBAR */}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <nav>
          <ul>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="#hero"
                className={activeSection === "hero" ? styles.active : ""}
                onClick={() => setIsOpen(false)}
              >
                <Home size={24} />
                Início
              </a>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="#about"
                className={activeSection === "about" ? styles.active : ""}
                onClick={() => setIsOpen(false)}
              >
                <User size={24} />
                Sobre
              </a>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="#skills"
                className={activeSection === "skills" ? styles.active : ""}
                onClick={() => setIsOpen(false)}
              >
                <Code size={24} />
                Habilidades
              </a>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="#education"
                className={activeSection === "education" ? styles.active : ""}
                onClick={() => setIsOpen(false)}
              >
                <span style={{ fontSize: "24px" }}>🎓</span>
                Educação
              </a>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="#projects"
                className={activeSection === "projects" ? styles.active : ""}
                onClick={() => setIsOpen(false)}
              >
                <span style={{ fontSize: "24px" }}>📁</span>
                Projetos
              </a>
            </motion.li>

            <motion.li
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="#contact"
                className={activeSection === "contact" ? styles.active : ""}
                onClick={() => setIsOpen(false)}
              >
                <span style={{ fontSize: "24px" }}>✉️</span>
                Contato
              </a>
            </motion.li>
          </ul>
        </nav>

        <div className={styles.social}>
          {/* Ícone de WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=5581996070986&text=Ol%C3%A1,%20Vi%20o%20seu%20curr%C3%ADculo%20e%20tenho%20interesse%20em%20te%20conhecer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
          {/* Ícone de LinkedIn */}
          <a
            href="https://www.linkedin.com/in/guilherme-viana-64367528a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={24} />
          </a>
          {/* Ícone de GitHub */}
          <a
            href="https://github.com/Guimax0304"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={24} />
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
