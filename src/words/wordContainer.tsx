import { useEffect, useState } from "react";
import Content from "./content";
import InputWord from "./inputWord";

export type Words = {
  id: number;
  mean: string;
  word: string;
};

export type Form = {
  mean: string;
  word: string;
};

export type CheckedInput = boolean[];

function WordContainer() {
  const [words, setWords] = useState<Words[]>([]);
  const [checkedInput, setCheckedInput] = useState<CheckedInput>(
    Array.from({ length: words.length }, (x) => false)
  );
  const [blind, setBlind] = useState(false);
  const handleSubmit = (form: Form) => {
    if (words.length >= 10) {
      alert("단어는 10개가 최대입니다~");
    }
    if (words.length <= 9) {
      const handleWord = [...words];
      const { word, mean } = form;
      const formWord = { id: handleWord.length, word, mean };
      handleWord.push(formWord);
      handleWord.forEach((item, idx) => {
        item.id = idx;
      });
      localStorage.setItem("words", JSON.stringify(handleWord));
      setWords(handleWord);
      setCheckedInput([...checkedInput, false]);
    }
  };
  const handleCheck = (id: number): void => {
    const handleCheckedInput = [...checkedInput];
    handleCheckedInput[id] = !handleCheckedInput[id];
    setCheckedInput(handleCheckedInput);
  };
  const handleDelete = () => {
    if (checkedInput.includes(true)) {
      if (window.confirm("단어를 삭제하시겠습니까?")) {
        let handleWords = [...words];
        let handleInput = [...checkedInput];
        handleWords = handleWords.filter((item, idx) => {
          if (handleInput[item.id] === false) {
            return item;
          }
        });
        handleInput = handleInput.filter((item) => !item);
        handleWords.forEach((item, idx) => (item.id = idx));
        setWords(handleWords);
        setCheckedInput(handleInput);
        localStorage.setItem("words", JSON.stringify(handleWords));
      }
    }
    if (!checkedInput.includes(true)) {
      alert("체크된 단어가 없습니다.");
    }
  };
  const handleBlind = () => {
    setBlind(!blind);
  };
  useEffect(() => {
    const data = localStorage.getItem("words");
    if (data) {
      setWords(JSON.parse(data));
      setCheckedInput(
        Array.from([...JSON.parse(data)], (x) => {
          return false;
        })
      );
    }
  }, []);
  return (
    <section>
      <InputWord
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        handleBlind={handleBlind}
      />
      <Content
        words={words}
        handleCheck={handleCheck}
        blind={blind}
        checkedInput={checkedInput}
      />
    </section>
  );
}

export default WordContainer;
