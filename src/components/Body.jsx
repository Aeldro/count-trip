import Card from "./Card";
import "../css/Body.css";

function Body({ finalData, options }) {
  return (
    <div className="body">
      <ul className="cardsList">
        {finalData.length
          ? finalData.map((el) =>
              !options || el.region === options ? (
                <li key={el.id} className="card">
                  <Card className="card" country={el} />
                </li>
              ) : null
            )
          : null}
      </ul>
    </div>
  );
}

export default Body;
