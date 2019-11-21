import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import initStore from './config/store/indexStore.js';
import BodyContainer from './containers/BodyContainer';

const store = initStore();

function App() {
  return (
    <Provider store={ store } >
      <div className="App">
        <header className="App-header">
          Header
        </header>
        <section>
          <BodyContainer />
        </section>
        <footer>
          Footer
        </footer>
      </div>
    </Provider>
  );
}

export default App;
