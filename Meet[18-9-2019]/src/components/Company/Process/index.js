import React, { useState, useEffect } from 'react'
import { COLORS, YELLOW, PROCESSES_SIZE } from '../../../constants/processes'

function Process({ process }) {
  const id = process.id;
  const [color, setColor] = useState(process.color);
  const [processesStopped, setProcessesStopped] = useState(0);

  useEffect(() => {
    if (color !== 'BROWN') {
      setProcessesStopped(PROCESSES_SIZE - id);
    }
  }, [color, id]);

  return (
    <div
      onClick={() => setColor(YELLOW)}
      style={{ width: 100, marginLeft: process.brother ? 400 : 0 }}>
      <span style={{
        color: '#000',
        marginBottom: 10,
        display: 'block',
        width: 100,
        height: 100,
        lineHeight: 6,
        borderRadius: 2,
        boxShadow: '3px 3px 5px 1px rgb(7, 56, 75)',
        backgroundColor: COLORS[color] }}>
          { processesStopped === 0 ? '' : `Restan ${processesStopped}` }
      </span>
      {process.title}
    </div>
  );
}

export default Process;