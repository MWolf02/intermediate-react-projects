import React, { useEffect, useState } from "react";
import Search from "../search"; // Importing the Search component

export default function Weather() {
  // Defining a functional component called Weather
  const [search, setSearch] = useState(""); // Initializing state variables for search query, loading state, and weather data
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "57b415fee96383113b12561854306169"; // API key for OpenWeatherMap API

  async function fetchWeatherData(param) {
    // Function to fetch weather data asynchronously
    setLoading(true); // Set loading state to true
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`
      ); // Fetching weather data from OpenWeatherMap API

      const data = await response.json(); // Parsing response JSON

      console.log(data, "data"); // Logging the fetched data
      if (data) {
        // If data is fetched successfully
        setWeatherData(data); // Set weather data in state
        setLoading(false); // Set loading state to false
      }
    } catch (error) {
      setLoading(false); // If an error occurs, set loading state to false
      console.log(error); // Log the error
    }
  }

  function handleSearch() {
    // Function to handle search
    if (search === "") {
      // If search query is empty, return
      return;
    }
    fetchWeatherData(search); // Fetch weather data for the entered search query
  }

  function getCurrentDate() {
    // Function to get current date
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }); // Return formatted current date
  }

  function kelvinToCelsius(kelvin) {
    // Function to convert temperature from Kelvin to Celsius
    return (kelvin - 273.15).toFixed(2); // Convert and round temperature to two decimal places
  }

  useEffect(() => {
    // useEffect hook to fetch weather data for Copenhagen on component mount
    fetchWeatherData("Copenhagen");
  }, []);

  return (
    // JSX structure for rendering the Weather component
    <div>
      <Search
        search={search} // Passing search state and functions to handle search
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? ( // Conditional rendering based on loading state
        <div className="loading">Loading.. Please Wait</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>{" "}
              {/* Rendering city name and country */}
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span> {/* Rendering current date */}
          </div>
          <div>
            <p>
              <strong>Temperature:</strong>{" "}
              {kelvinToCelsius(weatherData?.main?.temp)}°C{" "}
              {/* Rendering temperature */}
            </p>
          </div>
          <div className="weather-description">
            <p>
              <strong>Description: </strong>
              {weatherData && weatherData.weather && weatherData.weather[0] // Rendering weather description
                ? weatherData.weather[0].description
                : ""}
            </p>
          </div>
          <div className="weather-info">
            <div>
              <div>
                <p>
                  <strong>Wind Speed:</strong> {weatherData?.wind?.speed}{" "}
                  {/* Rendering wind speed */}
                </p>
              </div>
              <div>
                <p>
                  <strong>Humidity:</strong> {weatherData?.main?.humidity}{" "}
                  {/* Rendering humidity */}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
