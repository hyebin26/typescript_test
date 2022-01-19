import React, { useEffect, useRef, useState } from "react";
import { Form } from "./wordContainer";

type inputProps = {
  handleSubmit: (form: Form) => void;
  handleDelete: () => void;
  handleBlind: () => void;
};

function InputWord({ handleSubmit, handleDelete, handleBlind }: inputProps) {
  const [form, setForm] = useState({
    mean: "",
    word: "",
  });
  const onHandleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const blank_pattern = /^\s+|\s+$/g;
    if (
      form.mean.replace(blank_pattern, "") === "" ||
      form.word.replace(blank_pattern, "") === ""
    ) {
      alert("공백만 입력되었습니다.");
      return;
    }
    handleSubmit(form);
    setForm({
      mean: "",
      word: "",
    });
  };

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div className="inputwordContainer">
      <h1>단어장</h1>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="영어 단어를 입력해주세요."
          name="word"
          onChange={onChangeInput}
          value={form.word}
        />
        <input
          type="text"
          placeholder="뜻을 입력해주세요."
          name="mean"
          onChange={onChangeInput}
          value={form.mean}
        />
        <button type="submit">등록</button>
      </form>
      <div className="btnBox">
        <button onClick={handleBlind}>뜻 가림</button>
        <button onClick={handleDelete}>삭제</button>
      </div>
    </div>
  );
}

export default InputWord;
