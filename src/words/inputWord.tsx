import React, { useRef, useState } from "react";

function InputWord() {
  const meanRef = useRef(null);
  const wordRef = useRef(null);
  const [mean, setMean] = useState("");
  const [word, setWord] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(wordRef.current, meanRef.current);
  };
  const handleChangeMean = (e: React.FormEvent<HTMLInputElement>) => {
    setMean(e.currentTarget.value);
  };
  const handleChangeWord = (e: React.FormEvent<HTMLInputElement>) => {
    setWord(e.currentTarget.value);
  };
  return (
    <div className="inputwordContainer">
      <h1>단어장</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="영어 단어를 입력해주세요."
          ref={wordRef}
          onChange={handleChangeWord}
          value={word}
        />
        <input
          type="text"
          placeholder="뜻을 입력해주세요."
          ref={meanRef}
          onChange={handleChangeMean}
          value={mean}
        />
        <button>등록</button>
      </form>
      <div className="btnBox">
        <button>가리기</button>
        <button>삭제</button>
      </div>
    </div>
  );
}

export default InputWord;
