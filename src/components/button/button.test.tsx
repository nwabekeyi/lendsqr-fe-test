import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';

describe('Button component', () => {
  // Positive Tests
  it('renders button with correct text', () => {
    render(<Button buttonText="Submit" login={true} />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('applies correct class based on login prop', () => {
    const { rerender } = render(<Button buttonText="Submit" login={true} />);
    expect(screen.getByText('Submit')).toHaveClass('login');

    rerender(<Button buttonText="Submit" login={false} />);
    expect(screen.getByText('Submit')).toHaveClass('others');
  });

  it('applies additional HTML attributes', () => {
    render(<Button buttonText="Submit" login={true} disabled />);
    expect(screen.getByText('Submit')).toBeDisabled();
  });

  it('handles onClick events', () => {
    const handleClick = jest.fn();
    render(<Button buttonText="Submit" login={true} onClick={handleClick} />);
    fireEvent.click(screen.getByText('Submit'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Negative Tests

  it('handles absence of onClick handler without errors', () => {
    render(<Button buttonText="Submit" login={true} />);
    const button = screen.getByText('Submit');
    expect(() => fireEvent.click(button)).not.toThrow();
  });
});
