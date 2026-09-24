import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, FileDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { data } = useLanguage();
  const hero = data.hero;

  return (
    <section id="inicio" className="hero-section" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container z-10" style={{ maxWidth: '950px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
          style={{ alignItems: 'center', width: '100%' }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="role-badge" 
            style={{ marginBottom: '1.5rem' }}
          >
            <span className="pulse-dot"></span>
            <span className="role-text">{hero.role}</span>
          </motion.div>
          
          <h1 className="hero-title" style={{ marginBottom: '1.5rem', lineHeight: '1.15' }}>
            {data.language === 'es' ? 'Hola, soy' : "Hi, I'm"} <br />
            <span className="text-gradient">
              {hero.firstName} {hero.lastName}
            </span>
          </h1>
          
          <p className="hero-tagline text-center" style={{ fontSize: '1.35rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '820px', fontWeight: 300, lineHeight: '1.6' }}>
            {hero.tagline}
          </p>
          
          <div className="hero-cta" style={{ justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap', display: 'flex' }}>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 242, 254, 0.4)' }}
              whileTap={{ scale: 0.96 }}
              href="#proyectos" 
              className="btn btn-primary" 
              style={{ padding: '0.9rem 1.8rem', fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              {hero.btnProjects} <ArrowRight size={19} />
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(192, 132, 252, 0.4)' }}
              whileTap={{ scale: 0.96 }}
              href={hero.cvUrl || "/Sebastian_Salas_CV.pdf"} 
              download="Hoja_de_Vida_Sebastian_Salas.pdf" 
              className="btn" 
              style={{ 
                padding: '0.9rem 1.8rem', 
                fontSize: '1.05rem', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.6rem',
                background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(192, 132, 252, 0.25))',
                border: '1px solid rgba(0, 242, 254, 0.5)',
                color: '#fff',
                borderRadius: '9999px',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'none'
              }}
            >
              <FileDown size={19} style={{ color: 'var(--accent-cyan)' }} /> 
              {hero.btnCV || (data.language === 'es' ? 'Descargar Hoja de Vida' : 'Download CV')}
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="#contacto" 
              className="btn btn-secondary" 
              style={{ padding: '0.9rem 1.8rem', fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              {hero.btnContact} <Mail size={19} />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)' }}>Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--accent-cyan), transparent)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
