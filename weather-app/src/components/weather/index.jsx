import React, { useEffect, useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "57b415fee96383113b12561854306169";

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`
      );

      const data = await response.json();

      console.log(data, "data");
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  function handleSearch() {
    if (search === "") {
      return;
    }
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
  }

  useEffect(() => {
    fetchWeatherData("Copenhagen");
  }, []);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading.. Please Wait</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div>
            <p>
              <strong>Temperature:</strong>{" "}
              {kelvinToCelsius(weatherData?.main?.temp)}°C
            </p>
          </div>
          <div className="weather-description">
            <p>
              <strong>Description: </strong>
              {weatherData && weatherData.weather && weatherData.weather[0]
                ? weatherData.weather[0].description
                : ""}
            </p>
          </div>
          <div className="weather-info">
            <div>
              <div>
                <p>
                  <strong>Wind Speed:</strong> {weatherData?.wind?.speed}
                </p>
              </div>
              <div>
                <p>
                  <strong>Humidity:</strong> {weatherData?.main?.humidity}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
