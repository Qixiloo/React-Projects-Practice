import { useState } from "react";
import "./style.css";

export default function ProcessSteps() {
  const [processIndex, setProcessIndex] = useState(0);

  console.log(processIndex);
  return (
    <div className="container">
      <div className="circle-container">
        <div
          className="process"
          style={{ width: `${25 * processIndex}%`, backgroundColor: "#3064e8" }}
        ></div>
        <div className={`circle ${processIndex === 0 ? "active" : ""}`}>1</div>
        <div className={`circle ${processIndex === 1 ? "active" : ""}`}>2</div>
        <div className={`circle ${processIndex === 2 ? "active" : ""}`}>3</div>
        <div className={`circle ${processIndex === 3 ? "active" : ""}`}>4</div>
        <div className={`circle ${processIndex === 4 ? "active" : ""}`}>5</div>
      </div>

      <div className="button-container">
        <button
          className="btn"
          disabled={processIndex === 0 ? true : false}
          onClick={() =>
            setProcessIndex(
              processIndex === 0 ? processIndex : processIndex - 1
            )
          }
        >
          Prev
        </button>
        <button
          className="btn"
          disabled={processIndex === 4 ? true : false}
          onClick={() =>
            setProcessIndex(
              processIndex === 4 ? processIndex : processIndex + 1
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
