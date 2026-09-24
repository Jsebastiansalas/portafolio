import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const { data } = useLanguage();
  const experience = data.experience;

  return (
    <section id="educacion" className="section relative" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{experience.title} <span className="text-gradient">{experience.highlight}</span></h2>
          <div className="section-line mx-auto"></div>
          <p className="hero-desc mx-auto mt-8">
            {experience.desc}
          </p>
        </motion.div>

        <div className="timeline">
          {experience.items.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              
              <div className="glass-panel" style={{ padding: '1.5rem', transition: 'transform 0.3s' }}>
                <div className="exp-period">
                  <GraduationCap size={18} />
                  <span>{item.period}</span>
                </div>
                <h3 className="exp-title">{item.title}</h3>
                <h4 className="exp-company">{item.company}</h4>
                <p style={{ color: 'var(--text-tertiary)', fontSize: '0.875rem' }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
