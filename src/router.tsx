// AppRouter.tsx

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LazyExoticComponent, ComponentType } from 'react';
import { LoadingSpinner } from './components';

// Lazy-loaded components
const Login: LazyExoticComponent<ComponentType<{}>> = lazy(() => import('./pages/login'));
const Dashboard: LazyExoticComponent<ComponentType<{}>> = lazy(() => import('./pages/dashboard'));

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
