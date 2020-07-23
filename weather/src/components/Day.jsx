import React from "react";

function Day({ day, index, onClick}) {

  return (
    <li onClick={() => onClick(index)}>
      <p>{day.date}</p>
      <img className="smallPic" src={day.pic} />
      <p>{day.value}</p>
      <p>{day.temp}-{day.temp2} C°</p>
    </li>
  );
}

export default Day
