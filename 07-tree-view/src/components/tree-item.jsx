import { useState } from "react";
import TreeList from "./tree-list.jsx";

export default function TreeItem({ item }) {
  const [isDisplay, setIsDisplay] = useState(false);


  function handleIsDisplay() {
    setIsDisplay(isDisplay ? false : true);
  }

  return (
    <>
      <li>
        <div className="each-item">
          <p>{item.label}</p>
          {item.children && item.children.length > 0 ? (
            <span onClick={handleIsDisplay}>{isDisplay ? "-" : "+"}</span>
          ) : null}
        </div>
        {isDisplay && item.children && <TreeList lists={item.children} />}
      </li>
    </>
  );
}
