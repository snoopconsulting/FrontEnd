import React from 'react'
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import Header from './containers/Header'
import './App.css'

const store = configureStore();

function App() {
  return (
    <Provider store={ store } >
      <div className="App">
        <Header />
      </div>
    </Provider>
  );
}

export default App;
