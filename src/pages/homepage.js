import React from "react";
import Header from "../components/header";
import AboutMe from "../components/aboutMe";
import Card from "../components/card";
import Title from "../components/title";
import Footer from "../components/footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Title title={"CODE AND DESIGN"} />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default Homepage;
