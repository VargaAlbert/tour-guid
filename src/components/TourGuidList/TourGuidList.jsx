import React from "react";
import Guid from "../Guid/Guid";
import "./TourGuidList.scss";

export default function TourGuidList({ onPremium, guid }) {
  if (guid.length === 0) {
    return (
      <div className="erorr-container">
        <div>
          <h2>HOPPÁ!</h2>
          <h3>A keresési feltételeknek egyik idegenvezetöt sem felel meg...</h3>
        </div>
        <div>
          <span>:/</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {guid.map((tourGuide) => {
        return (
          <Guid
            onPremium={onPremium}
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
