import React from "react";
import "../css/Card.css";

function Card({ country }) {
  return (
    <div>
      <p>{country.name}</p>
    </div>
  );
}

export default Card;
