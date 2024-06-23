import { useReducer } from "react";
import "./style.css";
import { type } from "@testing-library/user-event/dist/type";

const initalState = {
  count: 0,
  step: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { count: 0, step: 1 };
    default:
      throw new Error("unknown actions");
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initalState);

  function handleOnChangeStep(e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  }

  function handleDec() {
    dispatch({ type: "dec" });
  }

  function handleInc() {
    dispatch({ type: "inc" });
  }

  function handleReset() {
    dispatch({ type: "reset" });
  }

  function handleSetCount(e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  }
  return (
    <div className="container">
      <div className="range-container">
        <input
          type="range"
          min={1}
          max={10}
          value={state.step}
          className="step"
          onChange={(e) => handleOnChangeStep(e)}
        />
        <span>{state.step}</span>
      </div>
      <div className="input-container">
        <button className="btn" onClick={handleDec}>
          -
        </button>

        <input
          type="text"
          className="input"
          onChange={handleSetCount}
          value={state.count}
        />
        <button className="btn" onClick={handleInc}>
          +
        </button>
      </div>
      <p>Now your count is {state.count}</p>
      <button className="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
