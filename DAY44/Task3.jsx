function CityList() {
  const cities = ["Chennai", "Bangalore", "Hyderabad", "Mumbai", "Delhi"];

  return (
    <div>
      {cities.length === 0 ? (
        <p>No Data Available</p>
      ) : (
        <ul>
          {cities.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CityList;