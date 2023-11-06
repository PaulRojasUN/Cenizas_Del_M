/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useGameStore = create(devtools(persist((set) => ({
  scene: 1,
  place: 'Sala',
  backlog: [],
  decisions: [],

  setGameState: (scene, place) => set((state) => ({
    scene,
    place
  })),

  setScene: (scene) => set((state) => ({
    scene
  })),

  setPlace: (place) => set((state) => ({
    place
  })),

  addToBacklog: (item) => set((state) => ({
    backlog: [...state.backlog, item]
  })),

  removeFromBacklog: (item) => set((state) => ({
    backlog: state.backlog.filter((backlogItem) => backlogItem !== item)
  }))

}), {
  name: 'game'
})))
