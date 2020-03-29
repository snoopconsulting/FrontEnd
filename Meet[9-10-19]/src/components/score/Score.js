import React from 'react'
import PropTypes from 'prop-types'
import './score.css'

function Score ({score, usuario}) {
  return(
    <div className='score-content'>
      <span>{`Usuario ${usuario}: ${score} pts`}</span>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
  usuario: PropTypes.string.isRequired,
};

export default Score;