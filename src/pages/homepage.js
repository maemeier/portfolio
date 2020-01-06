import React from "react";
import Header from "../components/header";
import Middle from "../components/middle";
import Card from "../components/card";
import Banner from "../components/banner";
import Footer from "../components/footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner
        title={"Make It Simple, but Significant"}
        name={"CODE AND DESIGN"}
        button={"Projects"}
      />
      <Middle />
      <Footer />
    </div>
  );
};

export default Homepage;
