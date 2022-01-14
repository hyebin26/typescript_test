import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handlePlus = (): void => {
    setCounter(counter + 1);
  };
  const handleMinus = (): void => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </>
  );
};

export default Counter;
