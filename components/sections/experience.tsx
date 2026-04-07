"use client"

import { motion } from "framer-motion"
import { Briefcase, ChevronRight, Calendar, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { experiences, type Experience } from "@/data/portfolio-data"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <motion.article
      variants={fadeInUp}
      custom={index + 2}
      className="group relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border/50 hidden lg:block">
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background" />
        {index < experiences.length - 1 && (
          <div className="absolute top-11 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-primary/50 to-border/30" />
        )}
      </div>

      <div className="lg:pl-8">
        <motion.div
          whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
          className="relative p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300 overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative z-10">
            {/* Period badge */}
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-wider">
                {experience.period}
              </span>
            </div>

            {/* Role & Company */}
            <div className="mb-4">
              <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                {experience.role}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="h-4 w-4" />
                <span className="text-primary font-medium">{experience.company}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm lg:text-base mb-6 leading-relaxed text-pretty">
              {experience.description}
            </p>

            {/* Responsibilities */}
            <div className="mb-6 p-4 rounded-xl bg-accent/30 border border-border/30">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                Responsabilidades
              </h4>
              <ul className="space-y-2">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-foreground/80 flex items-start gap-2"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="pt-4 border-t border-border/30">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-muted-foreground" />
                  Tecnologias utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-normal bg-muted/50 hover:bg-primary/10 hover:text-primary border-0 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.article>
  )
}

export function Experience() {
  return (
    <section id="experiencia" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-accent/20 to-transparent" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-primary/2 rounded-full blur-3xl" />
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
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div variants={fadeInUp} custom={0} className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </motion.div>
              <motion.div variants={fadeInUp} custom={0} className="h-px flex-1 bg-gradient-to-r from-border to-transparent max-w-24" />
              <motion.h2 variants={fadeInUp} custom={1} className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Experiência
              </motion.h2>
            </div>

            <motion.p variants={fadeInUp} custom={2} className="text-muted-foreground text-base lg:text-lg max-w-2xl text-pretty">
              Experiência profissional e trajetória no desenvolvimento de software.
            </motion.p>
          </motion.div>

          {/* Experiences */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </motion.div>

          {/* No Experience Message */}
          {experiences.length === 0 && (
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center py-16"
            >
              <motion.div variants={fadeInUp} custom={2} className="p-8 rounded-2xl border border-border/50 bg-card/30">
                <Briefcase className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Experiências profissionais serão adicionadas em breve.
                </p>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
