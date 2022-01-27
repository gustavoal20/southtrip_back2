import React from 'react';
import Login from '../components/Login/Login';
import Barrainferior from '../components/Barrainferior/Barrainferior';
import Barrasuperior from '../components/Barrasuperior/Barrasuperior';


const LoginView = (props) => {
  return (
    <div className="App">
      <Barrasuperior />
        <br/>
        <dr/>
        <Login />
        <br/>
        <dr/>
      <Barrainferior />

    </div>
  );
}

export default LoginView;