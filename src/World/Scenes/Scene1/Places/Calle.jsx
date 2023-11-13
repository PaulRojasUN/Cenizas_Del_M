import { Html } from '@react-three/drei'
import React, { useEffect } from 'react'
import { getSceneScript } from '../../../../utils/script'
import { useGameStore } from '../../../../store/game'
import ContainerTextIntroduction from '../../../../components/design/ContainerTextIntroduction'
import Gif from './Gif'

const Calle = () => {
  //const scriptNews = getSceneScript(1, [], 'scriptNews')
  const { setDialogue, setActionsScene1, getActionsScene1 } =
    useGameStore.getState()

  useEffect(() => {
    const showFirstDialog = () => {
      const showD2 = getActionsScene1('showD2')
      if (!showD2) {
        setTimeout(() => {
          const script = getSceneScript(1, [], 'scriptNews')
          setDialogue(script)
          setActionsScene1('showD1', true)
        }, 4000)
      }
    }

    showFirstDialog()
  }, [])

  return (
    <>
      {/* <Html center style={{ zIndex: 100 }} position={[-2.5, 0, 0]}>
        <ContainerTextIntroduction content={scriptNews} />
      </Html> */}
      <Gif url='/assets/images/backgrounds/chaos-streets.gif' />
    </>
  )
}

export default Calle
