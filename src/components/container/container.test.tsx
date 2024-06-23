// container.test.tsx

import React from 'react';
import { render } from '@testing-library/react';
import WrapperContainer from '.'; // Adjust the path as per your actual file structure

// Dummy Component for Testing
const DummyComponent: React.FC<{ message: string }> = ({ message }) => {
  return <div>{message}</div>;
};

describe('WrapperContainer', () => {
  it('renders wrapped component properly with props', () => {
    const EnhancedDummyComponent = WrapperContainer(DummyComponent);
    const { getByText } = render(<EnhancedDummyComponent message="Hello, World!" />);

    const messageElement = getByText('Hello, World!');
    expect(messageElement).toBeInTheDocument();
  });

});
