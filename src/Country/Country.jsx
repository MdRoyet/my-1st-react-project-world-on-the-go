import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(visited ? false : true);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && "Country-Visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Countries" : "Small Countries"}{" "}
      </p>{" "}
      <br /> <br />
      <div className="btn">
        <button className="radiant-btn" onClick={handleVisited}>
          {visited ? "Visited" : "Not Visited"}
        </button>
        <button
          className="radiant-btn"
          onClick={() => {
            handleVisitedFlag(country.flags.flags.png);
          }}
        >
          {" "}
          Add Visited Flag
        </button>
      </div>
    </div>
  );
};

export default Country;
