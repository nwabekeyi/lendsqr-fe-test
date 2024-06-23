// src/components/LoginForm.tsx

import React from 'react';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import './login.scss';
import { Button, InputField } from '../../components';
import loginImage from "../../assets/loginImage.png";
import companyLogo from "../../assets/companyLogo.svg";
import { useNavigate } from 'react-router-dom';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {

  const navigate = useNavigate();

  const formik: FormikProps<LoginFormValues> = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values: LoginFormValues) => {
      console.log('Form values:', values);
      navigate('/dashboard')
    },
  });

  return (
    <div className="login-form-container">
      <div className="login-images">
        <img src={companyLogo} className="logo" alt="companyLogo" />
        <img src={loginImage} id="image" alt="login image" />
      </div>
      <img src={companyLogo} className="logo-mobile" alt="companyLogo" />
      <div className="login-form">
        <div className="login-message">
          <strong className="login-header">Welcome!</strong>
          <p className="login-text">Enter details to login.</p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <InputField
            fieldType="login"
            type="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <InputField
            fieldType="login"
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
          <p className='forget-password'>FORGOT PASSWORD?</p>
          <Button login buttonText="LOG IN" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
