<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineEmits<{
  guess: [higher: boolean]
}>()
</script>

<template>
  <div class="flex gap-3">
    <button
      @click="$emit('guess', true)"
      class="flex-1 flex flex-col items-center justify-center gap-1
             bg-tasca-green text-white font-display font-black text-xl
             py-5 rounded-xl shadow-xl active:scale-95 transition-transform
             border-2 border-tasca-green stamp-text"
    >
      <span class="text-2xl">↑</span>
      {{ t('game.higher') }}
    </button>
    <button
      @click="$emit('guess', false)"
      class="flex-1 flex flex-col items-center justify-center gap-1
             bg-tasca-red text-white font-display font-black text-xl
             py-5 rounded-xl shadow-xl active:scale-95 transition-transform
             border-2 border-tasca-red stamp-text"
    >
      <span class="text-2xl">↓</span>
      {{ t('game.lower') }}
    </button>
  </div>
</template>
