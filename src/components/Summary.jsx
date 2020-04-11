import { faGlobe, faBox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles/Summary.styles.scss";
import SummaryCards from "./SummaryCards";
import SummaryGraphs from "./SummaryGraphs";

const Summary = ({ global, lastUpdate, Bangladesh }) => {
  return (
    <React.Fragment>
      <div className="summary">
        <div className="container">
          <div className="section-title">
            <h6>
              <FontAwesomeIcon icon={faGlobe} /> <span>World Wide</span>
            </h6>
            {lastUpdate ? (
              <p>Last updated: {new Date(lastUpdate).toDateString()}</p>
            ) : null}
          </div>

          <SummaryCards
            key="global"
            TotalConfirmed={global.TotalConfirmed}
            TotalDeaths={global.TotalDeaths}
            TotalRecovered={global.TotalRecovered}
          />
        </div>
      </div>

      <SummaryGraphs
        key="global"
        TotalConfirmed={global.TotalConfirmed}
        TotalDeaths={global.TotalDeaths}
        TotalRecovered={global.TotalRecovered}
      />

      <div className="summary">
        <div className="container">
          <div className="section-title">
            <h6>
              {/* <img src={`https://www.countryflags.io/BD/flat/32.png`} alt="" /> */}
              <FontAwesomeIcon icon={faBox} />
              <span> BANGLADESH </span>
            </h6>
            {lastUpdate ? (
              <p>Last updated: {new Date(lastUpdate).toDateString()}</p>
            ) : null}
          </div>
          {Bangladesh.length ? (
            Bangladesh.filter((row) => row.Country === "Bangladesh").map(
              (row, i) => {
                return (
                  <SummaryCards
                    key={i}
                    TotalConfirmed={row.TotalConfirmed}
                    TotalDeaths={row.TotalDeaths}
                    TotalRecovered={row.TotalRecovered}
                  />
                );
              }
            )
          ) : (
            <div></div>
          )}
        </div>
      </div>

      {Bangladesh.length ? (
        Bangladesh.filter((row) => row.Country === "Bangladesh").map(
          (row, i) => {
            return (
              <SummaryGraphs
                key={i}
                TotalConfirmed={row.TotalConfirmed}
                TotalDeaths={row.TotalDeaths}
                TotalRecovered={row.TotalRecovered}
              />
            );
          }
        )
      ) : (
        <div></div>
      )}
    </React.Fragment>
  );
};
export default Summary;
