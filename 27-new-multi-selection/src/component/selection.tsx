import { useState } from "react";
import "./style.css";

export interface Data {
  id: number;
  question: string;
  answer: string;
}

export default function Selection({ data }: { data: Data[] }) {
  const [select, setSelect] = useState<number | null>(null);
  const [multiSelect, setMultiSelect] = useState<number[]>([]);
  const [isEnable, setIsEnable] = useState<boolean>(false);

  function handleSelect(id: number) {
    setSelect(id === select ? null : id);
  }

  function handleMulti(id: number) {
    const current = [...multiSelect];
    if (multiSelect.indexOf(id) !== -1) {
      current.splice(multiSelect.indexOf(id), 1);
    } else {
      current.push(id);
    }
    setMultiSelect(current);
  }
  return (
    <div className="container">
      <button className="multi_button" onClick={() => setIsEnable(!isEnable)}>
        {!isEnable ? " Enable Multi Selection" : "Disable Multi Selection"}
      </button>
      {data.map((item: Data) => {
        return (
          <div
            className="card"
            onClick={
              isEnable
                ? () => handleMulti(item.id)
                : () => handleSelect(item.id)
            }
          >
            <div className="question_box">
              <div className="question">{item.question}</div>
              {isEnable
                ? multiSelect.indexOf(item.id) !== -1 && (
                    <div className="answer">{item.answer}</div>
                  )
                : select === item.id && (
                    <div className="answer">{item.answer}</div>
                  )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
