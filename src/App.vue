<script setup lang="ts">
import { RouterView } from 'vue-router'
import { watch } from 'vue'
import { useSettingsStore } from "@/stores/settings.ts";
import { i18n } from "@/i18n.ts";

const settings = useSettingsStore()

//Keep i18n locale in sync with settings
watch(() => settings.locale, (newLocale) => {
  i18n.global.locale.value = newLocale
}, { immediate: true })

watch(() => settings.darkMode, (isDark) => {
  document.documentElement.classList.toggle('dark', isDark)
}, { immediate: true })

</script>

<template>
  <RouterView />
</template>
