import '../css/dialogue.css'

export const Dialogue = ({ text, titulo }) => {
  return (
    <>
      <div className='dialogue-text'>
        <div className='nes-container is-rounded is-centered font-pixelcraft'>
          <p>{titulo}</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}
