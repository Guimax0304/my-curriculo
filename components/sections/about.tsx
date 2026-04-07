"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { User } from "lucide-react"
import { aboutContent } from "@/data/portfolio-data"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  }),
}

export function About() {
  const paragraphs = aboutContent.paragraphs.filter(Boolean)

  return (
    <section id="sobre" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-primary/2 blur-3xl" />
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

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 flex items-center gap-4"
          >
            <motion.div
              variants={fadeInUp}
              custom={0}
              className="rounded-lg bg-primary/10 p-2.5 text-primary"
            >
              <User className="h-5 w-5" />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              custom={0}
              className="h-px max-w-24 flex-1 bg-gradient-to-r from-border to-transparent"
            />

            <motion.h2
              variants={fadeInUp}
              custom={1}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
            >
              Sobre
            </motion.h2>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <motion.div
              className="lg:col-span-7"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative">
                <div className="absolute -left-6 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent lg:block" />

                <div className="space-y-6">
                  {paragraphs.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      variants={fadeInUp}
                      custom={index + 1}
                      className="text-base leading-relaxed text-muted-foreground text-pretty lg:text-lg"
                    >
                      {index === 0 ? (
                        <>
                          <span className="font-medium text-foreground">
                            {paragraph.split(".")[0]}.
                          </span>
                          {paragraph.substring(paragraph.indexOf(".") + 1)}
                        </>
                      ) : (
                        paragraph
                      )}
                    </motion.p>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="grid gap-4">
                <motion.div
                  variants={fadeInUp}
                  custom={2}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-card/50"
                >
                  <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative z-10 p-3">
                    <div className="relative overflow-hidden rounded-xl border border-border/40 bg-muted/20">
                      <Image
                        src="/perfil.jpeg"
                        alt="Foto de Guilherme Viana"
                        width={700}
                        height={900}
                        className="h-[320px] w-full object-cover object-center sm:h-[380px] lg:h-[420px]"
                        priority={false}
                      />
                    </div>

                    <div className="mt-4">
                      <p className="text-sm font-medium text-foreground">
                        Guilherme Viana
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        Desenvolvedor full stack com foco em aplicações web
                        completas, do frontend ao backend, banco de dados e deploy.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}