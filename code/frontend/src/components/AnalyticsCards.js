
import React from "react";
import { analyticsData } from "./data";
import "./AnalyticsCards.css";

function AnalyticsCards() {
  return (
    <div className="analytics-cards">
      {analyticsData.map((data, index) => (
        <div key={index} className="card glass-card">
          <span className="icon">{data.icon}</span>
          <h3>{data.followers}</h3>
          <p>{data.platform}</p>
        </div>
      ))}
    </div>
  );
}

export default AnalyticsCards;
