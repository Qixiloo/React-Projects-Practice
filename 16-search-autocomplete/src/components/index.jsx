import { useEffect, useState } from "react";
import "./style.css";
import Suggestion from "./suggestion";
export default function SearchAutoComplete({ url }) {
  const [allUserFirstName, setAllUserFirstName] = useState([]);
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState([]);
  const [isShowDropDown, setIsShowDropDown] = useState(false);

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data) {
        setAllUserFirstName(data.users.map((dataItem) => dataItem.firstName));
      }
    } catch (e) {
      console.log(e);
    }
  }

  // useEffect(() => fetchData(url), [url]);
  // 这个是错误的，为什么？
  //使用了大括号 {}，这意味着 fetchData(url) 的执行被视为函数体中的一个语句，不涉及返回值。
  //第二种直接返回 fetchData(url) 的结果。因为 fetchData 是一个异步函数，所以它返回的是一个 Promise。

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleOnChange(event) {
    setSearch(event.target.value.toLowerCase());
  }

  function searchFor(search) {
    if (search !== "") {
      let auto = allUserFirstName.filter((name) =>
        name.toLowerCase().startsWith(search)
      );
      console.log(auto.length);
      if (auto.length) {
        setDropDown(auto);
        setIsShowDropDown(true);
      }
    } else {
      setDropDown([]);
      setIsShowDropDown(false);
    }
  }
  useEffect(() => {
    searchFor(search);
  }, [search]);
console.log(allUserFirstName)

function handleClick(event){
 setIsShowDropDown(false)
setDropDown([])
setSearch(event.target.innerText)

}

  return (
    <div className="container">
      <input
        placeholder="Input your Search"
        value={search}
        type="text"
        onChange={(e) => handleOnChange(e)}
      />

      {isShowDropDown && <Suggestion filterUsers={dropDown} handleClick={handleClick}/>}
    </div>
  );
}
