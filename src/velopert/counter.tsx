import React, { useState } from "react";

type Information = { name: string; description: string };

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [info, setInfo] = useState<Information | null>(null);
  const onIncrement = (): void => {
    setCount(count + 1);
  };
  const onDecrement = (): void => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default Counter;
