import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, User, BookOpen, Sparkles, X, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GitHubIcon } from './Icons';

const Projects = () => {
  const { data, language } = useLanguage();
  const projects = data.projects;
  const [activeModalProject, setActiveModalProject] = useState(null);

  const featuredProject = projects.items.find(p => p.featured) || projects.items[0];
  const secondaryProjects = projects.items.filter(p => p.id !== featuredProject.id);

  return (
    <section id="proyectos" className="section projects-section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="section-header-editorial"
        >
          <span className="section-eyebrow">03 // ENGINEERING SHOWCASE</span>
          <h2 className="section-title-editorial">
            {projects.title} <span className="text-gradient-cyan">{projects.highlight}</span>
          </h2>
          <p className="section-subtitle-editorial">{projects.subtitle}</p>
        </motion.div>

        {/* 1. Flagship Featured Project (Proyecto SICA) */}
        <motion.div
          className="featured-project-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="featured-card-grid">
            
            {/* Visual Preview Side */}
            <div className="featured-media-wrapper">
              <motion.img 
                src={featuredProject.image} 
                alt={featuredProject.title}
                className="featured-media-img"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="featured-media-gradient-overlay" />
              
              <div className="featured-flagship-pill">
                <Sparkles size={13} className="text-cyan" />
                <span>{projects.featuredBadge}</span>
              </div>

              <div className="featured-category-badge">
                {featuredProject.category}
              </div>
            </div>

            {/* Content & Architectural Narrative Side */}
            <div className="featured-content-wrapper">
              <div className="featured-meta-row">
                <span className="featured-badge-pill">{featuredProject.badge}</span>
                <span className="featured-id-tag">REF: #SICA-CORE</span>
              </div>

              <h3 className="featured-project-title">
                {featuredProject.title}
              </h3>

              <p className="featured-project-description">
                {featuredProject.description}
              </p>

              {/* Architecture & Role Highlights */}
              <div className="featured-specs-grid">
                <div className="spec-box">
                  <div className="spec-header">
                    <User size={14} className="text-purple" />
                    <span>{language === 'es' ? 'Rol Técnico' : 'Technical Role'}</span>
                  </div>
                  <p className="spec-value">{featuredProject.myRole}</p>
                </div>

                <div className="spec-box">
                  <div className="spec-header">
                    <BookOpen size={14} className="text-green" />
                    <span>{language === 'es' ? 'Aprendizaje Clave' : 'Key Learning'}</span>
                  </div>
                  <p className="spec-value">{featuredProject.learned}</p>
                </div>
              </div>

              {/* Technologies */}
              <div className="featured-tech-row">
                {featuredProject.technologies.map((tech, idx) => (
                  <span key={idx} className="featured-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="featured-actions-row">
                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-github-primary interactive-element"
                >
                  <GitHubIcon size={18} />
                  <span>{projects.viewCode}</span>
                  <ArrowUpRight size={15} />
                </a>

                <button
                  onClick={() => setActiveModalProject(featuredProject)}
                  className="btn btn-details-ghost interactive-element"
                >
                  <Layers size={16} />
                  <span>{projects.exploreDetails}</span>
                </button>
              </div>

            </div>
          </div>
        </motion.div>

        {/* 2. Secondary Projects Asymmetric Grid */}
        <div className="secondary-projects-grid">
          {secondaryProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="secondary-project-card project-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              {/* Card Image Banner */}
              <div className="secondary-media-wrapper">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="secondary-media-img"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="secondary-media-overlay" />
                <span className="secondary-category-tag">{project.badge}</span>
              </div>

              {/* Card Body */}
              <div className="secondary-card-body">
                <div className="secondary-card-header">
                  <h4 className="secondary-card-title">{project.title}</h4>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary-repo-icon-btn interactive-element"
                    title={projects.viewCode}
                    aria-label={`Ver ${project.title} en GitHub`}
                  >
                    <GitHubIcon size={16} />
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                <p className="secondary-card-desc">
                  {project.description}
                </p>

                {/* Role and Key Takeaway */}
                <div className="secondary-takeaway-box">
                  <span className="takeaway-label">
                    <BookOpen size={12} className="text-cyan" /> {language === 'es' ? 'Aprendizaje' : 'Learning'}
                  </span>
                  <p className="takeaway-text">{project.learned}</p>
                </div>

                {/* Tech Tags */}
                <div className="secondary-tags-row">
                  {project.technologies.map((t, i) => (
                    <span key={i} className="secondary-tech-pill">{t}</span>
                  ))}
                </div>

                {/* Inspect Details Button */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="secondary-inspect-btn interactive-element"
                >
                  <span>{projects.exploreDetails}</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* 3. Deep Dive Project Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="project-modal-backdrop" onClick={() => setActiveModalProject(null)}>
            <motion.div
              className="project-modal-dialog"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Close Button */}
              <button
                className="modal-close-btn"
                onClick={() => setActiveModalProject(null)}
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>

              {/* Modal Image Header */}
              <div className="modal-header-media">
                <img 
                  src={activeModalProject.image} 
                  alt={activeModalProject.title} 
                  className="modal-banner-img"
                />
                <div className="modal-banner-overlay" />
                <div className="modal-title-group">
                  <span className="modal-category-badge">{activeModalProject.badge}</span>
                  <h3 className="modal-title">{activeModalProject.title}</h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="modal-body-content">
                <div className="modal-section-block">
                  <h5>{language === 'es' ? 'Descripción del Proyecto' : 'Project Overview'}</h5>
                  <p>{activeModalProject.description}</p>
                </div>

                <div className="modal-details-grid">
                  <div className="modal-detail-card">
                    <span className="modal-detail-label">
                      <User size={14} className="text-purple" /> {language === 'es' ? 'Mi Rol' : 'My Role'}
                    </span>
                    <p>{activeModalProject.myRole}</p>
                  </div>
                  <div className="modal-detail-card">
                    <span className="modal-detail-label">
                      <BookOpen size={14} className="text-green" /> {language === 'es' ? 'Qué aprendí' : 'What I Learned'}
                    </span>
                    <p>{activeModalProject.learned}</p>
                  </div>
                </div>

                <div className="modal-section-block">
                  <h5>{language === 'es' ? 'Stack de Tecnologías' : 'Tech Stack'}</h5>
                  <div className="modal-tech-pills">
                    {activeModalProject.technologies.map((t, idx) => (
                      <span key={idx} className="modal-tech-tag">
                        <CheckCircle2 size={12} className="text-cyan" /> {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="modal-footer-actions">
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-github-modal interactive-element"
                  >
                    <GitHubIcon size={18} />
                    <span>{language === 'es' ? 'Explorar Código en GitHub' : 'Explore Code on GitHub'}</span>
                    <ArrowUpRight size={16} />
                  </a>

                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="btn btn-secondary-modal"
                  >
                    {language === 'es' ? 'Cerrar' : 'Close'}
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
