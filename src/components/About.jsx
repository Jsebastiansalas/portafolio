import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { data } = useLanguage();
  const about = data.about;

  return (
    <section id="sobre-mi" className="section relative">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="section-title">{about.title} <span className="text-gradient">{about.highlight}</span></h2>
            <div className="section-line mx-auto"></div>
          </div>

          <div className="glass-panel" style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }} className="md:grid-cols-2">
              
              {/* Photo Area */}
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '220px', height: '220px', borderRadius: '16px', overflow: 'hidden', border: '2px solid var(--border-glass)', position: 'relative', zIndex: 10 }}>
                  <img 
                    src="/foto profesional.jpeg" 
                    alt="Sebastian Salas"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = 'https://ui-avatars.com/api/?name=Sebastian+Salas&background=0D8ABC&color=fff&size=500' }}
                  />
                </div>
                {/* Decorative element behind photo */}
                <div style={{ position: 'absolute', top: '-10%', left: '10%', width: '100%', height: '100%', background: 'linear-gradient(to bottom right, var(--accent-cyan), var(--accent-purple))', borderRadius: '16px', filter: 'blur(30px)', opacity: 0.5, zIndex: 0 }}></div>
              </div>

              {/* Text Area */}
              <div className="about-text" style={{ color: 'var(--text-secondary)' }}>
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

            </div>

            <div className="stats-grid relative z-10" style={{ marginTop: '3rem' }}>
              {about.stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
