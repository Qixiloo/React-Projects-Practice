import { useState } from "react";

export default function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleOnChange(e) {
    setSearch(e.target.value);
  }
  function handleOnClick() {
    onSearch(search);
    setSearch("");
  }

  return (
    <div className="search-container">
      <input
        onChange={handleOnChange}
        type="text"
        id="search"
        placeholder="your search"
        value={search}
      />
      <button onClick={handleOnClick}>Search</button>
    </div>
  );
}
