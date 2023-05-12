function Search({ text, setText }) {
    
   console.log(text);
    return (
        <div className="search">
            <label htmlFor="search">Search :</label>
            <input type="text" placeholder="Type country name ..." value={text} onChange={(e) => setText(e.target.value.toLowerCase())} />
        </div>
    )
}

export default Search;