import React from "react";
import Header from "../components/header";
import Title from "../components/title";
import Footer from "../components/footer";
import mae from "../img/mae.png";
import skill from "../img/skill.png";
import skill1 from "../img/softSkill.png";
import Navbar from "../components/navbar";

const AboutMe = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Title title="ABOUT ME" />
      <div className="about">
        <img className="aboutMe" src={mae} alt="mae" />
        <img className="aboutMe" src={skill} alt="mae" />
        <img className="aboutMe" src={skill1} alt="mae" />
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
