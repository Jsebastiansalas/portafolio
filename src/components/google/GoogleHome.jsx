import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import GoogleLogo from './GoogleLogo';
import SearchBar from './SearchBar';
import GoogleUserBar from './GoogleUserBar';

export default function GoogleHome({ onSearch, onLucky }) {
  const { language, data, toggleLanguage } = useLanguage();
  const search = data.search;
  const [currentQuery, setCurrentQuery] = React.useState(search.defaultQuery || '');

  const handleSearch = (query) => {
    onSearch?.(query || currentQuery || search.defaultQuery);
  };

  const handleLucky = () => {
    onLucky?.();
  };

  return (
    <div className="home-screen" role="main">
      <header className="home-top-bar">
        <div className="home-top-bar__left">
          <button
            type="button"
            className="home-nav-link"
            onClick={() => onSearch('sobre mi')}
          >
            {language === 'es' ? 'Sobre mí' : 'About'}
          </button>
          <button
            type="button"
            className="home-nav-link"
            onClick={() => onSearch('proyectos')}
          >
            {language === 'es' ? 'Proyectos' : 'Projects'}
          </button>
        </div>

        <div className="home-top-bar__right">
          <GoogleUserBar
            language={language}
            data={data}
            onLanguageToggle={toggleLanguage}
          />
        </div>
      </header>

      <div className="home-screen__center">
        <div className="home-screen__logo">
          <GoogleLogo size="large" />
        </div>

      <div
        className="home-screen__search"
        onClick={() => handleSearch()}
        style={{ cursor: 'pointer' }}
      >
        <SearchBar
          autoType
          defaultQuery={search.defaultQuery}
          placeholder={search.defaultQuery}
          onChange={setCurrentQuery}
          onSubmit={handleSearch}
          onBarClick={() => handleSearch()}
        />
      </div>

      <div className="home-screen__buttons">
        <button
          type="button"
          className="search-btn search-btn--primary"
          onClick={() => handleSearch()}
        >
          {search.buttonSearch}
        </button>
        <button
          type="button"
          className="search-btn"
          onClick={handleLucky}
        >
          {search.buttonLucky}
        </button>
      </div>
      </div>

      <footer className="home-screen__footer search-footer">
        <div className="search-footer__links">
          {search.footerLinks.map((link, i) => (
            <a key={i} href="#" className="search-footer__link">
              {link}
            </a>
          ))}
        </div>
        <div>© SebasSalas Search</div>
      </footer>
    </div>
  );
}