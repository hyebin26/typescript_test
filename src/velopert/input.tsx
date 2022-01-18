import React, { useState } from "react";

type MyFormSubmit = {
  onSubmit: (hello: { name: string; age: number }) => void;
};

function Input({ onSubmit }: MyFormSubmit) {
  const [form, setForm] = useState({ name: "", age: 0 });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", age: 0 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>이름과 나이를 입력해주세요~</h2>
      <input
        type="text"
        name="name"
        onChange={onChange}
        placeholder="이름을 입력해주세요"
        value={form.name}
      />
      <input
        type="number"
        name="age"
        onChange={onChange}
        placeholder="나이을 입력해주세요"
        value={form.age}
      />
      <button>등록</button>
    </form>
  );
}

export default Input;
