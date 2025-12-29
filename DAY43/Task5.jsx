import { useState } from "react";

function ColorButton() {
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "150px",
        padding: "20px"
      }}
    >
      <button onClick={() => setBgColor(bgColor === "white" ? "lightblue" : "white")}>
        Change Background
      </button>
    </div>
  );
}

export default ColorButton;