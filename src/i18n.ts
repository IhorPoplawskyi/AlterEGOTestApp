import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import httpApi from "i18next-http-backend";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(httpApi)
  .init({
    fallbackLng: "ua",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
