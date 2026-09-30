import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import GoogleLogo from './GoogleLogo';
import SearchBar from './SearchBar';
import GoogleUserBar from './GoogleUserBar';

export default function GoogleHeader({
  query,
  onSearch,
  onChange,
  onGoHome,
  activeTab,
  onTabChange,
  onLanguageToggle
}) {
  const { language, data } = useLanguage();
  const search = data.search;

  return (
    <header className="header" role="banner">
      <div className="header__inner">
        <div
          className="header__logo"
          aria-label={language === 'es' ? 'SebasSalas Search - Inicio' : 'SebasSalas Search - Home'}
          onClick={onGoHome}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
        >
          <GoogleLogo size="small" />
        </div>

        <div className="header__search">
          <SearchBar
            value={query}
            onChange={onChange}
            onSubmit={onSearch}
            placeholder={search.defaultQuery}
            showIcons={true}
          />
        </div>

        <div className="header__actions">
          <GoogleUserBar
            language={language}
            data={data}
            onLanguageToggle={onLanguageToggle}
          />
        </div>
      </div>

      <nav className="tab-bar" role="tablist" aria-label={language === 'es' ? 'Filtros de búsqueda' : 'Search filters'}>
        {search.tabs.map((tab, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={activeTab === tab}
            aria-controls={`panel-${tab}`}
            id={`tab-${tab}`}
            className={`tab ${activeTab === tab ? 'tab--active' : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  );
}