import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import Select from "./Select";
import "../css/Navbar.css";

function Navbar({ options, setOptions }) {
  return (
    <nav>
      <div className="NavtitleContainer">
        <Logo />
        <h1 className="NavTitle">Count'trip</h1>
      </div>
      <div className="NavFormContainer">
        <h3 className="h3Nav">Select a continent</h3>
        <Select options={options} setOptions={setOptions} />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
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

export default Navbar;
