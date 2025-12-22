'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, Translations, defaultLanguage } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'adrisbotanic-language';

// Detect if user is from Croatia based on timezone and locale
function detectIfCroatian(): boolean {
  try {
    // Check browser language FIRST - most reliable indicator
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('hr')) {
      return true;
    }
    
    // Check all browser languages
    const languages = navigator.languages || [navigator.language];
    for (const lang of languages) {
      if (lang.toLowerCase().startsWith('hr')) {
        return true;
      }
    }
    
    // Check timezone - Croatia uses Europe/Zagreb
    // But also check neighboring timezones that might be used
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const croatianTimezones = [
      'Europe/Zagreb',
      'Europe/Belgrade', // Some systems use this for Croatia
      'CET',
      'CEST'
    ];
    if (croatianTimezones.includes(timezone)) {
      // Additional check: if timezone matches but no Croatian language,
      // still default to Croatian for these zones as they're close to Croatia
      return true;
    }
    
    // Check locale for HR country code
    const locale = navigator.language;
    if (locale.includes('-HR') || locale.includes('_HR')) {
      return true;
    }
    
    return false;
  } catch {
    return false;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load language from localStorage on mount, or detect based on location
  useEffect(() => {
    const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language | null;
    
    // Debug logging (remove in production)
    if (typeof window !== 'undefined') {
      console.log('Language detection:', {
        savedLanguage,
        browserLang: navigator.language,
        allLanguages: navigator.languages,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });
    }
    
    if (savedLanguage && translations[savedLanguage]) {
      // User has previously selected a language - use it
      setLanguageState(savedLanguage);
    } else {
      // No saved language - detect based on location
      // If from Croatia -> Croatian, otherwise -> English
      const isCroatian = detectIfCroatian();
      console.log('Detected Croatian:', isCroatian);
      setLanguageState(isCroatian ? 'hr' : 'en');
    }
    setIsInitialized(true);
  }, []);

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  // Update HTML lang attribute on initial load
  useEffect(() => {
    if (isInitialized) {
      document.documentElement.lang = language;
    }
  }, [language, isInitialized]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Helper hook that just returns translations
export function useTranslations() {
  const { t } = useLanguage();
  return t;
}

