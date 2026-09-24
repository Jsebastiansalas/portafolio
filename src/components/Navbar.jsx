import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, FileDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, data } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#inicio" className="navbar-logo">
          Sebastian<span className="accent-text">.</span>Salas
        </a>

        {/* Desktop Nav */}
        <nav className="navbar-links desktop-only" style={{ alignItems: 'center' }}>
          {data.navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}

          {/* Quick CV Download in Navbar */}
          <a
            href="/Sebastian_Salas_CV.pdf"
            download="Hoja_de_Vida_Sebastian_Salas.pdf"
            className="nav-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.4rem 0.9rem',
              borderRadius: '999px',
              background: 'rgba(0, 242, 254, 0.1)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              color: 'var(--accent-cyan)',
              fontWeight: 600,
              fontSize: '0.85rem'
            }}
            title={language === 'es' ? 'Descargar Hoja de Vida' : 'Download CV'}
          >
            <FileDown size={14} /> CV
          </a>

          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage} 
            className="nav-link" 
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '5px',
              padding: '0.4rem 0.6rem',
              borderRadius: '6px'
            }}
            title="Cambiar idioma / Change language"
          >
            <Globe size={16} /> <span style={{ fontWeight: 600 }}>{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="mobile-only" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a
            href="/Sebastian_Salas_CV.pdf"
            download="Hoja_de_Vida_Sebastian_Salas.pdf"
            style={{
              color: 'var(--accent-cyan)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '0.3rem 0.6rem',
              borderRadius: '999px',
              background: 'rgba(0, 242, 254, 0.1)',
              fontSize: '0.8rem',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            <FileDown size={14} /> CV
          </a>
          <button onClick={toggleLanguage} style={{ background: 'none', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '2px' }}>
            <Globe size={18} />
          </button>
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-nav mobile-only"
          >
            {data.navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="mobile-nav-link"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/Sebastian_Salas_CV.pdf"
              download="Hoja_de_Vida_Sebastian_Salas.pdf"
              onClick={() => setIsOpen(false)}
              className="mobile-nav-link"
              style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <FileDown size={18} /> {language === 'es' ? 'Descargar Hoja de Vida (PDF)' : 'Download Resume (PDF)'}
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
