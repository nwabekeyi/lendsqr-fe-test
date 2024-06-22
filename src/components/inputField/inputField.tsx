// src/components/InputField/InputField.tsx

import React, { InputHTMLAttributes, useState } from 'react';
import './inputField.scss'; 

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fieldType?: 'login' | 'search';
}

const InputField: React.FC<InputFieldProps> = ({ label, fieldType, type, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const isPasswordField = type === 'password';
  const inputType = isPasswordField && showPassword ? 'text' : type;

  const className = fieldType === 'login' ? 'loginField' : 'searchField';

  return (
    <div className="inputField">
      <input className={className} type={inputType} {...rest} />
      {isPasswordField && (
        <button type="button" className="togglePassword" onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
      )}
    </div>
  );
}

export default InputField;
