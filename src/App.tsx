// App.tsx

import React from 'react';
import './styles/main.scss';
import AppRouter from './router';

const App: React.FC = () => {
  return (
    <div id="app" style={{overflowY: "auto"}}>
      <AppRouter/> 
  </div>
  );
}

export default App;
