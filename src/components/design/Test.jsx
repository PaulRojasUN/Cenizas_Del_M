import React, { useEffect } from 'react'
import Backlog from './Backlog'
import { useGameStore } from '../../store/game'

const Test = () => {
  const {setActionsGame,addToBacklog,resetBacklog} = useGameStore.getState()
  useEffect(() => {
    setActionsGame('showBacklog',true)
    resetBacklog()
    addToBacklog('key')
    addToBacklog('wokiToki');
  },[])
  return (
    <Backlog/>
  )
}

export default Test