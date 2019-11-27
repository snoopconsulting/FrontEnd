import React from 'react'
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import Header from './containers/Header'
import Tablero from './containers/tablero/Tablero'
import Fichero from './containers/fichero/Fichero'
import { TYPE_X, TYPE_O } from './utils/constants'
import './App.css'

const store = configureStore();

function App() {
  return (
    <Provider store={ store } >
      <div className="App">
        <Header />
      </div>
      <main className="tablero">
        <Fichero />
        <Tablero />
        <Fichero />
      </main>
    </Provider>
  );
}

export default App;
