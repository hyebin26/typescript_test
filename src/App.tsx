import "./App.css";
import Counter from "./counter/counter";
import Greeting from "./counter/greeting";
import Words from "./words/words";

function App() {
  const handleClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return (
    <div className="App">
      <Greeting name="React" handleClick={handleClick} />
    </div>
  );
}

export default App;
