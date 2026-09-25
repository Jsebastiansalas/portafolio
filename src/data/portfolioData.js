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
      role: "Desarrollador de Software Junior",
      firstName: "Sebastián",
      lastName: "Salas",
      tagline: "Construyendo soluciones, aprendiendo de cada error y creciendo hacia el análisis de datos.",
      btnProjects: "Ver proyectos",
      btnContact: "Contactarme",
      btnCV: "Descargar Hoja de Vida",
      cvUrl: `${BASE}Sebastian_Salas_CV.pdf`
    },
    about: {
      title: "Sobre",
      highlight: "Mí",
      paragraphs: [
        "Me estoy formando como desarrollador de software junior. Soy un apasionado por la tecnología con un objetivo claro: especializarme en el área de análisis de datos en el futuro cercano.",
        "Considero que mi mayor fortaleza es mi capacidad para aprender de los errores. Cada desafío o bug es una oportunidad para entender mejor los sistemas, buscar soluciones óptimas y seguir avanzando en mi carrera profesional."
      ],
      strengthsTitle: "Mis Fortalezas",
      strengths: [
        "Trabajo en equipo",
        "Comunicación",
        "Adaptabilidad",
        "Responsabilidad",
        "Compromiso",
        "Resolución de problemas",
        "Aprendizaje constante"
      ]
    },
    skills: {
      title: "Habilidades y",
      highlight: "Tecnologías",
      categories: [
        {
          name: "Frontend",
          icon: Layout,
          items: ["HTML5", "CSS3", "JavaScript"]
        },
        {
          name: "Backend / Programación",
          icon: Server,
          items: ["Python", "Java"]
        },
        {
          name: "Herramientas",
          icon: Terminal,
          items: ["Git", "GitHub", "VS Code"]
        },
        {
          name: "Datos",
          icon: Database,
          items: ["SQL", "MySQL"]
        }
      ]
    },
    projects: {
      title: "Proyectos",
      highlight: "Destacados",
      items: [
        {
          id: "proyecto-sica",
          title: "Proyecto SICA",
          image: `${BASE}images/projects/sica.jpg`,
          description: "Sistema Integral de Control y Administración (SICA). Plataforma diseñada para la optimización de procesos internos, gestión de registros y control de flujo de datos con arquitectura modular y validaciones robustas.",
          technologies: ["Java", "SQL", "Git", "Arquitectura Modular"],
          myRole: "Desarrollador de Software",
          learned: "Modelado relacional de datos, lógica de negocio robusta, control de excepciones y diseño de software estructurado.",
          githubUrl: "https://github.com/Jsebastiansalas/proyecto-sica.git"
        },
        {
          id: "formula-1",
          title: "Formula 1 Analytics App",
          image: `${BASE}images/projects/formula1.jpg`,
          description: "Aplicación interactiva de telemetría y métricas de Fórmula 1. Permite explorar resultados de carreras, clasificaciones mundiales de pilotos y escuderías, tiempos por vuelta y análisis de rendimiento en pista.",
          technologies: ["JavaScript", "Python", "API REST", "Análisis de Datos"],
          myRole: "Desarrollador & Integración de Datos",
          learned: "Consumo e integración de APIs complejas, transformación y filtrado de grandes datasets y renderizado dinámico de estadísticas.",
          githubUrl: "https://github.com/Jsebastiansalas/Formula-1.git"
        },
        {
          id: "acme-bank",
          title: "Acme Bank",
          image: `${BASE}images/projects/acme-bank.jpg`,
          description: "Plataforma de autogestión bancaria interactiva (SPA) construida con JavaScript puro. Permite apertura de cuentas, simulación de transacciones financieras en tiempo real y persistencia en el navegador.",
          technologies: ["JavaScript Vanilla", "HTML5", "CSS3", "LocalStorage"],
          myRole: "Desarrollador Frontend",
          learned: "Manipulación avanzada del DOM, arquitectura SPA sin frameworks y gestión del estado y persistencia con LocalStorage.",
          githubUrl: "https://github.com/Jsebastiansalas/ProyectoAcmebank_JavaScript_Salas-Sebastian-Jaimes-Daniel2"
        },
        {
          id: "delivery-bot",
          title: "DeliveryBot Telegram",
          image: `${BASE}images/projects/deliverybot.jpg`,
          description: "Bot automatizado de Telegram diseñado para agilizar pedidos en cafeterías universitarias. Registra órdenes, procesa menús interactivos y sincroniza la base de datos en tiempo real mediante webhooks.",
          technologies: ["n8n", "Telegram Bot API", "Google Sheets API", "Webhooks"],
          myRole: "Desarrollador / Integrador de Automatizaciones",
          learned: "Orquestación de flujos de trabajo automatizados, manejo de eventos en tiempo real con webhooks y conexión de servicios cloud.",
          githubUrl: "https://github.com/Jsebastiansalas/-Proyecto_DeliveryBot_SebastianSalas"
        }
      ]
    },
    formation: {
      title: "Formación y",
      highlight: "Trayectoria",
      items: [
        {
          period: "2025",
          title: "Bachiller Académico",
          institution: "Colegio Siglo XXI",
          image: `${BASE}images/education/bachiller.jpg`,
          desc: "Formación integral con bases sólidas en razonamiento lógico, matemáticas y método científico que despertaron mi pasión por el desarrollo de software."
        },
        {
          period: "2025 - 2026",
          title: "Tecnólogo en Desarrollo de Software (Full Stack)",
          institution: "Campuslands",
          image: `${BASE}images/education/campuslands.jpg`,
          desc: "Formación intensiva de alto rendimiento orientada a la industria. Dominio de algoritmos, estructuras de datos, programación Frontend & Backend, bases de datos y metodologías ágiles Scrum."
        }
      ]
    },
    superpower: {
      question: "¿Qué hago tan bien que podría ayudar a otros con eso?",
      answer: "Aprender de los errores.",
      description: "No le temo a equivocarme porque entiendo que cada error es una oportunidad invaluable. Cuando algo falla, me detengo a entender qué sucedió, busco la solución de raíz y me aseguro de que ese aprendizaje se convierta en un nuevo escalón para seguir avanzando."
    },
    roadmap: {
      title: "¿Hacia dónde",
      highlight: "voy?",
      statement: "Mi objetivo es crecer como desarrollador de software y especializarme progresivamente en análisis de datos."
    },
    contact: {
      title: "¿Tienes un proyecto o quieres conocer más sobre mi trabajo?",
      highlight: "Contáctame",
      name: "Sebastián Salas",
      email: "juansebastiansalas29@gmail.com",
      cvText: "Descargar CV Completo",
      cvUrl: `${BASE}Sebastian_Salas_CV.pdf`,
      github: "https://github.com/Jsebastiansalas"
    },
    footer: {
      copy: "Sebastian Salas. Todos los derechos reservados.",
      madeWith: "Diseñado y desarrollado con dedicación"
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
      role: "Junior Software Developer",
      firstName: "Sebastián",
      lastName: "Salas",
      tagline: "Building solutions, learning from every mistake, and growing towards data analysis.",
      btnProjects: "View projects",
      btnContact: "Contact me",
      btnCV: "Download Resume (CV)",
      cvUrl: `${BASE}Sebastian_Salas_CV.pdf`
    },
    about: {
      title: "About",
      highlight: "Me",
      paragraphs: [
        "I am training as a junior software developer. I am passionate about technology with a clear goal: to specialize in the field of data analysis in the near future.",
        "I consider my greatest strength to be my ability to learn from mistakes. Every challenge or bug is an opportunity to better understand systems, find optimal solutions, and keep moving forward in my professional career."
      ],
      strengthsTitle: "My Strengths",
      strengths: [
        "Teamwork",
        "Communication",
        "Adaptability",
        "Responsibility",
        "Commitment",
        "Problem Solving",
        "Continuous Learning"
      ]
    },
    skills: {
      title: "Skills &",
      highlight: "Technologies",
      categories: [
        {
          name: "Frontend",
          icon: Layout,
          items: ["HTML5", "CSS3", "JavaScript"]
        },
        {
          name: "Backend / Programming",
          icon: Server,
          items: ["Python", "Java"]
        },
        {
          name: "Tools",
          icon: Terminal,
          items: ["Git", "GitHub", "VS Code"]
        },
        {
          name: "Data",
          icon: Database,
          items: ["SQL", "MySQL"]
        }
      ]
    },
    projects: {
      title: "Featured",
      highlight: "Projects",
      items: [
        {
          id: "proyecto-sica",
          title: "Proyecto SICA",
          image: `${BASE}images/projects/sica.jpg`,
          description: "Integral Control and Management System (SICA). Platform designed for internal workflow optimization, records management, and data stream validation with modular architecture.",
          technologies: ["Java", "SQL", "Git", "Modular Architecture"],
          myRole: "Software Developer",
          learned: "Relational data modeling, robust business logic, exception handling, and structured software architecture.",
          githubUrl: "https://github.com/Jsebastiansalas/proyecto-sica.git"
        },
        {
          id: "formula-1",
          title: "Formula 1 Analytics App",
          image: `${BASE}images/projects/formula1.jpg`,
          description: "Interactive Formula 1 telemetry and statistics web application. Explore race results, world driver and constructor standings, lap timings, and track performance analytics.",
          technologies: ["JavaScript", "Python", "REST API", "Data Analytics"],
          myRole: "Developer & Data Integration",
          learned: "Complex sports API consumption, data manipulation and filtering of large datasets, and dynamic statistics rendering.",
          githubUrl: "https://github.com/Jsebastiansalas/Formula-1.git"
        },
        {
          id: "acme-bank",
          title: "Acme Bank",
          image: `${BASE}images/projects/acme-bank.jpg`,
          description: "Interactive single-page banking application (SPA) built with vanilla JavaScript. Features account opening, real-time transaction simulation, and persistent browser storage.",
          technologies: ["Vanilla JavaScript", "HTML5", "CSS3", "LocalStorage"],
          myRole: "Frontend Developer",
          learned: "Advanced DOM manipulation, framework-free SPA architecture, and state persistence with LocalStorage.",
          githubUrl: "https://github.com/Jsebastiansalas/ProyectoAcmebank_JavaScript_Salas-Sebastian-Jaimes-Daniel2"
        },
        {
          id: "delivery-bot",
          title: "DeliveryBot Telegram",
          image: `${BASE}images/projects/deliverybot.jpg`,
          description: "Automated Telegram bot created to speed up food ordering in university cafeterias. Registers customer orders, processes interactive menus, and synchronizes live database via webhooks.",
          technologies: ["n8n", "Telegram Bot API", "Google Sheets API", "Webhooks"],
          myRole: "Developer / Automation Integrator",
          learned: "Automated workflow orchestration, real-time event processing with webhooks, and cloud service integration.",
          githubUrl: "https://github.com/Jsebastiansalas/-Proyecto_DeliveryBot_SebastianSalas"
        }
      ]
    },
    formation: {
      title: "Education &",
      highlight: "Trajectory",
      items: [
        {
          period: "2025",
          title: "High School Diploma",
          institution: "Colegio Siglo XXI",
          image: `${BASE}images/education/bachiller.jpg`,
          desc: "Comprehensive education with solid foundations in logical reasoning, mathematics, and the scientific method that sparked my passion for software engineering."
        },
        {
          period: "2025 - 2026",
          title: "Technologist in Software Development (Full Stack)",
          institution: "Campuslands",
          image: `${BASE}images/education/campuslands.jpg`,
          desc: "High-performance industry-focused immersive program. Mastery of algorithms, data structures, Frontend & Backend programming, relational databases, and Scrum methodologies."
        }
      ]
    },
    superpower: {
      question: "What do I do so well that I could help others with it?",
      answer: "Learning from mistakes.",
      description: "I am not afraid of making mistakes because I understand that every error is an invaluable opportunity. When something fails, I stop to understand what happened, look for the root solution, and make sure that this learning becomes a new step to keep moving forward."
    },
    roadmap: {
      title: "Where am I",
      highlight: "going?",
      statement: "My goal is to grow as a software developer and progressively specialize in data analysis."
    },
    contact: {
      title: "Do you have a project or want to know more about my work?",
      highlight: "Contact me",
      name: "Sebastián Salas",
      email: "juansebastiansalas29@gmail.com",
      cvText: "Download Full Resume",
      cvUrl: `${BASE}Sebastian_Salas_CV.pdf`,
      github: "https://github.com/Jsebastiansalas"
    },
    footer: {
      copy: "Sebastian Salas. All rights reserved.",
      madeWith: "Designed and developed with dedication"
    }
  }
};
