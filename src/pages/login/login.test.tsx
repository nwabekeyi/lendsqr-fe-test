import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from '.'; // Adjust the path as per your actual file location

// Import useFormik from Formik
import { useFormik } from 'formik';

// Mock Formik module
jest.mock('formik', () => ({
  ...jest.requireActual('formik'), // use actual Formik functions except useFormik
  useFormik: jest.fn(), // mock the useFormik function
}));

describe('LoginForm component', () => {
  it('logs form inputs on login button click', async () => {
    // Mock useFormik's behavior
    (useFormik as jest.Mock).mockReturnValue({
      initialValues: { email: '', password: '' },
      handleSubmit: (values: any) => {
        console.log('Form values:', values); // Simulate form submission behavior
      },
    });

    render(<LoginForm />);

    // Fill in form inputs
    await userEvent.type(screen.getByPlaceholderText('Email'), 'test@example.com');
    await userEvent.type(screen.getByPlaceholderText('Password'), 'password');

    // Click on login button
    fireEvent.click(screen.getByText('LOG IN'));

    // Assertions
    expect(console.log).toHaveBeenCalledWith('Form values:', {
      email: 'test@example.com',
      password: 'password',
    });
  });
});
