import React, { Component } from 'react'
import Company from './components/Company'
import getProcesses from './services/ProcessesService'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      processes: [] // Lo a levantamos de una API Local
    };

    this.init();
  }

  init = async () => {
    let processes = await getProcesses();

    if (processes) {
      this.setState({ processes: processes });
    }
  }

  render () {
    return (
      <div className="App">
        { this.state.processes ?
            <Company listProcesses={this.state.processes} />
          :
            "Cargando..."
        }
      </div>
    );
  }
}

export default App;
