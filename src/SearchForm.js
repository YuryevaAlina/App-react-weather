import React from "react";
import WeatherInfo from "./WeatheInfo";
import Forecast from "./Forecast";

export default function SearchForm() {
  return (
    <div>
      <div className="SearchForm">
        <form>
          <input type="search" placeholder="Type a city" />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <WeatherInfo />
      <Forecast />
    </div>
  );
}
