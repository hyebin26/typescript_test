import { useReducer } from "react";
import "./App.css";
import Counter from "./velopert/counter";
import Greeting from "./velopert/greeting";
import Input from "./velopert/input";
import UseReducer from "./velopert/useReducer";
import Words from "./words/wordContainer";
import ReducerSample from "./velopert/reducerSample";

function App() {
  // const handleClick = (name: string) => {
  //   console.log(`${name} says hello`);
  // };
  // const onSubmit = (form: { name: string; age: number }) => {
  //   console.log(form);
  // };

  return (
    <div className="App">
      {/* <Greeting name="React" handleClick={handleClick} />
       */}
      {/* <Input onSubmit={onSubmit} />
      <UseReducer />
      <ReducerSample /> */}
      <Words />
    </div>
  );
}

export default App;
