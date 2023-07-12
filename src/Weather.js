import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  if (!weatherData.ready) {
    let apiKey = "52e9e32cb26783779ed86b1d03ee38c7";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric&lang=en`;
    axios.get(apiURL).then((response) => {
      console.log(response.data);
      setWeatherData({
        ready: true,
        city: response.data.name,
        temperature: response.data.main.temp,
        description: response.data.weather[0].description,
        time: "Tuesday 5:20",
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
      });
    });
  }

  return (
    weatherData.ready && (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              {" "}
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              ></input>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.time}</li>
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
        </div>
      </div>
    )
  );
}
