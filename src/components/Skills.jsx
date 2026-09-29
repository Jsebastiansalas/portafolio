import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Terminal, Database, Cpu, GitBranch, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { data, language } = useLanguage();
  const skills = data.skills;
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = skills.categories;

  const filteredCategories = activeFilter === 'all' 
    ? categories 
    : categories.filter(cat => cat.id === activeFilter);

  return (
    <section id="habilidades" className="section skills-section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header-editorial"
        >
          <span className="section-eyebrow">02 // TECH STACK & ARCHITECTURE</span>
          <h2 className="section-title-editorial">
            {skills.title} <span className="text-gradient-purple">{skills.highlight}</span>
          </h2>
          <p className="section-subtitle-editorial">{skills.subtitle}</p>
        </motion.div>

        {/* Filter Navigation Tabs */}
        <div className="skills-filter-bar">
          <button
            onClick={() => setActiveFilter('all')}
            className={`skills-filter-pill ${activeFilter === 'all' ? 'active' : ''}`}
          >
            <span>{skills.filterAll}</span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`skills-filter-pill ${activeFilter === cat.id ? 'active' : ''}`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Matrix Cards */}
        <motion.div layout className="skills-matrix-grid">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  layout
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="skills-category-card"
                >
                  <div className="card-top-row">
                    <div className="category-icon-box">
                      <Icon size={22} />
                    </div>
                    <span className="category-id-badge">SYS_0{index + 1}</span>
                  </div>

                  <h3 className="category-card-title">{category.name}</h3>
                  <p className="category-card-desc">{category.desc}</p>

                  <div className="tech-badge-container">
                    {category.items.map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="tech-item-badge interactive-element"
                      >
                        <span className="tech-badge-dot" />
                        <span className="tech-badge-text">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Card Micro Ambient Footer */}
                  <div className="card-ambient-footer">
                    <span className="status-verified-text">
                      <Check size={12} className="verified-check" /> Verified Stack
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Connected Architecture Flow Banner */}
        <motion.div 
          className="skills-flow-banner"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flow-step">
            <span className="flow-step-label">INTERFAZ</span>
            <span className="flow-step-val">Frontend (UI/UX)</span>
          </div>
          <ArrowRight size={16} className="flow-arrow" />
          <div className="flow-step">
            <span className="flow-step-label">LÓGICA</span>
            <span className="flow-step-val">Backend & Algoritmos</span>
          </div>
          <ArrowRight size={16} className="flow-arrow" />
          <div className="flow-step">
            <span className="flow-step-label">PERSISTENCIA</span>
            <span className="flow-step-val">Modelado SQL</span>
          </div>
          <ArrowRight size={16} className="flow-arrow" />
          <div className="flow-step flow-step-highlight">
            <span className="flow-step-label">HORIZONTE</span>
            <span className="flow-step-val">Análisis de Datos</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
