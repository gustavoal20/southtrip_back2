import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Barrasuperior from './components/Barrasuperior/Barrasuperior';
import Portada from './components/Portada/Portada';
import Texto from './components/Texto/Texto';
import Excursiones from './components/Excursiones/Excursiones';
import Instagram from './components/Instagram/Instagram';
import Transporte from './components/Transporte/Transporte';
import Barrainferior from './components/Barrainferior/Barrainferior';
import Login from './components/login/Login'
ReactDOM.render(
<div>
  
  <div>
    <Login/> 
  <Barrasuperior/>
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
