import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [cityName, setCityName] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  // console.log(coordinates);

  // this api which provides coordinates according to our city
  let getCoordinates = async (city) => {
    let res = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
    );

    // console.log(res.data.results[0]);
    setCoordinates(res.data.results[0]);
  };

  // this api dependent on coordinates
  let fetchWeatherData = async () => {
    let res = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${coordinates?.latitude}&longitude=${coordinates?.longitude}&current_weather=true`,
    );

    console.log("res temperature---->",res);
  };

  useEffect(() => {
  if(coordinates){
    fetchWeatherData()

    
  }
  console.log("runninggg.......")
  }, [coordinates])
  


  let handleTemperature = () => {
    getCoordinates(cityName);

  };

  return (
    <div>
      <input
        onChange={(e) => setCityName(e.target.value)}
        type="text"
        placeholder="Enter city name"
      />
      <br /> <br />
      <button onClick={handleTemperature}>Temperature</button>
      {weatherData && <h1>Temperature is 35.7</h1>}
    </div>
  );
};

export default App;
