import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {// metodo, transforma JSX em HTML e devolve para as instancias (atibutos da class), render só retorna uma tag de html
    return (// componente
      /*no jsx nao podemos criar class para hmtl e sim CLASSNAME , pois o render altera classname apra class*/ 
      <div className="App"> 
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      </div>
    );
  }
}

export default App; // export para importar o app em outro lugar 
