import numeral from "numeral";
import React from "react";
import "./styles/Summary.styles.scss";

const SummaryCards = ({ TotalConfirmed, TotalDeaths, TotalRecovered }) => {
  return (
    <div className="info-box info">
      <div className="stat total-cases">
        <h4>Total Cases</h4>
        <h1>{numeral(TotalConfirmed).format("0,0")}</h1>
      </div>
      <div className="stat deaths">
        <h4>Deaths</h4>
        <h1>{numeral(TotalDeaths).format("0,0")}</h1>
      </div>
      <div className="stat recovered">
        <h4>Recovered</h4>
        <h1>{numeral(TotalRecovered).format("0,0")}</h1>
      </div>
      <div className="stat active">
        <h4>Active Cases</h4>
        <h1>
          {numeral(TotalConfirmed - TotalDeaths - TotalRecovered).format("0,0")}
        </h1>
      </div>
    </div>
  );
};
export default SummaryCards;
