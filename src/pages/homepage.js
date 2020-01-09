import React from "react";
import Header from "../components/header";
import AboutMe from "../components/aboutMe";
import Card from "../components/card";
import Title from "../components/title";
import Skills from "../components/skills";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  );
};

export default Homepage;
