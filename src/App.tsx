// App.tsx

import React from 'react';
import './styles/main.scss';
import LoginForm from './pages/login/login.tsx';

const App: React.FC = () => {
  return (
    <div className="app">
      <LoginForm/> 
  </div>
  );
}

export default App;
