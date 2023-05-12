import PropTypes from "prop-types";
import Card from "./Card";
import "../css/Body.css";
import Select from "./Select";

function Body({ finalData, options, setOptions }) {
  return (
    <div className="bodyEl">
      <div className="FilterContainer">
        <div className="NavFormContainer">
          <h3 className="h3Nav">Select a continent</h3>
          <Select options={options} setOptions={setOptions} />
        </div>
      </div>
      <ul className="cardsList">
        {finalData.length
          ? finalData.map((el) =>
              !options || el.region === options ? (
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
};

export default Body;
