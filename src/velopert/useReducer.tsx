import React, { useReducer } from "react";

type Action = { type: "INCREMENT" } | { type: "DECREASE" };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Unhandled Action");
  }
}

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrement = () => dispatch({ type: "INCREMENT" });
  const onDecrement = () => dispatch({ type: "DECREASE" });
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
    </div>
  );
}

export default UseReducer;
