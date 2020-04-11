import React from "react";
import { ReactComponent as Virus } from ".././assets/virus.svg";
import "./styles/Header.styles.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="title">
          <h1>
            <Virus />
            <span>Coronavirus Statistics</span>
            <Virus />
          </h1>
        </div>
      </div>
    </header>
  );
};
export default Header;
