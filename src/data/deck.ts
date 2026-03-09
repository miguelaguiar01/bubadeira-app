import type { Card, Rank, Suit } from '@/types'

const SUITS: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades']
const RANKS: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
const RANK_VALUES: Record<Rank, number> = {
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
}
const SUIT_MAP: Record<Suit, string> = {
  hearts: 'HEART',
  diamonds: 'DIAMOND',
  clubs: 'CLUB',
  spades: 'SPADE',
}
const RANK_NAME: Partial<Record<Rank, string>> = {
  J: 'JACK',
  Q: 'QUEEN',
  K: 'KING',
}

export function getCardImage(card: Card): string {
  const suit = SUIT_MAP[card.suit]
  const rankName = RANK_NAME[card.rank]

  if (rankName) {
    return `/cards/${suit}-${card.value}-${rankName}.svg`
  }

  const fileValue = card.rank === 'A' ? 1 : card.value
  return `/cards/${suit}-${fileValue}.svg`
}

export function createDeck(): Card[] {
  const deck: Card[] = []

  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push({
        suit,
        rank,
        value: RANK_VALUES[rank],
      })
    }
  }

  return deck
}

export function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function drawCard(deck: Card[]): { card: Card; remaining: Card[] } {
  const [card, ...remaining] = deck
  return { card, remaining }
}
