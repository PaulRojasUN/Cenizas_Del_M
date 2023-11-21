import React, { useEffect, useState } from "react";
import { getSceneScript } from "../../../../utils/script";
import { useGameStore } from "../../../../store/game";
import Gif from "../../../../components/design/FondoGif";

const Calle = () => {
  const { setDialogue, getActionsScene1, setChoice, setDecisionScene1 } = useGameStore.getState();
  const [sound] = useState(() => new Audio("/assets/sounds/tv.wav"));
  const [hasPlayed, setHasPlayed] = useState(false);

  const goToBunkerEffect = () => {
    setDecisionScene1('followedCrowd', true)
    setDecisionScene1('continueGirlfriendSearch', false)
  }

  const goForGirlfriendEffect = () => {
    setDecisionScene1('continueGirlfriendSearch', true)
    setDecisionScene1('followedCrowd', false)
  }

  useEffect(() => {
    const showFirstDialog = () => {
      const showD2 = getActionsScene1("showD2");
      setChoice([])
      setTimeout(() => {
        const script = getSceneScript(1, [], "scriptNews");
        setDialogue(script)
        setChoice([
          { text: 'Ingresar al bunker', effect: goToBunkerEffect },
          { text: 'Ir a buscar a sofía', effect: goForGirlfriendEffect }
        ])
      }, 2000)
    };

    showFirstDialog()
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && !hasPlayed) {
        sound.currentTime = 0
        sound.volume = 0.5
        sound.play().catch(error => {
          console.log('Error al reproducir el audio:', error);
        });
        sound.loop = true
        setHasPlayed(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [hasPlayed])

  useEffect(()=>{
    return ()=>{
      sound.pause()
    }
  },[])

  return (
    <>
      <Gif url={"/assets/images/backgrounds/giftreet.gif"} />
    </>
  );
};

export default Calle;
