import React from 'react';
import buttonStyle from '../assets/styles/buttonStyle';
import playImg from '../assets/images/play.svg';
import pauseImg from '../assets/images/pause.svg';

function Button(props) {
  let { isButtonPlay } = props;

  return (
    <div style={buttonStyle.box}>
      { isButtonPlay ?
        <img style={buttonStyle.img} src={pauseImg} alt='Stop' /> :
        <img style={buttonStyle.img} src={playImg} alt='Play' /> }
    </div>
  );
}

export default Button;