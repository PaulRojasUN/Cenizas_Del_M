import React, { useEffect, useState } from 'react'
import { useKeyboard } from '../hooks/useKeyboard'
import { useGameStore } from '../store/game'
import { Dialogue } from './Dialogue'

const Dialogues = ({ content }) => {
  const { resetDialogue } = useGameStore.getState()
  const { continueKey } = useKeyboard()
  const [index, setIndex] = useState(0)
  const [author, setAuthor] = useState(content[0].author)
  const [text, setText] = useState(content[0].text)
  const [finish, setFinish] = useState(false)

  useEffect(() => {
    if (continueKey) {
      if (index <= content.length) {
        setIndex(index + 1)
        const dialog = content[index]
        if (dialog) {
          setAuthor(dialog.author)
          setText(dialog.text)
        } else {
          setFinish(true)
        }
      }
    }
  }, [continueKey])

  useEffect(() => {
    if (index > content.length) {
      resetDialogue()
      setFinish(true)
    }
  }, [index])

  return (
    <>
      {!finish && <Dialogue keyProp={text} author={author} text={text} />}
    </>
  )
}

export default Dialogues
