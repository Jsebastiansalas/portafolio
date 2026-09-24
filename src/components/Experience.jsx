import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Building2, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Formation = () => {
  const { data, language } = useLanguage();
  const formation = data.formation;

  return (
    <section id="formacion" className="section relative" style={{ background: 'rgba(0,0,0,0.35)' }}>
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(192, 132, 252, 0.08)', borderRadius: '999px', border: '1px solid rgba(192, 132, 252, 0.25)', marginBottom: '1rem', color: 'var(--accent-purple)', fontSize: '0.85rem', fontWeight: 600 }}>
            <Award size={15} /> {language === 'es' ? 'Hitos Educativos' : 'Educational Milestones'}
          </div>
          <h2 className="section-title">{formation.title} <span className="text-gradient">{formation.highlight}</span></h2>
          <div className="section-line mx-auto"></div>
        </motion.div>

        {/* 2-Column High Impact Showcase */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '2.5rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {formation.items.map((item, index) => {
            const isLatest = index === 1;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: isLatest 
                    ? '0 20px 40px rgba(0, 242, 254, 0.15)' 
                    : '0 20px 40px rgba(192, 132, 252, 0.15)',
                  borderColor: isLatest ? 'rgba(0, 242, 254, 0.5)' : 'rgba(192, 132, 252, 0.5)'
                }}
                className="glass-panel"
                style={{ 
                  padding: '0', 
                  overflow: 'hidden', 
                  borderRadius: '24px', 
                  border: isLatest ? '1px solid rgba(0, 242, 254, 0.3)' : '1px solid var(--border-glass)',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(180deg, rgba(20, 24, 38, 0.7) 0%, rgba(10, 13, 22, 0.9) 100%)',
                  position: 'relative'
                }}
              >
                {/* Visual Image Header */}
                {item.image && (
                  <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden', background: '#0a0d14' }}>
                    <motion.img 
                      src={item.image} 
                      alt={item.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10, 13, 22, 0.95) 0%, rgba(10, 13, 22, 0.2) 60%, transparent 100%)',
                      pointerEvents: 'none'
                    }} />

                    {/* Period Badge */}
                    <div style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1.5rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.4rem 0.9rem',
                      background: 'rgba(5, 7, 15, 0.85)',
                      backdropFilter: 'blur(8px)',
                      border: isLatest ? '1px solid var(--accent-cyan)' : '1px solid var(--accent-purple)',
                      borderRadius: '999px',
                      color: isLatest ? 'var(--accent-cyan)' : 'var(--accent-purple)',
                      fontSize: '0.8rem',
                      fontWeight: 700
                    }}>
                      {isLatest && <span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span>}
                      <Calendar size={13} /> {item.period}
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  
                  {/* Institution Badge */}
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem', 
                    color: 'var(--text-tertiary)', 
                    fontSize: '0.9rem', 
                    marginBottom: '0.75rem',
                    fontWeight: 500
                  }}>
                    {isLatest ? <Building2 size={16} style={{ color: 'var(--accent-cyan)' }} /> : <GraduationCap size={16} style={{ color: 'var(--accent-purple)' }} />}
                    <span>{item.institution}</span>
                  </div>

                  {/* Title */}
                  <h3 style={{ 
                    fontSize: '1.45rem', 
                    fontWeight: 700, 
                    color: 'white', 
                    lineHeight: '1.3',
                    marginBottom: '1rem'
                  }}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p style={{ 
                    color: 'var(--text-secondary)', 
                    fontSize: '0.95rem', 
                    lineHeight: '1.65', 
                    marginBottom: '1.5rem',
                    flexGrow: 1
                  }}>
                    {item.desc}
                  </p>

                  {/* Competency Highlights */}
                  <div style={{ 
                    borderTop: '1px solid rgba(255,255,255,0.06)', 
                    paddingTop: '1.25rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {isLatest ? (
                      <>
                        <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem', borderRadius: '999px', background: 'rgba(0, 242, 254, 0.08)', color: 'var(--accent-cyan)', border: '1px solid rgba(0, 242, 254, 0.25)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <CheckCircle2 size={12} /> Full Stack
                        </span>
                        <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem', borderRadius: '999px', background: 'rgba(0, 242, 254, 0.08)', color: 'var(--accent-cyan)', border: '1px solid rgba(0, 242, 254, 0.25)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <CheckCircle2 size={12} /> Algoritmos
                        </span>
                        <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem', borderRadius: '999px', background: 'rgba(0, 242, 254, 0.08)', color: 'var(--accent-cyan)', border: '1px solid rgba(0, 242, 254, 0.25)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <CheckCircle2 size={12} /> Scrum Ágil
                        </span>
                      </>
                    ) : (
                      <>
                        <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem', borderRadius: '999px', background: 'rgba(192, 132, 252, 0.08)', color: 'var(--accent-purple)', border: '1px solid rgba(192, 132, 252, 0.25)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <CheckCircle2 size={12} /> Lógica & STEM
                        </span>
                        <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem', borderRadius: '999px', background: 'rgba(192, 132, 252, 0.08)', color: 'var(--accent-purple)', border: '1px solid rgba(192, 132, 252, 0.25)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <CheckCircle2 size={12} /> Matemáticas
                        </span>
                        <span style={{ fontSize: '0.75rem', padding: '0.3rem 0.75rem', borderRadius: '999px', background: 'rgba(192, 132, 252, 0.08)', color: 'var(--accent-purple)', border: '1px solid rgba(192, 132, 252, 0.25)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                          <CheckCircle2 size={12} /> Graduado
                        </span>
                      </>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Formation;
