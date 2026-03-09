<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  playerName: string
  drinkAmount: number
}>()

defineEmits<{
  continue: []
}>()
</script>

<template>
  <div
    class="fixed inset-0 flex flex-col items-center justify-center px-6 z-50"
    style="background: linear-gradient(180deg, #c8392b 0%, #8b1a10 100%);"
  >
    <div class="text-center animate-fade-up animate-fade-up-delay-1">
      <div class="text-6xl mb-4">🍺</div>

      <h2
        class="font-display text-white font-black stamp-text leading-none mb-2"
        style="font-size: clamp(2.5rem, 14vw, 4.5rem);"
      >
        {{ t('game.lost') }}
      </h2>

      <p class="font-display text-white/80 font-bold text-xl mb-2">
        {{ playerName }}
      </p>

      <div class="bg-white/20 rounded-2xl px-8 py-5 my-6 border-2 border-white/30">
        <p class="font-body text-white/70 text-sm uppercase tracking-widest mb-1">
          {{ t('game.drink') }}
        </p>
        <p
          class="font-display text-white font-black leading-none"
          style="font-size: clamp(3rem, 20vw, 6rem);"
        >
          {{ drinkAmount }}
        </p>
        <p class="font-body text-white/70 text-sm uppercase tracking-widest mt-1">
          {{ t('game.sips') }}
        </p>
      </div>

      <button
        @click="$emit('continue')"
        class="w-full bg-white text-tasca-red font-display font-black text-xl
               py-4 rounded-xl shadow-xl active:scale-95 transition-transform stamp-text"
      >
        {{ t('game.next') }}
      </button>
    </div>
  </div>
</template>
