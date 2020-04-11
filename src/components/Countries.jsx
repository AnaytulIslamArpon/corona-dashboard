import { faFlagCheckered, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles/Countries.styles.scss";
import Table from "./Table";

const Summary = ({ countries, countryFilter }) => {
  return (
    <div className="countries">
      <div className="container">
        <div className="section-title">
          <h6>
            <FontAwesomeIcon icon={faFlagCheckered} /> <span>Countries</span>
          </h6>
          <div>
            <div className="form-search">
              <FontAwesomeIcon icon={faSearch} />
              <input
                className="search-input"
                type="text"
                name="search"
                placeholder="Search"
                onInput={countryFilter.bind(this)}
              />
            </div>
          </div>
        </div>

        <div className="info-box content">
          <Table countries={countries} />
        </div>
      </div>
    </div>
  );
};
export default Summary;
