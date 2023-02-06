import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="">
        <div class="forecast-day">Mon</div>
        <div className="MainWeatherIcon">
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="black"
            size="50"
            animated={true}
          />
        </div>
        <div class="forecast-temperature">22°</div>
      </div>
      <div class="">
        <div class="forecast-day">Tue</div>
        <div className="MainWeatherIcon">
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="black"
            size="50"
            animated={true}
          />
        </div>
        <div class="forecast-temperature">15°</div>
      </div>
      <div class="">
        <div class="forecast-day">Wen</div>
        <div className="MainWeatherIcon">
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="black"
            size="50"
            animated={true}
          />
        </div>
        <div class="forecast-temperature">16°</div>
      </div>
      <div class="">
        <div class="forecast-day">Thu</div>
        <div className="MainWeatherIcon">
          <ReactAnimatedWeather
            icon="FOG"
            color="black"
            size="50"
            animated={true}
          />
        </div>
        <div class="forecast-temperature">14°</div>
      </div>
      <div class="">
        <div class="forecast-day">Fri</div>
        <div className="MainWeatherIcon">
          <ReactAnimatedWeather
            icon="SNOW"
            color="black"
            size="50"
            animated={true}
          />
        </div>
        <div class="forecast-temperature">12°</div>
      </div>
      <div class="">
        <div class="forecast-day">Sat</div>
        <div className="MainWeatherIcon">
          <ReactAnimatedWeather
            icon="RAIN"
            color="black"
            size="50"
            animated={true}
          />
        </div>
        <div class="forecast-temperature">12°</div>
      </div>
    </div>
  );
}
