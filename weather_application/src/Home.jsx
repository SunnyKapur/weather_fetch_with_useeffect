import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [cityName, setCityName] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  // This api which provides coordinates according to our city..
  let getCoorditnates = async (city) => {
    let res = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`,
    );
    console.log(res.data.results[0]);
    setCoordinates(res.data.results[0]); //latitude coordinate longitude coordinate
  };

  // This api is dependent on coordinates
  let fetchWeatherData = async () => {
    try {
      let res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinates?.latitude}&longitude=${coordinates?.longitude}&current_weather=true`,
      );

      console.log("res temp......>", res.data);
      setWeatherData(res.data.current_weather.temperature);
    } catch (err) {
      console.log("error while fatching temperature", err);
    }finally{
      setIsLoading(false)
    }
  };

  useEffect(() => {
    if (coordinates) {
      fetchWeatherData();
    }
    console.log("runninnggg......");
  }, [coordinates]);

  let handleTemperature = () => {
    setWeatherData(null)
    getCoorditnates(cityName);
    setIsLoading(true);
  };

  return (
    <div>
      <h1>Home</h1>

      <input
        onChange={(e) => setCityName(e.target.value)}
        type="text"
        placeholder="Enter city name"
      />
      <button onClick={handleTemperature}>Temperature</button>
      {isLoading && <h1>Loading Temperature...</h1>}

      {weatherData && <h1>Temperature is {weatherData}</h1>}
    </div>
  );
};

export default Home;
