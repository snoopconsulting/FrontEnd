import React from 'react'
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import Score from './components/score/Score'
import Timer from './components/timer/Timer'
import './App.css'

const store = configureStore();

function App() {
  return (
    <Provider store={ store } >
      <div className="App">
        <div className="App-header">
          <Score score={0} usuario={1} />
          <Timer start={false}/>
          <Score score={0} usuario={2} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
