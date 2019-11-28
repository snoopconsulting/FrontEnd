import React from 'react';

function Timer(props) {
  let { timeText } = props;

  return (
    <div>
      { timeText }
    </div>
  );
}

export default Timer;