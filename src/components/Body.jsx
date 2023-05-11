import Card from "./Card";
import "../css/Body.css";

function Body({ finalData, options }) {
  return (
    <div className="bodyEl">
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
