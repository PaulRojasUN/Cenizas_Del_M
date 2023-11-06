import Dialogues from '../../components/Dialogues'
import { useGameStore } from '../../store/game'

const ShowDialogues = () => {
  const [dialogue] = useGameStore((state) => [state.dialogue])
  // para saber si dialogue que es un array , para saber sie s disinto de vacio es con:

  return (
    <>
      {(dialogue.length > 0) &&
        <Dialogues
          content={dialogue}
        />}
    </>
  )
}

export default ShowDialogues
