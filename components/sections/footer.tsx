"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react"
import { personalInfo, navLinks } from "@/data/portfolio-data"

const fadeInUp = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
          >
            {/* Left - Branding */}
            <motion.div variants={fadeInUp} custom={0} className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Code2 className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold text-foreground">
                  {personalInfo.name.split(" ")[0]}
                  <span className="text-primary">.</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Desenvolvedor Full Stack focado em criar aplicações web completas e bem estruturadas.
              </p>
              
              {/* Social links */}
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2 rounded-lg bg-muted/30 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label="E-mail"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </motion.div>

            {/* Center - Navigation */}
            <motion.nav variants={fadeInUp} custom={1} className="lg:col-span-5">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Navegação
              </h4>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>

            {/* Right - Contact */}
            <motion.div variants={fadeInUp} custom={2} className="lg:col-span-3">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Contato
              </h4>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-sm text-foreground hover:text-primary transition-colors break-all"
              >
                {personalInfo.email}
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                {personalInfo.location}
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-border/30"
          >
            <motion.div 
              variants={fadeInUp} 
              custom={3}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
