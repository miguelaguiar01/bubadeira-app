<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const emit = defineEmits<{
  add: [name: string]
}>()

const props = defineProps<{
  existingNames: string[]
}>()

const newPlayerName = ref('')
const error = ref('')

function addPlayer() {
  const name = newPlayerName.value.trim()
  console.log('name:', name)
  console.log('existingNames:', props.existingNames)
  if (!name) return

  if (name.length > 15) {
    error.value = t('lobby.errorTooLong')
    return
  }

  if (props.existingNames.some(n => n.toLowerCase() === name.toLowerCase())) {
    error.value = t('lobby.errorDuplicate')
    return
  }

  emit('add', name)
  newPlayerName.value = ''
  error.value = ''
}

</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="relative">
      <input
        v-model="newPlayerName"
        :placeholder="t('lobby.playerNamePlaceholder')"
        maxlength="15"
        @keyup.enter="addPlayer"
        class="w-full font-body bg-white dark:bg-[#d4c4a0] border-2 border-tasca-dark/30 dark:border-tasca-cream/20 rounded-lg
               px-4 py-3 text-tasca-dark placeholder-tasca-dark/30 font-semibold
               focus:outline-none focus:border-tasca-red transition-colors"
      />
      <span class="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-tasca-dark/20 font-body">
        {{ newPlayerName.length }}/15
      </span>
    </div>

    <button
      @click="addPlayer"
      class="w-full bg-white dark:bg-[#d4c4a0] border-2 border-tasca-dark/30 dark:border-tasca-cream/20 rounded-lg py-3
             font-display text-tasca-dark font-bold text-base tracking-wide
             active:bg-tasca-red active:text-white active:border-tasca-red
             transition-colors"
    >
      + {{ t('lobby.addPlayer') }}
    </button>

    <p v-if="error" class="font-body text-tasca-red text-xs mt-1 ml-1 font-semibold">
      ⚠ {{ error }}
    </p>
  </div>
</template>
