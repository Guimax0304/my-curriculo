export const personalInfo = {
  name: "Guilherme Viana",
  title: "Engenharia de Software em formação | Desenvolvimento Full Stack e Automações",
  description:
    "Atuo com desenvolvimento de software e automações em Python e JavaScript, integrando extensões de navegador, serviços locais, APIs e processamento de dados. Também desenvolvo aplicações Full Stack com React, Node.js, Django e PostgreSQL.",
  email: "guilhermevianalourenco2@gmail.com",
  github: "https://github.com/Guimax0304",
  linkedin: "https://www.linkedin.com/in/guilherme-viana-64367528a/",
  whatsapp: "https://wa.me/5581996070986",
  resume: "#",
  location: "Brasil",
}

export const aboutContent = {
  paragraphs: [
    "Sou estudante de Engenharia de Software, com conclusão prevista para dezembro de 2028. Atualmente atuo na Hef com automações para rotinas fiscais e contábeis, utilizando Python e JavaScript para integrar extensões de navegador a serviços locais e processar consultas em lote.",
    "Tenho experiência anterior na evolução de um ERP financeiro com C#/.NET, ASP.NET e APIs REST, além de projetos Full Stack com React, Node.js/NestJS, Django e PostgreSQL. Priorizo tratamento de erros, organização do código, testes e aprendizado contínuo; utilizo IA como apoio para escrever, revisar, compreender e depurar código.",
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
  data: [
    { name: "Power BI", level: "Intermediário" },
    { name: "Power Query", level: "Intermediário" },
    { name: "DAX", level: "Intermediário" },
    { name: "Modelagem de Dados", level: "Intermediário" },
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
    { name: "Automação de processos", level: "Experiência prática" },
    { name: "Automação web", level: "Experiência prática" },
    { name: "Extensões Chromium", level: "Experiência prática" },
    { name: "Processamento de planilhas e PDFs", level: "Experiência prática" },
    { name: "Logs e tratamento de exceções", level: "Experiência prática" },
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
    data?: string[]
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
  id: "dashboard-financeiro-powerbi",
  name: "Dashboard Financeiro — Contas a Receber",
  shortDescription:
    "Dashboard desenvolvido no Power BI para análise de contas a receber, com indicadores de valores emitidos, recebidos, em aberto, vencidos, inadimplência e situação de boletos.",
  objective:
    "Simular uma demanda real da área financeira, transformando dados fictícios em indicadores visuais para apoiar a tomada de decisão sobre recebíveis, inadimplência e clientes com maior saldo em aberto.",
  role: "Business Intelligence / Análise de Dados",
  features: [
    "Indicadores de valor emitido, recebido, em aberto e vencido",
    "Cálculo de percentual de inadimplência",
    "Análise de evolução mensal entre valores emitidos e recebidos",
    "Ranking dos clientes com maior valor em aberto",
    "Distribuição dos títulos por situação financeira",
    "Análise da situação dos boletos",
    "Filtros interativos por ano, segmento e UF",
    "Publicação do relatório no Power BI Service",
  ],
  stack: {
    data: [
      "Power BI",
      "Power Query",
      "DAX",
      "Excel",
      "Modelagem de Dados",
      "Power BI Service",
    ],
  },
  repoUrl: "https://github.com/Guimax0304/dashboard-financeiro-powerbi",
  demoUrl: "https://app.powerbi.com/groups/me/reports/69ac919f-e984-4de1-997c-7c63d0185798/05771f57000be66aa659?experience=power-bi",
},

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
      frontend: ["Python", "JavaScript", "Django Templates"],
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
      frontend: ["React", "TypeScript", "Vite"],
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
    demoUrl: "https://portfolio-vanessa-azure.vercel.app",
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
    id: "hef",
    company: "Hef",
    role: "Desenvolvedor de Automações",
    period: "Agosto de 2026 - Atual",
    description:
      "Desenvolvimento e manutenção de automações para rotinas fiscais e contábeis, com foco em consultas a portais governamentais, processamento de informações e confiabilidade das execuções.",
    responsibilities: [
      "Desenvolvimento de automações em Python e JavaScript para consultas assistidas e processamento em lote em portais como e-CAC e DET.",
      "Integração de extensões de navegador Chromium com serviços locais em Python por meio de comunicação HTTP.",
      "Leitura de bases em Excel, organização de evidências em PDF e geração de relatórios e registros de execução.",
      "Implementação e aprimoramento de validações, logs, tratamento de exceções e persistência de estado em JSON para retomada de consultas interrompidas.",
      "Investigação de falhas, testes e ajustes nos fluxos de automação para melhorar a confiabilidade dos processos.",
    ],
    technologies: ["Python", "JavaScript", "Extensões Chromium", "HTTP", "Excel", "JSON", "PDF", "Automação web"],
  },
  {
    id: "gcinet",
    company: "GCINET",
    role: "Desenvolvimento de Software / Full Stack .NET",
    period: "Junho de 2025 - Setembro de 2025",
    description:
      "Atuação na evolução e manutenção de um ERP financeiro, com desenvolvimento de funcionalidades, integrações e melhorias em aplicações corporativas.",
    responsibilities: [
      "Desenvolvimento e manutenção de funcionalidades com C#/.NET, ASP.NET MVC/Razor e APIs REST.",
      "Apoio aos módulos de convênios bancários, boletos e notas fiscais, incluindo integração com provedores externos como Tecnospeed.",
      "Consultas SQL, validação de dados e investigação de inconsistências em rotinas financeiras.",
      "Melhorias de interfaces com HTML, CSS e JavaScript, além de testes, documentação e colaboração com desenvolvedores e QA.",
    ],
    technologies: ["C#", ".NET", "ASP.NET MVC/Razor", "APIs REST", "SQL", "PostgreSQL", "JavaScript", "Git", "Postman"],
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
    period: "2025 - Conclusão prevista: Dezembro de 2028",
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