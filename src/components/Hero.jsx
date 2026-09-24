import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { data } = useLanguage();
  const hero = data.hero;

  return (
    <section id="inicio" className="hero-section">
      <div className="container z-10" style={{ maxWidth: '800px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
          style={{ alignItems: 'center' }}
        >
          <div className="role-badge">
            <span className="pulse-dot"></span>
            <span className="role-text">{hero.role}</span>
          </div>
          
          <h1 className="hero-title">
            {data.language === 'es' ? 'Hola, soy' : "Hi, I'm"} <br />
            <span className="text-gradient">
              {hero.firstName} {hero.lastName}
            </span>
          </h1>
          
          <p className="hero-tagline text-center">
            {hero.tagline}
          </p>
          
          <p className="hero-desc text-center">
            {hero.description}
          </p>
          
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <a href="#proyectos" className="btn btn-primary">
              {hero.btnProjects} <ArrowRight size={20} />
            </a>
            <a href="/cv.pdf" download="Sebastian_Salas_CV.pdf" className="btn btn-secondary">
              {hero.btnCV} <Download size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
