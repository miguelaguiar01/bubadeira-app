<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { Game } from '@/types'
import CheckeredStripe from '@/components/CheckeredStripe.vue'

defineProps<{
  game: Game
}>()

defineEmits<{
  select: [game: Game]
}>()

const { t } = useI18n()
</script>

<template>
  <button
    @click="$emit('select', game)"
    class="w-full text-left overflow-hidden rounded-lg shadow-xl
           active:scale-95 transition-transform duration-150 border-2 border-tasca-dark"
  >
    <CheckeredStripe />
    <div class="bg-white/80 px-5 py-4 border-t-2 border-tasca-dark">
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <h2 class="font-display text-tasca-dark text-2xl font-bold leading-tight stamp-text">
            {{ t(game.nameKey) }}
          </h2>
          <p class="font-body text-tasca-dark/60 text-sm mt-1 leading-relaxed">
            {{ t(game.descriptionKey) }}
          </p>
        </div>
        <svg width="40" height="44" viewBox="0 0 40 44" xmlns="http://www.w3.org/2000/svg" class="ml-3 flex-shrink-0">
          <polygon points="20,2 36,18 28,18 28,22 12,22 12,18 4,18" fill="#2d6a4f" />
          <polygon points="20,42 36,26 28,26 28,22 12,22 12,26 4,26" fill="#c8392b" />
        </svg>
      </div>
      <div class="flex items-center justify-between mt-4 pt-3 border-t border-tasca-dark/10">
        <p class="font-body text-tasca-red text-xs font-semibold tracking-wide uppercase">
          {{ t('home.players', { min: game.minPlayers, max: game.maxPlayers }) }}
        </p>
        <span class="font-display text-tasca-dark font-bold text-lg">→</span>
      </div>
    </div>
  </button>
</template>
