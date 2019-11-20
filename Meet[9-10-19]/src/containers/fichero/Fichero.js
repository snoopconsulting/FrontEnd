import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ficha from '../../components/ficha/Ficha';

import './fichero.css';

class Fichero extends Component {
    render() {
        return (
            <div className="fichero-container">
                <Ficha key={2} tipo={this.props.tipo} />
                <Ficha key={3} tipo={this.props.tipo} />
                <Ficha key={4} tipo={this.props.tipo} />
                <Ficha key={1} tipo={this.props.tipo} />
                <Ficha key={5} tipo={this.props.tipo} />
            </div>
        );
    }
}

Fichero.propTypes = {
    tipo: PropTypes.string.isRequired,
};

export default Fichero;