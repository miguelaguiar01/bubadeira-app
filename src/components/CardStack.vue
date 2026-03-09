<script setup lang="ts">
import type { Card } from '../types'
import { getCardImage } from '../data/deck'

defineProps<{
  playedCards: Card[]
  currentCard: Card | null
  highlightCurrent?: boolean
}>()
</script>

<template>
  <div class="relative w-48 h-64">

    <!-- Played cards fanning behind -->
    <div
      v-for="(card, index) in playedCards.slice(-5)"
      :key="index"
      class="absolute inset-0 rounded-xl overflow-hidden shadow-lg border-2 border-white"
      :style="{
        transform: `rotate(${(index - playedCards.slice(-5).length + 1) * 6}deg) translateY(${(index - playedCards.slice(-5).length + 1) * 4}px)`,
        zIndex: index
      }"
    >
      <img
        :src="getCardImage(card)"
        :alt="`${card.rank} of ${card.suit}`"
        class="w-full h-full object-contain bg-white"
      />
    </div>

    <!-- Current card on top -->
    <div
      v-if="currentCard"
      class="absolute inset-0 rounded-xl overflow-hidden shadow-2xl"
      :class="highlightCurrent ? 'border-4 border-tasca-red' : 'border-2 border-white'"
      :style="{ zIndex: playedCards.length + 1 }"
    >
      <img
        :src="getCardImage(currentCard)"
        :alt="`${currentCard.rank} of ${currentCard.suit}`"
        class="w-full h-full object-contain bg-white"
      />
    </div>

  </div>
</template>
