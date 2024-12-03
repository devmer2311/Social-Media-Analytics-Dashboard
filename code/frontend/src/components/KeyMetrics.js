// src/components/KeyMetrics.js
import React from "react";
import { keyMetricsData } from "./data";
import "./KeyMetrics.css";

function KeyMetrics() {
  return (
    <div className="key-metrics glass-card">
      <h2>Key Metrics</h2>
      {keyMetricsData.map((data, index) => (
        <div key={index} className="metric">
          <p>{data.metric}</p>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${(data.value / data.target) * 100}%` }}
            ></div>
          </div>
          <span>
            {data.value}/{data.target}
          </span>
        </div>
      ))}
    </div>
  );
}

export default KeyMetrics;
