import React from 'react';
import './dashboardHome.scss'; // Import your SCSS file for styling

const DashboardHome: React.FC = () => {
  return (
    <div className="dashboard-home">
      <h2>Welcome to Dashboard</h2>
      <p>This is the Dashboard homepage.</p>
      <p>You can start navigating through the sidebar on the left.</p>
    </div>
  );
};

export default DashboardHome;
