import React, { useEffect, useState } from "react";
import { Words } from "./wordContainer";

type WordListProps = {
  word: Words;
  handleCheck: (id: number) => void;
  blind: boolean;
  checked: boolean;
};

function WordList({ word, handleCheck, blind, checked }: WordListProps) {
  const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleCheck(word.id);
  };
  return (
    <li className="wordList">
      <p className="checker">
        <input
          type="checkbox"
          name="checkInput"
          onChange={onChangeCheck}
          checked={checked}
        />
      </p>
      <p className="order">{word.id + 1}</p>
      <p className="word">{word.word}</p>
      <p className="mean">{blind ? "" : word.mean}</p>
    </li>
  );
}

export default WordList;
