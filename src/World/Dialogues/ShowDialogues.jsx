import ContainerDialogue from '../../components/design/ContainerDialogue'
import { useGameStore } from '../../store/game'
import ChoicesContainer from '../../components/design/ChoicesContainer'

const ShowDialogues = () => {
  const [dialogue] = useGameStore((state) => [state.dialogue])
  const [choice] = useGameStore((state) => [state.choice])

  return (
    <>
      {(dialogue.length > 0) ?
        <ContainerDialogue
          content={dialogue}
        /> : (choice.length > 0) ? <ChoicesContainer props={{options:choice}} /> : <></>}
    </>
  )
}

export default ShowDialogues
