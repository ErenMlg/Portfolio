import { tr } from './tr';
import { en } from './en';

export const translations = {
  tr,
  en
};

export type Language = 'tr' | 'en';
export type TranslationKey = keyof typeof tr;

export const getTranslation = (lang: Language) => translations[lang]; 