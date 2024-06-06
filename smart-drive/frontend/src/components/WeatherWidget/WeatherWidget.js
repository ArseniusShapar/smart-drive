import { React, useState, useEffect, useRef } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './WeatherWidget.css';

const apiKey = '91c5ed160f7e3973ff11837d7f2dc43c';

const insertCity = (city) => {
  return`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
}

export default function WeatherWidget() {
  const [weatherData, setWeatherData] = useState({cityNotFound: false});
  const [city, setCity] = useState('');
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const getWeatherData = async (city) => {
    setIsLoading(true);
    try {
      const response = await fetch(insertCity(city));
      if (response.status === 404) {
        setWeatherData(data => ({...data, cityNotFound: true}));
        return;
      }
      const data = await response.json();
      setWeatherData({
        city: data.name,
        temp: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed
      });
      
    } catch (error) {
      console.error(error.message);
    } finally {
      setTimeout(() => setIsLoading(false), 1000);
    }
  }

  useEffect(() => {
    getWeatherData('Kyiv');
  }, [])

  const handleInputChange = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      getWeatherData(city);
      inputRef.current.blur();
    }
  }

  return (
    <div className='weather-widget'>
      <h4 className='widget-title'>Погода</h4>
        <div className='input-block'>
          <input
              className="city-field"
              type="text"
              placeholder="Введіть назву міста (англійською)"
              name="city"
              value={city}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              ref={inputRef}
          />
          <button className='get-weather-btn' onClick={() => getWeatherData(city)}>Пошук</button>
        </div>
        {weatherData.cityNotFound && city && !isLoading && (
            <span id="city-error">Місто не знайдено</span>
          )}
        <div className='weather-data'>
          {!isLoading && (
            <table>
              <tr>
                <th>Місто</th>
                <td>{weatherData.city}</td>
              </tr>
              <tr>
                <th>Температура</th>
                <td>{weatherData.temp}°C</td>
              </tr>
              <tr>
                <th>Атмосферний тиск</th>
                <td>{weatherData.pressure} гПа</td>
              </tr>
              <tr>
                <th>Вологість</th>
                <td>{weatherData.humidity}%</td>
              </tr>
              <tr>
                <th>Швидкість вітру</th>
                <td>{weatherData.windSpeed} м/c</td>
              </tr>
            </table>
          )}
          {isLoading && (
            <Spinner animation="border"/>
          )}
        </div>
    </div>
  )
}

