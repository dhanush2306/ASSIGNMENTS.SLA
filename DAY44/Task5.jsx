import React from "react";

const CityList = () => {
  const cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];


  return (
    <div>
      {cities.length > 0 ? (
        <ul>
          {cities.map((city, index) => (
            <li key={index}>{city}</li>
          ))}
        </ul>
      ) : (
        <p>No Data Available</p>
      )}
    </div>
  );
};

export default CityList;