import '../css/pixel-button.css'

const PixelButton = ({ text, font, handleFunction }) => {
  return (
    <div className={`pixel-button ${font} text-white`}>
      <span onClick={(e) => handleFunction(e)}>
        {text}
      </span>
    </div>
  )
}

export default PixelButton
