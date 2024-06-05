import { useEffect, useState } from "react";
import "./style.css";
import User from "./user";

export default function UserProfile() {
  const [userName, setUserName] = useState("Qixiloo");
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, []);


  async function fetchUserProfile() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      if (data) {
        setLoading(false);
        console.log(data);
        setUserInfo(data);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  }
  function handleSearch() {
    fetchUserProfile();
  }

  function handleChange(e) {
    setUserName(e.target.value);
    console.log("usename", userName);
  }



  if (loading) {
    return <h1>Loading,please wait!</h1>;
  }
  return (
    <div className="container">
      <div className="search-container">
        <input
          name="search-user-input"
          type="text"
          placeholder="please input a name"
          onChange={handleChange}
          value={userName}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {userInfo && <User userInfo={userInfo} />}
    </div>
  );
}
