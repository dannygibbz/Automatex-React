import React from "react";
import automatexLogo from "../../logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="automatex__footer section__padding">
    <div className="automatex__footer-heading">
      <h1 style={{ color: "white" }}>
        Do you want to step in to the future before others?
      </h1>
    </div>

    <div className="automatex__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="automatex__footer-links">
      <div className="automatex__footer-links_logo">
        <img src={automatexLogo} alt="automatex_logo" />
        <p>
          Bryan Paul & Daniel Gibbons <br /> All Rights Reserved
        </p>
      </div>
      <div className="automatex__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="automatex__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="automatex__footer-links_div">
        <h4>Get in touch</h4>
        <p>AutomateX</p>
        <p>(267)-221-8743</p>
        <p>hello@automatexinsights.com</p>
      </div>
    </div>

    <div className="automatex__footer-copyright">
      <p>@2023 AutomateX. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
