<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHigherOrLowerStore } from '@/stores/higherOrLower'
import TascaBorder from '@/components/TascaBorder.vue'
import CardStack from '@/components/CardStack.vue'
import GuessButtons from '@/components/GuessButtons.vue'
import DrinkingOverlay from '@/components/DrinkingOverlay.vue'
import TurnIntro from '@/components/TurnIntro.vue'
import StreakBadge from '@/components/StreakBadge.vue'

type GamePhase = 'intro' | 'guessing' | 'reveal' | 'drinking'

const router = useRouter()
const { t } = useI18n()
const store = useHigherOrLowerStore()

const phase = ref<GamePhase>('intro')
const playedCards = ref(store.currentCard ? [store.currentCard] : [])

const drinkAmount = ref(0)

function startTurn() {
  phase.value = 'guessing'
}

function guess(higher: boolean) {
  const previousStreak = store.streak
  store.guess(higher)

  if (store.isDrinking) {
    drinkAmount.value = previousStreak + 1
    phase.value = 'reveal'

    // Show the losing card for 1.5 seconds then transition to drinking
    setTimeout(() => {
      phase.value = 'drinking'
    }, 1500)
  } else {
    if (store.currentCard) {
      playedCards.value.push(store.currentCard)
    }
  }
}

function continuePlaying() {
  store.nextTurn()
  playedCards.value = store.currentCard ? [store.currentCard] : []
  drinkAmount.value = 0
  phase.value = 'intro'
}

function quitGame() {
  router.push({ name: 'home' })
}

onMounted(() => {
  if (!store.currentCard) {
    router.push({ name: 'home' })
  }
})
</script>

<template>
  <div class="relative min-h-screen paper-texture overflow-hidden flex flex-col">
    <!-- Top border -->
    <TascaBorder position="top" />

    <!-- ======================== -->
    <!-- PHASE: INTRO             -->
    <!-- ======================== -->
    <TurnIntro
      v-if="phase === 'intro'"
      :playerName="store.currentPlayer?.name ?? ''"
      @ready="startTurn"
      @quit="quitGame"
    />

    <!-- PHASE: GUESSING / REVEAL -->
    <div
      v-else-if="phase === 'guessing' || phase === 'reveal'"
      class="flex-1 flex flex-col px-5 pt-4 pb-6 max-w-md mx-auto w-full"
    >
      <StreakBadge
        :playerName="store.currentPlayer?.name ?? ''"
        :streak="store.streak"
      />

      <div class="flex-1 flex items-center justify-center">
        <CardStack
          :playedCards="playedCards"
          :currentCard="store.currentCard"
          :highlightCurrent="phase === 'reveal'"
        />
      </div>

      <GuessButtons
        :class="{ 'opacity-40 pointer-events-none': phase === 'reveal' }"
        @guess="guess"
      />
    </div>

    <!-- ======================== -->
    <!-- PHASE: DRINKING          -->
    <!-- ======================== -->
    <DrinkingOverlay
      v-if="phase === 'drinking'"
      :playerName="store.currentPlayer?.name ?? ''"
      :drinkAmount="drinkAmount"
      @continue="continuePlaying"
    />

    <!-- Bottom border -->
    <TascaBorder position="bottom" />
  </div>
</template>
