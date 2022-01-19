import "./content.css";
import WordList from "./wordList";
import { CheckedInput, Words } from "./wordContainer";

type ContentProps = {
  words: Words[];
  handleCheck: (id: number) => void;
  blind: boolean;
  checkedInput: CheckedInput;
};

function Content({ words, handleCheck, blind, checkedInput }: ContentProps) {
  // string 이면 되게
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
          checked={checkedInput[word.id]}
          handleCheck={handleCheck}
          blind={blind}
          key={word.id}
        />
      ))}
      {!words.length ? (
        <li className="wordList">
          <p className="checker"></p>
          <p className="order"></p>
          <p className="word"></p>
          <p className="mean">단어가 존재하지 않습니다.</p>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
}

export default Content;
