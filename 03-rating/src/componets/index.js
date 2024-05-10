import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
export default function StarRating({ numberOfstars = 5 }) {
  const [select, setSelect] = useState(0);
  const [hover, setHover] = useState(0);
  function handleClick(index) {
    console.log(index);
    setSelect(index);
  }

  function handleMouseEnter(index) {
    console.log(index);
    setHover(index);
  }

  function handleMouseLeave() {
    setSelect(select);
  }

  return (
    <div className="star-rating">
      {[...Array(numberOfstars)].map((_, index) => {
        index = index + 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || select) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
          />
        );
      })}
      <h3>You select {select} stars</h3>
    </div>
  );
}
