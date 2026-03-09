<script setup lang="ts">
import CheckeredStripe from '@/components/CheckeredStripe.vue'

defineProps<{
  label: string
  disabled?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <div class="mt-6 animate-fade-up animate-fade-up-delay-3">
    <div class="rounded-t-lg overflow-hidden">
      <CheckeredStripe height="h-3" />
    </div>
    <button
      @click="$emit('click')"
      :disabled="disabled"
      class="w-full bg-tasca-red text-white font-display font-black text-2xl
             py-4 rounded-b-lg shadow-xl transition-all duration-150
             disabled:opacity-30 disabled:cursor-not-allowed
             active:scale-95 stamp-text tracking-wide"
    >
      {{ label }}
    </button>
  </div>
</template>
