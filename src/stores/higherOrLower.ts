import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { createDeck, shuffleDeck, drawCard } from '@/data/deck.ts'
import type { Card, Player } from '@/types'

export const useHigherOrLowerStore = defineStore('higherOrLower', () => {
  //State
  const players = ref<Player[]>([])
  const currentPlayerIndex = ref(0)
  const currentCard = ref<Card | null>(null)
  const deck = ref<Card[]>([])
  const streak = ref(0)
  const isDrinking = ref(false)

  //Getters
  const currentPlayer = computed(() => players.value[currentPlayerIndex.value])
  const sipsToDrink = computed(() => streak.value)

  //Actions
  function initGame(gamePlayers: Player[]) {
    players.value = gamePlayers
    currentPlayerIndex.value = 0
    streak.value = 0
    isDrinking.value = false
    deck.value = shuffleDeck(createDeck())

    console.log('Deck size after shuffle:', deck.value.length)
    console.log('Unique cards:', new Set(deck.value.map(c => `${c.rank}${c.suit}`)).size)

    const { card, remaining } = drawCard(deck.value)
    currentCard.value = card
    deck.value = remaining
  }

  function guess(higher: boolean) {
    if (!currentCard.value || isDrinking.value) return

    if (deck.value.length === 0) {
      const freshDeck = createDeck().filter(
        c => !(c.rank === currentCard.value!.rank && c.suit === currentCard.value!.suit)
      )
      deck.value = shuffleDeck(freshDeck)
    }

    const { card, remaining } = drawCard(deck.value)
    deck.value = remaining

    const correct = higher
      ? card.value > currentCard.value.value
      : card.value < currentCard.value.value

    currentCard.value = card

    if (correct) {
      streak.value++
    } else {
      isDrinking.value = true
    }
  }

  function nextTurn() {
    streak.value = 0
    isDrinking.value = false
    currentPlayerIndex.value = (currentPlayerIndex.value + 1) % players.value.length

    // Draw a fresh card for the next player
    if (deck.value.length === 0) {
      deck.value = shuffleDeck(createDeck())
    }

    const { card, remaining } = drawCard(deck.value)
    currentCard.value = card
    deck.value = remaining
  }

  return {
    players,
    currentPlayerIndex,
    currentCard,
    deck,
    streak,
    isDrinking,
    currentPlayer,
    sipsToDrink,
    initGame,
    guess,
    nextTurn,
  }
})
