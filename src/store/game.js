/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useGameStore = create(devtools(persist((set, get) => ({
  scene: 0,
  place: 'Introduction',
  backlog: [],
  decisionsScene1: { checkedNews: false, continueGirlfriendSearch: false, followedCrowd: false, hasBackpack: false, hasFlashlight: false, hasKey: false },
  actionsScene1: { showD1: false, showD2: false },
  dialogue: [],

  reset: () => set((state) => ({
    scene: 0,
    place: 'Introduction',
    backlog: [],
    decisionsScene1: { checkedNews: false, continueGirlfriendSearch: false, followedCrowd: false, hasBackpack: false, hasFlashlight: false, hasKey: false },
    actionsScene1: { showD1: false, showD2: false },
    dialogue: []
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
  })),

  setActionsScene1: (action, value) => set((state) => ({
    actionsScene1: {
      ...state.actionsScene1,
      [action]: value
    }
  })),

  getActionsScene1: (action) => get().actionsScene1[action]
}), {
  name: 'game'
})))
