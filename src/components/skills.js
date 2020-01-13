import React from "react";
import { Link } from "react-router-dom";
import fullstackLogo from "../img/fullstack.png";
import designLogo2 from "../img/designLogo2.png";
import Title1 from "../components/title2";

const Skills = () => {
  return (
    <div>
      <Title1 title={"PROJECTS"} />
      <div className="content-center">
        <div>
          <Link to="/coding">
            <img
              className="fullstackLogo skyLeft"
              src={fullstackLogo}
              alt="logo"
            />
          </Link>
        </div>
        <div>
          <Link to="/aboutMe">
            <img className="designLogo skyLeft" src={designLogo2} alt="logo" />
          </Link>
        </div>

        <div>
          <div className="firstBlock skyLeft">
            <p className="projectText">
              Technologies that I use to build my projects
            </p>
            <ul>
              <li>HTML & CSS, Styled components</li>
              <li>React.js, Javascript</li>
              <li>Semantic UI</li>
              <li>MongoDb</li>
              <li>Git</li>
              <li>Affinity Designer and Sketch</li>
              <br />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
