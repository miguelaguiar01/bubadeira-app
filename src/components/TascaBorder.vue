<script setup lang="ts">
defineProps<{
  position: 'top' | 'bottom'
}>()
</script>

<template>
  <div :class="position === 'top' ? 'flex-col' : 'flex-col-reverse'" class="flex">
    <div class="azulejo-border h-6 w-full" />
    <div class="bg-tasca-red h-2 w-full" />
  </div>
</template>
