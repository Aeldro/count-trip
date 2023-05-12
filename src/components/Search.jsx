import PropTypes from "prop-types";
import "../css/Search.css";

function Search({ text, setText }) {
  console.log(text);
  return (
    <form className="search">
      <label className="h3Filter" htmlFor="search">
        Search :
      </label>
      <input
        className="Searchinput"
        type="text"
        placeholder="Type country name ..."
        value={text}
        onChange={(e) => setText(e.target.value.toLowerCase())}
      />
    </form>
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
