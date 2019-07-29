import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { useTranslation, initReactI18next } from "react-i18next"

i18n
  .use(Backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    
    lng: "en",
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false
    },
    // resources: {
    //   en: {
    //     translation: {
    //       "Welcome to React": "Welcome to React and react-i18next"
    //     }
    //   },
    //   zh: {
    //     translation: {
    //       "Welcome to React": "欢迎来到 React 和 react-i18next"
    //     }
    //   }
    // },
  });