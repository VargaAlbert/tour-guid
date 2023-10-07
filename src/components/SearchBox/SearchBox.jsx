import React, { useState } from "react";
import "./SearchBox.scss";
import { AiOutlineEuroCircle } from "react-icons/ai";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function SearchBox({ handleMin, handelMax, searchChangeCity }) {
  const [searchMin, setSearchMin] = useState(null);
  const [searchMax, setSearchMax] = useState(Infinity);

  handleMin(searchMin);

  handelMax(searchMax);

  const searchChangeMin = (e) => {
    setSearchMin(e.target.value);
  };

  const searchChangeMax = (e) => {
    setSearchMax(e.target.value);
    if (e.target.value === "") {
      setSearchMax(Infinity);
    }
  };

  return (
    <div className="searchbox-container">
      <div className="search-number">
        <label>
          Ár EUR tól-ig.
          <input
            type="number"
            placeholder="MIN"
            onChange={searchChangeMin}
          ></input>
          -
          <input
            type="number"
            placeholder="MAX"
            onChange={searchChangeMax}
          ></input>
          <AiOutlineEuroCircle className="search-icon" />
        </label>
      </div>
      <div className="search-city">
        <label>
          Város:
          <input
            type="search"
            placeholder="Város keresés..."
            onChange={searchChangeCity}
          ></input>
          <HiOutlineMapPin className="search-icon" />
        </label>
      </div>
    </div>
  );
}
