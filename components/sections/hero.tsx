"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Terminal, Code2, Database, Cloud, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/portfolio-data"

const techPanels = [
  { icon: Code2, label: "Frontend", techs: ["React", "Next.js", "TypeScript"] },
  { icon: Terminal, label: "Backend", techs: ["Python", "Django", "Node.js", "C#"] },
  { icon: Database, label: "Database", techs: ["PostgreSQL", "Prisma"] },
  { icon: Cloud, label: "DevOps", techs: ["Docker", "Vercel", "Git", "GitHub", "Render"] },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.4 + i * 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        
        {/* Radial glow - primary color */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--foreground) 1px, transparent 1px),
              linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Status badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-medium text-primary tracking-wide uppercase">
                Disponível para oportunidades
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-muted-foreground text-sm lg:text-base mb-3 tracking-wide font-mono"
            >
              {"// Olá, eu sou"}
            </motion.p>

            {/* Name */}
            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 tracking-tight text-balance"
            >
              {personalInfo.name}
              <span className="text-primary">.</span>
            </motion.h1>

            {/* Title with highlight */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="mb-6"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-balance leading-relaxed">
                <span className="text-foreground">Engenheiro de Software</span>
                <span className="text-muted-foreground"> em formação</span>
                <br className="hidden sm:block" />
                <span className="text-primary">Desenvolvedor Full Stack</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-muted-foreground text-base lg:text-lg max-w-xl mb-10 leading-relaxed text-pretty"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              <Button
                size="lg"
                onClick={() => handleScrollTo("#projetos")}
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
              >
                <span className="relative z-10 flex items-center">
                  Ver projetos
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                onClick={() => handleScrollTo("#contato")}
                className="text-muted-foreground hover:text-foreground hover:bg-accent/50"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contato
              </Button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              custom={6}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex items-center gap-8 text-sm"
            >
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  <span className="text-foreground font-medium">Full Stack</span> Dev
                </span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  <span className="text-foreground font-medium">3+</span> Projetos
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right content - Tech panels */}
          <div className="lg:col-span-5 xl:col-span-6 relative">
            <div className="grid grid-cols-2 gap-3 lg:gap-4 max-w-md mx-auto lg:max-w-none lg:ml-auto">
              {techPanels.map((panel, index) => (
                <motion.div
                  key={panel.label}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.02, 
                    transition: { duration: 0.2 } 
                  }}
                  className="group relative p-4 lg:p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
                >
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <panel.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {panel.label}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {panel.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-xs rounded bg-muted/50 text-muted-foreground font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating accent element */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="hidden xl:block absolute -bottom-8 -right-8 w-32 h-32 rounded-full border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="hidden xl:block absolute -top-4 -left-4 w-20 h-20 rounded-full border border-primary/5 bg-gradient-to-br from-primary/3 to-transparent"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <button
          onClick={() => handleScrollTo("#sobre")}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Rolar para baixo"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </button>
      </motion.div>

      {/* Side accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        className="hidden lg:block absolute left-8 top-1/3 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent origin-top"
      />
    </section>
  )
}
