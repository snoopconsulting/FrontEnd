import React from 'react';

function Button(props) {
  let { buttonText } = props;

  return (
    <div style={{backgroundColor: 'red', cursor: 'pointer'}}>
      { buttonText }
    </div>
  );
}

export default Button;