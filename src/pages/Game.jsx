import { useEffect } from 'react'
import Experience from '../World/Experience'
import { getSceneDecisions } from '../api/game'
import Backlog from '../components/design/Backlog'
import BarMenu from '../components/design/BarMenu'

const Game = () => {
  return (
    <>
      <BarMenu />
      <Experience />
      <Backlog />
    </>
  )
}

export default Game
