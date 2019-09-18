import React from 'react'
import Process from './Process/indexClass'
import PropTypes from 'prop-types'

const viewProcess = (p, i) => {
  return <Process key={i} process={p} />
}

const Company = ({ listProcesses }) => {
  return (
    <div style={{ margin: '0 auto', width: 500 }}>
      <h2>Procesos</h2>
      { listProcesses.map((p, i) => {
        return viewProcess(p, i);
      }) }
    </div>
  );
}

Company.propTypes = {
  listProcesses: PropTypes.array
}

export default Company;