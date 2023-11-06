import React, { useEffect, useState } from 'react'
import { getSceneScript } from '../assets/script/script'
import { useKeyboard } from '../hooks/useKeyboard'
import { Dialogue } from './Dialogue'

const Dialogues = ({ scene, decisions, nameScript }) => {
  const { continueKey } = useKeyboard()
  const { content } = getSceneScript(scene, decisions, nameScript)
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

  if (index > content.length) {
    return null
  }

  return (
    <>
      {!finish && <Dialogue keyProp={text} author={author} text={text} />}
    </>
  )
}

export default Dialogues
