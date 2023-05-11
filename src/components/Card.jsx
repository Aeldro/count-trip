import React from "react";
import "../css/Card.css";

function Card({ country }) {
  return (
    <div>
      <div className="flagContainer">
        <img src={`${country.flag}`} alt="" />
      </div>
      <p>{country.name}</p>
    </div>
  );
}

export default Card;
