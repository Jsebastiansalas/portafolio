import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock, MapPin, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LinkedInIcon, GitHubIcon } from './Icons';

const Footer = () => {
  const { data, language } = useLanguage();
  const footer = data.footer;
  const [colombiaTime, setColombiaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('es-CO', {
          timeZone: 'America/Bogota',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        });
        setColombiaTime(formatter.format(now));
      } catch (e) {
        setColombiaTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-editorial">
      <div className="container footer-container">
        
        {/* Top Footer Row */}
        <div className="footer-top-row">
          
          <div className="footer-brand-column">
            <a href="#inicio" className="footer-logo">
              <span className="logo-first">Sebastian</span>
              <span className="logo-dot">.</span>
              <span className="logo-last">Salas</span>
            </a>
            <p className="footer-role-text">{footer.role}</p>
            
            {/* Live Time in Colombia */}
            <div className="footer-location-time">
              <span className="location-item">
                <MapPin size={13} className="text-cyan" />
                <span>{footer.location}</span>
              </span>
              <span className="time-separator">&bull;</span>
              <span className="time-item">
                <Clock size={13} className="text-purple" />
                <span>{footer.timeLabel} {colombiaTime || '12:00 PM'} (GMT-5)</span>
              </span>
            </div>
          </div>

          {/* Socials & Back To Top */}
          <div className="footer-actions-column">
            <div className="footer-social-links">
              <a 
                href={data.hero.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn interactive-element"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={17} />
              </a>

              <a 
                href={data.hero.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn interactive-element"
                title="GitHub"
                aria-label="GitHub"
              >
                <GitHubIcon size={17} />
              </a>

              <a 
                href={`mailto:${data.contact.email}`} 
                className="footer-social-btn interactive-element"
                title="Email"
                aria-label="Email"
              >
                <span style={{ fontSize: '0.8rem', fontWeight: 700 }}>@</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="footer-back-to-top interactive-element"
              aria-label={footer.backToTop}
            >
              <span>{footer.backToTop}</span>
              <ArrowUp size={15} />
            </button>
          </div>

        </div>

        {/* Bottom Micro Copy */}
        <div className="footer-bottom-row">
          <p className="footer-copy-text">
            &copy; {new Date().getFullYear()} {footer.copy}
          </p>
          <div className="footer-tech-stack-indicator">
            <span className="tech-indicator-dot" />
            <span>React + Vite &bull; Framer Motion &bull; Vanilla CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
