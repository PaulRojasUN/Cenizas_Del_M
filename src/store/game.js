/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useGameStore = create(devtools(persist((set, get) => ({
  scene: 0,
  place: 'Introduction',
  backlog: [],
  decisionsScene1: { checkedNews: false, continueGirlfriendSearch: false, followedCrowd: false, hasBackpack: false, hasFlashlight: false, hasKey: false },
  decisionsScene2: { openSafeAlone: false, openSafeInGroup: false },
  actionsGame: { showD1: false, showD2: false, showBacklog: false, winMiniGame: false },
  dialogue: [],
  choice: [],
  isChoice: false,

  reset: () => set((state) => ({
    scene: 0,
    place: 'Introduction',
    backlog: [],
    decisionsScene1: { checkedNews: false, continueGirlfriendSearch: false, followedCrowd: false, hasBackpack: false, hasFlashlight: false, hasKey: false },
    decisionsScene2: { openSafeAlone: false, openSafeInGroup: false },
    actionsGame: { showD1: false, showD2: false, showBacklog: false, winMiniGame: false },
    dialogue: [],
    choice: [],
    isChoice: false,
  })),

  setScene: (scene) => set((state) => ({
    scene
  })),

  setPlace: (place) => set((state) => ({
    place
  })),

  addToBacklog: (item) => set((state) => ({
    backlog: state.backlog.length < 4 ? [...state.backlog, item] : state.backlog
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

  setChoice: (choice) => set((state) => ({
    choice
  })),

  resetDialogue: () => set((state) => ({
    dialogue: []
  })),
  resetChoice: () => set((state) => ({
    choice: []
  })),

  setActionsGame: (action, value) => set((state) => ({
    actionsGame: {
      ...state.actionsGame,
      [action]: value
    }
  })),

  getActionsGame: (action) => get().actionsGame[action],

  getDecisionsScene1: () => get().decisionsScene1,

  setIsChoice: (isChoice) => set((state) => ({
    isChoice
  })),
}), {
  name: 'game'
}
)))
