<script setup lang="ts">
defineProps<{
  title: string
  backLabel?: string
}>()

defineEmits<{
  back: []
}>()
</script>

<template>
  <div class="relative flex items-center justify-center mb-8 animate-fade-up animate-fade-up-delay-1">
    <button
      v-if="backLabel"
      @click="$emit('back')"
      class="absolute left-0 font-body text-tasca-dark font-semibold text-sm
             flex items-center gap-1 border-2 border-tasca-dark rounded-lg px-3 py-2
             bg-white/60 active:scale-95 transition-transform"
    >
      ← {{ backLabel }}
    </button>
    <h1 class="font-display text-tasca-dark font-black text-3xl stamp-text">
      {{ title }}
    </h1>
  </div>
</template>
