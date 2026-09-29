import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, FileDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { LinkedInIcon, GitHubIcon } from './Icons';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, data } = useLanguage();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Reading Progress Indicator */}
      <motion.div
        className="scroll-progress-bar"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: '0%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '2.5px',
          background: 'linear-gradient(90deg, #00f2fe, #c084fc)',
          zIndex: 100,
          boxShadow: '0 0 8px rgba(0, 242, 254, 0.7)'
        }}
      />

      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#inicio" className="navbar-logo" aria-label="Ir al inicio">
            <span className="logo-first">Sebastian</span>
            <span className="logo-dot">.</span>
            <span className="logo-last">Salas</span>
          </a>

          {/* Desktop Nav */}
          <nav className="navbar-links desktop-only" aria-label="Navegación principal">
            {data.navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}

            <div className="navbar-divider" />

            {/* Social Links */}
            <div className="navbar-social-group">
              <a
                href={data.hero.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-btn"
                title="LinkedIn Sebastián Salas"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={16} />
              </a>

              <a
                href={data.hero.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-btn"
                title="GitHub @Jsebastiansalas"
                aria-label="GitHub"
              >
                <GitHubIcon size={16} />
              </a>
            </div>

            {/* Quick CV Download in Navbar */}
            <a
              href={`${import.meta.env.BASE_URL}Sebastian_Salas_CV.pdf`}
              download="Hoja_de_Vida_Sebastian_Salas.pdf"
              className="nav-cv-btn"
              title={language === 'es' ? 'Descargar Hoja de Vida (PDF)' : 'Download Resume (PDF)'}
            >
              <FileDown size={14} />
              <span>CV</span>
            </a>

            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage} 
              className="nav-lang-btn"
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              aria-label="Cambiar idioma"
            >
              <Globe size={15} />
              <span className="lang-code">{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
          </nav>

          {/* Mobile Right Controls */}
          <div className="mobile-only mobile-controls">
            <a
              href={`${import.meta.env.BASE_URL}Sebastian_Salas_CV.pdf`}
              download="Hoja_de_Vida_Sebastian_Salas.pdf"
              className="nav-cv-btn mobile-cv-btn"
              aria-label="Descargar CV"
            >
              <FileDown size={14} />
              <span>CV</span>
            </a>

            <button 
              onClick={toggleLanguage} 
              className="nav-lang-btn mobile-lang-btn"
              aria-label="Cambiar idioma"
            >
              <Globe size={15} />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>

            <button 
              className="mobile-toggle" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mobile-nav mobile-only"
            >
              <div className="mobile-nav-inner">
                {data.navLinks.map((link, idx) => (
                  <motion.a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="mobile-nav-link"
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="mobile-link-arrow" />
                  </motion.a>
                ))}

                <div className="mobile-nav-footer">
                  <div className="mobile-socials">
                    <a
                      href={data.hero.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-social-link"
                    >
                      <LinkedInIcon size={18} />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={data.hero.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-social-link"
                    >
                      <GitHubIcon size={18} />
                      <span>GitHub</span>
                    </a>
                  </div>

                  <a 
                    href={`${import.meta.env.BASE_URL}Sebastian_Salas_CV.pdf`}
                    download="Hoja_de_Vida_Sebastian_Salas.pdf"
                    onClick={() => setIsOpen(false)}
                    className="mobile-full-cv-btn"
                  >
                    <FileDown size={16} />
                    <span>{language === 'es' ? 'Descargar Hoja de Vida (PDF)' : 'Download Resume (PDF)'}</span>
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
