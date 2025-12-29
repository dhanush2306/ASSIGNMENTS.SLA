import React, { useState, useEffect } from "react";

const NameLogger = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log("Name changed:", name);
  }, [name]); 

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
      <p>Your name: {name}</p>
    </div>
  );
};

export default NameLogger;