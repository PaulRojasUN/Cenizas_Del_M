import React, { useEffect, useState } from "react";
import { getSceneScript } from "../../../../utils/script";
import { useGameStore } from "../../../../store/game";
import Gif from "../FondoGif";

const Calle = () => {
  const { setDialogue, getActionsScene1 } =
    useGameStore.getState()

  useEffect(() => {
    const showFirstDialog = () => {
      const showD2 = getActionsScene1("showD2");
      if (!showD2) {
        setTimeout(() => {
          const script = getSceneScript(1, [], "scriptNews")
          setDialogue(script)
        }, 4000)
      }
    };

    showFirstDialog();
  }, []);

  const [sound] = useState(() => new Audio("public/assets/sounds/tv.wav"))

  useEffect(() => {
    console.log('change')
    sound.currentTime = 0
    sound.volume = 0.5
    sound.play()
    sound.loop = true

    return () => {
      sound.pause()
    }
  }, [])

  return (
    <>
      <Gif url="/assets/images/backgrounds/giftreet.gif" />
    </>
  );
};

export default Calle;
