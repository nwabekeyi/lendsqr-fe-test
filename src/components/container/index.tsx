import React, { ComponentType } from 'react';
import './container.scss'; // Example style file

// Define additional props for the wrapper component, if any
interface WrappedComponentWrapperProps {
  // Define any additional props you want to pass to the wrapped component
}

function WrapperContainer<P extends object>(WrappedComponent: ComponentType<P & WrappedComponentWrapperProps>) {
  const EnhancedComponent: React.FC<P> = (props) => {
    return (
      <div className="wrapper-container">
        <WrappedComponent {...props as P & WrappedComponentWrapperProps} />
      </div>
    );
  };

  return EnhancedComponent;
}

export default WrapperContainer;
