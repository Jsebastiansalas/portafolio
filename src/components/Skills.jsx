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

        <div className="glass-panel max-w-4xl mx-auto" style={{ padding: '2rem' }}>
          <div className="skill-grid">
            {skills.items.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="skill-item"
                >
                  <div className="skill-header">
                    <div className="skill-name">
                      <Icon size={18} style={{ color: 'var(--accent-cyan)' }} />
                      <span>{skill.name}</span>
                    </div>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <motion.div 
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + (index * 0.1) }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="tools-section">
            <p className="tools-title">{skills.toolsTitle}</p>
            <div className="tools-tags">
              {skills.tools.map((tag, i) => (
                <span key={i} className="tool-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
