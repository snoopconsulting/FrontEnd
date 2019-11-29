import React from 'react';
import progressBarStyle from '../assets/styles/progressBarStyle';

function ProgressBar(props) {
  let { progressValue } = props;

  return (
    <div style={progressBarStyle.box}>
      <div style={{width:`${progressValue}0%`, backgroundColor: '#CE1919', height: 20}} />
    </div>
  );
}

export default ProgressBar;