import React, { useState, useEffect } from "react";

const Day5 = () => {
  const [date, setDate] = useState("");
  const [value, setValue] = useState(""); 
  const [temp, setTemp] = useState("");
  const [temp2, setTemp2] = useState("");
  const [pic, setPic] = useState("");
  const weather = async function() { 
    const result = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=56&lon=38&
    exclude=minutely,hourly&appid=e655d608dda65eab3863582f02753a04`, {
    "method": "GET",
  });
  const x = await result.json();
  console.log(x)
  const time = x.daily[3].dt;
  const milisegundos = new Date(time * 1000);
  const date = new Date(milisegundos).toDateString("en-GB");
  const t = Math.round(x.daily[4].temp.min - 273.15) 
  const t2 = Math.round(x.daily[4].temp.max - 273.15) 
  setValue(x.daily[4].weather[0].main); 
  if (x.daily[4].weather[0].main === 'Rain') {
    setPic('rainy.png')
  }
  if (x.daily[4].weather[0].main === 'Clouds') {
    setPic('clouds.png')
  }
  if (x.daily[4].weather[0].main === 'clear') {
    setPic('sunny.png')
  }
  setDate(date.toString());
  setTemp(t);
  setTemp2(t2);
}

useEffect(() => {
weather();
}, []); 

return (
<div>
  <p>{date}</p>
  <img className="smallPic" src={pic} /><p>{value}</p>
  <p>{temp}-{temp2} C°</p>
</div>
);
}

export default Day5
