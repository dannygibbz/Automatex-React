import React, { useState } from "react";
import icon from "../../assets/favicon.png";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="automatex__navbar">
      <div className="automatex__navbar-links">
        <div className="automatex__navbar-links_logo"></div>
        <div className="automatex__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wautomatex">About</a>
          </p>
          <p>
            <a href="#possibility">Services</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Contact</a>
          </p>
        </div>
      </div>
      <div className="automatex__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
