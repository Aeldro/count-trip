import Logo from "./Logo";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="elementsNavContainer">
        <div className="NavtitleContainer">
          <Logo />
          <h1 className="NavTitle">Count'Trip</h1>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
