import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@/i18n.ts'
import './style.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

const { useSettingsStore } = await import('@/stores/settings')
const settings = useSettingsStore()
settings.load()

app.mount('#app')
