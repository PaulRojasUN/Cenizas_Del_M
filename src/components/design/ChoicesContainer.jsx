import ChoiceOption from './ChoiceOption'
import { useKeyboard } from '../../hooks/useKeyboard'
import '../../css/choice.css'
import { useState, useEffect } from 'react'

const ChoicesContainer = ({ props }) => {
  const [selectedOption, setSelectedOption] = useState(0)

  const options = props.options

  const { up, down } = useKeyboard()

  useEffect(() => {
    if (up) {
      if (selectedOption < options.length - 1) {
        setSelectedOption(selectedOption + 1)
        console.log(selectedOption)
        console.log('ARRIBA')
      }
    }
  }, [up])

  useEffect(() => {
    if (down) {
      if (selectedOption > 0) {
        console.log('ABAJO')
        console.log(selectedOption)
        setSelectedOption(selectedOption - 1)
      }
    }
  }, [down])

  return (
    <div className='choice-container'>
      {options.map((e, i) => <ChoiceOption key={i} props={{ selected: i === selectedOption, text: e.text }} />)}
    </div>
  )
}

export default ChoicesContainer
