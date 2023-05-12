import { useState } from "react";
import PropTypes from "prop-types";
import "../css/AboutUs.css";

const AboutUs = ({ showModal, setShowModal }) => {
  const [currentProfile, setCurrentProfile] = useState(0);

  const profiles = [
    {
      avatar: (
        <img
          src="/img/nolan.jpg"
          alt="nolan_pic"
          width="150px"
          height="150px"
        />
      ),
      name: "Nolan DE PUYDT",
    },
    {
      avatar: (
        <img
          src="/img/mehdi.png"
          alt="mehdi.pic"
          width="150px"
          height="150px"
        />
      ),
      name: "Mehdi BERBEDJ",
    },
    {
      avatar: (
        <img
          src="/img/julien.jpg"
          alt="julien_pic"
          width="150px"
          height="150px"
        />
      ),
      name: "Julien CAMPILLO",
    },
    {
      avatar: (
        <img
          src="/img/jerome.png"
          alt="jerome_pic"
          width="150px"
          height="150px"
        />
      ),
      name: "Jérôme VILANOVA",
    },
  ];

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handlePrevProfile = () => {
    setCurrentProfile((prevIndex) =>
      prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
    );
  };

  const handleNextProfile = () => {
    setCurrentProfile((prevIndex) =>
      prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="closeModal_button" onClick={handleCloseModal}>
        ⨉
      </div>
      {/* <div className="modalContainer"> */}
      <div className="modal-overlay" onClick={() => setShowModal(false)}></div>
      <div className="modal">
        <div className="modalElementsContainer">
          <h2>Our Project:</h2>

          <p>
            Our project, titled "Count'Trip," aims to provide future travelers
            with informations about the country of their choice. Among these
            informations, we can find the country's capital, the languages
            spoken, the currency, its time zone, and also its geographical
            position using Goofle Maps. Additionally, we provide a security
            level indicator. You can find a rating from 1 to 5 indicating the
            level of security in a country (1 being the most secure, represented
            by the color green, and 5 being the least secure, represented by the
            color red). Travelers can also explore countries categorized by the
            continent they wish to visit. We hope you have a great experience on
            our website!
          </p>

          <div className="profile">
            <h2>Our Team:</h2>
            <div className="profile-container">
              {profiles.map(
                (profile, index) =>
                  (index === currentProfile || window.innerWidth >= 600) && (
                    <div className="profile_description" key={index}>
                      {profile.avatar}
                      {profile.name}
                    </div>
                  )
              )}
            </div>
          </div>

          {window.innerWidth < 600 && (
            <div className="navigation">
              <button onClick={handlePrevProfile}>Précédent</button>
              <button onClick={handleNextProfile}>Suivant</button>
            </div>
          )}
          <div className="thanks">
            <h2>Thanks to...</h2>
            <p>
              This project was made possible thanks to the data provided by{" "}
              <a
                href="https://www.travel-advisory.info/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Travel-advisory
              </a>{" "}
              API, which provides country-specific information about travel
              advisories, and by{" "}
              <a
                href="https://restcountries.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rest Countries
              </a>{" "}
              for general country information. thanks google map too for
              location and informations, pictures, reviews for all countries.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

AboutUs.propTypes = {
  showModal: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
  setShowModal: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    )
  ).isRequired,
};

export default AboutUs;
