import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  handleClick: (name: string) => void;
};

function Greeting({ name, mark, handleClick }: GreetingsProps) {
  const hello = () => {
    handleClick(name);
  };
  return (
    <div>
      Hello, {name} {mark}
      <div>
        <button onClick={hello}>Click me!</button>
      </div>
    </div>
  );
}

Greeting.defaultProps = {
  mark: "!!!",
};

export default Greeting;
