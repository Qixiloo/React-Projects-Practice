import { useEffect, useState } from "react";
import "./style.css";
export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    console.log(
      document.documentElement.scrollTop,
      //这是当前在页面顶部之外垂直滚动过的像素数
      document.documentElement.scrollHeight,
      //这个属性测量的是整个文档的总高度，包括视口（即浏览器窗口可视区域）内和视口之外的部分。换句话说，它包括了整个页面的高度，即使某些部分当前不在屏幕上也算在内
      document.documentElement.clientHeight
      //这个属性表示的是视口的高度，即浏览器窗口中可见部分的高度。它不包括滚动条、边框等元素的高度，仅仅是页面内容在窗口中可视的部分。
    );

    const howMuchScrolled = document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    //这里 document.documentElement.clientHeight是目前显示的products，当使用
    // scroll其实就是从view point向下，显示的也就是未显示的point

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) {
    return <h1>Please Wait! loading</h1>;
  }
  return (
    <div>
      <div className="top-container">
        <h1>Products</h1>
        <div className="show-bar">
          <div
            className="process-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data.map((product) => (
          <p>{product.title}</p>
        ))}
      </div>
    </div>
  );
}
