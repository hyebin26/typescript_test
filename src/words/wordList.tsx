import React from "react";
import { WordData } from "./content";

function WordList(data: WordData) {
  return (
    <li className="wordList">
      <p className="checker">
        <input type="checkbox" name="checkInput" />
      </p>
      <p className="order">{data.id}</p>
      <p className="word">{data.word}</p>
      <p className="mean">{data.mean}</p>
    </li>
  );
}

export default WordList;
