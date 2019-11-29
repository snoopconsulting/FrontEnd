import React from 'react';
import timerStyle from '../assets/styles/timerStyle';

function Timer(props) {
  let { timeValue } = props;
  let seconds = timeValue < 10 ? `0${timeValue}` : timeValue;

  return (
    <div style={timerStyle.box}>
      { `00 : ${seconds}` }
    </div>
  );
}

export default Timer;