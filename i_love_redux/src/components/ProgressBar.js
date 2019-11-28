import React from 'react';

function ProgressBar(props) {
  let { progressValue } = props;

  return (
    <div>
      { progressValue } %
    </div>
  );
}

export default ProgressBar;