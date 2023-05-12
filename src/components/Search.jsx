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

export default Search;
