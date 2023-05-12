import PropTypes from "prop-types";
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
          {country.dangerScore ? (
            <>
              <p
                className={
                  country.dangerScore === 5
                    ? "fontRed"
                    : country.dangerScore >= 3
                    ? "fontOrange"
                    : "fontGreen"
                }
              >
                Rate : {country.dangerScore}/5
              </p>
              <p>{country.dangerMessage}</p>

              <a className="anchor" href={country.dangerUrl} target="_blank">
                More informations
              </a>
            </>
          ) : (
            <p>None</p>
          )}
        </div>
        <hr />
        <div className="otherContainer">
          <p className="otherInfos">Other informations :</p>
          <p>Capital : {country.capital}</p>
          <p>Languages : {country.languages.map((el) => el + " ")}</p>
          <p>
            Currency : {country.currencyName}{" "}
            {country.currencySymbol ? `(${country.currencySymbol})` : null}
          </p>
          <p>Timezone : {country.timezone}</p>
        </div>
        <a className="anchor" href={country.googleMap} target="_blank">
          See on Google Map
        </a>
      </div>
    </>
  );
}

Card.propTypes = {
  country: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};

export default Card;
