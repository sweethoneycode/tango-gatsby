import React from "react";

import tangoFB from "../images/tango-facebook-icon.svg";
import tangoIG from "../images/tango-instagram-icon.svg";
import tangoLI from "../images/tango-linkedin-icon.svg";

import { FooterWrapper } from "./styles/FooterStyles";

const Footer = () => (
  <FooterWrapper>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="whiteText">Contact</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h3>Joe</h3>
          <p className="tango-contact">
            <a href="mailto:">Joe</a>
          </p>
          <p className="tango-contect">555-555-5555</p>
          <span className="social">
            <a target="_blank" rel="noopener noreferrer" href="#">
              <img src={tangoLI} alt="tango-li" />
            </a>
          </span>
        </div>
        <div className="col-md-4">
          <h3>Joe</h3>
          <p className="tango-contact">
            <a href="mailto:">Joe</a>
          </p>
          <p className="tango-contect">555-555-5555</p>
          <span className="social">
            <a target="_blank" rel="noopener noreferrer" href="#">
              <img src={tangoLI} alt="tango-li" />
            </a>
          </span>
        </div>
        <div className="col-md-4">
          <h3>Joe</h3>
          <p className="tango-contact">
            <a href="mailto:">Joe</a>
          </p>
          <p className="tango-contect">555-555-5555</p>
          <span className="social">
            <a target="_blank" rel="noopener noreferrer" href="#">
              <img src={tangoLI} alt="tango-li" />
            </a>
          </span>
        </div>
      </div>
    </div>
  </FooterWrapper>
);

export default Footer;
