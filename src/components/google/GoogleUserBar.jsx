import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, ExternalLink, ChevronDown, Check, Sparkles } from 'lucide-react';
import { WaffleIcon, GeminiIcon, DriveIcon, GmailIcon, GitHubIcon, LinkedInIcon } from '../Icons';
import GeminiModal from './GeminiModal';

export default function GoogleUserBar({ language = 'es', data, onLanguageToggle }) {
  const [activeMenu, setActiveMenu] = useState(null); // 'apps' | 'profile' | null
  const [isGeminiOpen, setIsGeminiOpen] = useState(false);
  const containerRef = useRef(null);

  const hero = data?.hero || {};
  const contact = data?.contact || {};
  const avatarUrl = `${import.meta.env.BASE_URL}foto profesional.jpeg`;

  const skills = [
    'Java', 'Python', 'JavaScript', 'SQL', 'MySQL', 'Git', 'Scrum', 'APIs'
  ];

  const apps = [
    {
      id: 'github',
      name: 'GitHub',
      subtitle: 'Repositorios',
      url: hero.githubUrl || 'https://github.com/Jsebastiansalas',
      icon: <GitHubIcon size={24} />,
      bgColor: '#24292e',
      color: '#ffffff'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      subtitle: 'Perfil Pro',
      url: hero.linkedinUrl || 'https://www.linkedin.com/in/sebasti%C3%A1n-salas-torres-317a4a425/',
      icon: <LinkedInIcon size={24} color="#ffffff" />,
      bgColor: '#0077b5',
      color: '#ffffff'
    },
    {
      id: 'cv',
      name: language === 'es' ? 'Hoja de Vida' : 'Resume / CV',
      subtitle: 'Google Drive PDF',
      url: hero.cvUrl || `${import.meta.env.BASE_URL}Sebastian_Salas_CV.pdf`,
      icon: <DriveIcon size={24} />,
      bgColor: 'var(--bg-secondary)',
      isDownload: true
    },
    {
      id: 'gmail',
      name: language === 'es' ? 'Contactar' : 'Gmail Contact',
      subtitle: 'juansebastiansalas29@gmail.com',
      url: `mailto:${contact.email || 'juansebastiansalas29@gmail.com'}`,
      icon: <GmailIcon size={24} />,
      bgColor: 'var(--bg-secondary)'
    },
    {
      id: 'sica',
      name: 'SICA',
      subtitle: 'Java & SQL',
      url: 'https://github.com/Jsebastiansalas/proyecto-sica',
      icon: <span style={{ fontWeight: 800, fontSize: 13, color: '#4285f4' }}>SICA</span>,
      bgColor: 'rgba(66, 133, 244, 0.1)'
    },
    {
      id: 'formula1',
      name: 'Formula 1',
      subtitle: 'Analytics App',
      url: 'https://github.com/Jsebastiansalas/Formula-1',
      icon: <span style={{ fontWeight: 800, fontSize: 13, color: '#ea4335' }}>F1</span>,
      bgColor: 'rgba(234, 67, 53, 0.1)'
    }
  ];

  // Close menus on outside click or Escape
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setIsGeminiOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleMenu = (menuName) => {
    setActiveMenu(prev => prev === menuName ? null : menuName);
  };

  return (
    <div className="google-user-bar" ref={containerRef}>
      {/* 1. Language Toggle */}
      {onLanguageToggle && (
        <button
          type="button"
          className="google-user-bar__btn google-user-bar__btn--lang"
          onClick={onLanguageToggle}
          title={language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
          aria-label={language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
        >
          <span>{language === 'es' ? 'EN' : 'ES'}</span>
          <ChevronDown size={13} />
        </button>
      )}

      {/* 2. Google Gemini Button */}
      <button
        type="button"
        className="google-user-bar__btn google-user-bar__btn--gemini"
        onClick={() => {
          setActiveMenu(null);
          setIsGeminiOpen(true);
        }}
        title="Gemini AI - Sebastián Salas"
        aria-label="Abrir Google Gemini"
      >
        <GeminiIcon size={20} />
        <span className="gemini-btn-label">Gemini</span>
      </button>

      {/* 3. Waffle (9 dots) Google Apps Button */}
      <div className="google-user-bar__item">
        <button
          type="button"
          className={`google-user-bar__btn google-user-bar__btn--icon ${activeMenu === 'apps' ? 'is-active' : ''}`}
          onClick={() => toggleMenu('apps')}
          title={language === 'es' ? 'Google Apps de Sebastián' : 'Sebastián\'s Google Apps'}
          aria-expanded={activeMenu === 'apps'}
          aria-haspopup="true"
        >
          <WaffleIcon size={20} color="currentColor" />
        </button>

        {/* Apps Dropdown */}
        <AnimatePresence>
          {activeMenu === 'apps' && (
            <motion.div
              className="google-apps-dropdown"
              role="menu"
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <div className="google-apps-dropdown__header">
                <span>{language === 'es' ? 'Google Workspace de Sebastián' : 'Sebastián\'s Workspace'}</span>
              </div>
              <div className="google-apps-dropdown__grid">
                {apps.map(app => (
                  <a
                    key={app.id}
                    href={app.url}
                    target={app.id === 'gmail' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="google-app-item"
                    role="menuitem"
                    onClick={() => setActiveMenu(null)}
                  >
                    <div
                      className="google-app-item__icon-wrap"
                      style={{ background: app.bgColor, color: app.color || 'inherit' }}
                    >
                      {app.icon}
                    </div>
                    <span className="google-app-item__name">{app.name}</span>
                    <span className="google-app-item__sub">{app.subtitle}</span>
                  </a>
                ))}
              </div>
              <div className="google-apps-dropdown__footer">
                <a
                  href={hero.githubUrl || 'https://github.com/Jsebastiansalas'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="google-apps-dropdown__more"
                >
                  <ExternalLink size={13} />
                  <span>{language === 'es' ? 'Explorar más en GitHub' : 'Explore more on GitHub'}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. Circular Profile Picture Button */}
      <div className="google-user-bar__item">
        <button
          type="button"
          className={`google-user-bar__avatar-btn ${activeMenu === 'profile' ? 'is-active' : ''}`}
          onClick={() => toggleMenu('profile')}
          title={`Cuenta de Google: ${hero.firstName} ${hero.lastName}`}
          aria-expanded={activeMenu === 'profile'}
          aria-haspopup="true"
        >
          <img
            src={avatarUrl}
            alt={`${hero.firstName} ${hero.lastName}`}
            className="google-user-bar__avatar-img"
          />
        </button>

        {/* Profile Card Dropdown */}
        <AnimatePresence>
          {activeMenu === 'profile' && (
            <motion.div
              className="google-profile-card"
              role="dialog"
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              {/* Account header */}
              <div className="google-profile-card__top">
                <span className="google-profile-card__email">
                  {contact.email || 'juansebastiansalas29@gmail.com'}
                </span>
              </div>

              {/* Avatar & Info */}
              <div className="google-profile-card__body">
                <div className="google-profile-card__avatar-wrap">
                  <img
                    src={avatarUrl}
                    alt={`${hero.firstName} ${hero.lastName}`}
                    className="google-profile-card__large-avatar"
                  />
                  <span className="google-profile-card__status-dot" title="Disponible para trabajar" />
                </div>

                <h4 className="google-profile-card__name">
                  {hero.firstName} {hero.lastName}
                </h4>
                <p className="google-profile-card__role">{hero.role}</p>
                <p className="google-profile-card__status-text">
                  🟢 {language === 'es' ? 'Abierto a oportunidades Junior & Full Stack' : 'Open to Junior & Full Stack Roles'}
                </p>

                {/* Skills chips */}
                <div className="google-profile-card__skills-section">
                  <span className="google-profile-card__skills-title">
                    {language === 'es' ? 'Habilidades destacadas:' : 'Core Skills:'}
                  </span>
                  <div className="google-profile-card__chips">
                    {skills.map((s, i) => (
                      <span key={i} className="chip chip--sm">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Direct Action buttons */}
                <div className="google-profile-card__actions">
                  <a
                    href={hero.cvUrl || `${import.meta.env.BASE_URL}Sebastian_Salas_CV.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-profile-card__action-btn google-profile-card__action-btn--primary"
                  >
                    <Download size={15} />
                    <span>{hero.btnCV || 'Descargar Hoja de Vida'}</span>
                  </a>

                  <a
                    href={`mailto:${contact.email || 'juansebastiansalas29@gmail.com'}`}
                    className="google-profile-card__action-btn google-profile-card__action-btn--secondary"
                  >
                    <Mail size={15} />
                    <span>{language === 'es' ? 'Enviar correo' : 'Send email'}</span>
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="google-profile-card__footer">
                <a
                  href={hero.githubUrl || 'https://github.com/Jsebastiansalas'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="google-profile-card__link"
                >
                  <GitHubIcon size={14} />
                  <span>GitHub</span>
                </a>
                <span>•</span>
                <a
                  href={hero.linkedinUrl || 'https://www.linkedin.com/in/sebasti%C3%A1n-salas-torres-317a4a425/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="google-profile-card__link"
                >
                  <LinkedInIcon size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Gemini Interactive Modal */}
      <GeminiModal
        isOpen={isGeminiOpen}
        onClose={() => setIsGeminiOpen(false)}
        language={language}
        data={data}
      />
    </div>
  );
}
