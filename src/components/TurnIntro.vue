<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  playerName: string
}>()

defineEmits<{
  ready: []
  quit: []
}>()
</script>

<template>
  <div class="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto w-full">
    <div class="text-center animate-fade-up animate-fade-up-delay-1">
      <img src="/logo.png" alt="Bubadeira" class="w-16 h-16 mx-auto mb-2 object-contain" style="image-rendering: pixelated;" />


      <p class="font-body text-tasca-dark/50 text-sm tracking-widest uppercase mb-2">
        {{ t('game.yourTurn') }}
      </p>

      <h2
        class="font-display text-tasca-dark font-black stamp-text leading-none mb-8"
        style="font-size: clamp(2.5rem, 12vw, 4rem);"
      >
        {{ playerName }}
      </h2>

      <div class="flex items-center justify-center gap-3 mb-8">
        <div class="h-px w-12 bg-tasca-red/40" />
        <span class="text-tasca-red text-sm">♠ ♥ ♦ ♣</span>
        <div class="h-px w-12 bg-tasca-red/40" />
      </div>

      <button
        @click="$emit('ready')"
        class="w-full bg-tasca-red text-white font-display font-black text-xl
               py-4 rounded-lg shadow-xl active:scale-95 transition-transform stamp-text"
      >
        {{ t('game.ready') }}
      </button>

      <button
        @click="$emit('quit')"
        class="mt-4 w-full font-body text-tasca-dark/40 text-sm py-2"
      >
        {{ t('game.quit') }}
      </button>
    </div>
  </div>
</template>
