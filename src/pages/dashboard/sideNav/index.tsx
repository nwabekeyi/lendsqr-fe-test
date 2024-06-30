// src/components/SideNav/SideNav.tsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from '../../../components/dropDown/dropDown';
import './sideNav.scss';
import { WrapperContainer } from '../../../components';
import audit from "../../../assets/sideNav/audit-log.png";
import users from "../../../assets/sideNav/users.png";
import guarantors from "../../../assets/sideNav/guarantors.png";
import loans from "../../../assets/sideNav/loan.png";
import decision from "../../../assets/sideNav/decision-models.png";
import savings from "../../../assets/sideNav/savings.png";
import request from "../../../assets/sideNav/loan-request.png";
import whitelist from "../../../assets/sideNav/white-list.png";
import karma from "../../../assets/sideNav/karna.png";
import organization from "../../../assets/sideNav/organization.png";
import product from "../../../assets/sideNav/loan-request.png";
import loan from "../../../assets/sideNav/loan-products.png";
import Sproduct from "../../../assets/sideNav/saving-products.png";
import fees from "../../../assets/sideNav/fees.png";
import transaction from "../../../assets/sideNav/transactions.png";
import services from "../../../assets/sideNav/services.png";
import serviceA from "../../../assets/sideNav/service-account.png";
import settlement from "../../../assets/sideNav/settlements.png";
import report from "../../../assets/sideNav/reports.png";
import preferences from "../../../assets/sideNav/preferences.png";
import pricing from "../../../assets/sideNav/pricing.png";
import home from "../../../assets/sideNav/home 1.png";
import organ from "../../../assets/sideNav/organization.png";






const Component: React.FC = () => {
  const organizations = [
    { value: 'Lendsqr', label: 'Lendsqr' },
    { value: 'Paystack', label: 'Paystack' },
    { value: 'Others', label: 'Others' }
  ];

  const [selectedOrganization, setSelectedOrganization] = useState<string | number>('Lendsqr');

  const categories = [
    {
      title: 'CUSTOMERS',
      links: [
        { title: 'Users', path: '/dashboard/users', icon: users },
        { title: 'Guarantors', path: '', icon: guarantors },
        { title: 'Loans', path: '', icon: loans },
        { title: 'Decision Models', path: '', icon: decision },
        { title: 'Savings', path: '', icon: savings },
        { title: 'Loan Requests', path: '', icon: request },
        { title: 'Whitelist', path: '', icon: whitelist },
        { title: 'Karma', path: '', icon: karma },
      ],
    },
    {
      title: 'BUSINESSES',
      links: [
        { title: 'Organization', path: '' , icon: organization},
        { title: 'Loan Products', path: '' , icon: product},
        { title: 'Savings Products', path: '' , icon: loan},
        { title: 'Fees and Charges', path: '' , icon: fees},
        { title: 'Transactions', path: '' , icon: transaction},
        { title: 'Services', path: '' , icon: services},
        { title: 'Service Account', path: '' , icon: serviceA},
        { title: 'Settlements', path: '' , icon: settlement},
        { title: 'Reports', path: '' , icon: report},
      ],
    },
    {
      title: 'SETTINGS',
      links: [
        { title: 'Preferences', path: '/dashboard/preferences', icon: preferences },
        { title: 'Fees and Pricing', path: '/dashboard/fees-and-pricing', icon: pricing },
        { title: 'Audit Logs', path: '/dashboard/audit-logs', icon: audit },
      ],
    },
  ];

  const onSelectOrganization = (organization: string | number) => {
    setSelectedOrganization(organization);
    console.log('Selected organization:', organization);
  };

  return (
    <aside className="sidenav container">
      <div className="organization-section">
        <img src={organ} alt= "select organization icon" className='nav-icon' />
        <Dropdown
          options={organizations}
          value={selectedOrganization}
          onSelect={onSelectOrganization}
          placeholder="Select status"
          orgSelect
        />
      </div>
      <div>
        <NavLink to="/dashboard " className="content-padding dashboard-link"><img className="nav-icon" src={home} alt= "home icon"/> Dashboard</NavLink>
      </div>
      <div className="navigation-section">
        {categories.map((category, index) => (
          <div className="nav-category " key={index}>
            <h3 className='content-padding'>{category.title}</h3>
            <ul>
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <NavLink
                    id='nav-link'
                    to={link.path}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    <img className="nav-icon" src={link.icon} alt={link.title} />
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

const SideNav: React.FC = WrapperContainer(Component);
export default SideNav;
