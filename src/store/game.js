/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useGameStore = create(devtools(persist((set) => ({
  gameState: null,
  games: null,
  currentGame: null

}), {
  name: 'game'
})))
