import React from "react";
import PropTypes from "prop-types";
import "../css/Select.css";

function Select({ options, setOptions }) {
  return (
    <>
      <form>
        <label htmlFor="options">
          <select value={options} onChange={(e) => setOptions(e.target.value)}>
            <option value="">All</option>
            <option value="Asie">Asie</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </label>
      </form>
    </>
  );
}

Select.propTypes = {
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

export default Select;
