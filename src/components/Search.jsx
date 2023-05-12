import PropTypes from "prop-types";
import "../css/Search.css";

function Search({ text, setText }) {
  console.log(text);
  return (
    <div className="search">
      <label htmlFor="search"></label>
      <input
        className="Searchinput"
        type="text"
        placeholder="Type country name ..."
        value={text}
        onChange={(e) => setText(e.target.value.toLowerCase())}
      />
    </div>
  );
}

Search.propTypes = {
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

export default Search;
