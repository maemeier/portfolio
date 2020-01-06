import React from "react";
import Logo1 from "../img/LOGO.svg";
import "../style.css";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header1">
          <div className="header-background"></div>
          <img className="logo4" src={Logo1} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default Header;
