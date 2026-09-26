'use client';

import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 px-3 py-1.5 rounded-lg border border-[var(--border)] bg-[#131417]/80 backdrop-blur-md text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
    >
      {language === 'tr' ? 'EN' : 'TR'}
    </button>
  );
}