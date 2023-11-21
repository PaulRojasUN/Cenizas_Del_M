import ChoiceOption from './ChoiceOption'
import { useKeyboard } from '../../hooks/useKeyboard'
import { useGameStore } from '../../store/game'
import '../../css/choice.css'
import { useState, useEffect } from 'react'

const ChoicesContainer = ({ props }) => {
  const options = props.options

  const [selectedOption, setSelectedOption] = useState(options.length - 1)

  const { up, down, continueKey } = useKeyboard()

  const { setChoice , setIsChoice, setDialogue} = useGameStore.getState()

  useEffect(() => {
    if (up) {
      if (selectedOption < options.length - 1) {
        setSelectedOption(selectedOption + 1)
        // console.log(selectedOption)
        // console.log('ARRIBA')
      }
    }
  }, [up])

  useEffect(() => {
    if (down) {
      if (selectedOption > 0) {
        // console.log('ABAJO')
        // console.log(selectedOption)
        setSelectedOption(selectedOption - 1)
      }
    }
  }, [down])

  useEffect(() => {
    if (continueKey) {
      const effect = options[selectedOption].effect
      console.log(options[selectedOption])
      effect()
      setChoice([])
      setDialogue([])
      setIsChoice(false)
    }
  }, [continueKey])

  useEffect(() => {
    console.log(selectedOption)
  },[selectedOption])

  return (
    <div className='choice-container flex gap-5'>
      {options.map((e, i) => <ChoiceOption key={i} props={{ selected: i === selectedOption, text: e.text, index:i}} setSelectedOption={setSelectedOption} />)}
    </div>
  )
}

export default ChoicesContainer
