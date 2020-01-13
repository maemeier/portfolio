import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <FooterElement>
        <div className="container">
          <div className="footerBg">
            <a href="https://github.com/maemeier">
              {" "}
              <i className="github icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/kangsadan-palioudis-ba8017149/">
              {" "}
              <i class="linkedin icon"></i>
            </a>
            <a href="https://www.pinterest.de/fynista/">
              {" "}
              <i class="pinterest icon"></i>
            </a>
            <a href="https://www.instagram.com/fynista/">
              {" "}
              <i class="instagram icon"></i>
            </a>
            <a href="mailto:bovenden31@gmail.com">
              {" "}
              <i class="mail icon"></i>
            </a>
          </div>
        </div>
      </FooterElement>
    </div>
  );
};

const FooterElement = styled.div`
  i {
    padding: 30px;
    button: 0;
    font-size: 25px;
    justify-content: center;
    margin: 0 auto;
    color: white;
  }
  div.footerBg {
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    height: 150px;
    margin-top: 90px;
    background: linear-gradient(200deg, var(--lightBlack), var(--mainBlack));
  }

  a {
    color: black;
  }
`;
export default Footer;
