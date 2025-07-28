import React, { useState } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setWeather(null);

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=5ceb34c87ba548b5af0100402252807&q=${city}`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeather(data);
    } catch (error) {
      alert('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-app">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {loading && <p>Loading data…</p>}

      <div className="weather-cards">
        {weather && (
          <>
            <div className="weather-card">Temperature: {weather.current.temp_c}°C</div>
            <div className="weather-card">Humidity: {weather.current.humidity}%</div>
            <div className="weather-card">Condition: {weather.current.condition.text}</div>
            <div className="weather-card">Wind Speed: {weather.current.wind_kph} km/h</div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
