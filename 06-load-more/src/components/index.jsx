import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMore({ limit }) {
  const [loading, setLoading] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  const fetchData = async () => {
    try {
      const query = `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`;
      console.log(query);
      const response = await fetch(query);
      const data = await response.json();
      setLoading(true);
      console.log(data);
      if (data && data.products && data.products.length > 0) {
        setPictures((prev) => [...prev, ...data.products]);

        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (count * 20 === limit) {
      setDisable(true);
    } else {
      fetchData();
    }
  }, [count]);

  return (
    <div className="maincontainer">
      {!loading ? (
        <div className="imagegallary">
          {pictures &&
            pictures.map((picture) => (
              <div className="pic" key={picture.id}>
                <img
                  src={picture.thumbnail}
                  alt={picture.title}
                  className="img"
                />
                <p>{picture.title}</p>
              </div>
            ))}
        </div>
      ) : (
        <h3>Please Wait</h3>
      )}
      <div className="button-container">
        <button disabled={disable} onClick={() => setCount(count + 1)}>
          Load More
        </button>
{disable && <p>End of the list {limit}</p>}
      </div>
    </div>
  );
}
