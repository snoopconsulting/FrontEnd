import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import initStore from './config/store/indexStore.js';
import PlayerBarContainer from './containers/PlayerBarContainer';

const store = initStore();

function App() {
  return (
    <Provider store={ store } >
      <div className="App">
        <section>
          <PlayerBarContainer />
        </section>
      </div>
    </Provider>
  );
}

export default App;
