import { useState } from "react";
import faqs from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
export default function FAQs() {
  const [whichOpen, setWhichOpen] = useState(new Array(faqs.length).fill(false));

  function handleSetOpen(index) {
    let copy = [...whichOpen];
    copy[index] = !copy[index];
    setWhichOpen(copy);
  }

console.log(whichOpen);
  return (
    <div className="container">
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <h3 className="faq-question">{faq.question}</h3>
          <button className="fas" onClick={() => handleSetOpen(index)}>
            <FontAwesomeIcon
              icon={whichOpen[index] ? faTimes : faAngleDoubleDown}
            />
          </button>
          <p className="faq-answer">
            {whichOpen[index]? faq.answer : ""}
          </p>
        </div>
      ))}
    </div>
  );
}
