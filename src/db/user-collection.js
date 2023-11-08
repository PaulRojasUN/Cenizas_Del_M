'use strict'

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where
} from 'firebase/firestore'
import { db } from '../../firebase.config'

const usersCollectionRef = collection(db, 'users')

const createUser = async (userData) => {
  try {
    const userDocRef = await addDoc(usersCollectionRef, userData)

    const scene1Data = {
      checkedNews: false,
      hasFlashlight: false,
      hasBackpack: false,
      followedCrowd: false,
      continueGirlfriendSearch: false,
      hasKey: false
    }

    const scene1DataDocRef = collection(usersCollectionRef, userDocRef.id, 'game')

    await setDoc(doc(scene1DataDocRef, 'scene1'), scene1Data)

    return { success: true, data: userDocRef }
  } catch (error) {
    console.log('Error to create user', error)
    return { success: false, data: error }
  }
}

const getUser = async (userEmail) => {
  try {
    const userSnapshot = await getDocs(
      query(usersCollectionRef, where('email', '==', userEmail))
    )

    if (userSnapshot.empty) {
      return { success: false, message: 'User not found' }
    }
    const userData = userSnapshot.docs.map((doc) => doc.data())
    return { success: true, data: userData }
  } catch (error) {
    return { success: false, message: 'Error to get the user', error }
  }
}

const getUserGame = async (userEmail, gameAttribute) => {
  try {
    const userSnapshot = await getDocs(
      query(usersCollectionRef, where('email', '==', userEmail))
    )

    if (userSnapshot.empty) {
      return { success: false, message: 'User not found' }
    }

    const userId = userSnapshot.docs[0].id
    
    const userDocRef = doc(usersCollectionRef, userId)
  
    const gameColRef = collection(userDocRef, 'game')
  
    const scene1DocRef = doc(gameColRef, gameAttribute)

    const scene1Snapshot = await getDoc(scene1DocRef)

    const scene1Data = scene1Snapshot.data()

    
    return { success: true, data: scene1Data }
  } catch (error) {
    return { success: false, message: 'Error to get the user', error }
  }
}



const editUser = async (userEmail, newData) => {
  try {
    const userSnapshot = await getDocs(
      query(usersCollectionRef, where('email', '==', userEmail))
    )

    if (userSnapshot.empty) {
      return { success: false, message: 'User not found' }
    }
    const userDoc = userSnapshot.docs[0]

    await updateDoc(userDoc.ref, newData)

    return { success: true, message: 'User updated successfully' }
  } catch (error) {
    return { success: false, message: 'Error to update the user', error }
  }
}

const editUserGame = async (userEmail, gameAttribute, newData) => {
  try {
    const userSnapshot = await getDocs(
      query(usersCollectionRef, where('email', '==', userEmail))
    )

    if (userSnapshot.empty) {
      return { success: false, message: 'User not found' }
    }
    
    const userId = userSnapshot.docs[0].id
    
    const userDocRef = doc(usersCollectionRef, userId)
  
    const gameColRef = collection(userDocRef, 'game')
  
    const scene1DocRef = doc(gameColRef, gameAttribute)

    await updateDoc(scene1DocRef, newData)

    return { success: true, message: 'User updated successfully' }
  } catch (error) {
    return { success: false, message: 'Error to update the user', error }
  }
}

export { createUser, editUser, getUser }
