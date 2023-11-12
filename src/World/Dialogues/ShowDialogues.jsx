import ContainerDialogue from '../../components/design/ContainerDialogue'
import { useGameStore } from '../../store/game'

const ShowDialogues = () => {
  const [dialogue] = useGameStore((state) => [state.dialogue])

  return (
    <>
      {(dialogue.length > 0) &&
        <ContainerDialogue
          content={dialogue}
        />}
    </>
  )
}

export default ShowDialogues
