import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, Download, Mail, ExternalLink, Bot } from 'lucide-react';
import { GeminiIcon, GitHubIcon, LinkedInIcon } from '../Icons';

export default function GeminiModal({ isOpen, onClose, language = 'es', data }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: language === 'es'
        ? '👋 ¡Hola! Soy el asistente Gemini para el portafolio de Sebastián Salas. He analizado su código, proyectos y experiencia. ¿Qué te gustaría saber sobre él?'
        : '👋 Hi! I am the Gemini assistant for Sebastián Salas\'s portfolio. I analyzed his code, projects, and skills. What would you like to know about him?'
    }
  ]);
  const [inputVal, setInputVal] = useState('');

  const quickPrompts = language === 'es' ? [
    { label: '¿Por qué contratarlo?', q: '¿Por qué debería contratar a Sebastián como desarrollador junior?' },
    { label: 'Proyecto SICA', q: 'Cuéntame sobre su proyecto principal SICA' },
    { label: 'Stack técnico', q: '¿Qué tecnologías maneja con más fluidez?' },
    { label: 'Contacto rápido', q: '¿Cómo puedo contactar a Sebastián?' }
  ] : [
    { label: 'Why hire him?', q: 'Why should I hire Sebastián as a junior developer?' },
    { label: 'SICA Project', q: 'Tell me about his flagship SICA project' },
    { label: 'Tech Stack', q: 'What technologies does he master best?' },
    { label: 'Quick Contact', q: 'How can I contact Sebastián?' }
  ];

  const getAIAnswer = (query) => {
    const q = query.toLowerCase();
    if (q.includes('contratar') || q.includes('hire') || q.includes('por qué') || q.includes('why')) {
      return language === 'es'
        ? '💡 **Por qué contratar a Sebastián:**\n\n• **Mentalidad de Ingeniería:** Aprende de cada error con enfoque de diagnóstico para solucionar problemas desde la causa raíz.\n• **Perfil Híbrido:** Backend estructurado en Java y Python, combinado con análisis relacional en SQL y desarrollo web moderno.\n• **Proyectos Reales:** No solo teoría; ha construido un sistema empresarial completo (SICA), dashboards de analítica de F1 y automatizaciones con bots.\n• **Crecimiento Rápido:** Formación intensiva en Campuslands bajo estándares de industria y Scrum.'
        : '💡 **Why hire Sebastián:**\n\n• **Engineering Mindset:** Embraces diagnostics and deep root-cause troubleshooting.\n• **Hybrid Profile:** Structured backend (Java & Python) coupled with SQL analytics and modern web development.\n• **Production-Ready Code:** Built flagship modular enterprise platforms (SICA), real-time F1 analytics, and webhook bots.\n• **High Velocity:** Intensive immersive training at Campuslands with agile Scrum practices.';
    }

    if (q.includes('sica') || q.includes('proyecto principal') || q.includes('flagship')) {
      return language === 'es'
        ? '🏛️ **Proyecto SICA (Sistema Integral de Control y Administración):**\n\n• **Qué es:** Plataforma empresarial modular orientada a optimizar procesos internos y flujos de datos.\n• **Tecnologías:** Java, SQL, Arquitectura Modular y Git.\n• **Aspectos Destacados:** Lógica de negocio desacoplada, control riguroso de excepciones y modelado relacional de datos.\n• **Código:** [Ver repositorio en GitHub](https://github.com/Jsebastiansalas/proyecto-sica)'
        : '🏛️ **SICA Project (Integral Control & Management System):**\n\n• **Overview:** Modular enterprise software engineered for internal workflow and data stream management.\n• **Stack:** Java, SQL, Modular Architecture, Git.\n• **Highlights:** Decoupled business logic, robust exception handling, and relational database schema.\n• **Code:** [View GitHub Repository](https://github.com/Jsebastiansalas/proyecto-sica)';
    }

    if (q.includes('tecnolog') || q.includes('stack') || q.includes('skills') || q.includes('habilidades')) {
      return language === 'es'
        ? '💻 **Stack Tecnológico de Sebastián:**\n\n• **Backend:** Java, Python\n• **Frontend:** JavaScript ES6+, React, HTML5, CSS3, DOM API\n• **Datos & Persistencia:** SQL, MySQL, LocalStorage\n• **Herramientas & Metodologías:** Git, GitHub, VS Code, REST APIs, Webhooks, Metodologías Ágiles (Scrum)'
        : '💻 **Sebastián\'s Tech Stack:**\n\n• **Backend:** Java, Python\n• **Frontend:** JavaScript ES6+, React, HTML5, CSS3\n• **Data & Persistence:** SQL, MySQL, LocalStorage\n• **Tools & Workflow:** Git, GitHub, VS Code, REST APIs, Webhooks, Scrum Agile';
    }

    if (q.includes('contact') || q.includes('correo') || q.includes('email') || q.includes('linkedin')) {
      return language === 'es'
        ? '📬 **Información de Contacto Directo:**\n\n• **Email:** [juansebastiansalas29@gmail.com](mailto:juansebastiansalas29@gmail.com)\n• **LinkedIn:** [Perfil en LinkedIn](https://www.linkedin.com/in/sebasti%C3%A1n-salas-torres-317a4a425/)\n• **GitHub:** [github.com/Jsebastiansalas](https://github.com/Jsebastiansalas)\n• **Ubicación:** Colombia (Disponible para trabajo presencial o remoto)'
        : '📬 **Direct Contact Details:**\n\n• **Email:** [juansebastiansalas29@gmail.com](mailto:juansebastiansalas29@gmail.com)\n• **LinkedIn:** [LinkedIn Profile](https://www.linkedin.com/in/sebasti%C3%A1n-salas-torres-317a4a425/)\n• **GitHub:** [github.com/Jsebastiansalas](https://github.com/Jsebastiansalas)\n• **Location:** Colombia (Available for remote or on-site roles)';
    }

    return language === 'es'
      ? `🤖 Según el portafolio de Sebastián, cuenta con sólida base en desarrollo de software (Java, Python, SQL, JS) y foco en análisis de datos. Construye soluciones confiables como el sistema SICA y la app de Formula 1. ¿Quieres saber sobre sus proyectos o ver su hoja de vida?`
      : `🤖 Based on Sebastián's portfolio, he has a strong foundation in software development (Java, Python, SQL, JS) and data analytics. He builds reliable solutions like SICA and Formula 1 Analytics. Would you like to check his projects or resume?`;
  };

  const handleSend = (textToSend) => {
    const q = (textToSend || inputVal).trim();
    if (!q) return;

    const userMsg = { role: 'user', text: q };
    const answer = getAIAnswer(q);
    const aiMsg = { role: 'assistant', text: answer };

    setMessages(prev => [...prev, userMsg, aiMsg]);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="gemini-backdrop" onClick={onClose}>
        <motion.div
          className="gemini-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gemini-title"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Header */}
          <div className="gemini-modal__header">
            <div className="gemini-modal__brand">
              <GeminiIcon size={24} />
              <div>
                <h3 id="gemini-title" className="gemini-modal__title">
                  Gemini <span className="gemini-modal__badge">Portfolio AI</span>
                </h3>
                <p className="gemini-modal__subtitle">
                  {language === 'es' ? 'Asistente inteligente de Sebastián Salas' : 'Sebastián Salas Smart Assistant'}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="gemini-modal__close-btn"
              onClick={onClose}
              aria-label={language === 'es' ? 'Cerrar Gemini' : 'Close Gemini'}
            >
              <X size={18} />
            </button>
          </div>

          {/* Quick Prompts */}
          <div className="gemini-modal__chips" aria-label="Sugerencias rápidas">
            {quickPrompts.map((p, i) => (
              <button
                key={i}
                type="button"
                className="gemini-chip"
                onClick={() => handleSend(p.q)}
              >
                <Sparkles size={12} className="gemini-chip__icon" />
                <span>{p.label}</span>
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="gemini-modal__messages">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`gemini-msg gemini-msg--${m.role}`}
              >
                {m.role === 'assistant' && (
                  <div className="gemini-msg__avatar">
                    <GeminiIcon size={16} />
                  </div>
                )}
                <div className="gemini-msg__content">
                  {m.text.split('\n').map((line, lIdx) => (
                    <p key={lIdx} dangerouslySetInnerHTML={{
                      __html: line
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
                    }} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <form
            className="gemini-modal__form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              className="gemini-modal__input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={language === 'es' ? 'Pregúntale a Gemini sobre Sebastián...' : 'Ask Gemini about Sebastián...'}
            />
            <button
              type="submit"
              className="gemini-modal__submit-btn"
              disabled={!inputVal.trim()}
              aria-label="Enviar"
            >
              <Send size={16} />
            </button>
          </form>

          {/* Actions footer */}
          <div className="gemini-modal__footer">
            <a
              href={`${import.meta.env.BASE_URL}Sebastian_Salas_CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="gemini-footer-btn"
            >
              <Download size={14} />
              <span>{language === 'es' ? 'Descargar CV' : 'Download CV'}</span>
            </a>
            <a
              href={`mailto:${data?.contact?.email || 'juansebastiansalas29@gmail.com'}`}
              className="gemini-footer-btn"
            >
              <Mail size={14} />
              <span>{language === 'es' ? 'Contactar' : 'Email'}</span>
            </a>
            <a
              href="https://github.com/Jsebastiansalas"
              target="_blank"
              rel="noopener noreferrer"
              className="gemini-footer-btn"
            >
              <GitHubIcon size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
