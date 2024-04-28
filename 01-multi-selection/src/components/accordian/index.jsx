import { useState } from "react";
import data from "./data";
import "./style.css";

//single selection
//multiple selection

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableSelected, setEnableSelected] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleMultiple(id) {
    let currentId = [...multiple];
    console.log(`currentId is ${currentId}`);
    const findIndexOfCurrent = currentId.indexOf(id);
    if (findIndexOfCurrent === -1) {
      currentId.push(id);
    } else {
      currentId.splice(findIndexOfCurrent, 1);
    }
    setMultiple(currentId);
  }

  function handleSelected(id) {
    setSelected(selected === id ? null : id);
  }
  console.log(selected, multiple);
  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableSelected(!enableSelected)}>
          {enableSelected
            ? "Turn off multiple selection"
            : "Turn on multiple selection"}
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    enableSelected
                      ? () => handleMultiple(dataItem.id)
                      : () => handleSelected(dataItem.id)
                  }
                >
                  <h3 className="title">
                    {dataItem.question} <span>+</span>
                  </h3>

                  {/* {selected === dataItem.id ||
                  multiple.indexOf(dataItem.id) !== -1 ? (
                    <div className="content">{dataItem.answer}</div>
                  ) : null} */}

                  {multiple
                    ? multiple.indexOf(dataItem.id) !== -1 && (
                        <div className="content">{dataItem.answer}</div>
                      )
                    : selected === dataItem.id && (
                        <div className="content">{dataItem.answer}</div>
                      )}
                </div>
              </div>
            ))
          ) : (
            <div className="content"> No data Found</div>
          )}
        </div>
      </div>
    </>
  );
}
