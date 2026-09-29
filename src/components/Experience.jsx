import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Calendar, Award, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Formation = () => {
  const { data, language } = useLanguage();
  const formation = data.formation;

  return (
    <section id="formacion" className="section formation-section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header-editorial text-center"
        >
          <span className="section-eyebrow">05 // ACADEMIC & TECHNICAL TRAJECTORY</span>
          <h2 className="section-title-editorial">
            {formation.title} <span className="text-gradient-cyan">{formation.highlight}</span>
          </h2>
          <p className="section-subtitle-editorial mx-auto max-w-700">{formation.subtitle}</p>
        </motion.div>

        {/* High-End Visual Timeline */}
        <div className="formation-timeline-wrapper">
          <div className="timeline-center-rail" />

          <div className="formation-cards-stack">
            {formation.items.map((item, index) => {
              const isCurrent = index === 1;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, delay: index * 0.2 }}
                  className={`formation-milestone-item ${isCurrent ? 'item-current' : 'item-past'}`}
                >
                  {/* Timeline Node Point */}
                  <div className="timeline-node-marker">
                    <div className="node-outer-ring">
                      <div className="node-inner-core" />
                    </div>
                  </div>

                  {/* Milestone Card */}
                  <div className="milestone-card glass-panel interactive-element">
                    
                    {/* Visual Media Header */}
                    <div className="milestone-media-box">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="milestone-media-img"
                      />
                      <div className="milestone-media-gradient" />
                      
                      <div className="milestone-date-chip">
                        {isCurrent && <span className="current-pulse-dot" />}
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>

                      <div className="milestone-status-tag">
                        <Award size={12} />
                        <span>{item.badge}</span>
                      </div>
                    </div>

                    {/* Milestone Content */}
                    <div className="milestone-body">
                      <div className="milestone-institution-row">
                        {isCurrent ? <Building2 size={16} className="text-cyan" /> : <GraduationCap size={16} className="text-purple" />}
                        <span className="milestone-institution-name">{item.institution}</span>
                      </div>

                      <h3 className="milestone-degree-title">{item.title}</h3>

                      <p className="milestone-desc-text">
                        {item.desc}
                      </p>

                      {/* Acquired Competencies */}
                      <div className="milestone-skills-cluster">
                        {item.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="milestone-skill-pill">
                            <CheckCircle2 size={12} className={isCurrent ? "text-cyan" : "text-purple"} />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Formation;
