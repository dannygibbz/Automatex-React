import React from "react";
import possibilityImage from "../../assets/possibility.png";
import robot from "../../assets/robot.png";
import "./possibility.css";

const Possibility = () => (
  <div className="automatex__possibility section__padding" id="possibility">
    <div className="automatex__possibility-image">
      <img src={robot} alt="possibility" />
    </div>
    <div className="automatex__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        The possibilities are <br /> beyond your imagination
      </h1>
      <p>
        Collaborating to develop a targeted engagement strategy, leveraging
        Gainsight PX's capabilities to drive user adoption, feature utilization,
        and customer satisfaction, defining engagement goals, creating tailored
        messaging, and implementing effective tactics.*
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
