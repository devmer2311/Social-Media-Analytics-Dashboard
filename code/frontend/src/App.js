import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MyCalendar from './components/Calendar'; 
import AnalyticsCards from './components/AnalyticsCards';
import KeyMetrics from './components/KeyMetrics';
import Chart from './components/Chart';

import './App.css';

const App = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="analytics-cards">
          <AnalyticsCards />
        </div>
        <div className="chart-container">
          <Chart />
        </div>
        <div className="key-metrics-calendar-container">
          <div className="key-metrics">
            <KeyMetrics />
          </div>
          <div className="calendar">
            <MyCalendar /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
