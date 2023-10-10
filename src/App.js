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
  const [searchMin, setSearchMin] = useState(null);
  const [searchMax, setSearchMax] = useState(Infinity);
  const [searchCity, setSearchCity] = useState("");
  const [searchSorting, setSearchSorting] = useState(null);
  const [visibilityStyle, setVisibilityStyle] = useState({ display: 'none' });

  const onSearchNat = (selectOpcion) => {
    setNat(selectOpcion.value)
  }

  const onSearchSorting = (selectOpcion) => {
    setSearchSorting(selectOpcion.value)
  }


  const handleButtonClickFree = () => {
    setButtonValue(50);
    setPremium("free");
    toggleVisibility()
    setNatBool(true);
    setTimeout(scroll, 500);
  }

  const handleButtonClickPremium = () => {
    setButtonValue(100);
    setPremium("premium");
    setNatBool(true);
    toggleVisibility()
    setTimeout(scroll, 500);
  }

  const scroll = () => {
    const windowHeight = window.innerHeight;
    const scrollAmount = windowHeight;
    window.scrollBy({
      top: scrollAmount,
      behavior: 'smooth',
    });
  }

  function toggleVisibility() {
    if (nat[0] !== "") {
      setVisibilityStyle({ display: 'block' });
    }

  }

  useEffect(
    () => {
      if (buttonValue !== null && natBool === true && nat[0] !== "") {
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

  const isFilteredTurGuid = guids.filter((guid) => {
    let filteredTurGuid = `${guid.location.city}`
      .toLowerCase()
      .includes(searchCity.toLowerCase().replace(" ", ""));
    return (filteredTurGuid)
  });


  const onSearchChangeMin = (e) => {
    setSearchMin(e.target.value);
  };

  const onSearchChangeMax = (e) => {
    setSearchMax(e.target.value);
    if (e.target.value === "") {
      setSearchMax(Infinity);
    }
  };




  const isFilteredTourGuid = (guids, searchSorting, filteredGuids) => {
    let filteredTourGuid = guids;
    filteredTourGuid = filteredGuids;
    filteredTourGuid = filteredTourGuid.filter((guids) =>
      (guids.registered.age > searchMin && guids.registered.age < searchMax));

    const filteredTourGuidCopy = [...filteredTourGuid];

    if (searchSorting === "min-max") {
      filteredTourGuid.sort((a, b) => a.dob.age - b.dob.age)
    } else if (searchSorting === "max-min") {
      filteredTourGuid.sort((a, b) => b.dob.age - a.dob.age)
    } else {
      filteredTourGuid = filteredTourGuidCopy;
    }

    return filteredTourGuid;
  }

  const result = isFilteredTourGuid(guids, searchSorting, isFilteredTurGuid)

  return (
    <>
      <StartQuery onSearchNat={onSearchNat} onClickFree={handleButtonClickFree} onClickPremium={handleButtonClickPremium} />
      <section className='tour-guid-container' style={visibilityStyle} >
        <SearchBox searchChangeMin={onSearchChangeMin} searchChangeMax={onSearchChangeMax} searchSorting={onSearchSorting} searchChangeCity={onSearchChangeCity} />
        <div className='tour-guid-list-container'>
          <TourGuidList onPremium={premium} guid={result} />
        </div>
      </section>
    </>
  );
}

export default App;
