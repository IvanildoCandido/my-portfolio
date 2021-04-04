import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './app.css';

function App() {
  return (
    <BrowserRouter>
      <div class="principal">
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
