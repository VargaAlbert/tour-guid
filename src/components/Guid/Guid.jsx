import React from "react";
import "./Guid.scss";
import { BiWorld } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { AiFillStar } from "react-icons/ai";

export default function Guid({
  onPremium,
  picture,
  name,
  nationality,
  city,
  star,
  money,
}) {
  return (
    <div className={`tour-guide-card-${onPremium}`}>
      <img src={`${picture}`} alt={name.replace(" ", "-")} />
      <div className="guid-container">
        <h2>{name}</h2>
        <h3 className="nat">
          <BiWorld /> {nationality}
        </h3>
        <h3 className="city">
          <CiLocationOn />
          {city}
        </h3>
      </div>
      <div className="star-rating">
        <AiFillStar className="star" />
        <AiFillStar className="star" />
        <AiFillStar className="star" />
        <AiFillStar className="star" />
        <AiFillStar className="star" />
        <span>{`(${star})`}</span>
      </div>
      <div className="price-container">
        <h4>{money} EUR/hour</h4>
        <button>profil</button>
      </div>
    </div>
  );
}
