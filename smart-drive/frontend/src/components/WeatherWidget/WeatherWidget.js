import { React, useState, useEffect } from 'react';
import './WeatherWidget.css';

const apiKey = '91c5ed160f7e3973ff11837d7f2dc43c';

const insertCity = (city) => {
  return`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
}

export default function WeatherWidget() {
  const [weatherData, setWeatherData] = useState({});

  const getWeatherData = async () => {
    try {
      const response = await fetch(insertCity(weatherData.city));
      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`${response.status} - ${errorDetails}`);
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Ошибка:', error.message);
    }
  }


  return (
    <div className='weather-widget'>
        
    </div>
  )
}

