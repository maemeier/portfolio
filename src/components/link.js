import React, { Component } from "react";
import Navigation from "./navigation.js";

const navlinks = [
  { name: "Home", to: "/" },
  { name: "Coding", to: "/coding" },
  { name: "About", to: "/aboutMe" }
];

const brand = { name: "", to: "/" };
class Link extends Component {
  render() {
    return <Navigation brand={brand} links={navlinks} />;
  }
}
export default Link;
