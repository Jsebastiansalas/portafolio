import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ResultItem from './ResultItem';

export default function ResultsList({ results, query, activeTab }) {
  const { language } = useLanguage();
  const search = useLanguage().data?.search;

  if (results.length === 0) {
    return (
      <div className="results-column" role="status" aria-live="polite">
        <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-secondary)' }}>
          <p style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--text-primary)' }}>
            {language === 'es'
              ? `No se encontraron resultados para "${query}"`
              : `No results found for "${query}"`}
          </p>
          <p style={{ fontSize: '14px' }}>
            {language === 'es'
              ? 'Intenta con otras palabras clave o revisa la ortografía.'
              : 'Try different keywords or check your spelling.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="results-column" role="list" aria-label={search?.tabs?.find(t => t === activeTab) || 'Resultados'}>
      {results.map((item, index) => (
        <ResultItem key={`${item.id}-${index}`} item={item} language={language} />
      ))}
    </div>
  );
}