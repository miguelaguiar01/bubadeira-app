export interface Player {
  id: string
  name: string
}

export interface Game {
  id: string
  nameKey: string
  descriptionKey: string
  minPlayers: number
  maxPlayers: number
}

export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades'
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'

export interface Card {
  suit: Suit
  rank: Rank
  value: number
}

export interface HigherOrLowerState {
  deck: Card[]
  currentCard: Card | null
  streak: number
  isDrinking: boolean
}
