/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useAuthStore = create(devtools(persist((set) => ({
  access: null,
  user: null,
  isAuthenticated: true,

  loginSuccess: (payload) => set((state) => ({
    access: payload.access,
    refresh: payload.refresh,
    isAuthenticated: true
  })),

  userLoadedSuccess: (payload) => set((state) => ({ user: payload })),

  loginFail: () => set((state) => ({
    access: '',
    refresh: '',
    isAuthenticated: false,
    user: null
  })),

  authenticatedSuccess: () => set((state) => ({ isAuthenticated: true })),

  authenticatedFail: () => set((state) => ({ isAuthenticated: false })),

  logoutUser: () => set((state) => ({
    access: null,
    refresh: null,
    user: null,
    isAuthenticated: false
  }))

}), {
  name: 'auth'
})))
