import '../css/pixel-button.css'

const PixelButton = ({ text, font, handleFunction }) => {
  return (
    <div className={`nes-pointer pixel-button ${font} text-white`}>
      <span onClick={(e) => handleFunction(e)}>
        {text}
      </span>
    </div>
  )
}

export default PixelButton
