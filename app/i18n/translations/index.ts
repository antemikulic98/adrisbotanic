import { hr } from './hr';
import { en } from './en';
import { de } from './de';
import { it } from './it';
import { es } from './es';
import { fr } from './fr';

export const translations = {
  hr,
  en,
  de,
  it,
  es,
  fr,
} as const;

export type Language = keyof typeof translations;
export type Translations = typeof hr;

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'hr', name: 'Hrvatski', flag: '🇭🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export const defaultLanguage: Language = 'hr';

