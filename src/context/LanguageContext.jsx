import React, { createContext, useState, useContext } from 'react';
import { portfolioData } from '../data/portfolioData';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es'); // 'es' or 'en'

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const data = portfolioData[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
