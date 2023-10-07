import React from "react";
import Guid from "../Guid/Guid";

export default function TourGuidList({ onPremium, guid }) {
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
