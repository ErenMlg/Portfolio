import { tr } from './tr';
import { en } from './en';

export const translations = {
  tr,
  en
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof tr;

export const getTranslation = (lang: Language) => translations[lang]; 