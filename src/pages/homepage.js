import React from "react";
import Header from "../components/header";
import Card from "../components/card";
import Banner from "../components/banner";
import Footer from "../components/footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner
        title={"Make It Simple, but Significant"}
        name={"Projects coding"}
        button={"back to home"}
      />
      <Card />
      <Footer />
    </div>
  );
};

export default Homepage;
