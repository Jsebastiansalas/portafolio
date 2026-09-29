import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, FileDown, Terminal, Cpu, Database, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LinkedInIcon, GitHubIcon } from './Icons';

const Hero = () => {
  const { data, language } = useLanguage();
  const hero = data.hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="inicio" className="hero-editorial-section">
      {/* Ambient Visual Tech Backdrop */}
      <div className="hero-ambient-canvas" aria-hidden="true">
        <div className="hero-glow-orb hero-glow-cyan" />
        <div className="hero-glow-orb hero-glow-purple" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-main-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Indicator Badge */}
          <motion.div variants={itemVariants} className="hero-status-pill">
            <span className="status-pulse-dot" />
            <span className="status-text">{hero.status}</span>
          </motion.div>

          {/* Role Eyebrow */}
          <motion.div variants={itemVariants} className="hero-role-wrapper">
            <span className="hero-role-tag">{hero.role}</span>
            <span className="hero-role-sep">—</span>
            <span className="hero-role-sub">Full Stack & Data Mindset</span>
          </motion.div>

          {/* Monumental Editorial Name */}
          <motion.h1 variants={nameVariants} className="hero-monumental-name">
            <span className="name-first">SEBASTIÁN</span>
            <span className="name-second">SALAS</span>
          </motion.h1>

          {/* Tagline / Mission */}
          <motion.p variants={itemVariants} className="hero-editorial-tagline">
            "{hero.tagline}"
          </motion.p>

          {/* Call to Action Actions */}
          <motion.div variants={itemVariants} className="hero-action-cluster">
            {/* Primary Action */}
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#proyectos"
              className="btn btn-primary-hero interactive-element"
            >
              <span>{hero.btnProjects}</span>
              <ArrowRight size={17} className="btn-icon-right" />
            </motion.a>

            {/* Resume Download Action */}
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={hero.cvUrl}
              download="Hoja_de_Vida_Sebastian_Salas.pdf"
              className="btn btn-cv-hero interactive-element"
            >
              <FileDown size={17} className="btn-icon-cv" />
              <span>{hero.btnCV}</span>
            </motion.a>

            {/* Direct Contact Button */}
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#contacto"
              className="btn btn-secondary-hero interactive-element"
            >
              <Mail size={17} />
              <span>{hero.btnContact}</span>
            </motion.a>

            {/* Quick LinkedIn Link in Hero */}
            <motion.a
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={hero.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-pill interactive-element"
              title="LinkedIn Sebastián Salas"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={17} />
              <span className="social-pill-label">LinkedIn</span>
            </motion.a>
          </motion.div>

          {/* Tech Data Telemetry Badges */}
          <motion.div variants={itemVariants} className="hero-telemetry-row">
            <div className="telemetry-badge">
              <Cpu size={14} className="telemetry-icon-cyan" />
              <span>Clean Code & Algorithms</span>
            </div>
            <div className="telemetry-badge">
              <Database size={14} className="telemetry-icon-purple" />
              <span>Data Analysis & SQL</span>
            </div>
            <div className="telemetry-badge">
              <Sparkles size={14} className="telemetry-icon-green" />
              <span>Continuous Growth</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Asymmetrical Right Decorative Panel (Code/Data Telemetry Card) */}
        <motion.div
          className="hero-asymmetric-panel"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <div className="telemetry-terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <span className="terminal-title">sebastian_salas.config.ts</span>
            </div>

            <div className="terminal-code-body">
              <p><span className="code-keyword">const</span> developer = &#123;</p>
              <p className="code-indent"><span className="code-prop">name</span>: <span className="code-string">"Sebastián Salas"</span>,</p>
              <p className="code-indent"><span className="code-prop">role</span>: <span className="code-string">"Junior Software Developer"</span>,</p>
              <p className="code-indent"><span className="code-prop">trajectory</span>: <span className="code-string">"Software &rarr; Data Analytics"</span>,</p>
              <p className="code-indent"><span className="code-prop">superpower</span>: <span className="code-function">learnFromMistakes</span>(),</p>
              <p className="code-indent"><span className="code-prop">stack</span>: [<span className="code-string">"JavaScript"</span>, <span className="code-string">"Python"</span>, <span className="code-string">"Java"</span>, <span className="code-string">"SQL"</span>],</p>
              <p className="code-indent"><span className="code-prop">scrumGrade</span>: <span className="code-string">"Top Cohort Score"</span>,</p>
              <p className="code-indent"><span className="code-prop">mindset</span>: <span className="code-string">"Continuous Iteration"</span></p>
              <p>&#125;;</p>
              <div className="terminal-cursor-line">
                <span className="terminal-prompt">&gt;</span> <span className="terminal-command">status: ready to build</span>
                <span className="terminal-blink" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Editorial Bottom Bar with Scroll Indicator */}
      <motion.div
        className="hero-bottom-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="hero-scroll-cue">
          <span className="scroll-label">SCROLL TO EXPLORE</span>
          <motion.div
            className="scroll-line"
            animate={{ scaleY: [0.2, 1, 0.2], translateY: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
