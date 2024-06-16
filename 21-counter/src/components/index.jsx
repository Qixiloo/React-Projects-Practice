import { useState } from "react";
import './style.css'
export default function Counter() {
  const [number, setNumber] = useState(0);

  function handleDecrease() {
    setNumber(number - 1);
  }

  function handleIncrease() {
    setNumber(number + 1);
  }

  return (
    <div className="container">
      <button className="btn" onClick={handleDecrease}>
        -
      </button>

      <p>{number}</p>

      <button className="btn" onClick={handleIncrease}>
       +
      </button>
    </div>
  );
}
