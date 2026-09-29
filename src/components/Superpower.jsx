import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bug, Search, Wrench, TrendingUp, Terminal, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Superpower = () => {
  const { data, language } = useLanguage();
  const superpower = data.superpower;
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Bug, Search, Wrench, TrendingUp];

  const terminalStates = [
    {
      status: "SYSTEM ALERT // STAGE 01",
      code: "RUNTIME EXCEPTION DETECTED",
      log: "Error 500: Unexpected null pointer in data ingestion layer.",
      insight: language === 'es' ? 'El bug no se ignora ni se oculta: se aísla como dato diagnóstico.' : 'The bug is not hidden: it is isolated as diagnostic input.'
    },
    {
      status: "TRACE & DECONSTRUCT // STAGE 02",
      code: "ANALYZE_ROOT_CAUSE(event)",
      log: "Mapping state mutations across 4 components. Found edge case at boundary.",
      insight: language === 'es' ? 'Entender la arquitectura completa antes de cambiar una sola línea.' : 'Understanding the full architecture before touching a single line.'
    },
    {
      status: "SYSTEM RESTORE // STAGE 03",
      code: "ARCHITECTURAL_PATCH_DEPLOYED",
      log: "Refactored with defensive checks, unit validation & structured error handling.",
      insight: language === 'es' ? 'Solución permanente de raíz, evitando parches superficiales.' : 'Permanent root resolution, avoiding superficial band-aids.'
    },
    {
      status: "TECHNICAL EVOLUTION // STAGE 04",
      code: "SYSTEM RESILIENCE +100%",
      log: "Knowledge codified into team best practices. Zero regression confirmed.",
      insight: language === 'es' ? 'El sistema es más robusto y el desarrollador tiene mayor criterio.' : 'The system is more robust and the developer possesses sharper engineering judgment.'
    }
  ];

  return (
    <section id="superpoder" className="section superpower-section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header-editorial text-center"
        >
          <span className="section-eyebrow">04 // CORE SUPERPOWER & MINDSET</span>
          <p className="superpower-prompt-question">{superpower.question}</p>
          <h2 className="superpower-hero-headline">
            {superpower.answer}
          </h2>
          <p className="section-subtitle-editorial mx-auto max-w-700">
            {superpower.subtitle}
          </p>
        </motion.div>

        {/* Interactive Engineering Cycle */}
        <div className="superpower-interactive-container">
          
          {/* Step Selectors */}
          <div className="superpower-steps-row">
            {superpower.cycle.map((item, idx) => {
              const Icon = stepIcons[idx];
              const isSelected = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`superpower-step-card ${isSelected ? 'active' : ''} interactive-element`}
                  aria-label={`Ver etapa ${item.step}: ${item.title}`}
                >
                  <div className="step-card-top">
                    <span className="step-number">{item.step}</span>
                    <div className="step-icon-bubble">
                      <Icon size={18} />
                    </div>
                  </div>
                  <h4 className="step-title">{item.title}</h4>
                  <p className="step-concept">{item.concept}</p>
                </button>
              );
            })}
          </div>

          {/* Interactive Inspection Terminal */}
          <motion.div 
            className="superpower-terminal-stage"
            layout
            transition={{ duration: 0.4 }}
          >
            <div className="terminal-stage-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="stage-header-title">
                {terminalStates[activeStep].status}
              </span>
              <span className="stage-step-counter">
                {activeStep + 1} / 4
              </span>
            </div>

            <div className="terminal-stage-body">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="terminal-state-content"
                >
                  <div className="terminal-exec-code">
                    <span className="terminal-prefix">&gt;&gt;</span>
                    <span className="terminal-code-snippet">{terminalStates[activeStep].code}</span>
                  </div>

                  <p className="terminal-log-output">
                    {terminalStates[activeStep].log}
                  </p>

                  <div className="terminal-insight-box">
                    <CheckCircle2 size={16} className="text-cyan" />
                    <span>{terminalStates[activeStep].insight}</span>
                  </div>

                  <p className="superpower-detailed-explanation">
                    {superpower.cycle[activeStep].detail}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="terminal-stage-nav">
              <button 
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 3))}
                className="stage-nav-btn interactive-element"
              >
                &larr; {language === 'es' ? 'Fase Anterior' : 'Previous Stage'}
              </button>
              <button 
                onClick={() => setActiveStep((prev) => (prev < 3 ? prev + 1 : 0))}
                className="stage-nav-btn stage-nav-next interactive-element"
              >
                <span>{language === 'es' ? 'Siguiente Fase' : 'Next Stage'}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Superpower;
