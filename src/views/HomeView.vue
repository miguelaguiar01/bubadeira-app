<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { games } from '@/data/games'

import type { Game } from '@/types'

import TascaBorder from '@/components/TascaBorder.vue'
import GameCard from '@/components/GameCard.vue'
import SettingsButton from '@/components/SettingsButton.vue'
import SettingsPanel from "@/components/SettingsPanel.vue";

const router = useRouter()
const { t } = useI18n()
const settingsOpen = ref(false)

function selectGame(game: Game) {
  router.push({ name: 'lobby', query: { game: game.id } })
}

function openSettings() {
  settingsOpen.value = true
}
</script>

<template>
  <div class="relative min-h-screen paper-texture dark:bg-tasca-dark overflow-hidden flex flex-col">
    <TascaBorder position="top" />

    <!-- Main content -->
    <div class="flex-1 flex flex-col items-center px-6 py-10 w-full">
      <div class="w-full flex justify-end mb-4">
        <SettingsButton @open="openSettings" />
      </div>

      <!-- Hero header - full width centered -->
      <div class="text-center w-full animate-fade-up animate-fade-up-delay-1">
        <h1
          class="font-display text-tasca-dark dark:text-tasca-cream stamp-text font-black leading-none"
          style="font-size: clamp(3.5rem, 18vw, 6rem)"
        >
          Bubadeira
        </h1>
        <div class="flex items-center justify-center gap-3 mt-2">
          <div class="h-px w-16 bg-tasca-red opacity-40" />
          <p class="font-body text-tasca-red text-xs tracking-[0.3em] uppercase font-semibold">
            {{ t('home.subtitle') }}
          </p>
          <div class="h-px w-16 bg-tasca-red opacity-40" />
        </div>
      </div>

      <!-- Constrained content -->
      <div class="w-full max-w-sm mx-auto">

        <!-- Azulejo tile decoration -->
        <div class="my-8 animate-fade-up animate-fade-up-delay-2 flex justify-center">
          <svg width="240" height="80" viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="azulejo" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="#f0ede6" stroke="#2c5f8a" stroke-width="1.5" />
                <rect x="4" y="4" width="32" height="32" fill="none" stroke="#2c5f8a" stroke-width="0.8" />
                <polygon points="20,8 32,20 20,32 8,20" fill="none" stroke="#2c5f8a" stroke-width="0.8" />
                <circle cx="4" cy="4" r="1.5" fill="#2c5f8a" />
                <circle cx="36" cy="4" r="1.5" fill="#2c5f8a" />
                <circle cx="4" cy="36" r="1.5" fill="#2c5f8a" />
                <circle cx="36" cy="36" r="1.5" fill="#2c5f8a" />
                <circle cx="20" cy="20" r="2" fill="#2c5f8a" />
              </pattern>
            </defs>
            <rect width="240" height="80" fill="url(#azulejo)" rx="4" />
            <rect width="240" height="80" fill="none" stroke="#2c5f8a" stroke-width="1.5" rx="4" />
          </svg>
        </div>

        <!-- Game list -->
        <div class="w-full flex flex-col gap-4 animate-fade-up animate-fade-up-delay-3">
          <GameCard
            v-for="game in games"
            :key="game.id"
            :game="game"
            @select="selectGame"
          />
        </div>

      </div>
    </div>

    <SettingsPanel :open="settingsOpen" @close="settingsOpen = false" />

    <TascaBorder position="bottom" />
  </div>
</template>
