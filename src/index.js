import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logo from './components/Logo'
import Portada from './components/Portada';
import Texto from './components/Texto'
import Excursiones from './components/Excursiones';
import Instagram from './components/Instagram';
import Transporte from './components/Transporte';
import Barrainferior from './components/Barrainferior'

ReactDOM.render(
<div>
  
  <div>
  <Logo/>
  <Portada/>
  <br/>
  <br/>
  <Texto/>
  <br/>
  <br/>
  <Transporte/>
  <Excursiones/>
  <br/>
  <br/>
  <br/>
  <Instagram/>
  <br/>
  <br/>
  <Barrainferior/>
  </div>

  <React.StrictMode>
    <App />
  </React.StrictMode>
</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
