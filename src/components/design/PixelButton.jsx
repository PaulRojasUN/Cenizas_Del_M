import '../../css/pixel-button.css'

const PixelButton = ({ text, font, handleFunction }) => {
  const onHandleButton = (e) => {
    if (handleFunction) {
      handleFunction(e)
    }
  }

  return (
    <div className={`pixel-button ${font} text-white nes-pointer`}>
      <span onClick={(e) => onHandleButton(e)}>
        {text}
      </span>
    </div>
  )
}

export default PixelButton
