'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translations } from './types';
import { en } from './translations/en';
import { mr } from './translations/mr';
import { hi } from './translations/hi';

export type { Language, Translations };

const translationsMap: Record<Language, Translations> = {
  en,
  mr,
  hi,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('sqp_lang') as Language;
      if (savedLang && (savedLang === 'en' || savedLang === 'mr' || savedLang === 'hi')) {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      }
    } catch {
      // Ignore local storage errors if cookies or storage are restricted
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem('sqp_lang', newLang);
      document.documentElement.lang = newLang;
    } catch {
      // Ignore
    }
  };

  const t = translationsMap[language] || en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
