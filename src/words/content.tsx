import { useEffect, useState } from "react";
import "./content.css";
import { data } from "./data";
import WordList from "./wordList";
import { Words } from "./wordContainer";

function Content(props: {
  words: Words[];
  handleCheck: (id: number) => void;
  blind: boolean;
  checkedInput: boolean[];
}) {
  // string 이면 되게
  const words = props.words;
  return (
    <ul className="contentContainer">
      <li className="contentLi">
        <p className="checker">체크</p>
        <p className="order">순서</p>
        <p className="word">영어 단어</p>
        <p className="mean">뜻</p>
      </li>
      {words.map((word, idx) => (
        <WordList
          word={word}
          checked={props.checkedInput[word.id]}
          handleCheck={props.handleCheck}
          blind={props.blind}
          key={word.id}
        />
      ))}
    </ul>
  );
}

export default Content;
