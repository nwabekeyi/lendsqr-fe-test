// App.tsx

import React from 'react';
import './styles/main.scss';
import AppRouter from './router';

const App: React.FC = () => {
  return (
    <div id="app">
      <AppRouter/> 
  </div>
  );
}

export default App;
