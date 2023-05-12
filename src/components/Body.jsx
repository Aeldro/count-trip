import PropTypes from "prop-types";
import Card from "./Card";
import Search from "./Search";
import "../css/Body.css";
import Select from "./Select";

function Body({ finalData, options, setOptions, text, setText }) {
  return (
    <div className={`bodyEl`}>
      <form className="FormContainer">
        <div className="SelectContainer">
          <Select options={options} setOptions={setOptions} />
        </div>
        <div className="SearchContainer">
          <Search className="SearchBar" text={text} setText={setText} />
        </div>
      </form>
      <ul className="cardsList">
        {finalData.length
          ? finalData.map((el) =>
              (!options && el.name.toLowerCase().includes(text)) ||
              (el.region === options &&
                el.name.toLowerCase().includes(text)) ? (
                <li className="card" key={el.id}>
                  <Card country={el} />
                </li>
              ) : null
            )
          : null}
      </ul>
    </div>
  );
}

Body.propTypes = {
  finalData: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  setOptions: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  text: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  setText: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};

export default Body;
