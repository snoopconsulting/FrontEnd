import React from 'react';
import buttonStyle from '../assets/styles/buttonStyle'

function Button(props) {
  let { buttonText } = props;

  return (
    <div style={buttonStyle.box}>
      { buttonText }
    </div>
  );
}

export default Button;