import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { auth } from '../../firebase.config'
import { createUser, getUser } from '../db/user-collection'
import { useAuthStore } from '../store/auth'

const { loginSuccess, loginFail, logoutUser } = useAuthStore.getState()

export const loginWithGoogle = async (body) => {
  try {
    const provider = new GoogleAuthProvider()
    const res = await signInWithPopup(auth, provider)
    const { accessToken } = res.user.stsTokenManager
    const { email, displayName } = res.user
    loginSuccess(accessToken, { email, name: displayName })
    saveDataUser({ email, name: displayName, backpack: []})
    return { type: 'success' }
  } catch (err) {
    loginFail()
    console.log(err)
    return { type: 'error' }
  }
}

export const logout = async () => {
  try {
    await signOut(auth)
    logoutUser()
    return { type: 'success' }
  } catch (error) {
    console.log(error)
    return { type: 'error' }
  }
}

export const getDataUser = async (email) => {
  const result = await getUser(email)
  return result
}

export const saveDataUser = async (valuesUser) => {
  const result = await getDataUser(valuesUser.email)
  if (!result.success && !result.error) {
    await createUser(valuesUser)
  }
}
