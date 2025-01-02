'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, getTranslation } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: ReturnType<typeof getTranslation>;
}

const defaultLanguage: Language = 'tr';
const defaultTranslation = getTranslation(defaultLanguage);

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: defaultTranslation,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const [t, setT] = useState(defaultTranslation);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
      setT(getTranslation(savedLanguage));
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    setT(getTranslation(lang));
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}