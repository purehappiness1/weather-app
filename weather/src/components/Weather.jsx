import React, { useState, useEffect } from "react";
import Day1 from './Day1';
import Day2 from './Day2';
import Day3 from './Day3';
import Day4 from './Day4';
import Day5 from './Day5';

const Weather = () => {

  const detailClick = async (event) => {
    console.log(event);
    console.log(event.target.dataset.title)
  };

  return (
    <div>
      <h4>Weather</h4>
      <ul onClick={detailClick} className="displayRow">
        {/* {days.map((days, index) => {
          return <li key={index}>{days.title}<br/>{days.weather}<br/>{days.temp}</li> // с помощью map можно отобразить значения массива 
        })}
        <br/> */}
        <li data-title="Day1"><Day1 /></li>
        <li data-title="Day2"><Day2 /></li>
        <li data-title="Day3"><Day3 /></li>
        <li data-title="Day4"><Day4 /></li>
        <li data-title="Day5"><Day5 /></li>
      </ul>
    </div>
  )
}

export default Weather
