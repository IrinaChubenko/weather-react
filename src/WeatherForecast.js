import React from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  if (props.forecast.length) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {props.forecast.slice(0, 5).map(function (daylyforecast, index) {
            return (
              <div className="col" key={index}>
                <WeatherForecastDay data={daylyforecast} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return "Loading your request...";
  }
}
