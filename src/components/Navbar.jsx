import Logo from "./Logo";
import "../css/Navbar.css";
import AboutUs from "./AboutUs"
import { useState } from "react";


function Navbar({showModal, setShowModal}) {
  
  const handleOpenModal = () => {
    setShowModal(true);
  };
  return (
    <nav>
      <div className="elementsNavContainer">
        <div className="NavtitleContainer">
          <Logo />
          <h1 className="NavTitle">Count'Trip</h1>
        </div>

        <AboutUs showModal={showModal} setShowModal={setShowModal} />
        <button className="aboutUs_button" onClick={handleOpenModal}>
          About Us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
