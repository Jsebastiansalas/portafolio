import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function SearchFooter({ currentPage = 1, totalPages = 1, onPageChange }) {
  const { data } = useLanguage();
  const search = data.search;

  const pages = Array.from({ length: Math.min(totalPages, 10) }, (_, i) => i + 1);

  return (
    <footer className="search-footer" role="contentinfo">
      <nav className="pagination" aria-label="Pagination" style={{ marginBottom: '16px' }}>
        {currentPage > 1 && (
          <button
            className="pagination__item"
            onClick={() => onPageChange?.(currentPage - 1)}
            aria-label={data.language === 'es' ? 'Página anterior' : 'Previous page'}
          >
            ‹
          </button>
        )}

        {pages.map(page => (
          <button
            key={page}
            className={`pagination__item ${page === currentPage ? 'pagination__item--active' : ''}`}
            onClick={() => onPageChange?.(page)}
            aria-label={data.language === 'es' ? `Página ${page}` : `Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}

        {totalPages > 10 && (
          <span className="pagination__dots" aria-hidden="true">…</span>
        )}

        {currentPage < totalPages && (
          <button
            className="pagination__item"
            onClick={() => onPageChange?.(currentPage + 1)}
            aria-label={data.language === 'es' ? 'Página siguiente' : 'Next page'}
          >
            ›
          </button>
        )}
      </nav>

      <div className="search-footer__links">
        {search?.footerLinks?.map((link, i) => (
          <a key={i} href="#" className="search-footer__link">
            {link}
          </a>
        ))}
      </div>
      <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
        © SebasSalas Search
      </div>
    </footer>
  );
}