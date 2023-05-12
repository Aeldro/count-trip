import PropTypes from "prop-types";
import "../css/Select.css";

function Select({ options, setOptions }) {
  return (
    <>
      <form className="SelectForm">
        <label htmlFor="options">
          <select
            className="SelectSelection"
            value={options}
            onChange={(e) => setOptions(e.target.value)}
          >
            <option value="">All (246)</option>
            <option value="Asia">Asia (50)</option>
            <option value="Europe">Europe (53)</option>
            <option value="Africa">Africa (59)</option>
            <option value="Americas">Americas (57)</option>
            <option value="Oceania">Oceania (27)</option>
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
