<script setup lang="ts">
import type { Player } from '../types'

defineProps<{
  player: Player
  index: number
}>()

defineEmits<{
  remove: [id: string]
}>()
</script>

<template>
  <div class="relative flex items-center overflow-hidden rounded-lg shadow-md border-2 border-tasca-dark/20 dark:border-tasca-cream/20 mb-2">

    <!-- Checkered left accent -->
    <div class="flex flex-col w-3 self-stretch flex-shrink-0">
      <div v-for="i in 8" :key="i" class="flex-1"
           :class="i % 2 === 0 ? 'bg-tasca-red' : 'bg-white'" />
    </div>

    <!-- Name + number -->
    <div class="flex-1 bg-white/80 dark:bg-[#d4c4a0] px-4 py-3 self-stretch flex items-center gap-3">
      <span class="font-display text-tasca-red font-black text-lg w-5">
        {{ index + 1 }}
      </span>
      <span class="font-body text-tasca-dark font-semibold text-base">
        {{ player.name }}
      </span>
    </div>

    <!-- Remove -->
    <button
      @click="$emit('remove', player.id)"
      class="bg-white/80 dark:bg-[#d4c4a0] self-stretch px-4 flex items-center justify-center
             border-l border-tasca-dark/10 dark:border-tasca-dark/20 active:bg-tasca-red active:text-white
             transition-colors text-tasca-dark/30 text-xl"
    >
      ×
    </button>
  </div>
</template>
