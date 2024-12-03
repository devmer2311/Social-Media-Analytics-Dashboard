import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Social Dashboard</h2>
      <ul>
        <li>Overview</li>
        <li>Analytics</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
