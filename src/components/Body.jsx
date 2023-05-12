import Card from "./Card";
import Search from "./Search";
import "../css/Body.css";

function Body({ finalData, options, text, setText }) {
  return (
    <div className="bodyEl">
      <Search text={text} setText={setText} />
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

export default Body;
