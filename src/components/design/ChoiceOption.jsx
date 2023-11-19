import '../../css/choice.css'

const ChoiceOption = ({ props }) => {
  const selected = props.selected
  const text = props.text

  const color = selected ? 'is-success' : 'is-primary'

  return <button type='button' className={'choice-option nes-btn ' + color}>{text}</button>
}

export default ChoiceOption
