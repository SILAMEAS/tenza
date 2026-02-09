'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { i18nConfig } from './config'

// Import translations
import enCommon from '@/public/locales/en/common.json'
import esCommon from '@/public/locales/es/common.json'
import frCommon from '@/public/locales/fr/common.json'
import deCommon from '@/public/locales/de/common.json'

const resources = {
  en: { common: enCommon },
  es: { common: esCommon },
  fr: { common: frCommon },
  de: { common: deCommon },
}

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      ...i18nConfig,
      resources,
      interpolation: {
        escapeValue: false,
      },
    })
}

export default i18n
