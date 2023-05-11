import React from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";
import Select from "./Select";
import "../css/Navbar.css";
import "https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap";

function Navbar({ options, setOptions }) {
  return (
    <nav>
      <div className="titleContainer">
        <Logo />
        <h1 className="NavTitle">Count'trip</h1>
      </div>
      <Select options={options} setOptions={setOptions} />
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
