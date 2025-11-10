"use client";

import React, { useEffect, useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Code,
  GraduationCap,
  Folder,
  Mail,
  Menu,
  X,
  Linkedin,
  Github,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import styles from "../styles/Sidebar.module.css";

type LinkItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
};

type SidebarCtx = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const SidebarContext = createContext<SidebarCtx | null>(null);
const useSidebar = () => {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar deve ser usado dentro do provider");
  return ctx;
};

const links: LinkItem[] = [
  { id: "hero",      label: "Início",      icon: <Home size={18} />,          href: "#hero" },
  { id: "about",     label: "Sobre",       icon: <User size={18} />,          href: "#about" },
  { id: "skills",    label: "Habilidades", icon: <Code size={18} />,          href: "#skills" },
  { id: "education", label: "Educação",    icon: <GraduationCap size={18} />, href: "#education" },
  { id: "projects",  label: "Projetos",    icon: <Folder size={18} />,        href: "#projects" },
  { id: "contact",   label: "Contato",     icon: <Mail size={18} />,          href: "#contact" },
];

function SidebarLink({ item, active }: { item: LinkItem; active: boolean }) {
  const { open } = useSidebar();

  return (
    <a
      href={item.href}
      className={`${styles.link} ${active ? styles.active : ""}`}
      aria-current={active ? "page" : undefined}
    >
      <span className={styles.linkIcon}>{item.icon}</span>
      <motion.span
        className={styles.linkLabel}
        animate={{ opacity: open ? 1 : 0, display: open ? "inline" : "none" }}
        transition={{ duration: 0.15 }}
      >
        {item.label}
      </motion.span>
    </a>
  );
}

export default function AppSidebar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { root: null, rootMargin: "0px", threshold: 0.35 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => sections.forEach((s) => obs.unobserve(s));
  }, []);

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {/* Topbar (mobile) */}
      <div className={styles.mobileTopbar}>
        <button
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          className={styles.iconBtn}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Sidebar (desktop) */}
      <motion.aside
        className={styles.sidebar}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        animate={{ width: open ? 260 : 64 }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <div className={styles.inner}>
          <div className={styles.logo} aria-hidden />
          <nav className={styles.nav}>
            {links.map((l) => (
              <SidebarLink key={l.id} item={l} active={active === l.id} />
            ))}
          </nav>

          {/* Social (rodapé) */}
          <div className={styles.social}>
            <a
              href="https://api.whatsapp.com/send?phone=5581996070986&text=Ol%C3%A1,%20Vi%20o%20seu%20curr%C3%ADculo%20e%20tenho%20interesse%20em%20te%20conhecer"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className={styles.iconBtn}
            >
              <FaWhatsapp size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/guilherme-viana-64367528a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className={styles.iconBtn}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/Guimax0304"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={styles.iconBtn}
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </motion.aside>

      {/* Overlay (mobile) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className={styles.overlayHeader}>
              <button
                aria-label="Fechar menu"
                className={styles.iconBtn}
                onClick={() => setMobileOpen(false)}
              >
                <X size={22} />
              </button>
            </div>

            <nav className={styles.overlayNav}>
              {links.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={`${styles.overlayLink} ${active === l.id ? styles.active : ""}`}
                >
                  {l.icon}
                  <span>{l.label}</span>
                </a>
              ))}
            </nav>

            <div className={styles.overlaySocial}>
              <a
                href="https://api.whatsapp.com/send?phone=5581996070986&text=Ol%C3%A1,%20Vi%20o%20seu%20curr%C3%ADculo%20e%20tenho%20interesse%20em%20te%20conhecer"
                target="_blank"
                rel="noreferrer"
                className={styles.iconBtn}
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/guilherme-viana-64367528a/"
                target="_blank"
                rel="noreferrer"
                className={styles.iconBtn}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/Guimax0304"
                target="_blank"
                rel="noreferrer"
                className={styles.iconBtn}
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SidebarContext.Provider>
  );
}
