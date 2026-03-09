<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/settings'

const { t } = useI18n()
const settings = useSettingsStore()

defineProps<{
  open: boolean
}>()

defineEmits<{
  close: []
}>()
</script>

<template>
  <!-- Overlay -->
  <Transition name="fade">
    <div
      v-if="open"
      class="fixed inset-0 bg-black/40 z-40"
    />
  </Transition>

  <!-- Modal wrapper — clicks outside close it -->
  <Transition name="scale-up">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-center justify-center px-6"
      @click.self="$emit('close')"
    >
      <div class="w-full max-w-sm bg-tasca-paper rounded-2xl shadow-2xl border-2 border-tasca-dark/10">

        <!-- Title -->
        <div class="px-6 pt-6 pb-4 border-b border-tasca-dark/10 flex items-center justify-between">
          <h2 class="font-display text-tasca-dark font-black text-xl stamp-text">
            {{ t('settings.title') }}
          </h2>
          <button
            @click="$emit('close')"
            class="text-tasca-dark/30 text-2xl leading-none active:text-tasca-red transition-colors"
          >
            ×
          </button>
        </div>

        <!-- Settings rows -->
        <div class="px-6 py-5 flex flex-col gap-5">

          <!-- Dark mode -->
          <div class="flex items-center justify-between">
            <p class="font-body text-tasca-dark font-semibold text-sm">
              {{ t('settings.darkMode') }}
            </p>
            <button
              @click="settings.toggleDarkMode()"
              class="w-12 h-6 rounded-full transition-colors duration-200 relative"
              :class="settings.darkMode ? 'bg-tasca-green' : 'bg-tasca-dark/20'"
            >
              <div
                class="absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200"
                :class="settings.darkMode ? 'translate-x-7' : 'translate-x-1'"
              />
            </button>
          </div>

          <!-- Language -->
          <div class="flex items-center justify-between">
            <p class="font-body text-tasca-dark font-semibold text-sm">
              {{ t('settings.language') }}
            </p>
            <div class="flex gap-2">
              <button
                @click="settings.setLocale('pt-PT')"
                class="px-3 py-1.5 rounded-lg font-body text-sm font-semibold transition-colors"
                :class="settings.locale === 'pt-PT'
                  ? 'bg-tasca-dark text-tasca-cream'
                  : 'bg-tasca-dark/10 text-tasca-dark'"
              >
                PT
              </button>
              <button
                @click="settings.setLocale('en')"
                class="px-3 py-1.5 rounded-lg font-body text-sm font-semibold transition-colors"
                :class="settings.locale === 'en'
                  ? 'bg-tasca-dark text-tasca-cream'
                  : 'bg-tasca-dark/10 text-tasca-dark'"
              >
                EN
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.scale-up-enter-active, .scale-up-leave-active {
  transition: all 0.2s ease;
}
.scale-up-enter-from, .scale-up-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
