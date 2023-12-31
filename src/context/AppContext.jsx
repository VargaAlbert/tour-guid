import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [nat, setNat] = useState([""]);
  const [natBool, setNatBool] = useState(false);
  const [premium, setPremium] = useState([""]);
  const [buttonValue, setButtonValue] = useState(null);
  const [guids, setGuids] = useState([]);
  const [searchMin, setSearchMin] = useState(null);
  const [searchMax, setSearchMax] = useState(Infinity);
  const [searchCity, setSearchCity] = useState("");
  const [searchSorting, setSearchSorting] = useState(null);
  const [visibilityStyle, setVisibilityStyle] = useState({ display: "none" });

  const optionsSearch = [
    { value: "basick", label: "Alapértelmezett" },
    { value: "max-min", label: "Legtöbb értékelés előre" },
    { value: "min-max", label: "Legkevesebb értékelés előre" },
  ];

  const onSearchNat = (selectOpcion) => {
    setNat(selectOpcion.value);
  };

  const onSearchSorting = (selectOpcion) => {
    setSearchSorting(selectOpcion.value);
  };

  const handleButtonClickFree = () => {
    setButtonValue(50);
    setPremium("free");
    buttonSetting();
  };

  const handleButtonClickPremium = () => {
    setButtonValue(100);
    setPremium("premium");
    buttonSetting();
  };

  const buttonSetting = () => {
    setNatBool(true);
    toggleVisibility();
    setTimeout(scroll, 500);
  };

  const scroll = () => {
    const windowHeight = window.innerHeight;
    const scrollAmount = windowHeight;
    window.scrollBy({
      top: scrollAmount,
      behavior: "smooth",
    });
  };

  function toggleVisibility() {
    if (nat[0] !== "") {
      setVisibilityStyle({ display: "block" });
    }
  }

  useEffect(() => {
    if (buttonValue !== null && natBool === true && nat[0] !== "") {
      fetch(`https://randomuser.me/api/?results=${buttonValue}&nat=${nat}`)
        .then((response) => response.json())
        .then((guid) => setGuids(guid.results));
      setNatBool(false);
    }
  }, [buttonValue, natBool, nat]);

  const onSearchChangeCity = (e) => {
    setSearchCity(e.target.value);
  };

  const onSearchChangeMin = (e) => {
    setSearchMin(e.target.value);
  };

  const onSearchChangeMax = (e) => {
    setSearchMax(e.target.value);
    if (e.target.value === "") {
      setSearchMax(Infinity);
    }
  };

  const isFilteredTurGuid = guids.filter((guid) => {
    let filteredTurGuid = `${guid.location.city}`
      .toLowerCase()
      .includes(searchCity.toLowerCase().replace(" ", ""));
    return filteredTurGuid;
  });

  const isFilteredTourGuid = (guids, searchSorting, filteredGuids) => {
    let filteredTourGuid = guids;

    filteredTourGuid = filteredGuids;
    filteredTourGuid = filteredTourGuid.filter(
      (guids) =>
        guids.registered.age * 10 > searchMin * 10 - 5 &&
        guids.registered.age * 10 < searchMax * 10 + 5
    );

    const filteredTourGuidCopy = [...filteredTourGuid];

    if (searchSorting === "min-max") {
      filteredTourGuid.sort((a, b) => a.dob.age - b.dob.age);
    } else if (searchSorting === "max-min") {
      filteredTourGuid.sort((a, b) => b.dob.age - a.dob.age);
    } else {
      filteredTourGuid = filteredTourGuidCopy;
    }

    return filteredTourGuid;
  };

  const result = isFilteredTourGuid(guids, searchSorting, isFilteredTurGuid);

  const context = {
    optionsSearch,
    onSearchNat,
    handleButtonClickFree,
    handleButtonClickPremium,
    visibilityStyle,
    searchMin,
    onSearchChangeMin,
    onSearchChangeMax,
    onSearchSorting,
    onSearchChangeCity,
    premium,
    result,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
