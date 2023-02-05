import React from "react";
import WeatherInfo from "./WeatheInfo";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form>
        <input type="search" placeholder="Type a city" />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>

      <WeatherInfo />
    </div>
  );
}
