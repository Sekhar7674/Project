import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderElement from './Header';
import FooterElement from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderElement/>
    <App />
    <FooterElement/>
  </React.StrictMode>
);

