import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './Layout'
import "aos/dist/aos.css";

import { BrowserRouter as Router } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Layout />
  </Router>
);

