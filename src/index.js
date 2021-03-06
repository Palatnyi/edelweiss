import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import EdelweissRouter from './Router.jsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <EdelweissRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root1')
);
