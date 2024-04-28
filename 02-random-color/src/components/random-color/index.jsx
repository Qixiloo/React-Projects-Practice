import { useEffect, useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000000");

  function ranDom(n) {
    return Math.floor(Math.random() * n);
  }

  function handleHexColor() {
    let li = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += li[ranDom(li.length)];
    }
    console.log(hex);
    setColor(hex);
  }

  function handleRgbColor() {
    let r = ranDom(255);
    let g = ranDom(255);
    let b = ranDom(255);
    let rgb = `rgb(${r},${g},${b})`;
    setColor(rgb);
    console.log(rgb);
  }

  useEffect(() => {
    if (colorType === "hex") handleHexColor();
    else handleRgbColor();
  }, [colorType]);
  return (
    <>
      <div style={{ width: "100vw", height: "100vh", background: color }}>
        <button onClick={() => setColorType("hex")}>Generate HEX Color</button>
        <button onClick={() => setColorType("rgb")}>Generate RGB Color</button>
        <button onClick={colorType === "hex" ? handleHexColor : handleRgbColor}>
          Generate Random Number
        </button>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
            fontSize: "60px",
            marginTop: "60px",
            alignItems: "center",
          }}
        >
          <h3>{colorType === "hex" ? "HEX color" : "RGB color"}</h3>
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
}
