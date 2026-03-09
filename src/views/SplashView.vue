<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/settings'

const router = useRouter()
const { t } = useI18n()
const settings = useSettingsStore()

function acknowledge() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col"
       :class="settings.darkMode ? 'bg-tasca-dark' : 'paper-texture'">

    <!-- Header -->
    <div class="flex flex-col items-center pt-10 pb-6 px-6"
         :class="settings.darkMode ? 'border-b border-tasca-red/20' : 'border-b border-tasca-dark/10'">
      <img src="/logo.png" alt="Bubadeira" class="w-10 h-10 object-contain mb-2"
           style="image-rendering: pixelated;" />
      <h1 class="font-display font-black leading-none stamp-text"
          :class="settings.darkMode ? 'text-[#f5e6c8]' : 'text-tasca-dark'"
          style="font-size: clamp(2rem, 10vw, 3rem);">
        Bubadeira
      </h1>
      <div class="flex items-center justify-center gap-3 mt-1">
        <div class="h-px w-12 bg-tasca-red/40" />
        <p class="font-body text-tasca-red text-xs tracking-[0.3em] uppercase font-semibold">
          {{ t('home.subtitle') }}
        </p>
        <div class="h-px w-12 bg-tasca-red/40" />
      </div>
    </div>

    <!-- Warning content -->
    <div class="px-6 pt-8 pb-4 max-w-sm mx-auto w-full animate-fade-up animate-fade-up-delay-1">

      <div class="flex items-center justify-center gap-4 mb-6">
        <div class="w-14 h-14 rounded-full border-4 border-tasca-red flex items-center justify-center flex-shrink-0">
          <span class="text-tasca-red font-display font-black text-3xl leading-none">!</span>
        </div>
        <h2 class="font-display font-black text-3xl stamp-text"
            :class="settings.darkMode ? 'text-[#f5e6c8]' : 'text-tasca-dark'">
          {{ t('splash.title') }}
        </h2>
      </div>

      <div class="w-full rounded-xl px-6 py-5 border-2"
           :class="settings.darkMode
          ? 'bg-[#f5e6c8] border-transparent'
          : 'bg-white/80 border-tasca-dark/10'">
        <p class="font-body text-tasca-red font-bold text-base mb-4 leading-relaxed">
          {{ t('splash.warning') }}
        </p>
        <p class="font-body text-tasca-dark text-sm leading-relaxed mb-4">
          {{ t('splash.disclaimer') }}
        </p>
        <div class="h-px w-full bg-tasca-dark/10 mb-3" />
        <p class="font-body text-tasca-dark/50 text-xs italic text-center">
          {{ t('splash.moderate') }}
        </p>
      </div>
    </div>

    <div class="flex-1" />

    <!-- Button -->
    <div class="px-6 pb-8 pt-4 max-w-sm mx-auto w-full">
      <p class="font-body text-tasca-dark/60 text-xs text-center mb-3">
        {{ t('splash.ageWarning') }}
      </p>
      <button
        @click="acknowledge"
        class="w-full bg-tasca-red text-white font-display font-black text-2xl
           py-5 rounded-xl shadow-xl active:scale-95 transition-transform stamp-text"
      >
        {{ t('splash.confirm') }}
      </button>
    </div>

  </div>
</template>
