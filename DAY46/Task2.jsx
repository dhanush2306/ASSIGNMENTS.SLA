import React, { useEffect } from "react";

const ComponentLoaded = () => {
  useEffect(() => {
    console.log("Component Loaded");
  }, []); 

  return (
    <div>
      <p>Check the console for "Component Loaded"</p>
    </div>
  );
};

export default ComponentLoaded;