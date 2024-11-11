import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            about: 'About',
            pricing: 'Pricing',
            more: 'More',
            faq: 'FAQ',
            contact: 'Contact',
            signin: 'Sign in',
            signup: 'Sign up'
          },
          footer: {
            description: 'Rest assured with us around',
            terms: 'Terms',
            privacy: 'Privacy',
            company: 'Company',
            social: 'Social',
            about: 'About',
            contact: 'Contact',
            blog: 'Blog'
          }
        }
      },
      sq: {
        translation: {
          nav: {
            about: 'Rreth nesh',
            pricing: 'Çmimet',
            more: 'Më shumë',
            faq: 'FAQ',
            contact: 'Kontakt',
            signin: 'Hyr',
            signup: 'Regjistrohu'
          },
          footer: {
            description: 'Ndihuni të sigurt me ne pranë',
            terms: 'Kushtet',
            privacy: 'Privatësia',
            company: 'Kompania',
            social: 'Sociale',
            about: 'Rreth nesh',
            contact: 'Kontakt',
            blog: 'Blog'
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 