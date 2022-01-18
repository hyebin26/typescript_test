import React, { useEffect, useState } from "react";
import { arrayBuffer } from "stream/consumers";
import Content from "./content";
import { data } from "./data";
import InputWord from "./inputWord";

export interface Words {
  id: number;
  mean: string;
  word: string;
}

function WordContainer() {
  const [words, setWords] = useState<Words[]>([]);
  const [checkedId, setCheckId] = useState<number[]>([]);
  const [blind, setBlind] = useState(false);
  const handleSubmit = (form: { mean: string; word: string }) => {
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
    }
  };
  const handleCheck = (id: number) => {
    const handleCheckedId = [...checkedId];
    const indexOfChecked = handleCheckedId.indexOf(id);
    if (indexOfChecked === -1) {
      handleCheckedId.push(id);
      setCheckId(handleCheckedId);
    }
    if (indexOfChecked > -1) {
      handleCheckedId.splice(indexOfChecked, 1);
      setCheckId(handleCheckedId);
    }
  };
  const handleDelete = () => {
    const handleWord = [...words];
    checkedId.forEach((item, idx) => {
      handleWord.forEach((item2, idx2) => {
        if (item === item2.id) {
          handleWord.splice(idx2, 1);
        }
      });
    });
    handleWord.forEach((item, idx) => {
      item.id = idx;
    });
    setCheckId([]);
    setWords(handleWord);
    localStorage.setItem("words", JSON.stringify(handleWord));
  };
  const handleBlind = () => {
    setBlind(!blind);
  };
  useEffect(() => {
    const data = localStorage.getItem("words");
    if (typeof data === "string") {
      setWords(JSON.parse(data));
    }
  }, []);
  return (
    <section>
      <InputWord
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        handleBlind={handleBlind}
      />
      <Content words={words} handleCheck={handleCheck} blind={blind} />
    </section>
  );
}

export default WordContainer;
