// src/components/Button.tsx

import React, { ButtonHTMLAttributes } from 'react';
import './button.scss'; // Import module-specific SCSS
import { IconType } from 'react-icons';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: any;
  login?: boolean;
  search?: boolean;

}

const Button: React.FC<ButtonProps> = ({ login, search, buttonText, ...rest }) => {

  const className: string = login ? "login" : search ? "search" : "others";
  return (
    <button className={`${className}`} {...rest}>
      {buttonText}
    </button>
  );
}

export default Button;
