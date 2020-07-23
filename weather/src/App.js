import React, { useState, useEffect } from 'react';
import './App.css';
import Weather from './components/Weather';
import Extra from './components/Extra';

function App() {
  let [days, setDays] = useState([]);
  let [extra, setExtra] = useState();

  const weather = async function () {
    const result = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=56&lon=38&
      exclude=minutely,hourly&appid=e655d608dda65eab3863582f02753a04`, {
      "method": "GET",
    });
    const weatherResult = await result.json();
    console.log(weatherResult)
    function getPic(n) {
      let src;
      if (weatherResult.daily[n].weather[0].main === 'Rain') {
        src = 'rainy.png';
      }
      if (weatherResult.daily[n].weather[0].main === 'Clouds') {
        src = 'clouds.png';
      }
      if (weatherResult.daily[n].weather[0].main === 'clear') {
        src = 'sunny.png';
      }
      return src
    }

    function getDay(n) {
      return {
        id: n,
        date: new Date(weatherResult.daily[n].dt * 1000).toDateString(),
        value: weatherResult.daily[n].weather[0].main,
        temp: Math.round(weatherResult.daily[n].temp.min - 273.15),
        temp2: Math.round(weatherResult.daily[n].temp.max - 273.15),
        pic: getPic(n),
        humidity: weatherResult.daily[n].humidity,
        wind: weatherResult.daily[n].weather[0].wind_speed,
        feels: weatherResult.daily[n].feels_like.day,
      }
    }

    setDays([getDay(0), getDay(1), getDay(2), getDay(3), getDay(4)]);
  }

  useEffect(() => {
    weather();
  }, [])

  function extend(ind) {
   setExtra(days[ind])
  }

  return (
    <>
      <header >
        {days.length ? <Weather days={days} onClick={extend} /> : <p>loading</p>}
      </header>
  <div className="justify" id="extra">{extra ? <Extra extend={extra}/> : <p></p>}</div>
    </>
  );
}

export default App
