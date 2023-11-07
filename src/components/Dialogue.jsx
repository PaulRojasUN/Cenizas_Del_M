import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import '../css/dialogue.css'

export const Dialogue = ({ keyProp, author, text }) => {
  const [key, setKey] = useState(keyProp)

  useEffect(() => {
    setKey(keyProp)
  }, [keyProp])

  return (
    <div
      key={key}
      className='nes-container is-rounded is-centered font-pixelcraft dialogue-text'
    >
      <Typewriter
        options={{
          cursor: '',
          delay: 50
        }}
        onInit={(textTypewriter) => {
          textTypewriter
            .typeString(`${author}<br>${text}`)
            .callFunction(() => {})
            .start()
        }}
      />
    </div>
  )
}
