import React from "react";
import { Link } from "react-router-dom";
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
        <div className="content1">
          <div className="ui card">
            <div className="ui slide masked reveal image">
              <img src={eat1} className="visible content" />
              <img src={eat2} className="hidden content" />
            </div>
            <div className="content">
              <a className="header">EatWitMe</a>
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
                "You will never eat alone" Eatwithme is a Social dinning
                website, that allow you to have breakfast, lunch or dinner with
                the strangers. Signup or login to book the events that you like,
                or simply create your own events and enjoy eating with new
                friends.
              </p>
            </div>
            <div class="extra content">
              <a href="https://eatwithme-react.herokuapp.com/">
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
              <a className="header">Co Working</a>
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
                difference countries. This website is built with react,
                styled-compoents and semantic UI. This website is also
                responsive. More features like filtered by coutries will be
                added soon.
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
              <a className="header">Jardin de L'Amour</a>
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
                Jardin de l'amour: online shop for preordering wedding bouquets
                Built with react, all data stored in localhost. Responsive for
                all screens. Filltered by type of bouquets, price range. More
                features will be added soon.{" "}
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
              <a className="header">Tea Station</a>
              <div className="meta">
                <span className="date">
                  Built with <i className="react icon"></i>
                  <i class="js square icon"></i>
                  <i class="html5 icon"></i>
                  <i class="mobile alternate icon"></i>
                </span>
              </div>
              <br />
              <p>Tea station is a single page website</p>
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
              <a className="header">Dictionary</a>
              <div className="meta">
                <span className="date">
                  Built with <i className="react icon"></i>
                  <i class="js square icon"></i>
                  <i class="html5 icon"></i>
                </span>
              </div>
              <br />
              <p>
                Dictionary is a single web page for storing color vocabulary.
                This project was a coding test for intership program. The
                vocabulary can be added, edited and deleted (if you wish). --
                Built with react.
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
              <a className="header">Lyrics</a>
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
