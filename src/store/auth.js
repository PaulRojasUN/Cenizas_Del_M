/* eslint-disable no-unused-vars */
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useAuthStore = create(devtools(persist((set) => ({
  access: null,
  userLogged: null,
  isAuthenticated: false,

  loginSuccess: (access, user) => set((state) => ({
    isAuthenticated: true,
    access,
    userLogged: user
  })),

  loginFail: () => set((state) => ({
    isAuthenticated: false,
    access: null,
    userLogged: null
  })),

  logoutUser: () => set((state) => ({
    isAuthenticated: false,
    access: null,
    userLogged: null
  }))

}), {
  name: 'auth'
})))
