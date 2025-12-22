'use client';

import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage, languages, Language } from '@/app/i18n';

interface LanguageSwitcherProps {
  variant?: 'desktop' | 'mobile' | 'mobile-header';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'desktop' }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === language);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  // Mobile header variant - compact button with dropdown
  if (variant === 'mobile-header') {
    return (
      <div className='relative' ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center justify-center w-10 h-10 rounded-full transition-all'
          style={{ backgroundColor: 'rgba(39, 66, 35, 0.1)' }}
          aria-label={t.language.select}
        >
          <span className='text-lg'>{currentLang?.flag}</span>
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div 
            className='absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border-2 overflow-hidden z-[9999]'
            style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
          >
            <div className='py-1'>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-colors ${
                    language === lang.code
                      ? 'bg-[#274223]/10 text-[#274223]'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <span className='text-base'>{lang.flag}</span>
                  <span className='flex-1 text-left'>{lang.name}</span>
                  {language === lang.code && (
                    <Check className='w-4 h-4 text-[#274223]' />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'mobile') {
    return (
      <div className='space-y-2'>
        <div className='flex items-center gap-2 px-4 py-2 text-sm font-semibold text-neutral-500'>
          <Globe className='w-4 h-4' />
          <span>{t.language.select}</span>
        </div>
        <div className='grid grid-cols-2 gap-2 px-4'>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                language === lang.code
                  ? 'text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
              style={{
                backgroundColor: language === lang.code ? '#274223' : undefined,
              }}
            >
              <span className='text-base'>{lang.flag}</span>
              <span>{lang.code.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 transition-all'
      >
        <Globe className='w-3.5 h-3.5' />
        <span className='text-base'>{currentLang?.flag}</span>
        <span>{language.toUpperCase()}</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div 
          className='absolute top-full right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border-2 overflow-hidden z-50'
          style={{ borderColor: 'rgba(39, 66, 35, 0.15)' }}
        >
          <div className='py-1'>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                  language === lang.code
                    ? 'bg-[#274223]/10 text-[#274223]'
                    : 'text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <span className='text-lg'>{lang.flag}</span>
                <span className='flex-1 text-left'>{lang.name}</span>
                {language === lang.code && (
                  <Check className='w-4 h-4 text-[#274223]' />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
