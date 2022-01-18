import React from "react";
import { Words } from "./wordContainer";

function WordList(props: {
  word: Words;
  handleCheck: (id: number) => void;
  blind: boolean;
}) {
  const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleCheck(props.word.id);
  };
  return (
    <li className="wordList">
      <p className="checker">
        <input type="checkbox" name="checkInput" onChange={onChangeCheck} />
      </p>
      <p className="order">{props.word.id + 1}</p>
      <p className="word">{props.word.word}</p>
      <p className="mean">{props.blind ? "" : props.word.mean}</p>
    </li>
  );
}

export default WordList;
