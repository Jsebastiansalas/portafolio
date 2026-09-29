import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileDown, ArrowUpRight, Copy, Check, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LinkedInIcon, GitHubIcon } from './Icons';

const Contact = () => {
  const { data, language } = useLanguage();
  const contact = data.contact;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contacto" className="section contact-section">
      <div className="container">
        
        {/* Contact Billboard Card */}
        <motion.div 
          className="contact-billboard-card glass-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="billboard-ambient-glow" />

          <div className="billboard-header text-center">
            <span className="section-eyebrow">06 // GET IN TOUCH</span>
            <h2 className="billboard-title">
              {contact.title} <span className="text-gradient-cyan">{contact.highlight}</span>
            </h2>
            <p className="billboard-subtitle mx-auto">
              {contact.subtitle}
            </p>
          </div>

          {/* Contact Direct Connection Grid */}
          <div className="contact-methods-grid">
            
            {/* 1. LinkedIn Card */}
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-box interactive-element"
            >
              <div className="contact-box-icon box-icon-linkedin">
                <LinkedInIcon size={24} />
              </div>
              <div className="contact-box-info">
                <span className="box-platform-label">LinkedIn</span>
                <span className="box-detail-text">Sebastián Salas Torres</span>
              </div>
              <ArrowUpRight size={18} className="box-arrow-indicator" />
            </motion.a>

            {/* 2. GitHub Card */}
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-box interactive-element"
            >
              <div className="contact-box-icon box-icon-github">
                <GitHubIcon size={24} />
              </div>
              <div className="contact-box-info">
                <span className="box-platform-label">GitHub</span>
                <span className="box-detail-text">@Jsebastiansalas</span>
              </div>
              <ArrowUpRight size={18} className="box-arrow-indicator" />
            </motion.a>

            {/* 3. Email Card */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              className="contact-card-box interactive-element"
              onClick={handleCopyEmail}
              style={{ cursor: 'pointer' }}
            >
              <div className="contact-box-icon box-icon-email">
                <Mail size={24} />
              </div>
              <div className="contact-box-info">
                <span className="box-platform-label">Email</span>
                <span className="box-detail-text">{contact.email}</span>
              </div>
              <div className="box-copy-action" title="Copiar correo">
                {copied ? <Check size={18} className="text-green" /> : <Copy size={18} />}
              </div>
            </motion.div>

            {/* 4. CV Download Card */}
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={contact.cvUrl}
              download="Hoja_de_Vida_Sebastian_Salas.pdf"
              className="contact-card-box box-highlight-cv interactive-element"
            >
              <div className="contact-box-icon box-icon-cv">
                <FileDown size={24} />
              </div>
              <div className="contact-box-info">
                <span className="box-platform-label">Curriculum Vitae</span>
                <span className="box-detail-text">{contact.cvText}</span>
              </div>
              <ArrowUpRight size={18} className="box-arrow-indicator" />
            </motion.a>

          </div>

          {/* Primary Action Button Row */}
          <div className="billboard-actions-row">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${contact.email}`}
              className="btn btn-primary-hero interactive-element"
            >
              <Mail size={18} />
              <span>{contact.sendEmailBtn}</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCopyEmail}
              className="btn btn-secondary-hero interactive-element"
            >
              {copied ? <Check size={18} className="text-green" /> : <Copy size={18} />}
              <span>{copied ? (language === 'es' ? '¡Correo Copiado!' : 'Email Copied!') : contact.copyEmailBtn}</span>
            </motion.button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
