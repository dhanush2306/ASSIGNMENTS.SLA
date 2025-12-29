import { useState } from "react";

function EvenOdd() {
  const [number, setNumber] = useState("");

  return (
    <div>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      {number !== "" && (
        <p>{number % 2 === 0 ? "Even" : "Odd"}</p>
      )}
    </div>
  );
}

export default EvenOdd;