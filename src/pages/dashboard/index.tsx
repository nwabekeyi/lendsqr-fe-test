import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './navBar';
import SideNav from './sideNav';
import DashboardHome from './dashboardHome';
import Users from './userPage';
import './dashBoard.scss';

const Dashboard: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(window.innerWidth > 768);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Extract the current NavLink title
  const getCurrentNavLinkTitle = () => {
    const path = location.pathname;
    
    const categories = [
      {
        title: 'CUSTOMERS',
        links: [
          { title: 'Users', path: '/dashboard/users' },
          { title: 'Guarantors', path: '' },
          { title: 'Loans', path: '' },
          { title: 'Decision Models', path: '' },
          { title: 'Savings', path: '' },
          { title: 'Loan Requests', path: '' },
          { title: 'Whitelist', path: '' },
          { title: 'Karma', path: '' },
        ],
      },
      {
        title: 'BUSINESSES',
        links: [
          { title: 'Organization', path: '' },
          { title: 'Loan Products', path: '' },
          { title: 'Savings Products', path: '' },
          { title: 'Fees and Charges', path: '' },
          { title: 'Transactions', path: '' },
          { title: 'Services', path: '' },
          { title: 'Service Account', path: '' },
          { title: 'Settlements', path: '' },
          { title: 'Reports', path: '' },
        ],
      },
      {
        title: 'SETTINGS',
        links: [
          { title: 'Preferences', path: '/dashboard/preferences' },
          { title: 'Fees and Pricing', path: '/dashboard/fees-and-pricing' },
          { title: 'Audit Logs', path: '/dashboard/audit-logs' },
        ],
      },
    ];

    for (const category of categories) {
      for (const link of category.links) {
        if (link.path === path) {
          return link.title;
        }
      }
    }

    return 'Dashboard';
  };

  return (
    <div className="dashboard">
      <div className="nav">
        <Navbar toggleNav={toggleNav} isOpen={isOpen} />
      </div>
      <div className="content">
        {isOpen && <SideNav />}
        <div className="widgets">
          <div className="current-title">{getCurrentNavLinkTitle()}</div>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/users/*" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
