import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [forecast, setForecast] = useState([]);

  function handleForecast(response) {
    console.log(response.data);
    setForecast(response.data.daily);
  }

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });

    let apiKeyShecodes = "6c174769929fb7d2c7731a4eebtob004";
    let apiURLForecast = `https://api.shecodes.io/weather/v1/forecast?lon=${response.data.coord.lon}&lat=${response.data.coord.lat}&key=${apiKeyShecodes}&units=metric`;

    axios.get(apiURLForecast).then(handleForecast);
  }

  function search() {
    let apiKey = "52e9e32cb26783779ed86b1d03ee38c7";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();

    event.target.search.value = "";
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              {" "}
              <input
                name="search"
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-light  w-100"
              ></input>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast forecast={forecast} />
        {/* <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row mt-3">
            <div className="col-6">
              <div className="clearfix">
                <img src={weatherData.iconUrl} alt={weatherData.description} />
                <div>
                  <span className="temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                  <span className="unit">С</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Chance of precipitation: 0%</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div> */}
      </div>
    );
  } else {
    search();
    // let apiKey = "52e9e32cb26783779ed86b1d03ee38c7";
    // let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=en`;
    // axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
