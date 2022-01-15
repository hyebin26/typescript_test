import { useEffect, useState } from "react";
import "./content.css";
import { data } from "./data";
import WordList from "./wordList";

export interface WordData {
  id: number;
  word: string;
  mean: string;
}

function Content() {
  const [words, setWords] = useState<WordData[]>([]);
  useEffect(() => {
    setWords(data);
  }, []);
  return (
    <ul className="contentContainer">
      <li className="contentLi">
        <p className="checker">체크</p>
        <p className="order">순서</p>
        <p className="word">영어 단어</p>
        <p className="mean">뜻</p>
      </li>
      {words.map((data: WordData) => (
        <WordList id={data.id} word={data.word} mean={data.mean} />
      ))}
    </ul>
  );
}

export default Content;
