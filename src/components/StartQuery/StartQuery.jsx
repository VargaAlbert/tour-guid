import React, { useContext } from "react";
import { StartQueryContext } from "./StartQueryContext";
import { AppContext } from "../../context/AppContext";

import Select from "react-select";
import "./StartQuery.scss";
import { FaMapLocationDot } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";

export default function StartQuery() {
  const { onSearchNat, handleButtonClickFree, handleButtonClickPremium } =
    useContext(AppContext);
  const { animation, visibilityStyle, options, clickCounter, changeNat } =
    useContext(StartQueryContext);

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
                handleButtonClickFree();
                clickCounter();
              }}
            >
              START free <FcSearch />
            </button>
            <button
              className="button-premium"
              onClick={() => {
                handleButtonClickPremium();
                clickCounter();
              }}
            >
              <span>
                START premium
                <span className="premium-text">1290Ft/query</span>
              </span>
              <FcSearch />
            </button>
          </div>
        </div>
      </section>
    </header>
  );
}
