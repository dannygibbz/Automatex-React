import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Custom Engagements",
    text: "Developing custom engagements and experiences within Gainsight PX to align with specific product and brand requirements.",
  },
  {
    title: "User Segmentation and Lists",
    text: "Audience Explorer Training: Providing training on using Audience Explorer in Gainsight PX to segment users effectively.",
  },
  {
    title: "Account-Level Insights",
    text: "Analyzing account-level data and metrics to provide valuable insights and recommendations.",
  },
  {
    title: "Advanced Reporting and Dashboards",
    text: "Creating and customizing reports within Gainsight PX to monitor and evaluate key metrics, trends, and user behaviors for data-driven decision-making.",
  },
];

const Features = () => (
  <div className="automatex__features section__padding" id="features">
    <div className="automatex__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It. Step into Future
        Today. & Make it Happen.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="automatex__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
