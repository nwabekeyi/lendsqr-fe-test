import logo from "../../assets/companyLogo.svg"

import React from 'react';
import './loadingSpinner.scss';

interface LoadingSpinnerProps {
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ text = 'Page is loading...' }) => {
  return (
    <div className="loading-spinner">
      <div>
        <img src={logo} alt="company logo" />
      </div>
     <div className="spinner"></div>
     <div className="loading-text">{text}</div>
    </div>
  );
};

export default LoadingSpinner;
