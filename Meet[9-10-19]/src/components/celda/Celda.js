import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './celda.css'

class Celda extends Component {

    clickMe = () => {
        this.props.clickCelda(this.props.numero);
    }

    render() {
        return (
          <div className="celda" onClick={this.clickMe}>
            {this.props.numero}
          </div>
        );
    }
}

Celda.propTypes = {
    clickCelda: PropTypes.func.isRequired,
    numero: PropTypes.number.isRequired,
};

export default Celda;