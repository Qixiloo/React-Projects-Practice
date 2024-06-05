import { useEffect, useState } from "react";
import "./style.css";

function Square({ value, onPush, winner }) {
  return (
    <button
      className="square"
      onClick={onPush}
      disabled={
        winner === "NO" || winner === "X" || winner === "O" ? true : false
      }
    >
      {value}
    </button>
  );
}

export default function TicTac() {
  const [gridPane, setGridPane] = useState(Array(9).fill(""));
  const [nowGamer, setNowGamer] = useState("O");
  const [winner, setWinner] = useState("");
  const [status, setStatus] = useState("");

  const winnerSet = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  function findWinner(gridPane) {
    for (let i in winnerSet) {
      const [x, y, z] = winnerSet[i];

      if (
        gridPane[x] &&
        gridPane[y] === gridPane[x] &&
        gridPane[x] === gridPane[z]
      ) {
        setWinner(gridPane[x]);
      }
    }

    if (gridPane.every((item) => item !== "")) {
      setWinner("NO");
    }
  }
  function handleReset() {
    setGridPane(Array(9).fill(""));
    setNowGamer("O");
    setStatus("");
    setWinner("");
  }
  useEffect(() => {
    findWinner(gridPane);
    if (winner === "X") setStatus("Winner is X");
    else if (winner === "O") setStatus("Winner is O");
    else if (winner === "NO") setStatus("No winner");
    else setStatus(`Next play is ${nowGamer === "X" ? "O" : "X"}`);
  }, [gridPane, winner]);

  function handleOnPush(value) {
    let copyPane = [...gridPane];

    copyPane[value] = nowGamer === "O" ? "X" : "O";
    if (nowGamer === "O") {
      setNowGamer("X");
      setGridPane(copyPane);
    } else {
      setNowGamer("O");
      setGridPane(copyPane);
    }
  }
  console.log(winner);
  return (
    <div className="tic-tac-container">
      <div className="row">
        <Square
          winner={winner}
          value={gridPane[0]}
          onPush={() => handleOnPush(0)}
        />
        <Square
          winner={winner}
          value={gridPane[1]}
          onPush={() => handleOnPush(1)}
        />
        <Square
          winner={winner}
          value={gridPane[2]}
          onPush={() => handleOnPush(2)}
        />
      </div>

      <div className="row">
        <Square
          winner={winner}
          value={gridPane[3]}
          onPush={() => handleOnPush(3)}
        />
        <Square
          winner={winner}
          value={gridPane[4]}
          onPush={() => handleOnPush(4)}
        />
        <Square
          winner={winner}
          value={gridPane[5]}
          onPush={() => handleOnPush(5)}
        />
      </div>
      <div className="row">
        <Square
          winner={winner}
          value={gridPane[6]}
          onPush={() => handleOnPush(6)}
        />
        <Square
          winner={winner}
          value={gridPane[7]}
          onPush={() => handleOnPush(7)}
        />
        <Square
          winner={winner}
          value={gridPane[8]}
          onPush={() => handleOnPush(8)}
        />
      </div>

      <div className="display">{status}</div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
