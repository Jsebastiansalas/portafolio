import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { data } = useLanguage();
  const footer = data.footer;

  return (
    <footer style={{ padding: '2rem 0', borderTop: '1px solid var(--border-glass)', background: 'rgba(0,0,0,0.5)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} {footer.copy}
        </p>
        <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {footer.madeWith} <span style={{ color: 'var(--accent-cyan)', fontWeight: 500 }}>React</span> &amp; <span style={{ color: 'var(--accent-purple)', fontWeight: 500 }}>Vite</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
