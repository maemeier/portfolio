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
import drag0 from "../img/drag0.png";
import drag1 from "../img/drag1.png";
class Card extends React.Component {
  render() {
    return (
      <div className="cardBox" clearfix>
        <Title1 title={"PROJECTS"} />
        <div className="content1">
          <div className="ui card">
            <div className="ui slide masked reveal image">
              <img src={drag0} className="visible content" />
              <img src={drag1} className="hidden content" />
            </div>
            <div className="content">
              <a className="header" href="https://covid-de.netlify.app/">
                Covid Deutschland
              </a>
              <div className="meta">
                <span className="date">
                  Built with <i className="react icon"></i>
                  <i class="js square icon"></i>
                  <i class="html5 icon"></i>
                </span>
              </div>
              <br />
              <p>
                Live tracking covid in Germany. Check the number of case in each
                state and total cases in Germany.
              </p>
            </div>
            <div class="extra content">
              <a href="https://covid-de.netlify.app/">
                <div class="ui two buttons">
                  <div class="ui basic green button">Check Website</div>
                </div>
              </a>
              <a>
                <i className="github icon"></i>{" "}
                <a href="https://github.com/maemeier/drap-and-drop-react">
                  GitHub
                </a>
              </a>
            </div>
          </div>

          <div className="ui card">
            <div className="ui slide masked reveal image">
              <img src={eat1} className="visible content" />
              <img src={eat2} className="hidden content" />
            </div>
            <div className="content">
              <a
                className="header"
                href="https://github.com/maemeier/eatwithme_react"
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
              <p>
                A Social dinning website, that allow you to have breakfast,
                lunch or dinner with the strangers.
              </p>
            </div>
            <div class="extra content">
              <a href="https://github.com/maemeier/eatwithme_react">
                <div class="ui two buttons">
                  <div class="ui basic green button">Check Website</div>
                </div>
              </a>
              <a>
                <i className="github icon"></i>{" "}
                <a href="https://github.com/maemeier/eatwithme_react">GitHub</a>
              </a>
            </div>
          </div>

          <div className="ui card">
            <div className="ui slide masked reveal image">
              <img src={co3} className="visible content" />
              <img src={co1} className="hidden content" />
            </div>
            <div className="content">
              <a className="header" href="https://working-fyni.netlify.com/">
                Co Working
              </a>
              <div className="meta">
                <span className="date">
                  Built with <i className="react icon"></i>
                  <i class="js square icon"></i>
                  <i class="html5 icon"></i>
                  <i class="mobile alternate icon"></i>
                </span>
              </div>
              <br />
              <p>
                Coworking is a website to show the list of coworking space in
                difference countries.
              </p>
            </div>
            <div className="extra content">
              <a href="https://working-fyni.netlify.com/">
                <div class="ui two buttons">
                  <div class="ui basic green button">Check Website</div>
                </div>
              </a>
              <a>
                <a href="https://github.com/maemeier/workingSpace">
                  <i className="github icon"></i> GitHub
                </a>
              </a>
            </div>
          </div>

          <div className="ui card">
            <div className="ui slide masked reveal image">
              <img src={jar0} className="visible content" />
              <img src={jar2} className="hidden content" />
            </div>
            <div className="content">
              <a className="header" href="https://jardin-fyni.netlify.com/">
                Jardin de L'Amour
              </a>
              <div className="meta">
                <span className="date">
                  Built with <i className="react icon"></i>
                  <i class="js square icon"></i>
                  <i class="html5 icon"></i>
                  <i class="mobile alternate icon"></i>
                </span>
              </div>
              <br />
              <p>
                Jardin de l'amour: online shop for preordering wedding bouquets.
                More features are in progress.
              </p>
            </div>
            <div className="extra content">
              <a href="https://jardin-fyni.netlify.com/">
                <div class="ui two buttons">
                  <div class="ui basic green button">Check Website</div>
                </div>
              </a>
              <a>
                <a href="https://github.com/maemeier/flowers">
                  <i className="github icon"></i>GitHub
                </a>
              </a>
            </div>
          </div>

          <div className="ui card">
            <div className="ui slide masked reveal image">
              <img src={tea0} className="visible content" />
              <img src={tea1} className="hidden content" />
            </div>
            <div className="content">
              <a className="header" href="https://tea-fyni.netlify.com/">
                Tea Station
              </a>
              <div className="meta">
                <span className="date">
                  Built with <i className="react icon"></i>
                  <i class="js square icon"></i>
                  <i class="html5 icon"></i>
                  <i class="mobile alternate icon"></i>
                </span>
              </div>
              <br />
              <p>
                Tea station is a webdesign project, more pages and features are
                coming soon.
              </p>
            </div>
            <div className="extra content">
              <a href="https://tea-fyni.netlify.com/">
                <div class="ui two buttons">
                  <div class="ui basic green button">Check Website</div>
                </div>
              </a>
              <a>
                <a href="https://github.com/maemeier/teashop-react">
                  <i className="github icon"></i>GitHub
                </a>
              </a>
            </div>
          </div>

          <div className="ui card">
            <div className="ui slide masked reveal image">
              <img src={dic0} className="visible content" />
              <img src={dic1} className="hidden content" />
            </div>
            <div className="content">
              <a
                className="header"
                href="https://github.com/maemeier/crud-color"
              >
                Dictionary
              </a>
              <div className="meta">
                <span className="date">
                  Built with <i className="react icon"></i>
                  <i class="js square icon"></i>
                  <i class="html5 icon"></i>
                </span>
              </div>
              <br />
              <p>
                A single webpage for storing color vocabulary. This project was
                a coding test for intership program.
              </p>
            </div>
            <div className="extra content">
              <a href="https://github.com/maemeier/crud-color">
                <div class="ui two buttons">
                  <div class="ui basic green button">Check Website</div>
                </div>
              </a>
              <a>
                <a href="https://github.com/maemeier/crud-color">
                  <i className="github icon"></i>GitHub
                </a>
              </a>
            </div>
          </div>
          <div className="ui card">
            <div className="ui slide masked  image">
              <img src={dis1} className="visible content" />
            </div>
            <div className="content">
              <a className="header" href="https://song-fyni.netlify.com">
                Lyrics
              </a>
              <div className="meta">
                <span className="date">
                  Built with Redux<i className="react icon"></i>
                  <i class="js square icon"></i>
                  <i class="html5 icon"></i>
                  <i class="mobile alternate icon"></i>
                </span>
              </div>
              <br />
              <p>
                Disney songs, a simply single page website to show a list of
                disney songs.
              </p>
            </div>
            <div className="extra content">
              <a href="https://song-fyni.netlify.com">
                <div class="ui two buttons">
                  <div class="ui basic green button">Check Website</div>
                </div>
              </a>
              <a>
                <a href="https://github.com/maemeier/react-redux-songs">
                  <i className="github icon"></i>GitHub
                </a>
              </a>
            </div>
          </div>
        </div>
        <div className="extraCard"></div>
      </div>
    );
  }
}
export default Card;
