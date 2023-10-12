import React, { createContext, useState } from "react";

export const StartQueryContext = createContext(null);

export const StartQueryProvider = ({ children }) => {
  const [startClicks, setStartClicks] = useState(null);
  const [startNat, setStartNat] = useState("");
  const [animation, setAnimation] = useState("");
  const [visibilityStyle, setVisibilityStyle] = useState({
    visibility: "hidden",
  });

  const options = [
    { value: "AU", label: "Australia" },
    { value: "BR", label: "Brazil" },
    { value: "CA", label: "Canada" },
    { value: "CH", label: "Svájc" },
    { value: "DE", label: "Germany" },
    { value: "DK", label: "Denmark" },
    { value: "ES", label: "Spain" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "France" },
    { value: "GB", label: "United Kingdom" },
    { value: "IE", label: "Ireland" },
  ];

  const clickCounter = () => {
    setStartClicks(startClicks + 1);

    if (startNat === "") {
      startClicks % 2 === 0 ? setAnimation("shake") : setAnimation("");
      if (startClicks > 3) {
        setVisibilityStyle({ visibility: "visible" });
      }
    } else {
      setVisibilityStyle({ visibility: "hidden" });
    }
  };

  const changeNat = (selectOpcion) => {
    setStartNat(selectOpcion);
  };

  const context = {
    animation,
    visibilityStyle,
    options,
    clickCounter,
    changeNat,
  };

  return (
    <StartQueryContext.Provider value={context}>
      {children}
    </StartQueryContext.Provider>
  );
};
