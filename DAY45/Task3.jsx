import React, { useState } from "react";

const ControlledCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}/>
        Check me
      </label>
      <p>{isChecked ? "Checked" : "Not Checked"}</p>
    </div>
  );
};

export default ControlledCheckbox;