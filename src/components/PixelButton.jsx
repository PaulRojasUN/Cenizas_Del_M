import '../css/pixel-button.css'

const PixelButton = ({ text, font, handleFunction }) => {
  return (
    <div className={`pixel-button ${font} text-white`}>
      <button onClick={(e) => handleFunction(e)}>
        {text}
      </button>
    </div>
  )
}

export default PixelButton
