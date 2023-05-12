import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [restCountriesFetch, setRestCountriesFetch] = useState([]);
  const [travelAdvisoryFetch, setTravelAdvisoryFetch] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [options, setOptions] = useState("");
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setRestCountriesFetch(data));
  }, []);

  useEffect(() => {
    fetch("https://www.travel-advisory.info/api")
      .then((res) => res.json())
      .then((data) => {
        const result = Object.keys(data.data).map((clé) => data.data[clé]);
        setTravelAdvisoryFetch(result);
      });
  }, []);

  useEffect(() => {
    if (restCountriesFetch.length && travelAdvisoryFetch.length) {
      const array = [];
      restCountriesFetch.forEach((elFirst) => {
        let dataFromTravelApiToAdd = {};
        travelAdvisoryFetch.forEach((elSec) => {
          if (elFirst.name.common === elSec.name) {
            dataFromTravelApiToAdd.dangerScore = elSec.advisory.score;
            dataFromTravelApiToAdd.dangerUrl = elSec.advisory.source;
            dataFromTravelApiToAdd.dangerMessage = elSec.advisory.message;
          }
        });
        let currentLanguages = elFirst.languages
          ? Object.keys(elFirst.languages).map((clé) => elFirst.languages[clé])
          : ["None"];
        array.push({
          id: restCountriesFetch.indexOf(elFirst),
          name: elFirst.name.common,
          flag: elFirst.flags.png,
          timezone: elFirst.timezones[1]
            ? elFirst.timezones[1]
            : elFirst.timezones[0],
          region: elFirst.region,
          coordinates: elFirst.latlng,
          capital: elFirst.capital ? elFirst.capital[0] : "None",
          currencyName: elFirst.currencies
            ? Object.values(elFirst.currencies)[0].name
            : "None",
          currencySymbol: elFirst.currencies
            ? Object.values(elFirst.currencies)[0].symbol
            : "None",
          languages: currentLanguages,
          googleMap: elFirst.maps.googleMaps,
          dangerScore: dataFromTravelApiToAdd.dangerScore
            ? dataFromTravelApiToAdd.dangerScore
            : null,
          dangerUrl: dataFromTravelApiToAdd.dangerUrl
            ? dataFromTravelApiToAdd.dangerUrl
            : null,
          dangerMessage: dataFromTravelApiToAdd.dangerMessage
            ? dataFromTravelApiToAdd.dangerMessage
            : null,
        });
      });
      array.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // Ignorer la casse
        const nameB = b.name.toUpperCase(); // Ignorer la casse

        if (nameA < nameB) {
          return -1; // a vient avant b
        }
        if (nameA > nameB) {
          return 1; // a vient après b
        }
        return 0; // a et b sont égaux
      });
      setFinalData(array);
    }
  }, [restCountriesFetch, travelAdvisoryFetch]);

  const toggleVisibility = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  console.log(finalData);

  return (
    <>
      <Navbar options={options} setOptions={setOptions} />
      <Header />
      <Body
        finalData={finalData}
        options={options}
        setOptions={setOptions}
        text={text}
        setText={setText}
      />

      {isVisible ? (
        <div
          className="totopButton"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        ></div>
      ) : null}

      <Footer />
    </>
  );
}

export default App;
