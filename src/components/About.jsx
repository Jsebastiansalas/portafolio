import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Sparkles, Users, Award, Target, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LinkedInIcon } from './Icons';

const About = () => {
  const { data, language } = useLanguage();
  const about = data.about;

  return (
    <section id="sobre-mi" className="section about-section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header-editorial"
        >
          <span className="section-eyebrow">01 // IDENTITY & PHILOSOPHY</span>
          <h2 className="section-title-editorial">
            {about.title} <span className="text-gradient-cyan">{about.highlight}</span>
          </h2>
          <p className="section-subtitle-editorial">{about.subtitle}</p>
        </motion.div>

        {/* Asymmetrical Editorial Composition */}
        <div className="about-editorial-grid">
          
          {/* Left Column: Framed Technical Portrait */}
          <motion.div 
            className="about-portrait-column"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="portrait-frame-container">
              {/* Corner tech accents */}
              <div className="tech-corner corner-tl" />
              <div className="tech-corner corner-tr" />
              <div className="tech-corner corner-bl" />
              <div className="tech-corner corner-br" />

              <div className="portrait-image-wrapper">
                <img 
                  src={`${import.meta.env.BASE_URL}foto profesional.jpeg`} 
                  alt="Sebastián Salas"
                  className="portrait-img"
                  onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Sebastian+Salas&background=0a1020&color=00f2fe&size=500'; }}
                />
                <div className="portrait-overlay" />
              </div>

              {/* Status Tag on Portrait */}
              <div className="portrait-badge">
                <span className="badge-pulse-indicator" />
                <span>Sebastián Salas &bull; Junior Dev</span>
              </div>
            </div>

            {/* Quick Links under photo */}
            <div className="portrait-actions">
              <a
                href={data.hero.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portrait-linkedin-btn interactive-element"
              >
                <LinkedInIcon size={16} />
                <span>Perfil de LinkedIn</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={`${import.meta.env.BASE_URL}Sebastian_Salas_CV.pdf`}
                download="Hoja_de_Vida_Sebastian_Salas.pdf"
                className="portrait-cv-btn interactive-element"
              >
                <FileDown size={15} />
                <span>Hoja de Vida (PDF)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Storytelling & Scrum Story */}
          <div className="about-content-column">
            
            {/* Lead Quote */}
            <motion.blockquote 
              className="about-lead-quote"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              "{about.leadQuote}"
            </motion.blockquote>

            {/* Paragraphs */}
            <motion.div 
              className="about-paragraphs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {about.paragraphs.map((p, idx) => (
                <p key={idx} className="about-paragraph">{p}</p>
              ))}
            </motion.div>

            {/* Featured Teamwork / Scrum Achievement Box */}
            <motion.div 
              className="scrum-showcase-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="scrum-card-header">
                <div className="scrum-header-title">
                  <Users size={18} className="scrum-icon" />
                  <h4>{about.scrum.title}</h4>
                </div>
                <div className="scrum-badge">
                  <Award size={13} />
                  <span>{about.scrum.badge}</span>
                </div>
              </div>
              <p className="scrum-description">
                {about.scrum.description}
              </p>
            </motion.div>

            {/* Core Pillars / Strengths */}
            <motion.div 
              className="about-strengths-section"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="strengths-title-row">
                <Target size={16} className="strengths-icon" />
                <h5>{about.strengthsTitle}</h5>
              </div>

              <div className="strengths-chip-cluster">
                {about.strengths.map((str, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="strength-chip interactive-chip"
                  >
                    <span className="strength-chip-bullet">&bull;</span>
                    <span>{str}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
