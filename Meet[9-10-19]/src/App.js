import React from 'react'
import Score from './components/score/Score'
import Timer from './components/timer/Timer'
import Tablero from './containers/tablero/Tablero'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Score score={0} usuario={1} />
        <Timer start={false}/>
        <Score score={0} usuario={2} />
      </div>
      <main className="tablero">
        <Tablero />
      </main>
    </div>
  );
}

export default App;
