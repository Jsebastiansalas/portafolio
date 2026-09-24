import { Code2, Database, BrainCircuit, Layout, GraduationCap, Globe } from 'lucide-react';

export const portfolioData = {
  es: {
    navLinks: [
      { name: 'Inicio', href: '#inicio' },
      { name: 'Sobre mí', href: '#sobre-mi' },
      { name: 'Educación', href: '#educacion' },
      { name: 'Proyectos', href: '#proyectos' },
      { name: 'Habilidades', href: '#habilidades' },
      { name: 'Contacto', href: '#contacto' },
    ],
    hero: {
      role: "Full Stack Developer",
      firstName: "Sebastian",
      lastName: "Salas",
      tagline: "Frontend · Inteligencia Artificial · Bases de Datos",
      description: "Estudiante interesado en tecnología y desarrollo de software, caracterizado por mi responsabilidad, disciplina y aprendizaje autodidacta.",
      btnProjects: "Ver Proyectos",
      btnCV: "Descargar CV",
    },
    about: {
      title: "Sobre",
      highlight: "Mí",
      paragraphs: [
        "Soy un estudiante apasionado por el área de la tecnología y el desarrollo de software. Me considero una persona responsable, disciplinada y con un fuerte enfoque en el aprendizaje autodidacta.",
        "Poseo sólidas capacidades para construir interfaces web dinámicas y funcionales. Mi experiencia incluye tecnologías esenciales como JavaScript, HTML5 y CSS3, complementadas con fundamentos en Python y gestión de bases de datos relacionales con MySQL.",
        "Me caracterizo por trabajar bajo metodologías ágiles como Scrum, participando activamente en la planificación de Sprints. Utilizo de manera fluida herramientas de control de versiones y gestión de proyectos como Git, GitHub y Jira.",
      ],
      stats: [
        { number: "Scrum", label: "Metodologías Ágiles" },
        { number: "100%", label: "Aprendizaje Autodidacta" },
        { number: "A2", label: "Nivel de Inglés" },
      ]
    },
    experience: {
      title: "Mi",
      highlight: "Educación",
      desc: "Mi trayectoria académica y formación profesional.",
      items: [
        {
          id: 1,
          title: "Técnico en Programación Avanzada de Software",
          company: "Campuslands",
          period: "2026",
          description: "Formación intensiva en desarrollo de software, abarcando desde lógica de programación hasta tecnologías web modernas y trabajo bajo metodologías ágiles."
        },
        {
          id: 2,
          title: "Bachiller Académico",
          company: "Colegio Siglo XXI",
          period: "2025",
          description: "Estudios de educación secundaria y media."
        }
      ]
    },
    skills: {
      title: "Habilidades",
      highlight: "Técnicas",
      items: [
        { name: "HTML5 & CSS3", level: 90, icon: Layout },
        { name: "JavaScript", level: 85, icon: Code2 },
        { name: "React", level: 40, icon: Globe },
        { name: "MySQL", level: 75, icon: Database },
        { name: "Python", level: 60, icon: Code2 },
        { name: "Git & GitHub", level: 80, icon: BrainCircuit },
      ],
      toolsTitle: "Otras Herramientas y Habilidades",
      tools: ['Scrum', 'Jira', 'Inglés A2', 'Desarrollo Web', 'Telegram API', 'Google Sheets API']
    },
    projects: {
      title: "Mis",
      highlight: "Proyectos",
      items: [
        {
          id: "delivery-bot",
          title: "DeliveryBot",
          description: "Bot de Telegram para pedidos en cafeterías y universidades. Elimina filas y errores: el usuario escribe desde el celular y el sistema registra todo en Google Sheets automáticamente a través de n8n.",
          tags: ["n8n", "Telegram API", "Google Sheets"],
          githubUrl: "https://github.com/Jsebastiansalas/-Proyecto_DeliveryBot_SebastianSalas",
        },
        {
          id: "banco-acme",
          title: "Banco Acme",
          description: "SPA de autogestión bancaria construida con JavaScript Vanilla, sin frameworks ni backend. Arquitectura de página única y persistencia local implementadas desde cero.",
          tags: ["JavaScript", "HTML", "CSS", "SPA"],
          githubUrl: "https://github.com/Jsebastiansalas/ProyectoAcmebank_JavaScript_Salas-Sebastian-Jaimes-Daniel2",
        },
        {
          id: "fashion-app",
          title: "Fashion App",
          description: "App de ecommerce de ropa diseñada para explorar, ver detalles y comprar prendas. UI fluida y visualmente atractiva, optimizada para dispositivos móviles con foco en experiencia de compra.",
          tags: ["HTML", "CSS", "JavaScript", "Mobile-first"],
          githubUrl: "https://github.com/Jsebastiansalas/app_de_ecommerce_de_ropa",
        },
        {
          id: "proyecto-sica",
          title: "Proyecto SICA",
          description: "Desarrollo y gestión de información. Implementación con tecnologías web para asegurar escalabilidad.",
          tags: ["React", "JavaScript", "Frontend"],
          githubUrl: "https://github.com/Jsebastiansalas/proyecto-sica.git",
        },
        {
          id: "formula-1",
          title: "Formula 1 App",
          description: "Aplicación o visor de datos sobre la Formula 1. Diseño enfocado en la experiencia de usuario y visualización de datos.",
          tags: ["JavaScript", "Web API", "CSS"],
          githubUrl: "https://github.com/Jsebastiansalas/Formula-1.git",
        }
      ]
    },
    contact: {
      title: "¿Hablamos?",
      desc: "Estoy disponible para nuevas oportunidades, proyectos o simplemente para intercambiar ideas sobre tecnología.",
      emailBtn: "Envíame un correo",
      githubBtn: "Mi GitHub",
      email: "juansebastiansalas29@gmail.com",
      github: "https://github.com/Jsebastiansalas"
    },
    footer: {
      copy: "Sebastian Salas. Todos los derechos reservados.",
      madeWith: "Diseñado y desarrollado con"
    }
  },
  
  // ENGLISH TRANSLATION
  en: {
    navLinks: [
      { name: 'Home', href: '#inicio' },
      { name: 'About me', href: '#sobre-mi' },
      { name: 'Education', href: '#educacion' },
      { name: 'Projects', href: '#proyectos' },
      { name: 'Skills', href: '#habilidades' },
      { name: 'Contact', href: '#contacto' },
    ],
    hero: {
      role: "Full Stack Developer",
      firstName: "Sebastian",
      lastName: "Salas",
      tagline: "Frontend · Artificial Intelligence · Databases",
      description: "Student interested in technology and software development, characterized by my responsibility, discipline, and self-directed learning.",
      btnProjects: "View Projects",
      btnCV: "Download CV",
    },
    about: {
      title: "About",
      highlight: "Me",
      paragraphs: [
        "I am a student passionate about technology and software development. I consider myself a responsible, disciplined person with a strong focus on self-directed learning.",
        "I have solid skills to build dynamic and functional web interfaces. My expertise includes essential technologies like JavaScript, HTML5, and CSS3, complemented by Python fundamentals and relational database management with MySQL.",
        "I stand out for working under agile methodologies like Scrum, actively participating in Sprint planning. I fluently use version control and project management tools like Git, GitHub, and Jira.",
      ],
      stats: [
        { number: "Scrum", label: "Agile Methodologies" },
        { number: "100%", label: "Self-taught Learner" },
        { number: "A2", label: "English Level" },
      ]
    },
    experience: {
      title: "My",
      highlight: "Education",
      desc: "My academic journey and professional training.",
      items: [
        {
          id: 1,
          title: "Technical Degree in Advanced Software Programming",
          company: "Campuslands",
          period: "2026",
          description: "Intensive training in software development, covering everything from programming logic to modern web technologies and agile teamwork."
        },
        {
          id: 2,
          title: "High School Diploma",
          company: "Colegio Siglo XXI",
          period: "2025",
          description: "High school education completed."
        }
      ]
    },
    skills: {
      title: "Technical",
      highlight: "Skills",
      items: [
        { name: "HTML5 & CSS3", level: 90, icon: Layout },
        { name: "JavaScript", level: 85, icon: Code2 },
        { name: "React", level: 40, icon: Globe },
        { name: "MySQL", level: 75, icon: Database },
        { name: "Python", level: 60, icon: Code2 },
        { name: "Git & GitHub", level: 80, icon: BrainCircuit },
      ],
      toolsTitle: "Other Tools and Skills",
      tools: ['Scrum', 'Jira', 'English A2', 'Web Development', 'Telegram API', 'Google Sheets API']
    },
    projects: {
      title: "My",
      highlight: "Projects",
      items: [
        {
          id: "delivery-bot",
          title: "DeliveryBot",
          description: "Telegram bot for orders in cafeterias and universities. Eliminates lines and errors: the user types from their phone and the system records everything in Google Sheets automatically through n8n.",
          tags: ["n8n", "Telegram API", "Google Sheets"],
          githubUrl: "https://github.com/Jsebastiansalas/-Proyecto_DeliveryBot_SebastianSalas",
        },
        {
          id: "banco-acme",
          title: "Acme Bank",
          description: "Banking self-management SPA built with Vanilla JavaScript, no frameworks or backend. Single page architecture and local persistence implemented from scratch.",
          tags: ["JavaScript", "HTML", "CSS", "SPA"],
          githubUrl: "https://github.com/Jsebastiansalas/ProyectoAcmebank_JavaScript_Salas-Sebastian-Jaimes-Daniel2",
        },
        {
          id: "fashion-app",
          title: "Fashion App",
          description: "Clothing ecommerce app designed to explore, view details, and buy clothes. Fluid and visually attractive UI, optimized for mobile devices with a focus on the shopping experience.",
          tags: ["HTML", "CSS", "JavaScript", "Mobile-first"],
          githubUrl: "https://github.com/Jsebastiansalas/app_de_ecommerce_de_ropa",
        },
        {
          id: "proyecto-sica",
          title: "SICA Project",
          description: "Information development and management. Implementation with web technologies to ensure scalability.",
          tags: ["React", "JavaScript", "Frontend"],
          githubUrl: "https://github.com/Jsebastiansalas/proyecto-sica.git",
        },
        {
          id: "formula-1",
          title: "Formula 1 App",
          description: "Application or data viewer for Formula 1. Design focused on user experience and data visualization.",
          tags: ["JavaScript", "Web API", "CSS"],
          githubUrl: "https://github.com/Jsebastiansalas/Formula-1.git",
        }
      ]
    },
    contact: {
      title: "Let's Talk?",
      desc: "I am available for new opportunities, freelance projects, or just to exchange ideas about technology.",
      emailBtn: "Send me an email",
      githubBtn: "My GitHub",
      email: "juansebastiansalas29@gmail.com",
      github: "https://github.com/Jsebastiansalas"
    },
    footer: {
      copy: "Sebastian Salas. All rights reserved.",
      madeWith: "Designed and developed with"
    }
  }
};
