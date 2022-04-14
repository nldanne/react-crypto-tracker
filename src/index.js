import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import CryptoContext from './CryptoContext';

import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <StrictMode> 
    <BrowserRouter>
     <CryptoContext>
        <App />
      </CryptoContext>
    </BrowserRouter>
  </StrictMode>
);

