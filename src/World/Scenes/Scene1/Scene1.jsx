import { useEffect } from 'react'
import { setPlaceInGame } from '../../../api/game'
import { useGameStore } from '../../../store/game'
import Sala from './Parts/Sala'

const Scene1 = () => {
  const [place] = useGameStore((state) => [state.place])

  useEffect(() => {
    const consult = async () => {
      if (place === null) {
        await setPlaceInGame('Sala')
      }
    }
    consult()
  }, [place])

  return (
    <>
      {place === 'Sala' && <Sala />}
    </>
  )
}

export default Scene1
