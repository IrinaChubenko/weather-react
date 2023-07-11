import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
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
      <h1>Warsaw</h1>
      <ul>
        <li>Tuesday,15:01</li>
        <li>partly_cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="partly_cloudy"
            />
            <div>
              <span className="temperature">6</span>
              <span className="unit">С</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Chance of precipitation: 0%</li>
            <li>Humidity: 54%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
