import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { data } = useLanguage();
  const projects = data.projects;

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
          <h2 className="section-title">{projects.title} <span className="text-gradient">{projects.highlight}</span></h2>
          <div className="section-line mx-auto"></div>
        </motion.div>

        <div className="grid-3">
          {projects.items.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel project-card"
              style={{ padding: '1.5rem' }}
            >
              <div className="project-header">
                <span className="project-num">
                  0{index + 1}
                </span>
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              
              <p className="project-desc">
                {project.description}
              </p>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
