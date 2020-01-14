import React from "react";
import { Link } from "react-router-dom";
import Title1 from "../components/title";
import ipad from "../img/ipad1.png";
import tea0 from "../img/tea0.png";
import tea1 from "../img/tea1.png";
import tea2 from "../img/tea2.png";
import co1 from "../img/co1.png";
import co2 from "../img/co2.png";
import co3 from "../img/co3.png";
import jar0 from "../img/jar0.png";
import jar2 from "../img/jar2.png";
import eat1 from "../img/eat0.png";
import eat2 from "../img/eat2.png";
import dic0 from "../img/dic0.png";
import dic1 from "../img/dic1.png";
import dis1 from "../img/dis1.png";
class Card extends React.Component {
  render() {
    return (
      <div className="cardBox" clearfix>
        <Title1 title={"PROJECTS"} />
        <div className="content1">
          <div className="ui card">
            <div className="ui slide masked reveal image">
              <img src={eat1} className="visible content" />
              <img src={eat2} className="hidden content" />
            </div>
            <div className="content">
              <a
                className="header"
                href="https://eatwithme-react.herokuapp.com"
              >
                EatWitMe
              </a>
              <div className="meta">
                <span className="date">
                  Built with <i className="react icon"></i>
                  <i class="node js icon"></i>
                  <i class="js square icon"></i>
                  <i class="html5 icon"></i>
                  <i class="database icon"></i>
                </span>
              </div>
              <br />
              <p>"You will never eat alone" Eatwithme is a Social dinning</p>
            </div>
            <div class="extra content">
              <a href="https://eatwithme-react.herokuapp.com/"></a>
              <a>
                <i className="github icon"></i>{" "}
                <a href="https://github.com/maemeier/eatwithme_react">GitHub</a>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
