import React from "react";
import "../css/Card.css";

function Card({ country }) {
  return (
    <>
      <div className="infosContainer">
        <div className="blockTitle">
          <h2>{country.name}</h2>
          <p>({country.region})</p>
        </div>
        <div className="flagContainer">
          <img className="flag" src={`${country.flag}`} alt="" />
        </div>
        <div className="dangerContainer">
          <p className="dangerInfos">Danger informations :</p>
          <p>Rate : {country.dangerScore}/5</p>
          <p>{country.dangerMessage}</p>
        </div>
        <div className="otherContainer">
          <p className="otherInfos">Other informations :</p>
          <p>Capital : {country.capital}</p>
          <p>Languages : {country.languages.map((el) => el + " ")}</p>
          <p>Currency : {country.currency[0]}</p>
          <p>Timezone : {country.timezone}</p>
        </div>
        <a href={country.googleMap}>See on Google Map</a>
      </div>
    </>
  );
}

export default Card;
