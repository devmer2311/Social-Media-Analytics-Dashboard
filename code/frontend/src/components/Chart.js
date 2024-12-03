
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { chartData } from "./data"; 
import "./Chart.css";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Chart() {
  return (
    <div className="chart glass-card">
      <h2>Instagram Subscribers</h2>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || "";
                  if (label) {
                    label += ": ";
                  }
                  if (context.parsed.y !== null) {
                    label += context.parsed.y;
                  }
                  return label;
                },
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Chart;
