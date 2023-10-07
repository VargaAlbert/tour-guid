import './scss/App.scss';
import React, { useState, useEffect } from 'react';
import StartQuery from './components/StartQuery/StartQuery';
import TourGuidList from './components/TourGuidList/TourGuidList';
import SearchBox from './components/SearchBox/SearchBox';

function App() {
  const [nat, setNat] = useState([""]);
  const [natBool, setNatBool] = useState(false);
  const [premium, setPremium] = useState([""]);
  const [buttonValue, setButtonValue] = useState(null);
  const [guids, setGuids] = useState([]);
  const [searchMin, setSearchMin] = useState(0);
  const [searchMax, setSearchMax] = useState(Infinity);
  const [searchCity, setSearchCity] = useState("");

  const onSearchNat = (selectOpcion) => {
    setNat(selectOpcion.value)
  }

  const handleButtonClickFree = () => {
    setButtonValue(50);
    setNatBool(true);
    setPremium("free");
  }

  const handleButtonClickPremium = () => {
    setButtonValue(100);
    setNatBool(true);
    setPremium("premium");
  }

  useEffect(
    () => {
      if (buttonValue !== 0 && natBool === true) {
        fetch(`https://randomuser.me/api/?results=${buttonValue}&nat=${nat}`)
          .then((response) => response.json())
          .then((guid) =>
            setGuids(guid.results)
          )
        setNatBool(false);
      }
    }, [buttonValue, natBool, nat]
  );

  const onSearchChangeCity = (e) => {
    setSearchCity(e.target.value);
  };
  console.log(searchCity);

  const isFilteredTurGuid = guids.filter((guid) => {
    let filteredTurGuid = `${guid.location.city}`
      .toLowerCase()
      .includes(searchCity.toLowerCase().replace(" ", ""));
    return (filteredTurGuid)
  });

  const onSearchChangeMin = (e) => {
    setSearchMin(e.target.value);
  };
  console.log(searchMin)

  const onSearchChangeMax = (e) => {
    setSearchMax(e.target.value);
    if (e.target.value === "") {
      setSearchMax(Infinity);
    }
  };

  const isFilteredTourGuid = (guids, filteredModels) => {
    let filteredTourGuid = guids;
    filteredTourGuid = filteredModels
    filteredTourGuid = filteredTourGuid.filter((guids) =>
      (guids.registered.age > searchMin && guids.registered.age < searchMax));
    return filteredTourGuid;
  }

  const result = isFilteredTourGuid(guids, isFilteredTurGuid)

  return (
    <>
      <StartQuery onSearchNat={onSearchNat} onClickFree={handleButtonClickFree} onClickPremium={handleButtonClickPremium} />
      <section className='tour-guid-container' >
        <SearchBox searchChangeMin={onSearchChangeMin} searchChangeMax={onSearchChangeMax} searchChangeCity={onSearchChangeCity} />
        <div className='tour-guid-list-container'>
          <TourGuidList onPremium={premium} guid={result} />
        </div>
      </section>
    </>
  );
}

export default App;
