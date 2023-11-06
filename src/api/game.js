import { useGameStore } from '../store/game'

const { setGameState, setScene, setPlace } = useGameStore.getState()

export const setGame = async (body) => {
  try {
    const { scene, place } = body
    setGameState(scene, place)
    return { type: 'success' }
  } catch (err) {
    console.log(err)
    return { type: 'error' }
  }
}

export const setSceneInGame = async (scene) => {
  try {
    setScene(scene)
    return { type: 'success' }
  } catch (err) {
    console.log(err)
    return { type: 'error' }
  }
}

export const setPlaceInGame = async (place) => {
  try {
    setPlace(place)
    return { type: 'success' }
  } catch (err) {
    console.log(err)
    return { type: 'error' }
  }
}

