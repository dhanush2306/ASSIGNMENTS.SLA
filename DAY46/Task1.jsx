import React, { useEffect, useState } from "react";

const RenderLogger = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Rendered!");
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default RenderLogger;