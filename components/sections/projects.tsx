"use client"

import { motion } from "framer-motion"
import { ExternalLink,Github,FolderKanban,ChevronRight,Code2,Server,Database,Cloud,
Puzzle,Globe,KeyRound,UserRound,BarChart3,} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects, type Project } from "@/data/portfolio-data"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

const stackCategories = [
  { key: "frontend" as const, label: "Frontend", icon: Code2 },
  { key: "backend" as const, label: "Backend", icon: Server },
  { key: "database" as const, label: "Banco de dados", icon: Database },
  { key: "devops" as const, label: "DevOps / Infra", icon: Cloud },
  { key: "integrations" as const, label: "Integrações", icon: Puzzle },
  { key: "data" as const, label: "Dados / BI", icon: BarChart3 },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={fadeInUp}
      custom={index + 2}
      whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 hover:bg-card/50 transition-all duration-300 overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10 p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <FolderKanban className="h-4 w-4" />
              </div>
              <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                {project.role}
              </span>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.name}
            </h3>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {project.repoUrl && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-9 w-9 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all"
              >
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver repositório"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            )}

            {project.demoUrl && project.demoUrl !== "#" && (
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="h-9 w-9 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all"
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm lg:text-base mb-6 leading-relaxed text-pretty">
          {project.shortDescription}
        </p>

        {/* Objective */}
        <div className="mb-6 p-4 rounded-xl bg-accent/30 border border-border/30">
          <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-primary" />
            Objetivo
          </h4>
          <p className="text-sm text-foreground/80 leading-relaxed text-pretty">
            {project.objective}
          </p>
        </div>

        {(project.demoUrl || project.access) && (
          <div className="mb-6 rounded-xl border border-primary/15 bg-primary/5 p-4">
            <h4 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="h-1 w-1 rounded-full bg-primary" />
              {project.access?.title ?? "Acesso à demonstração"}
            </h4>

            <div className="space-y-3">
              {project.demoUrl && project.demoUrl !== "#" && (
                <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/80">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Acesse em produção:</span>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-80"
                  >
                    {project.demoUrl.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              )}

              {(project.access?.username || project.access?.password) && (
                <div className="flex flex-wrap items-center gap-2 border-l-2 border-primary/30 pl-3 text-sm">
                  {project.access?.username && (
                    <>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <UserRound className="h-4 w-4" />
                        Usuário de teste:
                      </span>
                      <Badge
                        variant="outline"
                        className="border-primary/20 bg-background/40 font-mono text-xs text-foreground"
                      >
                        {project.access.username}
                      </Badge>
                    </>
                  )}

                  {project.access?.password && (
                    <>
                      <span className="text-muted-foreground">Senha:</span>
                      <Badge
                        variant="outline"
                        className="border-primary/20 bg-background/40 font-mono text-xs text-foreground"
                      >
                        <KeyRound className="mr-1 h-3 w-3" />
                        {project.access.password}
                      </Badge>
                    </>
                  )}
                </div>
              )}

              {project.access?.note && (
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {project.access.note}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            Funcionalidades
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.slice(0, 6).map((feature, idx) => (
              <li
                key={idx}
                className="text-sm text-foreground/70 flex items-center gap-2"
              >
                <ChevronRight className="h-3 w-3 text-primary shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="pt-6 border-t border-border/30">
          <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-muted-foreground" />
            Stack Técnica
          </h4>

          <div className="space-y-3">
            {stackCategories.map((category) => {
              const techs = project.stack[category.key]
              if (!techs || techs.length === 0) return null

              return (
                <div key={category.key} className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-2 min-w-28 shrink-0">
                    <category.icon className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-medium">
                      {category.label}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {techs.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-normal bg-muted/30 border-border/50 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  return (
    <section id="projetos" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-primary/2 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--foreground) 1px, transparent 1px),
              linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                variants={fadeInUp}
                custom={0}
                className="p-2.5 rounded-lg bg-primary/10 text-primary"
              >
                <FolderKanban className="h-5 w-5" />
              </motion.div>

              <motion.div
                variants={fadeInUp}
                custom={0}
                className="h-px flex-1 bg-gradient-to-r from-border to-transparent max-w-24"
              />

              <motion.h2
                variants={fadeInUp}
                custom={1}
                className="text-sm font-medium text-muted-foreground uppercase tracking-widest"
              >
                Projetos
              </motion.h2>
            </div>

            <motion.p
              variants={fadeInUp}
              custom={2}
              className="text-muted-foreground text-base lg:text-lg max-w-2xl text-pretty"
            >
              Projetos desenvolvidos com foco em entregar soluções completas,
              funcionais e bem estruturadas.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}