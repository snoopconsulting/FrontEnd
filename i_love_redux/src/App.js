import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import initStore from './config/store/indexStore.js';
import VideoContainer from './containers/VideoContainer';

const store = initStore();

function App() {
  return (
    <Provider store={ store } >
      <div className="App">
        <header className="App-header">
          Header
        </header>
        <section>
          <VideoContainer />
        </section>
        <footer>
          Footer
        </footer>
      </div>
    </Provider>
  );
}

export default App;
