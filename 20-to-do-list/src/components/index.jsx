import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
function ListItem({ item, OnDelete }) {
  function handleDelete(item) {
    OnDelete(item);
  }
  return (
    <div className="list-item">
      <li>{item}</li>
      <button onClick={() => handleDelete(item)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
export default function ToDoList() {
  const [lists, setLists] = useState([]);
  const [input, setInput] = useState("");
  function handleSubmit() {
    setLists((prev) => [...prev, input]);
  }

  function handleDelete(item) {
    const new_lists = lists.filter((list) => list !== item);
    console.log("item is", item);
    console.log(new_lists);
    setLists(new_lists);
  }

  return (
    <div className="container">
      <h1>To DO List</h1>
 <div className="input-field">
      <input
        className="input-place"
        type="input"
        placeholder="Please input something"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={handleSubmit}>Sumbit</button>
</div>
      <ul>
        {lists &&
          lists.length > 0 &&
          lists.map((item, _) => (
            <ListItem item={item} OnDelete={() => handleDelete(item)} />
          ))}
      </ul>
    </div>
  );
}
