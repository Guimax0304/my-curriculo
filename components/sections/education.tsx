"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar, ExternalLink, BookOpen } from "lucide-react"
import {
  education,
  certifications,
  type Education,
  type Certification,
} from "@/data/portfolio-data"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

function EducationCard({ item, index }: { item: Education; index: number }) {
  return (
    <motion.article
      variants={fadeInUp}
      custom={index + 2}
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      className="group relative p-6 lg:p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300 overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-wider">
                {item.period}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
              {item.course}
            </h3>
            <p className="text-primary font-medium mb-3">{item.institution}</p>
            {item.description && (
              <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                {item.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function CertificationCard({ item, index }: { item: Certification; index: number }) {
  return (
    <motion.article
      variants={fadeInUp}
      custom={index + 4}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="group relative p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300"
    >
      {/* Subtle glow */}
      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10 flex items-start gap-3">
        <div className="p-2 rounded-lg bg-accent text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors shrink-0">
          <Award className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-foreground mb-1 truncate group-hover:text-primary transition-colors">
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                {item.name}
                <ExternalLink className="h-3 w-3 shrink-0" />
              </a>
            ) : (
              item.name
            )}
          </h4>
          <p className="text-xs text-muted-foreground">
            {item.institution} &middot; {item.year}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export function Education() {
  return (
    <section id="formacao" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/2 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--foreground) 1px, transparent 1px),
              linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
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
                <BookOpen className="h-5 w-5" />
              </motion.div>
              <motion.div variants={fadeInUp} custom={0} className="h-px flex-1 bg-gradient-to-r from-border to-transparent max-w-24" />
              <motion.h2 variants={fadeInUp} custom={1} className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Formação
              </motion.h2>
            </div>

            <motion.p variants={fadeInUp} custom={2} className="text-muted-foreground text-base lg:text-lg max-w-2xl text-pretty">
              Formação acadêmica e certificações profissionais.
            </motion.p>
          </motion.div>

          {/* Education */}
          <motion.div 
            className="grid grid-cols-1 gap-4 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {education.map((item, index) => (
              <EducationCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>

          {/* Certifications */}
          {certifications.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div variants={fadeInUp} custom={3} className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent text-muted-foreground">
                  <Award className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                  Certificações
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certifications.map((item, index) => (
                  <CertificationCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </motion.div>
          )}

          {/* Empty Certifications Message */}
          {certifications.length === 0 && (
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="pt-8 border-t border-border/30"
            >
              <motion.p variants={fadeInUp} custom={4} className="text-sm text-muted-foreground text-center">
                Certificações adicionais serão incluídas conforme obtidas.
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
