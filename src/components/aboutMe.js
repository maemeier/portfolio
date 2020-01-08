import React from "react";
import About from "../img/thaiAir.png";
import Title from "../components/title";

const AboutUs = () => {
  return (
    <>
      <Title title={"CODE AND DESIGN"} />
      <div className="about">
        <div className="section-center clearfix">
          <div className="about-img">
            <div className="about-picture-container">
              <img src={About} alt="tea kettle" className="about-picture" />
            </div>
          </div>

          <div className="about-info">
            <div>
              <h2 className="middleTitle">
                &#60; Hello World! My name is Kangsadan, Web Developer and
                Graphic Designer />
              </h2>
            </div>

            <p className="about-text">
              I have been working in a design field for over 5 years and always
              interested in front-end development & web design. I am also open
              to learn from any projects that challenge my intellect,
              creativity, and problem sloving skills. So if you are looking for
              Front-end developer who loves to use react and capable of spending
              whole day fixing bugs, just scroll down a little bit to the end of
              the page till you find my contact! Hope to hear from you soon.--{" "}
              <a className="link" href="https://github.com/maemeier">
                <strong>Check my GitHub</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
