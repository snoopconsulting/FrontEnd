import React from 'react'
import PropTypes from 'prop-types'
import './default.css'

function Default ({prop1}) {
  return(
    <div className='content'>
      <span>{prop1}</span>
    </div>
  );
}

Default.propTypes = {
  prop1: PropTypes.any
};

export default Default;