import React from 'react';

function Timer(props) {
  let { timeValue } = props;

  return (
    <div>
      { timeValue }
    </div>
  );
}

export default Timer;