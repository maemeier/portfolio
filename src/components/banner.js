import React from "react";

const Banner = props => {
  return (
    <div>
      <div className="banner">
        <h3 className="banner-subtitle">{props.title}</h3>
        <h1 className="banner-title"> {props.name}</h1>
        <button className="banner-btn">{props.button}</button>
      </div>
    </div>
  );
};

export default Banner;
