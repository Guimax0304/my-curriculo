export const personalInfo = {
  name: "Guilherme Viana",
  title: "Engenheiro de Software em formação | Desenvolvedor Full Stack",
  description:
    "Desenvolvo aplicações web completas, unindo frontend, backend, APIs, banco de dados, deploy e boas práticas de organização para criar soluções funcionais, escaláveis e bem estruturadas.",
  email: "guilhermevianalourenco2@email.com",
  github: "https://github.com/Guimax0304",
  linkedin: "https://www.linkedin.com/in/guilherme-viana-64367528a/",
  whatsapp: "https://wa.me/5581996070986",
  resume: "#",
  location: "Brasil",
}

export const aboutContent = {
  paragraphs: [
    "Sou desenvolvedor full stack com foco em criar aplicações web completas e bem estruturadas. Minha atuação vai além de interfaces: desenvolvo sistemas com visão de arquitetura, integrando frontend, backend, banco de dados e deploy em soluções funcionais.",
    "Busco constantemente aprimorar minhas habilidades técnicas, sempre priorizando código limpo, organização e boas práticas de desenvolvimento. Acredito que um bom software é aquele que resolve problemas reais de forma eficiente e sustentável.",
  ],
}

export const skills = {
  frontend: [
    { name: "React", level: "Avançado" },
    { name: "Next.js", level: "Avançado" },
    { name: "TypeScript", level: "Avançado" },
    { name: "JavaScript", level: "Avançado" },
    { name: "HTML/CSS", level: "Avançado" },
    { name: "Tailwind CSS", level: "Avançado" },
    { name: "Bootstrap", level: "Intermediário" },
  ],
  backend: [
    { name: "Python", level: "Avançado" },
    { name: "Django", level: "Avançado" },
    { name: "Node.js", level: "Intermediário" },
    { name: "NestJS", level: "Intermediário" },
    { name: "C#", level: "Intermediário" },
    { name: "ASP.NET", level: "Intermediário" },
  ],
  database: [
    { name: "PostgreSQL", level: "Avançado" },
    { name: "Prisma", level: "Intermediário" },
  ],
  devops: [
    { name: "Docker", level: "Intermediário" },
    { name: "Git", level: "Avançado" },
    { name: "GitHub", level: "Avançado" },
    { name: "Vercel", level: "Avançado" },
    { name: "Render", level: "Intermediário" },
  ],
  other: [
    { name: "APIs REST", level: "Avançado" },
    { name: "JWT/Auth", level: "Intermediário" },
    { name: "Testes", level: "Intermediário" },
  ],
}

export interface Project {
  id: string
  name: string
  shortDescription: string
  objective: string
  role: string
  features: string[]
  stack: {
    frontend?: string[]
    backend?: string[]
    database?: string[]
    devops?: string[]
    integrations?: string[]
  }
  repoUrl?: string
  demoUrl?: string
  image?: string
  access?: {
    title?: string
    username?: string
    password?: string
    note?: string
  }
}

export const projects: Project[] = [
  {
    id: "clinica-django",
    name: "Clínica Django",
    shortDescription:
      "Sistema web para gerenciamento de clínica, com foco na organização de cadastros e fluxos administrativos.",
    objective:
      "Centralizar e facilitar o gerenciamento de pacientes, profissionais, procedimentos, salas e agendamentos em uma aplicação web organizada por módulos.",
    role: "Desenvolvimento full stack da aplicação.",
    features: [
      "CRUD de pacientes",
      "CRUD de profissionais",
      "CRUD de procedimentos",
      "CRUD de salas",
      "CRUD de agendamentos",
      "Organização modular no Django",
      "Estrutura com Docker",
    ],
    stack: {
      frontend: ["Python","JavaScript", "Django Templates"],
      backend: ["Python", "Django"],
      database: ["PostgreSQL"],
      devops: ["Docker", "GitHub", "Hugging Face"],
    },
    repoUrl: "https://github.com/Guimax0304/clinica-django",
    demoUrl: "https://guilhermevl-clinica-django.hf.space/usuarios/login/",
    access: {
    title: "Acesso para teste",
    username: "guilh",
    password: "#Guimax0202",
    note: "Use estas credenciais para entrar na demonstração do sistema.",
  },
  },
  {
    id: "paintball-booking",
    name: "Sistema de Agendamento de Paintball",
    shortDescription:
      "Sistema de agendamento online para reservas de partidas de paintball, com fluxo completo do cliente e painel administrativo.",
    objective:
      "Organizar reservas, disponibilidade, seleção de unidade, horário, jogadores e confirmação de agendamento em uma experiência web estruturada.",
    role: "Desenvolvimento full stack da aplicação.",
    features: [
      "Seleção de unidade",
      "Escolha de data e horário",
      "Configuração de jogadores",
      "Seleção de modalidades e extras",
      "Tela de confirmação",
      "Código público de reserva",
      "Painel administrativo",
      "Controle de disponibilidade",
    ],
    stack: {
      frontend: ["React", "TypeScript", "Vite",],
      backend: ["NestJS", "TypeScript", "Node.js"],
      database: ["PostgreSQL", "Prisma"],
      devops: ["Docker", "Render", "Vercel"],
      integrations: ["E-mail transacional"],
    },
    repoUrl: "https://github.com/Guimax0304/paintball-agendamento",
    demoUrl: "https://paintball-agendamento.vercel.app/agendar/unidade",
    access: {
    title: "Acesso para teste",
    username: "admin@paintball.com",
    password: "#@Admin81",
    note: "Use estas credenciais para entrar na demonstração do sistema.",
    },
  },
  {
    id: "portfolio",
    name: "Portfólio Dra. Vanessa Leite",
    shortDescription:
      "Site de portfólio profissional desenvolvido com Next.js e design moderno para apresentação de projetos e habilidades.",
    objective:
      "Criar uma presença online profissional que demonstre competências técnicas e projetos desenvolvidos de forma clara e elegante.",
    role: "Design e desenvolvimento completo.",
    features: [
      "Design responsivo",
      "Tema escuro elegante",
      "Animações suaves",
      "Seções organizadas",
      "Performance otimizada",
      "SEO configurado",
    ],
    stack: {
      frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      devops: ["Vercel", "GitHub"],
    },
    repoUrl: "https://github.com/Guimax0304/portfolio-vanessa",
    demoUrl: "https://portfolio-vanessa-azure.vercel.app"
  },
]

export interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  responsibilities: string[]
  technologies?: string[]
}

export const experiences: Experience[] = [
  {
    id: "gcinet",
    company: "Gcinet",
    role: "Estágio em Desenvolvimento de Software",
    period: "June 2025 - September 2025",
    description:
      "Atuação em sistema corporativo com foco em desenvolvimento e manutenção de aplicações.",
    responsibilities: [
      "Suporte a rotinas de desenvolvimento e manutenção",
      "Participação em melhorias de sistema",
      "Apoio em integrações e demandas de negócio",
      "Colaboração em reuniões e alinhamentos técnicos",
      "Experiência com contexto corporativo e processos de equipe",
    ],
    technologies: ["C#", "ASP.NET", "SQL Server"],
  },
]

export interface Education {
  id: string
  institution: string
  course: string
  period: string
  description?: string
}

export const education: Education[] = [
  {
    id: "engenharia-software",
    institution: "Universidade Estacio de Sá",
    course: "Engenharia de Software",
    period: "2025 - Cursando",
    description:
      "Graduação com foco em desenvolvimento de software, engenharia de sistemas e boas práticas de programação.",
  },
]

export interface Certification {
  id: string
  name: string
  institution: string
  year: string
  url?: string
}

export const certifications: Certification[] = [
  // Adicione certificações aqui quando disponíveis
]

export const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#formacao", label: "Formação" },
  { href: "#contato", label: "Contato" },
]
