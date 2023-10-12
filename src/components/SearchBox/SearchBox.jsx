import React, { useContext } from "react";
import Select from "react-select";
import { AppContext } from "../../context/AppContext";
import "./SearchBox.scss";
import { AiOutlineEuroCircle } from "react-icons/ai";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function SearchBox() {
  const {
    optionsSearch,
    searchMin,
    onSearchChangeMin,
    onSearchChangeMax,
    onSearchSorting,
    onSearchChangeCity,
  } = useContext(AppContext);

  return (
    <div id="start" className="searchbox-container">
      <div className="search-number">
        <label>
          Ár EUR tól-ig.
          <div className="search-flex">
            <input
              type="number"
              placeholder="MIN"
              onChange={onSearchChangeMin}
              min="0"
            ></input>
            -
            <input
              type="number"
              placeholder="MAX"
              onChange={onSearchChangeMax}
              min={searchMin}
            ></input>
            <AiOutlineEuroCircle className="search-icon" />
          </div>
        </label>
      </div>
      <div className="search-flex">
        <label>
          Értékelések
          <Select
            className="select"
            options={optionsSearch}
            onChange={onSearchSorting}
            placeholder="Rendezés..."
          />
        </label>
      </div>
      <div className="search-city">
        <label>
          Város:
          <div className="search-flex">
            <input
              type="search"
              placeholder="Város keresés..."
              onChange={onSearchChangeCity}
            ></input>
            <HiOutlineMapPin className="search-icon" />
          </div>
        </label>
      </div>
    </div>
  );
}
