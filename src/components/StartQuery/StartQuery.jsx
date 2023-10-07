import React from "react";
import Select from "react-select";
import "./StartQuery.scss";
import { FaMapLocationDot } from "react-icons/fa6";
import { FcSearch } from "react-icons/fc";

export default function StartQuery({
  onSearchNat,
  onClickFree,
  onClickPremium,
}) {
  const options = [
    { value: "AU", label: "Australia" },
    { value: "BR", label: "Brazil" },
    { value: "CA", label: "Canada" },
    { value: "CH", label: "Svájc" },
    { value: "DE", label: "Germany" },
    { value: "DK", label: "Denmark" },
    { value: "ES", label: "Spain" },
    { value: "FI", label: "Finland" },
    { value: "FR", label: "Russia" },
    { value: "GB", label: "United Kingdom" },
    { value: "IE", label: "Ireland" },
  ];

  return (
    <header id="home">
      <section className="app-header">
        <div className="about-text">
          <h6>bemutatkozás:</h6>
          <h1>Bérelj idegenvezetöt bárhol</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            est quae facere deserunt asperiores non impedit molestias provident
            in sed deleniti, ducimus fugiat cupiditate consequuntur maiores
            autem exercitationem numquam? Maiores.
          </h3>
        </div>
        <div className="start-btn-container">
          <h2>
            START! <FaMapLocationDot className="start-icon" />
          </h2>
          <Select className="select" options={options} onChange={onSearchNat} />
          <div className="btn-container">
            <button className="button-free" onClick={onClickFree}>
              START free <FcSearch />
            </button>
            <button className="button-premium" onClick={onClickPremium}>
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
