import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { search, filterByCategory } from './utils/search';
import GoogleHome from './components/google/GoogleHome';
import GoogleHeader from './components/google/GoogleHeader';
import ResultsList from './components/google/ResultsList';
import KnowledgePanel from './components/google/KnowledgePanel';
import PeopleAlsoAsk from './components/google/PeopleAlsoAsk';
import SearchFooter from './components/google/SearchFooter';
import GeminiOverview from './components/google/GeminiOverview';
import GeminiModal from './components/google/GeminiModal';

function AppContent() {
  const { language, data, toggleLanguage } = useLanguage();

  const [view, setView] = useState('home');
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState(data.search?.tabs[0] || 'Todo');
  const [results, setResults] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [isGeminiModalOpen, setIsGeminiModalOpen] = useState(false);

  const performSearch = useCallback((searchQuery, lang) => {
    const searchResults = search(searchQuery, lang);
    const filtered = filterByCategory(searchResults, activeTab);
    setResults(filtered);
  }, [activeTab]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      performSearch(query, language);
    }, 200);

    return () => clearTimeout(timer);
  }, [query, language, performSearch]);

  useEffect(() => {
    performSearch(debouncedQuery, language);
  }, [debouncedQuery, language, performSearch]);

  useEffect(() => {
    performSearch(query, language);
  }, [activeTab, query, language, performSearch]);

  const handleSearch = (searchQuery) => {
    const q = searchQuery || data.search?.defaultQuery || '';
    setQuery(q);
    setView('results');
    setActiveTab(data.search?.tabs[0] || 'Todo');
  };

  const handleLucky = () => {
    const contactUrl = `mailto:${data.contact?.email}`;
    window.location.href = contactUrl;
  };

  const handleLanguageToggle = () => {
    toggleLanguage();
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  if (view === 'home') {
    return (
      <GoogleHome
        onSearch={handleSearch}
        onLucky={handleLucky}
      />
    );
  }

  return (
    <>
      <GoogleHeader
        query={query}
        onSearch={handleSearch}
        onChange={handleQueryChange}
        onGoHome={() => setView('home')}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onLanguageToggle={handleLanguageToggle}
      />

      <main className="main" role="main">
        <div className="results-grid">
          <div className="results-column">
            {(activeTab === 'Todo' || activeTab === 'All' || activeTab === 'Proyectos' || activeTab === 'Projects') && (
              <GeminiOverview
                language={language}
                data={data}
                onOpenGeminiChat={() => setIsGeminiModalOpen(true)}
              />
            )}

            <ResultsList
              results={results}
              query={query}
              activeTab={activeTab}
            />
          </div>

          <KnowledgePanel />
        </div>

        <PeopleAlsoAsk />

        <SearchFooter />
      </main>

      <GeminiModal
        isOpen={isGeminiModalOpen}
        onClose={() => setIsGeminiModalOpen(false)}
        language={language}
        data={data}
      />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        <motion.div
          key={window.location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <AppContent />
        </motion.div>
      </AnimatePresence>
    </LanguageProvider>
  );
}

export default App;