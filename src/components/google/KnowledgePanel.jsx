import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Download, Mail, ExternalLink } from 'lucide-react';

export default function KnowledgePanel() {
  const { language, data } = useLanguage();
  const hero = data.hero;
  const contact = data.contact;

  const skills = [
    ...data.skills.categories.flatMap(c => c.items.slice(0, 2)),
  ].slice(0, 8);

  return (
    <aside className="sidebar-column" aria-labelledby="knowledge-panel-title">
      <div className="knowledge-panel">
        <h2 id="knowledge-panel-title" className="visually-hidden">
          {language === 'es' ? 'Perfil profesional' : 'Professional Profile'}
        </h2>

        <img
          src={`${import.meta.env.BASE_URL}foto profesional.jpeg`}
          alt=""
          className="knowledge-panel__avatar"
          aria-hidden="true"
        />

        <h3 className="knowledge-panel__name">
          {hero.firstName} {hero.lastName}
        </h3>

        <p className="knowledge-panel__role">{hero.role}</p>

        <div className="knowledge-panel__chips" aria-label={language === 'es' ? 'Habilidades principales' : 'Key skills'}>
          {skills.map((skill, i) => (
            <span key={i} className="chip">{skill}</span>
          ))}
        </div>

        <div className="knowledge-panel__actions">
          <a
            href={hero.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="knowledge-panel__btn knowledge-panel__btn--primary"
          >
            <Download size={16} aria-hidden="true" />
            {hero.btnCV || contact.cvText}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="knowledge-panel__btn knowledge-panel__btn--secondary"
          >
            <Mail size={16} aria-hidden="true" />
            {language === 'es' ? 'Contactar' : 'Contact'}
          </a>
          <a
            href={hero.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="knowledge-panel__btn knowledge-panel__btn--secondary"
          >
            <ExternalLink size={16} aria-hidden="true" />
            GitHub
          </a>
          <a
            href={hero.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="knowledge-panel__btn knowledge-panel__btn--secondary"
          >
            <ExternalLink size={16} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
    </aside>
  );
}