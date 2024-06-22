// src/components/Button.tsx

import React, { ButtonHTMLAttributes } from 'react';
import './button.scss'; // Import module-specific SCSS

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  login: boolean;
}

const Button: React.FC<ButtonProps> = ({ login, buttonText, ...rest }) => {

  const className: string = login ? "login" : "others"
  return (
    <button className={`${className}`} {...rest}>
      {buttonText}
    </button>
  );
}

export default Button;
