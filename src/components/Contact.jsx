import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code, FileDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { data, language } = useLanguage();
  const contact = data.contact;

  return (
    <section id="contacto" className="section relative overflow-hidden">
      <div className="container relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel contact-card"
          style={{ padding: '3.5rem 2rem', maxWidth: '48rem', margin: '0 auto', borderRadius: '24px' }}
        >
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: '1.2' }}>
            {contact.title}
          </h2>
          <h3 style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: '2.5rem' }}>
            {contact.highlight}
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '340px', margin: '0 auto 2.5rem auto', textAlign: 'left' }}>
            
            {/* Email item */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(0, 242, 254, 0.1)', borderRadius: '50%', color: 'var(--accent-cyan)' }}>
                <Mail size={20} />
              </div>
              <a href={`mailto:${contact.email}`} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                {contact.email}
              </a>
            </div>

            {/* GitHub item */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(192, 132, 252, 0.1)', borderRadius: '50%', color: 'var(--accent-purple)' }}>
                <Code size={20} />
              </div>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }} onMouseEnter={e => e.target.style.color = 'white'} onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                github.com/Jsebastiansalas
              </a>
            </div>

            {/* CV download item */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(74, 222, 128, 0.1)', borderRadius: '50%', color: '#4ade80' }}>
                <FileDown size={20} />
              </div>
              <a 
                href={contact.cvUrl || `${import.meta.env.BASE_URL}Sebastian_Salas_CV.pdf`} 
                download="Hoja_de_Vida_Sebastian_Salas.pdf" 
                style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500 }} 
                onMouseEnter={e => e.target.style.color = '#4ade80'} 
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {contact.cvText || (language === 'es' ? 'Descargar Hoja de Vida (PDF)' : 'Download Resume (PDF)')}
              </a>
            </div>

          </div>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${contact.email}`}
              className="btn btn-primary"
              style={{ padding: '0.9rem 2.5rem', fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <Mail size={18} /> {language === 'es' ? 'Enviar Mensaje' : 'Send Message'}
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 242, 254, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              href={contact.cvUrl || `${import.meta.env.BASE_URL}Sebastian_Salas_CV.pdf`}
              download="Hoja_de_Vida_Sebastian_Salas.pdf"
              className="btn btn-secondary"
              style={{ padding: '0.9rem 2.2rem', fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <FileDown size={18} /> {language === 'es' ? 'Descargar CV' : 'Download CV'}
            </motion.a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;
