/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useAuthStore = create(devtools(persist((set) => ({
  userLogged: null,
  isAuthenticated: false,

  loginSuccess: (user) => set((state) => ({
    isAuthenticated: true,
    userLogged: user
  })),

  loginFail: () => set((state) => ({
    isAuthenticated: false,
    userLogged: null
  })),

  logoutUser: () => set((state) => ({
    isAuthenticated: false,
    userLogged: null
  }))

}), {
  name: 'auth'
})))
