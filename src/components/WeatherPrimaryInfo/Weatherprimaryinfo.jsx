/* eslint-disable react/prop-types */

import "./WeatherPrimaryInfo.css";

function Weatherprimaryinfo({ weather }) {
  console.log(weather);

  return (
    <div className="weather-container">
      <h2>Dados de {weather.name} atualmente</h2>
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        />
        <p className="temperature">{Math.round(weather.main.temp)}°C</p>
      </div>
      <p className="description">{weather.weather[0].description}</p>

      <div className="moreinfo-weather">
        <p>Sensação térmica:{Math.round(weather.main.feels_like)}</p>
        <p>Umidade:{weather.main.humidity}%</p>
        <p>Vento:{weather.wind.speed}km/h</p>
        <p>Pressão:{weather.main.pressure}hPa</p>
      </div>
    </div>
  );
}

export default Weatherprimaryinfo;
