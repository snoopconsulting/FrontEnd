import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './timer.css'

function Timer ({start}) {
  const [time, setTime] = useState(4);

  useEffect(() => {
    if (start && time >= 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      setTime(4);
    }
  });

  return(
    <div className='timer-content'>
      <span>{time}</span>
    </div>
  );
}

Timer.propTypes = {
  start: PropTypes.bool.isRequired
};

export default Timer;