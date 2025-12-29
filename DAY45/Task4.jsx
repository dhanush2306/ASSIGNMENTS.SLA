import React, { useState } from "react";

const CountryDropdown = () => {
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <div>
      <select value={country} onChange={handleChange}>
        <option value="">Select a country</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="India">India</option>
        <option value="Australia">Australia</option>
      </select>
      <p>Selected Country: {country || "None"}</p>
    </div>
  );
};

export default CountryDropdown;