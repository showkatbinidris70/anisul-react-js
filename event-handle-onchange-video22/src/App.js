import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [count, setCount] = useState(0);
  const handleOnChange = (e) => {
    setUser(e.target.value);
  };
  const handleIncrement = () => {
    if (count < 5) {
      setCount((count) => count + 1);
    }
  };
  const handleDecrement = () => {
    if (count > -5) {
      setCount((count) => count - 1);
    }
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <input type="text" onChange={handleOnChange} />
      <p>{user}</p>
    </div>
  );
}

export default App;
