import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './timer.css'

function Timer ({start, finishLoop, timerLoop}) {
  let time = timerLoop;

  const run = () => {
    setInterval(() => {
      if(start){
        debugger;
      time= time -1;
      if (time == 0){
        finishLoop();
      }
    }
    }, 1000);
  }

  run();

  return(
    <div className='timer-content'>
      <span>{time}</span>
    </div>
  );
}

Timer.propTypes = {
  start: PropTypes.bool.isRequired,
  finishLoop: PropTypes.func.isRequired,
};

export default Timer;