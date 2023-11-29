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
    
    const generalData = {
      backpack:[],
      scene:0,
      place:''
    }

    const gameDataDocRef = collection(usersCollectionRef, userDocRef.id, 'game')


    await setDoc(doc(gameDataDocRef, 'scene1'), scene1Data)

    await setDoc(doc(gameDataDocRef, 'scene2'), {test:true})

    await setDoc(doc(gameDataDocRef, 'scene3'), {test:true})

    await setDoc(doc(gameDataDocRef, 'general'), generalData)

    return { success: true, data: userDocRef }
  } catch (error) {
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

    const gameDocRef = doc(gameColRef, gameAttribute)

    const gameSnapshot = await getDoc(gameDocRef)

    const gameData = gameSnapshot.data()

    return { success: true, data: gameData }
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

    const gameDocRef = doc(gameColRef, gameAttribute)

    await updateDoc(gameDocRef, newData)

    return { success: true, message: 'User updated successfully' }
  } catch (error) {
    return { success: false, message: 'Error to update the user', error }
  }
}

const resetUserGame = async (userEmail) => {
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

    const generalDocRef = doc(gameColRef, 'general')

    const res1 = await updateDoc(generalDocRef, {
      backpack:[],
      scene:0,
      place:''
    })

    const scene1DocRef = doc(gameColRef, 'scene1')

    const res2 = await updateDoc(scene1DocRef, {
      checkedNews: false,
      hasFlashlight: false,
      hasBackpack: false,
      followedCrowd: false,
      continueGirlfriendSearch: false,
      hasKey: false
    })

    const scene2DocRef = doc(gameColRef, 'scene2')

    const res3 = await updateDoc(scene2DocRef, {test:true})

    const scene3DocRef = doc(gameColRef, 'scene3')

    const res4 = await updateDoc(scene3DocRef, {test:true})

    if (res1 && res2 && res3 && res4) {
      return { success: true, message: 'User updated successfully' }
    } else {
      return { success: false, message: 'An error has ocurred'}
    }

  } catch (error) {
    return { success: false, message: 'An error has ocurred', error }
  }
}

const inBackpack = async (userEmail, item) => {
  try {
    const userSnapshot = await getDocs(
      query(usersCollectionRef, where('email', '==', userEmail))
    )

    if (userSnapshot.empty) {
      return { success: false, message: 'User not found' }
    }

    const generalDoc = await getUserGame(userEmail, 'general')

    if (generalDoc.data.backpack.includes(item)) {

      return { success: true, message: 'User has that item in its backback' }
    } else {
      return { success: false, message: 'User does not have that item in its backback' }
    }

  } catch (error) {
    return { success: false, message: 'Error retrieving data', error }
  }
}

const addToBackpack = async (userEmail, item) => {
  try {
    const userSnapshot = await getDocs(
      query(usersCollectionRef, where('email', '==', userEmail))
    )

    if (userSnapshot.empty) {
      return { success: false, message: 'User not found' }
    }

    const generalDoc = await getUserGame(userEmail, 'general')

    const backpack = generalDoc.data.backpack

    if (backpack.includes(item)) {

      return { success: false, message: 'User already has that item in its backback' }
    } else {
    
      const newBackpack = [...backpack, item]

      await editUserGame(userEmail, 'general', {backpack:newBackpack})

      return { success: true, message: 'The item has been added to the backpack' }
    }

  } catch (error) {
    return { success: false, message: 'Error retrieving data', error }
  }
}


const removeFromBackpack = async (userEmail, item) => {
  try {
    const userSnapshot = await getDocs(
      query(usersCollectionRef, where('email', '==', userEmail))
    )

    if (userSnapshot.empty) {
      return { success: false, message: 'User not found' }
    }

    const generalDoc = await getUserGame(userEmail, 'general')

    const backpack = generalDoc.data.backpack

    if (backpack.includes(item)) {


      const newBackpack = backpack.filter(e => e != item)

      await editUserGame(userEmail, 'general', {backpack:newBackpack})

      return { success: true, message: 'Item has been removed from backpack' }
    } else {
    
      return { success: false, message: 'User does not have that item in its backpack' }
    }

  } catch (error) {
    return { success: false, message: 'Error retrieving data', error }
  }
}


export { createUser, editUser, editUserGame, getUser, getUserGame, resetUserGame}
