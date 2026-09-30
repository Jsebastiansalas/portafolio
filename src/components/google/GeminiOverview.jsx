import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronDown, ChevronUp, Download, ExternalLink } from 'lucide-react';
import { GeminiIcon } from '../Icons';

export default function GeminiOverview({ language = 'es', onOpenGeminiChat, data }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hero = data?.hero || {};

  return (
    <section className="gemini-overview-card" aria-label="AI Overview">
      <div className="gemini-overview-card__header">
        <div className="gemini-overview-card__title-wrap">
          <GeminiIcon size={20} />
          <span className="gemini-overview-card__title">
            {language === 'es' ? 'Resumen creado por IA' : 'AI Overview'}
          </span>
          <span className="gemini-overview-card__badge">Gemini</span>
        </div>

        <button
          type="button"
          className="gemini-overview-card__toggle"
          onClick={() => setIsExpanded(prev => !prev)}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? 'Contraer' : 'Expandir'}
        >
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {isExpanded && (
        <motion.div
          className="gemini-overview-card__content"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.25 }}
        >
          <p className="gemini-overview-card__paragraph">
            {language === 'es' ? (
              <>
                <strong>Sebastián Salas</strong> es un desarrollador de software junior con un perfil técnico orientado a la construcción de arquitecturas robustas y el análisis de datos. Su stack nuclear integra <strong>Java, Python, SQL, JavaScript ES6+</strong> y metodologías ágiles Scrum.
              </>
            ) : (
              <>
                <strong>Sebastián Salas</strong> is a junior software developer focused on robust software architectures and data analytics. His core stack integrates <strong>Java, Python, SQL, JavaScript ES6+</strong>, and agile Scrum practices.
              </>
            )}
          </p>

          <div className="gemini-overview-card__bullets">
            <div className="gemini-bullet-item">
              <span className="gemini-bullet-icon">🏛️</span>
              <div>
                <strong>{language === 'es' ? 'Proyecto Insignia (SICA):' : 'Flagship Project (SICA):'}</strong>{' '}
                {language === 'es'
                  ? 'Plataforma empresarial modular en Java y SQL con control estricto de excepciones y lógica de negocio desacoplada.'
                  : 'Modular enterprise platform in Java and SQL with strict exception handling and decoupled business logic.'}
              </div>
            </div>

            <div className="gemini-bullet-item">
              <span className="gemini-bullet-icon">📊</span>
              <div>
                <strong>{language === 'es' ? 'Analítica & APIs:' : 'Analytics & APIs:'}</strong>{' '}
                {language === 'es'
                  ? 'Desarrollo de Formula 1 Analytics App para procesamiento de telemetría y métricas de rendimiento en tiempo real.'
                  : 'Engineered Formula 1 Analytics App for real-time telemetry processing and sports standings.'}
              </div>
            </div>

            <div className="gemini-bullet-item">
              <span className="gemini-bullet-icon">💡</span>
              <div>
                <strong>{language === 'es' ? 'Diferenciador Clave:' : 'Key Strength:'}</strong>{' '}
                {language === 'es'
                  ? 'Metodología de diagnóstico ante errores para resolver fallos desde la raíz y asegurar alta confiabilidad del código.'
                  : 'Deep root-cause diagnostic approach to transform errors into resilient architectural principles.'}
              </div>
            </div>
          </div>

          <div className="gemini-overview-card__footer">
            <button
              type="button"
              className="gemini-chat-trigger-btn"
              onClick={onOpenGeminiChat}
            >
              <Sparkles size={14} />
              <span>{language === 'es' ? 'Preguntarle más a Gemini sobre Sebastián' : 'Ask Gemini more about Sebastián'}</span>
            </button>

            <a
              href={hero.cvUrl || `${import.meta.env.BASE_URL}Sebastian_Salas_CV.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="gemini-cv-link"
            >
              <Download size={13} />
              <span>{language === 'es' ? 'Ver Hoja de Vida' : 'View Resume'}</span>
            </a>
          </div>
        </motion.div>
      )}
    </section>
  );
}
