import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Guid from "../Guid/Guid";
import "./TourGuidList.scss";

export default function TourGuidList() {
  const { premium, result } = useContext(AppContext);
  if (result.length === 0) {
    return (
      <div className="erorr-container">
        <div>
          <h2>HOPPÁ!</h2>
          <h3>A keresési feltételeknek egyik idegenvezetőt sem felel meg...</h3>
        </div>
        <div>
          <span>:/</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {result.map((tourGuide) => {
        return (
          <Guid
            premium={premium}
            key={tourGuide.login.uuid}
            picture={tourGuide.picture.large}
            name={`${tourGuide.name.first} ${tourGuide.name.last}`}
            nationality={tourGuide.location.country}
            city={tourGuide.location.city}
            star={tourGuide.dob.age}
            money={tourGuide.registered.age}
          />
        );
      })}
    </>
  );
}
