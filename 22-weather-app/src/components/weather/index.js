import { useEffect, useState } from "react";
import Search from "../search";
import "../style.css";
export default function Weather() {
  const [input, setInput] = useState("beijing");
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);

  async function fetchWeather(city) {
    try {
      // setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );
      const data = await response.json();

      if (data) {
        setData(data);
        console.log(data);
        // setLoading(false);
      }
    } catch (e) {
 
      console.log(e);
    }
  }
  useEffect(() => {
    fetchWeather(input);
  }, [input]);

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
  return (
    <div className="container">
      <Search onSearch={setInput} />

      <div className="weather-container">
        {/* {loading && <p>Loading, please wait</p>} */}
        <div className="city-name">
          <h2>{`input  ${data?.sys?.country}`}</h2>
        </div>
        <div className="time-now">
          <p>{getCurrentDate()}</p>
        </div>

        <div className="temp">
          <p>{data?.main?.temp}</p>
        </div>
        <div className="description">
          <p>
            {data && data.weather && data.weather[0]
              ? data.weather[0].description
              : ""}
          </p>
        </div>

        <div className="wind-humidity">
          <p>{data?.wind?.speed}</p>
          <p>{data?.main?.humidity}</p>
        </div>
      </div>
    </div>
  );
}
