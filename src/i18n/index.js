import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en';
import sq from './locales/sq';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      sq: {
        translation: sq
      }
    },
    lng: 'sq',
    fallbackLng: 'sq',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 