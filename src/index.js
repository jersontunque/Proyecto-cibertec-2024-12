import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/Header.js';
import PrincipalPage from './components/vistas/PrincipalPage.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuPage from './components/vistas/MenuPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Router>
    <Header />

    <Routes>
        <Route path="/" element={<PrincipalPage />} />
        <Route path="/menu" element={<MenuPage />} /> 
    </Routes>

    </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

