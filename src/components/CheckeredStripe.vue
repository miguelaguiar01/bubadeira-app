<script setup lang="ts">
withDefaults(defineProps<{
  height?: string
  squares?: number
}>(), {
  height: 'h-4',
  squares: 16
})
</script>

<template>
  <div class="flex w-full overflow-hidden" :class="height">
    <div
      v-for="i in squares"
      :key="i"
      class="flex-1"
      :class="i % 2 === 0 ? 'bg-tasca-red' : 'bg-white'"
    />
  </div>
</template>
