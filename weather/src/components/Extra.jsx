import React, { useContext } from "react";

function Extra({ extend }) {

  return (
    <div>
      <p>{extend.date}</p>
      <img className="smallPic" src={extend.pic} />
      <p>{extend.value}</p>
      <p>{extend.temp}-{extend.temp2} C°</p>
      <p>{extend.humidity}</p>
      <p>{extend.wind}</p>
      <p>{extend.feels}</p>
  </div>
  );
}

export default Extra
