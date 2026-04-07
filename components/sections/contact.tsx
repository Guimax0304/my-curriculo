"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, FileText, ArrowUpRight, MessageSquare, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/data/portfolio-data"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

const socialLinks = [
  { 
    icon: MessageCircle, 
    label: "WhatsApp", 
    href: personalInfo.whatsapp,
    description: "Conversa rápida"
  },
  { 
    icon: Github, 
    label: "GitHub", 
    href: personalInfo.github,
    description: "Código e projetos"
  },
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    href: personalInfo.linkedin,
    description: "Perfil profissional"
  },
]

export function Contact() {
  return (
    <section id="contato" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-accent/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--foreground) 1px, transparent 1px),
              linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div variants={fadeInUp} custom={0} className="h-px flex-1 bg-gradient-to-r from-transparent to-border max-w-16" />
              <motion.div variants={fadeInUp} custom={0} className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <MessageSquare className="h-5 w-5" />
              </motion.div>
              <motion.h2 variants={fadeInUp} custom={1} className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Contato
              </motion.h2>
              <motion.div variants={fadeInUp} custom={0} className="h-px flex-1 bg-gradient-to-l from-transparent to-border max-w-16" />
            </div>
          </motion.div>

          {/* Main CTA Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8"
          >
            <motion.div
              variants={fadeInUp}
              custom={2}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="group relative p-8 lg:p-12 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 overflow-hidden text-center"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Accent lines */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                {/* Headline */}
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                  Vamos conversar<span className="text-primary">?</span>
                </h3>

                <p className="text-muted-foreground text-base lg:text-lg mb-8 max-w-xl mx-auto text-pretty leading-relaxed">
                  Estou disponível para oportunidades, projetos e colaborações. 
                  Entre em contato e vamos construir algo juntos.
                </p>

                {/* Primary CTA */}
                <Button 
                  size="lg" 
                  asChild 
                  className="group/btn relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                >
                  <a href={`mailto:${personalInfo.email}`}>
                    <span className="relative z-10 flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar e-mail
                      <ArrowUpRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </span>
                  </a>
                </Button>

                {/* Email display */}
                <p className="mt-6 text-sm text-muted-foreground">
                  ou diretamente em{" "}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-foreground hover:text-primary transition-colors font-medium underline underline-offset-2"
                  >
                    {personalInfo.email}
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                custom={index + 3}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
              >
                {/* Subtle glow */}
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      {link.label}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.a>
            ))}

            {/* Resume link */}
            {personalInfo.resume && personalInfo.resume !== "#" && (
              <motion.a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeInUp}
                custom={socialLinks.length + 3}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-muted/50 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      Currículo
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Download PDF
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
