import '../css/dialogue.css'

const Dialogue = ({ text, titulo }) => {
  return (
    <>
      <div className='nes-container is-rounded is-centered font-pixelcraft text'>
        <p>{titulo}</p>
        <p>{text}</p>
      </div>
    </>
  )
}

export default Dialogue
