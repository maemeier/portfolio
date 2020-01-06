import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FaAlignRight } from "react-icons/fa";

export default class Navbar1 extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className="navbar">
        <ul>
          <li className="link">
            <Link to="/aboutMe">AboutMe</Link>{" "}
          </li>
          <li className="link">
            <Link to="/coding">Projects</Link>{" "}
          </li>
          <li className="link">
            <Link to="/">Home</Link>{" "}
          </li>
        </ul>
      </div>
    );
  }
}
