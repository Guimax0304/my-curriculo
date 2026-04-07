"use client"

import { motion } from "framer-motion"
import { Code2, Server, Database, Cloud, Sparkles, Wrench } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/portfolio-data"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

const categories = [
  { key: "frontend" as const, label: "Frontend", icon: Code2, description: "Interfaces modernas e responsivas" },
  { key: "backend" as const, label: "Backend", icon: Server, description: "APIs e lógica de negócio" },
  { key: "database" as const, label: "Banco de Dados", icon: Database, description: "Modelagem e persistência" },
  { key: "devops" as const, label: "DevOps / Infra", icon: Cloud, description: "Deploy e versionamento" },
  { key: "other" as const, label: "Outras Competências", icon: Sparkles, description: "Habilidades complementares" },
]

export function Stack() {
  return (
    <section id="stack" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-accent/20 to-transparent" />
        <div className="absolute top-1/3 left-0 w-[600px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/2 rounded-full blur-3xl" />
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
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div variants={fadeInUp} custom={0} className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <Wrench className="h-5 w-5" />
              </motion.div>
              <motion.div variants={fadeInUp} custom={0} className="h-px flex-1 bg-gradient-to-r from-border to-transparent max-w-24" />
              <motion.h2 variants={fadeInUp} custom={1} className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                Stack
              </motion.h2>
            </div>

            <motion.p variants={fadeInUp} custom={2} className="text-muted-foreground text-base lg:text-lg max-w-2xl text-pretty">
              Tecnologias e ferramentas que utilizo para construir aplicações web
              completas, do frontend ao deploy.
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((category, catIndex) => {
              const categorySkills = skills[category.key]
              if (!categorySkills || categorySkills.length === 0) return null

              return (
                <motion.div
                  key={category.key}
                  variants={fadeInUp}
                  custom={catIndex + 3}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="group relative p-6 rounded-xl border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/30 hover:bg-card/60 transition-all duration-300"
                >
                  {/* Subtle glow */}
                  <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                        <category.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                          {category.label}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-border to-transparent mb-4" />

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="secondary"
                          className="text-xs font-normal bg-muted/50 hover:bg-primary/10 hover:text-primary border-0 transition-colors"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Footer note */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12 pt-8 border-t border-border/30"
          >
            <motion.p variants={fadeInUp} custom={8} className="text-sm text-muted-foreground text-center">
              Sempre aprendendo novas tecnologias e aprimorando habilidades existentes.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
