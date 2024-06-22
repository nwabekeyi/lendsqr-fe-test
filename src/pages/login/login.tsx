// src/components/LoginForm.tsx

import React from 'react';
import './login.scss'; 
import Button from '../../components/button.tsx/button';
import InputField from '../../components/inputField/inputField';
import loginImage from "../../assets/loginImage.png"
import companyLogo from "../../assets/companyLogo.svg"


const LoginForm: React.FC = () => {
  return (
    <div className="login-form-container">
      

      <div className="login-images">
      <img src={companyLogo} className="logo" alt="companyLogo" />

        {/* Placeholder for large picture */}
        <img src={loginImage} id="image" alt="login image" />
      </div>
      <img src={companyLogo} className="logo-mobile" alt="companyLogo" />

      <div className="login-form">
      <div className="login-message">
      <strong className="login-header">Welcome!</strong>
      <p className="login-text">Enter detials to login.</p>
      </div>
        <form>
        <InputField fieldType="login" type="email" placeholder="Email" />
        <InputField fieldType="login" type="password" placeholder="Password" />
          <p className='forget-password'>FORGOT PASSWORD?</p>
          <Button login buttonText="LOG IN"/>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
