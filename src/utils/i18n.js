import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation, initReactI18next } from "react-i18next"

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    debug: true,
    // load: 'languageOnly',
    load:['en', 'zh'],
    whitelist:['en', 'zh'],
    // defaultNS: 'common',
    // ns: ['common'],

    interpolation: {
      escapeValue: false
    },
    detection: {
      caches: ['cookie','localStorage'],
      lookupCookie: 'lang',
      lookupLocalStorage: 'lang'
    }
  })