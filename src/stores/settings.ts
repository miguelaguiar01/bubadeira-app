import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', () => {
  const darkMode = ref(false)
  const locale = ref('pt-PT')

  function load() {
    const saved = localStorage.getItem('bubadeira-settings')
    if (saved) {
      const parsed = JSON.parse(saved)
      darkMode.value = parsed.darkMode ?? false
      locale.value = parsed.locale ?? 'pt-PT'
    }
  }

  watch([darkMode, locale], () => {
    localStorage.setItem('bubadeira-settings', JSON.stringify({
      darkMode: darkMode.value,
      locale: locale.value
    }))
  })

  function toggleDarkMode() {
    darkMode.value = !darkMode.value
  }

  function setLocale(newLocale: string) {
    locale.value = newLocale
  }

  return {darkMode, locale, load, toggleDarkMode, setLocale}
})
