import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ptPT from './locales/pt-PT.json'

export const i18n = createI18n({
  legacy: false,
  locale: 'pt-PT',
  fallbackLocale: 'pt-PT',
  messages: {
    'pt-PT': ptPT,
    en,
  },
})
