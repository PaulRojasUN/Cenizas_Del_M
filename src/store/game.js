/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useGameStore = create(devtools(persist((set) => ({
  scene: 0,
  place: null,

  setGameState: (scene, place) => set((state) => ({
    scene,
    place
  })),

  setScene: (scene) => set((state) => ({
    scene
  })),

  setPlace: (place) => set((state) => ({
    place
  }))

}), {
  name: 'game'
})))
