import {useState } from "react";
import "./style.css";

export default function ExpandCards({ imgs }) {
  const [choseCard, setChoseCard] = useState(0);

  function handleChoseCard(index) {
    setChoseCard(index);
  }

  console.log(choseCard);
  return (
    <div className="container">
      {imgs.map((img, index) => (
        <div
          onClick={() => handleChoseCard(index)}
          className={`plane ${choseCard === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        >
          <h3>{index}</h3>
        </div>
      ))}
    </div>
  );
}
