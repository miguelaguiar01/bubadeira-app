<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useHigherOrLowerStore } from '@/stores/higherOrLower'
import type { Player } from '@/types'
import TascaBorder from '@/components/TascaBorder.vue'
import PlayerListItem from '@/components/PlayerListItem.vue'
import AddPlayerInput from '@/components/AddPlayerInput.vue'
import PageHeader from '@/components/PageHeader.vue'
import TascaButton from '@/components/TascaButton.vue'

const router = useRouter()
const route = useRoute()
const { t } = useI18n()
const store = useHigherOrLowerStore()

const gameId = route.query.game as string
const players = ref<Player[]>([])
const addPlayerInput = ref<InstanceType<typeof AddPlayerInput> | null>(null)

function handleAdd(name: string) {
  if (players.value.some(p => p.name.toLowerCase() === name.toLowerCase())) {
    addPlayerInput.value?.setError(t('lobby.errorDuplicate'))
    return
  }
  players.value.push({ id: crypto.randomUUID(), name })
}

function removePlayer(id: string) {
  players.value = players.value.filter(p => p.id !== id)
}

function startGame() {
  if (players.value.length < 2) return
  store.initGame(players.value)
  router.push({ name: gameId })
}

function goBack() {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="relative min-h-screen paper-texture overflow-hidden flex flex-col">
    <!-- Top border -->
    <TascaBorder position="top" />

    <div class="flex-1 flex flex-col px-5 pt-6 pb-6 max-w-md mx-auto w-full">
      <!-- Header -->
      <PageHeader
        :title="t('lobby.title')"
        :backLabel="t('lobby.back')"
        @back="goBack"
      />

      <!-- Player list -->
      <PlayerListItem
        v-for="(player, index) in players"
        :key="player.id"
        :player="player"
        :index="index"
        @remove="removePlayer"
      />

      <!-- Add player input -->
      <AddPlayerInput ref="addPlayerInput" @add="handleAdd" />

      <!-- Spacer -->
      <div class="flex-1" />

      <!-- Start button -->
      <TascaButton
        :label="t('lobby.startGame')"
        :disabled="players.length < 2"
        @click="startGame"
      />
    </div>

    <!-- Bottom border -->
    <TascaBorder position="bottom" />
  </div>
</template>
