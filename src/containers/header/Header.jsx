import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import moon from "../../assets/moon.png";
import "./header.css";

const Header = () => (
  <div className="automatex__header section__padding" id="home">
    <div className="automatex__header-content">
      <h1 className="gradient__text">
        Let&apos;s Build Amazing Experiences Together
      </h1>
      <p>
        From implementation, support, custom engagements and PX strategy. From
        implementation, support, custom engagements and PX strategyFrom
        implementation, support, custom engagements and PX strategyFrom
        implementation, support, custom.
      </p>

      <div className="automatex__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="automatex__header-content__people">
        <img src={people} />
        <p>1,600 people requested meetings in last 24 hours</p>
      </div>
    </div>

    <div className="automatex__header-image">
      <img src={moon} />
    </div>
  </div>
);

export default Header;
