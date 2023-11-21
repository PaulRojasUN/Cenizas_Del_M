import React, { useEffect, useState } from 'react';
import { useKeyboard } from '../../hooks/useKeyboard';
import { useGameStore } from '../../store/game';
import { Dialogue } from './Dialogue';

const ContainerDialogue = ({ content }) => {
  const { resetDialogue, setIsChoice } = useGameStore.getState();
  const { continueKey } = useKeyboard();
  const [index, setIndex] = useState(0);
  const [author, setAuthor] = useState(content[0].author);
  const [text, setText] = useState(content[0].text);
  const [finish, setFinish] = useState(false);
  const [tempIsChoise, tempSetIsChoise] = useState(false);

  useEffect(() => {
    if (continueKey) {
      if (index < content.length && !tempIsChoise) {
        console.log(index);
        const indexAux = index + 1;
        setIndex(indexAux);
        console.log(content.length);
        console.log(indexAux);
        if (indexAux < content.length) {
          const dialog = content[indexAux];
          console.log(dialog);
          if (dialog.choice) {
            tempSetIsChoise(true);
            setIsChoice(true);
          } else {
            tempSetIsChoise(false);
            setIsChoice(false);
          }
          if (dialog) {
            console.log("setando")
            setAuthor(dialog.author);
            setText(dialog.text);
          } else {
            setFinish(true);
          }
        }else{
          setFinish(true);
        }
      }
    }
  }, [continueKey]);

  useEffect(() => {
    if (index >= content.length) {
      resetDialogue();
      setFinish(true);
    }
  }, [index]);

  return (
    <>{!finish && <Dialogue keyProp={text} author={author} text={text} />}</>
  );
};

export default ContainerDialogue;
