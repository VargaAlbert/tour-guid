import React, { useState } from "react";
import Select from "react-select";
import "./StartQuery.scss";
import { FaMapLocationDot } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";

export default function StartQuery({
  onSearchNat,
  onClickFree,
  onClickPremium,
}) {
  const [startClicks, setStartClicks] = useState(null);
  const [startNat, setStartNat] = useState("");
  const [animation, setAnimation] = useState("");
  const [visibilityStyle, setVisibilityStyle] = useState({
    visibility: "hidden",
  });

  const clickCounter = () => {
    setStartClicks(startClicks + 1);

    console.log(startNat);
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

  return (
    <header id="home">
      <section className="app-header">
        <div className="about-text">
          <h6>bemutatkozás:</h6>
          <h1>Bérelj idegenvezetőt bárhol</h1>
          <h3>
            Bérelj idegenvezetőt és fedezd fel úti célod látványosságait.
            <span className="text-free"> Ingyenes </span>
            lelkendezésünkkel
            <span className="text-free"> 50db idegenvezető </span> közül
            választhatsz, <span className="text-prem"> prémium </span>{" "}
            változatban
            <span className="text-prem"> 100db idegenvezető </span> közül. Kezd
            el még ma és fedezd fel a világot!
          </h3>
        </div>
        <div className="start-btn-container">
          <h2>
            START! <FaMapLocationDot className="start-icon" />
          </h2>
          <Select
            className={`select ${animation}`}
            options={options}
            onChange={(selectedOption) => {
              onSearchNat(selectedOption);
              changeNat(selectedOption);
            }}
            placeholder="Válasz egy országot..."
          />
          <div style={visibilityStyle}>
            <h4>Elöbb válasszon egy országot!</h4>
          </div>
          <div className="btn-container">
            <button
              className="button-free"
              onClick={() => {
                onClickFree();
                clickCounter();
              }}
            >
              START free <FcSearch />
            </button>
            <button
              className="button-premium"
              onClick={() => {
                onClickPremium();
                clickCounter();
              }}
            >
              <span>
                START premium <span className="premium-text">1290Ft/query</span>
              </span>
              <FcSearch />
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
