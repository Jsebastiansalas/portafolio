import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { data, language } = useLanguage();
  const about = data.about;

  return (
    <section id="sobre-mi" className="section relative">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="section-title">{about.title} <span className="text-gradient">{about.highlight}</span></h2>
            <div className="section-line mx-auto"></div>
          </div>

          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto', borderRadius: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="md:grid-cols-2">
              
              {/* Photo Area */}
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: '230px', height: '230px', borderRadius: '20px', overflow: 'hidden', border: '2px solid rgba(0, 242, 254, 0.4)', position: 'relative', zIndex: 10, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
                >
                  <img 
                    src={`${import.meta.env.BASE_URL}foto profesional.jpeg`} 
                    alt="Sebastian Salas"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Sebastian+Salas&background=0D8ABC&color=fff&size=500' }}
                  />
                </motion.div>
                {/* Decorative element behind photo */}
                <div style={{ position: 'absolute', top: '-10%', left: '10%', width: '100%', height: '100%', background: 'linear-gradient(to bottom right, var(--accent-cyan), var(--accent-purple))', borderRadius: '20px', filter: 'blur(40px)', opacity: 0.35, zIndex: 0 }}></div>
              </div>

              {/* Text Area */}
              <div className="about-text" style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: '1.25rem' }}>
                    {index === 1 ? <strong style={{ color: 'var(--text-primary)' }}>{paragraph}</strong> : paragraph}
                  </p>
                ))}

                <motion.a 
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={`${import.meta.env.BASE_URL}Sebastian_Salas_CV.pdf`}
                  download="Hoja_de_Vida_Sebastian_Salas.pdf"
                  className="btn"
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.75rem 1.6rem',
                    marginTop: '0.5rem',
                    borderRadius: '999px',
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1px solid rgba(0, 242, 254, 0.4)',
                    color: 'var(--accent-cyan)',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    textDecoration: 'none'
                  }}
                >
                  <FileDown size={18} /> {language === 'es' ? 'Descargar Hoja de Vida (PDF)' : 'Download Full CV (PDF)'}
                </motion.a>
              </div>
            </div>

            <div style={{ marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border-glass)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.75rem' }}>
                <Sparkles size={18} style={{ color: 'var(--accent-purple)' }} />
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', margin: 0, fontWeight: 700 }}>{about.strengthsTitle}</h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                {about.strengths.map((strength, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 242, 254, 0.12)', borderColor: 'rgba(0, 242, 254, 0.4)' }}
                    style={{ 
                      padding: '0.65rem 1.35rem', 
                      background: 'rgba(255,255,255,0.03)', 
                      border: '1px solid var(--border-glass)', 
                      borderRadius: '999px',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      cursor: 'default',
                      transition: 'all 0.2s'
                    }}
                  >
                    {strength}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
