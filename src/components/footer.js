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
            <div className="footerBg-background">
              <p className="footText">
                <a href="https://github.com/maemeier">
                  {" "}
                  <i className="github icon"></i>
                </a>
                <i className="link pinterest icon"></i>
                <i className="link linkedin icon"></i>
                <i className="link instagram icon"></i>
              </p>
            </div>
          </div>
        </div>
      </FooterElement>
    </div>
  );
};

const FooterElement = styled.div`
  i {
    padding: 30px;
  }
  .footerBg-background {
    height: 150px;
  }
  a {
    color: white;
  }
`;
export default Footer;
