import { useState } from "react";
import data from "./data";
import "./style.css";

export default function BirthdayReminder() {
  const [person, setPerson] = useState(data);
  return (
    <div className="container">
      <h2>{`${person.length} birthdays today`}</h2>
      {person.map((item, index) => {
        return (
          <div className="person">
            <img className="pic" src={item.image} alt={`${item.name}'s pic`} />

            <div className="info">
              <h4>{item.name}</h4>
              <p>{item.age}</p>
            </div>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPerson([])}>
        Set To Null
      </button>
    </div>
  );
}
