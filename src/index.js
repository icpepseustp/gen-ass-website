import React from 'react';
import ReactDOM from 'react-dom/client';
import Faculty from './components/Faculty.jsx';
import GradientWrapper from './components/GradientWrapper.jsx';
import Header from './components/Header.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Faculty/>
    <GradientWrapper/>
  </>
);

