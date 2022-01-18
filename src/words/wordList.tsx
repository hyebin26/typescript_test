import React, { useEffect, useState } from "react";
import { Words } from "./wordContainer";

function WordList(props: {
  word: Words;
  handleCheck: (id: number) => void;
  blind: boolean;
  checked: boolean;
}) {
  const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleCheck(props.word.id);
    // 삭제가 발생하면 us를 초기화해줘야됨 그거 말고는 안됨
  };
  const [us, setUs] = useState(false);
  const test = (e: React.MouseEvent<HTMLInputElement>) => {};

  return (
    <li className="wordList">
      <p className="checker">
        <input
          type="checkbox"
          name="checkInput"
          onClick={test}
          onChange={onChangeCheck}
          checked={props.checked}
        />
      </p>
      <p className="order">{props.word.id + 1}</p>
      <p className="word">{props.word.word}</p>
      <p className="mean">{props.blind ? "" : props.word.mean}</p>
    </li>
  );
}

export default WordList;
