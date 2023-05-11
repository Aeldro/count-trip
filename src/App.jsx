import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./assets/components/Navbar";

function App() {
  const [restCountriesFetch, setRestCountriesFetch] = useState([]);
  const [travelAdvisoryFetch, setTravelAdvisoryFetch] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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
    if (restCountriesFetch.length && travelAdvisoryFetch) {
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
          name: elFirst.name.common,
          flag: elFirst.flags.png,
          timezone: elFirst.timezones[1]
            ? elFirst.timezones[1]
            : elFirst.timezones[0],
          region: elFirst.region,
          coordinates: elFirst.latlng,
          capital: elFirst.capital ? elFirst.capital[0] : "None",
          currency: elFirst.currencies
            ? Object.keys(elFirst.currencies)
            : "None",
          languages: currentLanguages,
          googleMap: elFirst.maps.googleMaps,
          dangerScore: dataFromTravelApiToAdd.dangerScore,
          dangerUrl: dataFromTravelApiToAdd.dangerUrl,
          dangerMessage: dataFromTravelApiToAdd.dangerMessage,
        });
      });
      setFinalData(array);
    }
  }, [restCountriesFetch, travelAdvisoryFetch]);

  console.log(restCountriesFetch);
  console.log(travelAdvisoryFetch);
  console.log(finalData);

  return <>{finalData.length ? finalData.map((el) => el.name) : null}
      <Navbar/>
      <Header/>
      <Body/>
      <Footer/></>;
}

export default App;
