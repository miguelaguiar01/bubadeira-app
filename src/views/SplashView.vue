<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import CheckeredStripe from "@/components/CheckeredStripe.vue";
import TascaBorder from "@/components/TascaBorder.vue";

const router = useRouter()
const { t } = useI18n()

function acknowledge() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col justify-between paper-texture relative">

    <TascaBorder position="top" />

    <!-- Header -->
    <div class="flex flex-col  items-center pt-10 pb-6 px-6 border-b border-tasca-dark/10 dark:border-tasca-cream/10">
      <img src="/logo.png" alt="Bubadeira" class="w-10 h-10 object-contain mb-2"
           style="image-rendering: pixelated;" />
      <h1 class="font-display text-tasca-dark dark:text-tasca-cream font-black leading-none stamp-text"
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
        <h2 class="font-display text-tasca-dark dark:text-tasca-cream font-black text-3xl stamp-text">
          {{ t('splash.title') }}
        </h2>
      </div>

      <div class="w-full rounded-xl text-center overflow-hidden border-2 border-tasca-dark/10 dark:border-transparent">
        <CheckeredStripe />
        <div class="bg-white/80 dark:bg-[#d4c4a0] px-6 py-5">
          <p class="font-body text-tasca-red font-bold text-base mb-4 leading-relaxed">
            {{ t('splash.warning') }}
          </p>
          <p class="font-body text-tasca-dark text-sm leading-relaxed mb-4">
            {{ t('splash.disclaimer') }}
          </p>
          <div class="h-px w-full bg-tasca-dark/10 mb-3" />
          <p class="font-body font-bold text-tasca-dark/50 text-sm">
            {{ t('splash.moderate') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Button -->
    <div class="px-6 pb-8 pt-4 max-w-sm mx-auto w-full">
      <p class="font-body text-tasca-dark/60 dark:text-tasca-cream/60 text-xs text-center mb-3">
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

    <TascaBorder position="bottom" />
  </div>
</template>
