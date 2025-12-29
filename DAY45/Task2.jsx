import React, { useState } from "react";

const UppercaseInput = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value.toUpperCase());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type here"
        value={text}
        onChange={handleChange}
      />
      <p>You typed: {text}</p>
    </div>
  );
};

export default UppercaseInput;