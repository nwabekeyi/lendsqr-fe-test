import React from 'react';
import './navBar.scss'; // Import SCSS file for styling
import { IoIosNotificationsOutline, IoMdArrowDropdown } from 'react-icons/io'; // Import icons
import InputField from '../../../components/inputField';
import logo from "../../../assets/companyLogo.svg";
import { NavLink } from 'react-router-dom';
import Button  from '../../../components/button';
import { IoMdSearch } from "react-icons/io";

const Navbar: React.FC = () => {
  // Dummy user data, replace with actual user data from state or context
  const userName = 'John Doe';
  const avatarImage : string = "https://avatars.githubusercontent.com/u/41685349?v=4"

  return (
    <div className="navbar">
      {/* Logo */}
      <div className='flex-container logo-container'>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

        {/* Search Input */}
        <form className="search">
            <InputField placeholder="Search for anything" />
            <Button
            className='search-button'
            buttonText= {<IoMdSearch size={15} />}
             />
        </form>
      </div>

      <div className='flex-container'>

      <NavLink to="" className="docs">Docs</NavLink>

            {/* Notification Icon */}
      <div className="notification-icon">
        <IoIosNotificationsOutline size={24} />
      </div>

      {/* Profile Avatar */}
      <div className="profile-avatar">
        <img src={avatarImage} alt="Profile Avatar" />
      </div>

      {/* User Dropdown */}
      <div className="user-dropdown">
        <div className="user-info">
          <span className="username">{userName}</span>
          <IoMdArrowDropdown size={24} />
        </div>
        {/* Dropdown content (hidden by default) */}
        <div className="dropdown-content">
          {/* Example dropdown items */}
          <a href="/">Profile</a>
          <a href="/">Settings</a>
          <a href="/">Logout</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
