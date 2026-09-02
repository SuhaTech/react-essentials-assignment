import React, { useState, useEffect } from 'react';
import { Search, Sun, Cloud, CloudRain, Wind, Droplets, Thermometer, RefreshCw, AlertCircle } from 'lucide-react';
import './App.css';

const API_KEY = "a644552bb0a81ed01ad5088f5dbad687"; // Apni API key yahan dalein

function App() {
  const [city, setCity] = useState("Delhi");
  const [searchQuery, setSearchQuery] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  // 1. useEffect for Data Fetching (runs on mount and when 'city' changes)
  useEffect(() => {
    if (!city) return;

    let isMounted = true; // Cleanup flag to prevent state updates on unmounted component
    const fetchWeather = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error("City not found or unable to fetch data.");
        }

        const data = await response.json();
        
        if (isMounted) {
          setWeather(data);
          setLastUpdated(new Date().toLocaleTimeString());
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setWeather(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchWeather();

    // 3. Advanced Pattern: Auto-refresh every 60 seconds + Cleanup function
    const intervalId = setInterval(() => {
      fetchWeather();
    }, 60000);

    // Cleanup function to clear interval and prevent memory leaks
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [city]);

  // Handle Search Form Submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      setCity(searchQuery);
    }
  };

  // Helper function to render weather icon based on condition
  const getWeatherIcon = (main) => {
    switch (main) {
      case 'Clear': return <Sun className="weather-main-icon text-yellow-400" size={64} />;
      case 'Rain': return <CloudRain className="weather-main-icon text-blue-400" size={64} />;
      case 'Clouds': return <Cloud className="weather-main-icon text-gray-400" size={64} />;
      default: return <Sun className="weather-main-icon text-yellow-400" size={64} />;
    }
  };

  return (
    <div className="app-container">
      <div className="dashboard-card">
        <header className="dashboard-header">
          <h1>Weather Dashboard</h1>
          <p>Real-time weather updates using React hooks</p>
        </header>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="search-form">
          <div className="input-group">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Enter city name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button type="submit" className="search-btn">Get Weather</button>
        </form>

        {/* Loading State */}
        {loading && <div className="status-message">Loading weather data...</div>}

        {/* Error State */}
        {error && (
          <div className="error-message">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}

        {/* Weather Information Section */}
        {weather && !loading && (
          <div className="weather-info animate-fade">
            <div className="weather-header-info">
              <h2>{weather.name}, {weather.sys.country}</h2>
              <span className="last-updated">
                <RefreshCw size={12} /> Updated: {lastUpdated}
              </span>
            </div>

            <div className="weather-primary">
              {getWeatherIcon(weather.weather[0].main)}
              <div className="temperature-display">
                <span className="temp-value">{Math.round(weather.main.temp)}°C</span>
                <span className="temp-desc">{weather.weather[0].description}</span>
              </div>
            </div>

            <div className="weather-details-grid">
              <div className="detail-card">
                <Thermometer size={22} />
                <div>
                  <p className="label">Feels Like</p>
                  <p className="value">{Math.round(weather.main.feels_like)}°C</p>
                </div>
              </div>

              <div className="detail-card">
                <Droplets size={22} />
                <div>
                  <p className="label">Humidity</p>
                  <p className="value">{weather.main.humidity}%</p>
                </div>
              </div>

              <div className="detail-card">
                <Wind size={22} />
                <div>
                  <p className="label">Wind Speed</p>
                  <p className="value">{weather.wind.speed} m/s</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;