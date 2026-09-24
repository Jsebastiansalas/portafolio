import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, User, BookOpen, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { data, language } = useLanguage();
  const projects = data.projects;

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="proyectos" className="section relative">
      <div className="container">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(0, 242, 254, 0.08)', borderRadius: '999px', border: '1px solid rgba(0, 242, 254, 0.25)', marginBottom: '1rem', color: 'var(--accent-cyan)', fontSize: '0.85rem', fontWeight: 600 }}>
            <Sparkles size={15} /> {language === 'es' ? 'Trabajos reales & Código abierto' : 'Real-world Work & Open Source'}
          </div>
          <h2 className="section-title">{projects.title} <span className="text-gradient">{projects.highlight}</span></h2>
          <div className="section-line mx-auto"></div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          {projects.items.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px rgba(0, 242, 254, 0.12)',
                borderColor: 'rgba(0, 242, 254, 0.4)'
              }}
              transition={{ duration: 0.3 }}
              className="glass-panel project-card"
              style={{ 
                padding: '0', 
                overflow: 'hidden', 
                display: 'flex', 
                flexDirection: 'column', 
                borderRadius: '20px',
                border: '1px solid var(--border-glass)'
              }}
            >
              {/* Project Image Banner with Hover Effect */}
              {project.image && (
                <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden', background: '#0a0d14' }}>
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10, 13, 22, 0.95) 0%, rgba(10, 13, 22, 0.2) 60%, transparent 100%)',
                    pointerEvents: 'none'
                  }} />

                  {/* Top-Right Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    padding: '0.35rem 0.85rem',
                    background: 'rgba(5, 7, 15, 0.8)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(0, 242, 254, 0.4)',
                    borderRadius: '999px',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.5px'
                  }}>
                    {project.technologies[0]}
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                {/* Title and Repo Link */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'white', lineHeight: '1.3' }}>
                    {project.title}
                  </h3>

                  {project.githubUrl && (
                    <motion.a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 242, 254, 0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      title="Ver repositorio en GitHub"
                      style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '0.5rem 0.85rem', 
                        background: 'rgba(255,255,255,0.06)', 
                        border: '1px solid var(--border-glass)',
                        borderRadius: '999px', 
                        color: 'var(--accent-cyan)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        textDecoration: 'none',
                        flexShrink: 0
                      }}
                    >
                      <ExternalLink size={15} /> <span>GitHub</span>
                    </motion.a>
                  )}
                </div>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.65', marginBottom: '1.5rem', flexGrow: 1 }}>
                  {project.description}
                </p>

                {/* Role and Learned section */}
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.85rem', 
                  padding: '1.25rem', 
                  background: 'rgba(255,255,255,0.02)', 
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.04)',
                  marginBottom: '1.5rem'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem', color: 'var(--accent-purple)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      <User size={14} /> {language === 'es' ? 'Mi Rol' : 'My Role'}
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'white', fontWeight: 500 }}>{project.myRole}</p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem', color: '#4ade80', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      <BookOpen size={14} /> {language === 'es' ? 'Qué aprendí' : 'Key Learning'}
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{project.learned}</p>
                  </div>
                </div>

                {/* Tech Pills */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem', color: 'var(--accent-cyan)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    <Code size={14} /> {language === 'es' ? 'Tecnologías' : 'Tech Stack'}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {project.technologies.map((tag, i) => (
                      <span key={i} style={{ 
                        fontSize: '0.75rem', 
                        padding: '0.3rem 0.75rem', 
                        background: 'rgba(0, 242, 254, 0.05)', 
                        border: '1px solid rgba(0, 242, 254, 0.2)',
                        borderRadius: '999px', 
                        color: 'var(--text-primary)',
                        fontWeight: 500
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
