
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from './index';

describe('InputField component', () => {
  // Positive Tests
  it('renders input field with correct class for login field type', () => {
    render(<InputField fieldType="login" type="text" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('loginField');
  });

  it('renders input field with correct class for search field type', () => {
    render(<InputField fieldType="search" type="text" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('searchField');
  });


  // Negative Tests
  it('does not render password toggle button if type is not password', () => {
    render(<InputField type="text" />);
    const button = screen.queryByRole('button');
    expect(button).toBeNull();
  });


  it('handles absence of onChange handler without errors', () => {
    render(<InputField type="text" />);
    const input = screen.getByRole('textbox');
    expect(() => fireEvent.change(input, { target: { value: 'test' } })).not.toThrow();
  });
});
