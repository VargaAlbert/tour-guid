import React from "react";
import Select from "react-select";
import "./SearchBox.scss";
import { AiOutlineEuroCircle } from "react-icons/ai";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function SearchBox({
  searchChangeMin,
  searchChangeMax,
  searchSorting,
  searchChangeCity,
}) {
  const optionsSearch = [
    { value: "basick", label: "Alapértelmezett" },
    { value: "max-min", label: "Legtöbb értékelés előre" },
    { value: "min-max", label: "Legkevesebb értékelés előre" },
  ];
  return (
    <div id="start" className="searchbox-container">
      <div className="search-number">
        <label>
          Ár EUR tól-ig.
          <div className="search-flex">
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
          </div>
        </label>
      </div>
      <div className="search-flex">
        <label>
          Értékelések
          <Select
            className="select"
            options={optionsSearch}
            onChange={searchSorting}
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
              onChange={searchChangeCity}
            ></input>
            <HiOutlineMapPin className="search-icon" />
          </div>
        </label>
      </div>
    </div>
  );
}
