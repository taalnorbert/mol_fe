import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import hu from "@/locales/hu.json";
import en from '@/locales/en.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)

    .init({
        fallbackLng: 'en',
        lng: localStorage.getItem("LOCALIZATION_LANGUAGE") ?? "hu",
        resources: {
          en: { translation: en },
          hu: { translation: hu },
        },
        interpolation: {
          escapeValue: false,
        },
    })

export default i18n;
