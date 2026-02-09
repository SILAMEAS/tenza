import { InitOptions } from 'i18next'

export const i18nConfig: InitOptions = {
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common', 'products', 'cart'],
  defaultNS: 'common',
}

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
]
