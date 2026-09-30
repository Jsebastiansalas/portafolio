import React from 'react';
import { GraduationCap, Mail, Briefcase, Database, Code, ExternalLink } from 'lucide-react';
import { GitHubIcon } from '../Icons';

const ICONS = {
  project: Briefcase,
  skill: Code,
  education: GraduationCap,
  contact: Mail,
  about: Database
};

const CATEGORY_LABELS = {
  es: {
    projects: 'Proyecto',
    technologies: 'Tecnología',
    education: 'Formación',
    contact: 'Contacto',
    about: 'Sobre mí'
  },
  en: {
    projects: 'Project',
    technologies: 'Technology',
    education: 'Education',
    contact: 'Contact',
    about: 'About'
  }
};

export default function ResultItem({ item, language = 'es' }) {
  const labels = CATEGORY_LABELS[language] || CATEGORY_LABELS.es;
  const Icon = ICONS[item.category] || Briefcase;
  const categoryLabel = labels[item.category] || item.category;

  const getBreadcrumb = (url) => {
    if (!url) return '';
    try {
      const u = new URL(url);
      const cleanPath = u.pathname.replace(/^\/|\/$/g, '').replace(/\.git$/, '');
      if (!cleanPath) return u.hostname.replace('www.', '');
      const parts = cleanPath.split('/').filter(Boolean);
      return `${u.hostname.replace('www.', '')} › ${parts.join(' › ')}`;
    } catch {
      return url.replace(/^#/, '');
    }
  };

  const isExternal = item.url && (item.url.startsWith('http://') || item.url.startsWith('https://'));

  const handleCardClick = () => {
    if (item.url) {
      if (item.url.startsWith('mailto:')) {
        window.location.href = item.url;
      } else {
        window.open(item.url, isExternal ? '_blank' : '_self', 'noopener,noreferrer');
      }
    }
  };

  return (
    <article
      className="result-card"
      role="listitem"
      onClick={handleCardClick}
      style={{ cursor: item.url ? 'pointer' : 'default' }}
    >
      <a
        href={item.url}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : ''}
        className="result-card__url"
        aria-label={categoryLabel}
        onClick={(e) => e.stopPropagation()}
      >
        <Icon size={14} aria-hidden="true" style={{ color: 'var(--green-url)' }} />
        <span>{categoryLabel}</span>
        <span style={{ color: 'var(--text-tertiary)' }}>›</span>
        <span className="result-card__url-path">{getBreadcrumb(item.url)}</span>
      </a>

      <a
        href={item.url}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : ''}
        className="result-card__title"
        dangerouslySetInnerHTML={{ __html: item.highlightedTitle }}
        onClick={(e) => e.stopPropagation()}
      />

      <div
        className="result-card__desc"
        dangerouslySetInnerHTML={{ __html: item.highlightedDesc }}
      />

      {item.thumbnail && (
        <a
          href={item.url}
          target={isExternal ? '_blank' : '_self'}
          rel={isExternal ? 'noopener noreferrer' : ''}
          className="result-card__thumbnail-link"
          onClick={(e) => e.stopPropagation()}
          aria-label={`Ver ${item.title} en GitHub`}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="result-card__thumbnail"
            loading="lazy"
          />
        </a>
      )}

      {item.type === 'project' && (
        <div className="result-card__project-actions" onClick={(e) => e.stopPropagation()}>
          <div className="result-card__chips">
            {item.data?.technologies?.slice(0, 5).map((tech, i) => (
              <span key={i} className="chip">
                {tech}
              </span>
            ))}
          </div>

          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="result-card__btn-github"
              title={language === 'es' ? 'Abrir repositorio en GitHub' : 'Open repository on GitHub'}
            >
              <GitHubIcon size={15} />
              <span>{language === 'es' ? 'Ver en GitHub' : 'View on GitHub'}</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}