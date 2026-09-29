import { Database, Layout, Terminal, Server } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

export const portfolioData = {
  es: {
    navLinks: [
      { name: 'Inicio', href: '#inicio' },
      { name: 'Sobre mí', href: '#sobre-mi' },
      { name: 'Tecnologías', href: '#habilidades' },
      { name: 'Proyectos', href: '#proyectos' },
      { name: 'Formación', href: '#formacion' },
      { name: 'Superpoder', href: '#superpoder' },
      { name: 'Contacto', href: '#contacto' },
    ],
    hero: {
      status: "Enfocado en desarrollo de software & análisis de datos",
      role: "Desarrollador de Software Junior",
      firstName: "Sebastián",
      lastName: "Salas",
      tagline: "Construyo soluciones digitales, aprendo de cada desafío y exploro el poder de los datos.",
      btnProjects: "Explorar proyectos",
      btnContact: "Hablemos",
      btnCV: "Descargar Hoja de Vida",
      cvUrl: `${BASE}Sebastian_Salas_CV.pdf`,
      githubUrl: "https://github.com/Jsebastiansalas",
      linkedinUrl: "https://www.linkedin.com/in/sebasti%C3%A1n-salas-torres-317a4a425/"
    },
    about: {
      title: "Sobre",
      highlight: "Mí",
      subtitle: "Un desarrollador con curiosidad insaciable, criterio técnico y mentalidad analítica.",
      leadQuote: "Cada bug o desafío es una oportunidad invaluable para entender mejor los sistemas y diseñar soluciones óptimas.",
      paragraphs: [
        "Me estoy formando con rigor como desarrollador de software junior. Me apasiona construir herramientas digitales confiables y tengo una meta clara: proyectarme y especializarme progresivamente en el campo del análisis de datos.",
        "Considero que mi mayor fortaleza es mi capacidad para aprender de los errores. No busco parches temporales; analizo la causa raíz de cada problema para transformarlo en conocimiento sólido y duradero para mi carrera."
      ],
      scrum: {
        title: "Metodología Ágil & Scrum",
        badge: "Trabajo en Equipo",
        description: "Experiencia trabajando colaborativamente bajo el marco Scrum, gestionando sprints, estimación de tareas y comunicación constante. La alta cohesión de nuestro equipo nos permitió entregar a tiempo y obtener la mejor calificación del grupo."
      },
      strengthsTitle: "Pilares Profesionales",
      strengths: [
        "Aprendizaje continuo",
        "Resolución de problemas",
        "Trabajo en equipo Scrum",
        "Comunicación asertiva",
        "Adaptabilidad rápida",
        "Compromiso técnico",
        "Atención al detalle"
      ]
    },
    skills: {
      title: "Habilidades y",
      highlight: "Tecnologías",
      subtitle: "Herramientas con las que diseño, construyo y resuelvo problemas reales.",
      filterAll: "Todas",
      categories: [
        {
          id: "frontend",
          name: "Frontend",
          icon: Layout,
          desc: "Construcción de interfaces modernas, accesibles y dinámicas.",
          items: ["HTML5", "CSS3", "JavaScript (ES6+)"]
        },
        {
          id: "backend",
          name: "Backend / Lógica",
          icon: Server,
          desc: "Estructuras de datos, orientación a objetos y lógica robusta.",
          items: ["Python", "Java"]
        },
        {
          id: "tools",
          name: "Herramientas",
          icon: Terminal,
          desc: "Control de versiones, flujo de trabajo y entornos de desarrollo.",
          items: ["Git", "GitHub", "VS Code"]
        },
        {
          id: "data",
          name: "Datos & SQL",
          icon: Database,
          desc: "Modelado relacional, consultas estructuradas y persistencia.",
          items: ["SQL", "MySQL"]
        }
      ]
    },
    projects: {
      title: "Proyectos",
      highlight: "Destacados",
      subtitle: "Showcase de aplicaciones reales, código probado y soluciones orientadas a impacto.",
      featuredBadge: "Proyecto Principal Destacado",
      viewCode: "Ver en GitHub",
      exploreDetails: "Detalles del Proyecto",
      items: [
        {
          id: "proyecto-sica",
          featured: true,
          title: "Proyecto SICA",
          category: "Sistema Empresarial",
          badge: "Arquitectura & Backend",
          image: `${BASE}images/projects/sica.jpg`,
          description: "Sistema Integral de Control y Administración (SICA). Plataforma diseñada para optimizar procesos internos, gestión de registros y validaciones de flujo de datos con arquitectura modular robusta.",
          technologies: ["Java", "SQL", "Git", "Arquitectura Modular"],
          myRole: "Desarrollador de Software",
          learned: "Modelado relacional de bases de datos, lógica de negocio desacoplada, control estricto de excepciones y diseño de software estructurado.",
          githubUrl: "https://github.com/Jsebastiansalas/proyecto-sica.git"
        },
        {
          id: "formula-1",
          featured: false,
          title: "Formula 1 Analytics App",
          category: "Data & Analytics",
          badge: "Telemetría & Estadísticas",
          image: `${BASE}images/projects/formula1.jpg`,
          description: "Aplicación interactiva de telemetría y métricas de Fórmula 1. Consulta y visualiza en tiempo real posiciones de pilotos, comparativas de tiempos de vuelta y rendimiento de escuderías en pista.",
          technologies: ["JavaScript", "Python", "API REST", "Análisis de Datos"],
          myRole: "Desarrollador & Integración de Datos",
          learned: "Consumo e integración de APIs complejas, transformación de datasets en el cliente y renderizado dinámico de estadísticas deportivas.",
          githubUrl: "https://github.com/Jsebastiansalas/Formula-1.git"
        },
        {
          id: "acme-bank",
          featured: false,
          title: "Acme Bank",
          category: "Frontend Web",
          badge: "Vanilla SPA",
          image: `${BASE}images/projects/acme-bank.jpg`,
          description: "Plataforma de autogestión bancaria interactiva (SPA) construida con JavaScript puro. Permite apertura de cuentas, simulación de transacciones en tiempo real y persistencia completa en el navegador.",
          technologies: ["JavaScript Vanilla", "HTML5", "CSS3", "LocalStorage"],
          myRole: "Desarrollador Frontend",
          learned: "Manipulación avanzada del DOM, arquitectura de página única sin frameworks y gestión del estado y persistencia con LocalStorage.",
          githubUrl: "https://github.com/Jsebastiansalas/ProyectoAcmebank_JavaScript_Salas-Sebastian-Jaimes-Daniel2"
        },
        {
          id: "delivery-bot",
          featured: false,
          title: "DeliveryBot Telegram",
          category: "Automatización & Cloud",
          badge: "Bot & Webhooks",
          image: `${BASE}images/projects/deliverybot.jpg`,
          description: "Bot automatizado de Telegram diseñado para agilizar pedidos en cafeterías universitarias. Registra órdenes, procesa menús interactivos y sincroniza la base de datos en tiempo real mediante webhooks.",
          technologies: ["n8n", "Telegram Bot API", "Google Sheets API", "Webhooks"],
          myRole: "Desarrollador / Integrador de Automatizaciones",
          learned: "Orquestación de flujos de trabajo automatizados, manejo de eventos en tiempo real con webhooks y conexión de servicios cloud.",
          githubUrl: "https://github.com/Jsebastiansalas/-Proyecto_DeliveryBot_SebastianSalas"
        }
      ]
    },
    superpower: {
      question: "¿Qué hago tan bien que podría ayudar a otros con eso?",
      answer: "Aprender de los errores.",
      subtitle: "Un ciclo iterativo de ingeniería para resolver problemas desde la raíz.",
      description: "No le temo a equivocarme porque entiendo que cada error es una oportunidad invaluable de diagnóstico. Cuando algo falla, descompongo el sistema, comprendo la causa de raíz y convierto esa experiencia en un nuevo principio de solidez técnica.",
      cycle: [
        {
          step: "01",
          title: "Detección",
          concept: "El fallo no es un obstáculo",
          detail: "Capturar el bug o inconsistencia como una señal clara del sistema, sin frustración."
        },
        {
          step: "02",
          title: "Diagnóstico",
          concept: "Análisis de causa raíz",
          detail: "Trazar el flujo de datos y la lógica para comprender exactamente por qué ocurrió."
        },
        {
          step: "03",
          title: "Solución",
          concept: "Corrección estructurada",
          detail: "Implementar una solución definitiva, no un parche temporal superficial."
        },
        {
          step: "04",
          title: "Crecimiento",
          concept: "Evolución técnica",
          detail: "Integrar el aprendizaje al criterio profesional para construir código más resiliente."
        }
      ]
    },
    formation: {
      title: "Formación y",
      highlight: "Trayectoria",
      subtitle: "Bases académicas sólidas y entrenamiento técnico de alto impacto.",
      items: [
        {
          period: "2025",
          title: "Bachiller Académico",
          institution: "Colegio Siglo XXI",
          badge: "Graduado con Honores",
          image: `${BASE}images/education/bachiller.jpg`,
          desc: "Formación integral con bases sólidas en razonamiento lógico, matemáticas y método científico que despertaron mi pasión por el desarrollo de software.",
          skills: ["Pensamiento Lógico", "Matemáticas", "Método Científico", "Disciplina Académica"]
        },
        {
          period: "2025 - 2026",
          title: "Tecnólogo en Desarrollo de Software (Full Stack)",
          institution: "Campuslands",
          badge: "En Formación Avanzada",
          image: `${BASE}images/education/campuslands.jpg`,
          desc: "Formación intensiva de alto rendimiento orientada a la industria. Dominio de algoritmos, estructuras de datos, programación Frontend & Backend, bases de datos y metodologías ágiles Scrum.",
          skills: ["Desarrollo Full Stack", "Algoritmos y Estructuras", "Bases de Datos SQL", "Metodologías Ágiles Scrum"]
        }
      ]
    },
    contact: {
      title: "¿Construimos algo",
      highlight: "interesante?",
      subtitle: "Estoy abierto a oportunidades como desarrollador de software junior y proyectos donde el aprendizaje continuo y los datos agreguen valor real.",
      name: "Sebastián Salas",
      email: "juansebastiansalas29@gmail.com",
      cvText: "Descargar Hoja de Vida (PDF)",
      cvUrl: `${BASE}Sebastian_Salas_CV.pdf`,
      github: "https://github.com/Jsebastiansalas",
      linkedin: "https://www.linkedin.com/in/sebasti%C3%A1n-salas-torres-317a4a425/",
      sendEmailBtn: "Enviar un mensaje",
      copyEmailBtn: "Copiar correo"
    },
    footer: {
      role: "Desarrollador de Software Junior",
      location: "Colombia",
      timeLabel: "Hora local:",
      copy: "Sebastián Salas. Diseñado y construido con precisión, pasión y React.",
      backToTop: "Volver arriba"
    }
  },

  en: {
    navLinks: [
      { name: 'Home', href: '#inicio' },
      { name: 'About me', href: '#sobre-mi' },
      { name: 'Skills', href: '#habilidades' },
      { name: 'Projects', href: '#proyectos' },
      { name: 'Education', href: '#formacion' },
      { name: 'Superpower', href: '#superpoder' },
      { name: 'Contact', href: '#contacto' },
    ],
    hero: {
      status: "Focused on software development & data analytics",
      role: "Junior Software Developer",
      firstName: "Sebastián",
      lastName: "Salas",
      tagline: "I build digital solutions, learn from every challenge, and explore the power of data.",
      btnProjects: "Explore projects",
      btnContact: "Let's talk",
      btnCV: "Download Resume",
      cvUrl: `${BASE}Sebastian_Salas_CV.pdf`,
      githubUrl: "https://github.com/Jsebastiansalas",
      linkedinUrl: "https://www.linkedin.com/in/sebasti%C3%A1n-salas-torres-317a4a425/"
    },
    about: {
      title: "About",
      highlight: "Me",
      subtitle: "A developer driven by curiosity, technical craftsmanship, and an analytical mindset.",
      leadQuote: "Every bug or challenge is an invaluable opportunity to better understand systems and design optimal solutions.",
      paragraphs: [
        "I am training rigorously as a junior software developer. I am passionate about crafting reliable digital tools, with a clear aspiration: to progressively specialize in data analysis.",
        "I consider my greatest strength to be my ability to learn from mistakes. I don't look for superficial patches; I dissect the root cause to turn every bug into durable, long-term technical knowledge."
      ],
      scrum: {
        title: "Agile Methodology & Scrum",
        badge: "Teamwork Excellence",
        description: "Hands-on experience collaborating in agile sprints under the Scrum framework, managing sprint tasks, estimations, and ongoing team communication. Our high group synergy enabled us to deliver on time and achieve the top grade in our cohort."
      },
      strengthsTitle: "Core Principles",
      strengths: [
        "Continuous learning",
        "Problem solving",
        "Scrum agile teamwork",
        "Clear communication",
        "Rapid adaptability",
        "Technical ownership",
        "Attention to detail"
      ]
    },
    skills: {
      title: "Skills &",
      highlight: "Technologies",
      subtitle: "Tools I use to design, build, and solve real engineering challenges.",
      filterAll: "All",
      categories: [
        {
          id: "frontend",
          name: "Frontend",
          icon: Layout,
          desc: "Modern, responsive, accessible, and reactive user interfaces.",
          items: ["HTML5", "CSS3", "JavaScript (ES6+)"]
        },
        {
          id: "backend",
          name: "Backend / Logic",
          icon: Server,
          desc: "Data structures, object-oriented design, and robust logic.",
          items: ["Python", "Java"]
        },
        {
          id: "tools",
          name: "Tools",
          icon: Terminal,
          desc: "Version control, workflow automation, and developer tooling.",
          items: ["Git", "GitHub", "VS Code"]
        },
        {
          id: "data",
          name: "Data & SQL",
          icon: Database,
          desc: "Relational database modeling, structured queries, and persistence.",
          items: ["SQL", "MySQL"]
        }
      ]
    },
    projects: {
      title: "Featured",
      highlight: "Projects",
      subtitle: "Showcase of real-world applications, tested code, and impact-driven solutions.",
      featuredBadge: "Featured Flagship Project",
      viewCode: "View on GitHub",
      exploreDetails: "Project Details",
      items: [
        {
          id: "proyecto-sica",
          featured: true,
          title: "Proyecto SICA",
          category: "Enterprise System",
          badge: "Architecture & Backend",
          image: `${BASE}images/projects/sica.jpg`,
          description: "Integral Control and Management System (SICA). Platform engineered to streamline internal business workflows, records management, and data flow validation with modular architecture.",
          technologies: ["Java", "SQL", "Git", "Modular Architecture"],
          myRole: "Software Developer",
          learned: "Relational database modeling, decoupled business logic, strict exception handling, and structured software architecture.",
          githubUrl: "https://github.com/Jsebastiansalas/proyecto-sica.git"
        },
        {
          id: "formula-1",
          featured: false,
          title: "Formula 1 Analytics App",
          category: "Data & Analytics",
          badge: "Telemetry & Standings",
          image: `${BASE}images/projects/formula1.jpg`,
          description: "Interactive Formula 1 telemetry and statistics web application. Explores real-time driver standings, constructor points, lap time comparisons, and track performance analytics.",
          technologies: ["JavaScript", "Python", "REST API", "Data Analytics"],
          myRole: "Developer & Data Integration",
          learned: "Complex sports API consumption, client-side dataset transformation, and dynamic rendering of sports metrics.",
          githubUrl: "https://github.com/Jsebastiansalas/Formula-1.git"
        },
        {
          id: "acme-bank",
          featured: false,
          title: "Acme Bank",
          category: "Frontend Web",
          badge: "Vanilla SPA",
          image: `${BASE}images/projects/acme-bank.jpg`,
          description: "Interactive single-page banking application (SPA) built with pure vanilla JavaScript. Features account opening, live transaction simulations, and persistent browser storage.",
          technologies: ["Vanilla JavaScript", "HTML5", "CSS3", "LocalStorage"],
          myRole: "Frontend Developer",
          learned: "Advanced DOM manipulation, framework-free single page architecture, and client-side persistence with LocalStorage.",
          githubUrl: "https://github.com/Jsebastiansalas/ProyectoAcmebank_JavaScript_Salas-Sebastian-Jaimes-Daniel2"
        },
        {
          id: "delivery-bot",
          featured: false,
          title: "DeliveryBot Telegram",
          category: "Automation & Cloud",
          badge: "Bot & Webhooks",
          image: `${BASE}images/projects/deliverybot.jpg`,
          description: "Automated Telegram bot built to streamline food ordering in university cafeterias. Registers customer orders, processes interactive menus, and synchronizes live database via webhooks.",
          technologies: ["n8n", "Telegram Bot API", "Google Sheets API", "Webhooks"],
          myRole: "Developer / Automation Integrator",
          learned: "Automated workflow orchestration, real-time event handling via webhooks, and cloud service integration.",
          githubUrl: "https://github.com/Jsebastiansalas/-Proyecto_DeliveryBot_SebastianSalas"
        }
      ]
    },
    superpower: {
      question: "What do I do so well that I could help others with it?",
      answer: "Learning from mistakes.",
      subtitle: "An iterative engineering cycle to solve problems from the root.",
      description: "I am not afraid of making mistakes because I understand that every error is an invaluable diagnostic opportunity. When something fails, I deconstruct the system, identify the root cause, and turn that insight into a new benchmark of technical robustness.",
      cycle: [
        {
          step: "01",
          title: "Detection",
          concept: "Failure is feedback",
          detail: "Capturing the bug or inconsistency as a diagnostic signal from the system, without friction."
        },
        {
          step: "02",
          title: "Diagnosis",
          concept: "Root cause analysis",
          detail: "Tracing data flow and execution logic to understand precisely why the breakdown occurred."
        },
        {
          step: "03",
          title: "Resolution",
          concept: "Structured fix",
          detail: "Architecting a permanent solution rather than a fragile superficial patch."
        },
        {
          step: "04",
          title: "Evolution",
          concept: "Technical mastery",
          detail: "Embedding the breakthrough into engineering discipline to deliver more resilient software."
        }
      ]
    },
    formation: {
      title: "Education &",
      highlight: "Trajectory",
      subtitle: "Solid academic foundations and high-intensity technical engineering.",
      items: [
        {
          period: "2025",
          title: "High School Diploma",
          institution: "Colegio Siglo XXI",
          badge: "Graduated with Honors",
          image: `${BASE}images/education/bachiller.jpg`,
          desc: "Comprehensive education with solid foundations in logical reasoning, mathematics, and the scientific method that sparked my passion for software engineering.",
          skills: ["Logical Reasoning", "Mathematics", "Scientific Method", "Academic Discipline"]
        },
        {
          period: "2025 - 2026",
          title: "Technologist in Software Development (Full Stack)",
          institution: "Campuslands",
          badge: "Advanced Tech Degree",
          image: `${BASE}images/education/campuslands.jpg`,
          desc: "High-performance industry-focused immersive program. Mastery of algorithms, data structures, Frontend & Backend programming, relational databases, and Scrum methodologies.",
          skills: ["Full Stack Development", "Algorithms & Data Structures", "SQL Databases", "Agile Scrum Methodologies"]
        }
      ]
    },
    contact: {
      title: "Shall we build something",
      highlight: "remarkable?",
      subtitle: "I am open to junior software development opportunities and high-impact projects where continuous learning and data drive meaningful results.",
      name: "Sebastián Salas",
      email: "juansebastiansalas29@gmail.com",
      cvText: "Download Full Resume (PDF)",
      cvUrl: `${BASE}Sebastian_Salas_CV.pdf`,
      github: "https://github.com/Jsebastiansalas",
      linkedin: "https://www.linkedin.com/in/sebasti%C3%A1n-salas-torres-317a4a425/",
      sendEmailBtn: "Send a message",
      copyEmailBtn: "Copy email"
    },
    footer: {
      role: "Junior Software Developer",
      location: "Colombia",
      timeLabel: "Local time:",
      copy: "Sebastián Salas. Designed and engineered with precision, passion, and React.",
      backToTop: "Back to top"
    }
  }
};
