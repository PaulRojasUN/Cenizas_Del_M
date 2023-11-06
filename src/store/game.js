/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useGameStore = create(devtools(persist((set) => ({
  scene: 1,
  place: 'Sala',
  backlog: [],
  decisionsScene1: { checkedNews: false, continueGirlfriendSearch: false, followedCrowd: false, hasBackpack: false, hasFlashlight: false, hasKey: false },
  // dialogues: { showS1D1: false, showS1D2: false },
  // isDialog: false,
  dialogue: [],

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
  })),

  changeIsDialog: (value) => set((state) => ({
    isDialog: value
  })),

  setDecisionScene1: (decision, value) => set((state) => ({
    decisionsScene1: {
      ...state.decisionsScene1,
      [decision]: value
    }
  })),

  setDialogue: (dialogue) => set((state) => ({
    dialogue
  })),

  resetDialogue: () => set((state) => ({
    dialogue: []
  }))

}), {
  name: 'game'
})))
