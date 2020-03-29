
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './timer.css'

function Timer ({start, finishLoop, timerLoop}) {
  const [seconds, setTime] = useState(timerLoop);

  useEffect(() => {
    if(start){
      const intervalId = setInterval(() => {
          if(seconds === 0){
            finishLoop();
            setTime(timerLoop);
          }
          else{
            setTime(seconds - 1);
          }
      }, 1000);
      return () =>{
      clearInterval(intervalId);
      }
    }
  }, [seconds,start,timerLoop,finishLoop]);

  return(
    <div className='timer-content'>
      <span>{seconds}</span>
    </div>
  );
}

Timer.propTypes = {
  start: PropTypes.bool.isRequired,
  finishLoop: PropTypes.func.isRequired,
};

export default Timer;
