<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  playerName: string
  streak: number
}>()
</script>

<template>
  <div class="flex items-center justify-between">
    <div class="font-body text-tasca-dark/50 text-sm">
      {{ playerName }}
    </div>
    <div class="flex items-center gap-2 bg-white/70 border border-tasca-dark/15
                rounded-full px-4 py-1.5">
      <span class="font-body text-tasca-dark/50 text-xs uppercase tracking-wide">
        {{ t('game.streak') }}
      </span>
      <span class="font-display text-tasca-red font-black text-lg leading-none">
        {{ streak }}
      </span>
    </div>
  </div>
</template>
