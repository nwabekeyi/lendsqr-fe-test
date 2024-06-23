import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoadingSpinner from '.'

describe('LoadingSpinner', () => {
  it('renders with default text', () => {
    const { getByText, getByAltText } = render(<LoadingSpinner />);

    // Check for the default text
    expect(getByText('Page is loading...')).toBeInTheDocument();
    // Check if the logo is present
    expect(getByAltText('company logo')).toBeInTheDocument();
  });

  it('renders with provided text', () => {
    const { getByText, getByAltText } = render(<LoadingSpinner text="Loading your data..." />);

    // Check for the provided text
    expect(getByText('Loading your data...')).toBeInTheDocument();
    // Check if the logo is present
    expect(getByAltText('company logo')).toBeInTheDocument();
  });

  it('renders the spinner element', () => {
    const { container } = render(<LoadingSpinner />);
    // Check if the spinner element is present
    const spinnerElement = container.querySelector('.spinner');
    expect(spinnerElement).toBeInTheDocument();
  });

  it('does not render incorrect text', () => {
    const { queryByText } = render(<LoadingSpinner text="Loading your data..." />);

    // Ensure incorrect text is not present
    expect(queryByText('Page is loading...')).not.toBeInTheDocument();
  });
});
