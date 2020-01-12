import React from "react";
import Header from "../components/header";
import Title from "../components/title";
import Footer from "../components/footer";
import mae from "../img/mae.png";
import skill from "../img/skill.png";
import skill1 from "../img/softSkill.png";

const AboutMe = () => {
  return (
    <div>
      <Header />
      <Title title="ABOUT ME" />
      <div className="aboutBox">
        <img className="aboutMe" src={mae} alt="mae" />
        <img className="aboutMe" src={skill} alt="mae" />
        <img className="aboutMe" src={skill1} alt="mae" />
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
