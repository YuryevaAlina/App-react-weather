import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherInfo() {
  return (
    <div>
      <div className="WeatherSummaryHeader">
        <h1>Lisbon</h1>
        <div className="">Sunday 2:45</div>
        <div className="">Clear</div>
      </div>
      <div className="WeatherDetail">
        <div className="Block">
          <div className="MainWeatherIcon">
            <ReactAnimatedWeather
              icon="CLEAR_DAY"
              color="black"
              size="32"
              animated={true}
            />
          </div>
        </div>
        <div className="Block">
          <div className="WeatherTemperature">15°C</div>
        </div>
        <div className="Block">
          <ul>
            <li>
              Humidity: <span id="humidity"></span>%
            </li>
            <li>
              Wind: <span id="wind"></span> m/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
