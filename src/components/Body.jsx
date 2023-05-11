import Card from "./Card";
import "../css/Body.css";

function Body({ finalData, option }) {
  return (
    <div className="body">
      <ul className="cardsList">
        {finalData.length
          ? finalData.map((el) =>
              !option || el.region === option ? (
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
