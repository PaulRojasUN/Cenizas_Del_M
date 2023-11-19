import ChoiceOption from "./ChoiceOption"


const ChoicesContainer = ({ options }) => {
    {options.foreach(e => <ChoiceOption text={e.text}/>)}
}

export default ChoicesContainer