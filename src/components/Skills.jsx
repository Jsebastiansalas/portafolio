import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { data } = useLanguage();
  const skills = data.skills;

  return (
    <section id="habilidades" className="section relative" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{skills.title} <span className="text-gradient">{skills.highlight}</span></h2>
          <div className="section-line mx-auto"></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
          {skills.categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(0,242,254,0.1)', borderRadius: '12px', color: 'var(--accent-cyan)' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{category.name}</h3>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {category.items.map((item, i) => (
                    <span 
                      key={i} 
                      style={{ 
                        padding: '0.5rem 1rem', 
                        background: 'rgba(255,255,255,0.05)', 
                        border: '1px solid var(--border-glass)', 
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        color: 'var(--text-secondary)',
                        transition: 'var(--transition)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.1)';
                        e.target.style.color = 'white';
                        e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255,255,255,0.05)';
                        e.target.style.color = 'var(--text-secondary)';
                        e.target.style.borderColor = 'var(--border-glass)';
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
