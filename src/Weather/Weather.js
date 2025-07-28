import React, { useState } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = '5ceb34c87ba548b5af0100402252807';

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setWeatherData(null);

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      );

      if (!response.ok) {
        throw new Error('Invalid city');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      alert('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={styles.input}
      />
      <button onClick={fetchWeather} style={styles.button}>Search</button>

      {loading && <p>Loading data…</p>}

      {weatherData && (
        <div className="weather-cards" style={styles.cards}>
          <div className="weather-card" style={styles.card}>
            <strong>Temperature:</strong> {weatherData.current.temp_c} °C
          </div>
          <div className="weather-card" style={styles.card}>
            <strong>Humidity:</strong> {weatherData.current.humidity}%
          </div>
          <div className="weather-card" style={styles.card}>
            <strong>Condition:</strong> {weatherData.current.condition.text}
          </div>
          <div className="weather-card" style={styles.card}>
            <strong>Wind Speed:</strong> {weatherData.current.wind_kph} kph
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial',
    padding: '40px',
    textAlign: 'center',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginRight: '10px',
    width: '200px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  cards: {
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    padding: '15px 20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    width: '200px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  }
};

export default WeatherApp;
