import React from "react";
import Feature from "../../components/feature/Feature";
import "./WhatAutomatex.css";

const WhatAutomatex = () => (
  <div className="automatex__whatautomatex section__margin" id="wautomatex">
    <div className="automatex__whatautomatex-feature">
      <Feature
        title="What is AutomateX"
        text=" Collaborating to develop a targeted engagement strategy, leveraging Gainsight PX's capabilities to drive user adoption, feature utilization, and customer satisfaction, defining engagement goals, creating tailored messaging, and implementing effective tactics.*Services marked with an asterisk are strategy-focused offerings where consultants work closely with clients to develop comprehensive strategies aligned with their business objectives and leveraging the capabilities of Gainsight PX*"
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
