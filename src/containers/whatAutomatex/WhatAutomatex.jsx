import React from "react";
import Feature from "../../components/feature/Feature";
import "./WhatAutomatex.css";

const WhatAutomatex = () => (
  <div className="automatex__whatautomatex section__margin" id="wautomatex">
    <div className="automatex__whatautomatex-feature">
      <Feature
        title="What is AutomateX"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
    </div>
    <div className="automatex__whatautomatex-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore our Services</p>
    </div>
    <div className="automatex__whatautomatex-container">
      <Feature
        title="Data Analysis & Insight"
        text="Usage patterns, engagement metrics, and user behavior within specific accounts, providing valuable insights for account-based strategies."
      />
      <Feature
        title="User Engagement & Feedback"
        text="User Behavior Insights: Leveraging user behavior tracking capabilities of Gainsight PX to uncover actionable insights into how users interact with the product, including feature usage, user flows, and areas for optimization."
      />
      <Feature
        title="Strategy Development & Planning"
        text=" Collaboratively developing a comprehensive strategy to leverage Gainsight PX's automation capabilities and enhance product experience, identifying automation opportunities, goals, and success metrics."
      />
    </div>
  </div>
);

export default WhatAutomatex;
