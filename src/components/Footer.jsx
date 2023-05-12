import "../css/Footer.css";
import AboutUs from "./AboutUs"
import { useState } from 'react';


function Footer() {

  const [showModal, setShowModal] = useState(false);
  
  const handleOpenModal = () => {
    setShowModal(true);
  };
  return (
  
  <footer>
<p>&copy; WCS - Hakathon Mai 2023</p>
  <AboutUs 
  showModal={showModal}
  setShowModal ={setShowModal}
  />
<button className="aboutUs_button" onClick={handleOpenModal}>About Us</button>

  </footer>

  )
}

export default Footer;
