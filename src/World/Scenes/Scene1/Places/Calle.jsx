import React, { useEffect, useState } from "react";
import { getSceneScript } from "../../../../utils/script";
import { useGameStore } from "../../../../store/game";
import Gif from "../../../../components/design/FondoGif";

const Calle = () => {
  const { setDialogue, getActionsScene1, setChoice } = useGameStore.getState();
  const [sound] = useState(() => new Audio("/assets/sounds/tv.wav"));
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const showFirstDialog = () => {
      const showD2 = getActionsScene1("showD2");
      setTimeout(() => {
        const script = getSceneScript(1, [], "scriptNews");
        setDialogue(script)
      }, 2000)
      setChoice([{text:'hola a todos'}, {text:'hola a todos'}, {text:'hola a todos'}])
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
