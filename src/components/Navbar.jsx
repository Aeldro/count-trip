import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import Select from "./Select";
import "../css/Navbar.css";

function Navbar({ options, setOptions }) {
  return (
    <div>
      <Logo />
      <Select options={options} setOptions={setOptions} />
    </div>
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
