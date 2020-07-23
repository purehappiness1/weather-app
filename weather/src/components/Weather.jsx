import React from "react";
import Day from './Day';

function Weather(props) {

  return (
    <>
      <h4 className="justify" >Weather</h4>
      <ul className="displayRow">
        {props.days.map((day, index) => {
          return <Day onClick={props.onClick}
          day={day}
          index={index}
          key={day.id}
         />
        })}
      </ul>
      </>
  )
}

export default Weather
