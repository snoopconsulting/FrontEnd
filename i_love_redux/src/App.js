import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import initStore from './config/store/indexStore.js';
import PlayerBarContainer from './containers/PlayerBarContainer';

const store = initStore();

function App() {
  return (
    <Provider store={ store } >
      <section className="App">
        <PlayerBarContainer />
      </section>
    </Provider>
  );
}

export default App;
