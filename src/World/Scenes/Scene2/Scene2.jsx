import { useEffect } from 'react'
import { setPlaceInGame } from '../../../api/game'
import { useGameStore } from '../../../store/game'
import { Bunker } from './Places/Bunker'
import Underground from './Parts/Underground'

const Scene2 = () => {
  const [place] = useGameStore((state) => [state.place])
  return (
    <>
      <Underground />
      {/* {place === 'Bunker' && <Bunker />} */}
    </>
  )
}

export default Scene2
