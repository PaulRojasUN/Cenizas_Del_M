import { useEffect } from 'react'
import { setPlaceInGame } from '../../../api/game'
import { useGameStore } from '../../../store/game'
import Sala from './Parts/Sala'
import Calle from './Places/Calle'

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
      {place === 'Calle' && <Calle />}
    </>
  )
}

export default Scene1
