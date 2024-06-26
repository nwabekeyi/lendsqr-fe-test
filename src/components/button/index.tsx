// src/components/Button.tsx

import React, { ButtonHTMLAttributes } from 'react';
import './button.scss'; // Import module-specific SCSS

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: any;
  login?: boolean;
  search?: boolean;
  reset?: boolean
  userDetails?: boolean;
  userDetailsRed?: boolean;

}

const Button: React.FC<ButtonProps> = ({ login, userDetailsRed, search, buttonText, reset, userDetails, ...rest }) => {

  const className: string = login ? "login"
  : search ? "search"
  :  reset ? "reset"
  : userDetails ? "user-details-button"
  :userDetailsRed ? "user-details-button-red"
  :"filtered";
  return (
    <button className={`${className}`} {...rest}>
      {buttonText}
    </button>
  );
}

export default Button;
