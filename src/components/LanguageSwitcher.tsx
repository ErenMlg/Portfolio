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
      className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-300"
    >
      {language === 'tr' ? 'EN' : 'TR'}
    </button>
  );
}