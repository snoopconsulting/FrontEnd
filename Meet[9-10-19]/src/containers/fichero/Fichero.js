import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ficha from '../../components/ficha/Ficha';

import './fichero.css';

class Fichero extends Component {     
    render() {   
        const { tokens } = this.props;
        return (
            <div className="fichero-container">
                {this.renderFichas(tokens)}
            </div>
        );
    }

    renderFichas(tokens = 5) {
        for (let i = 0; i < tokens; i++) {
            <Ficha key={i} tipo={this.props.tipo} />
        } 
    }
}

Fichero.propTypes = {
    tipo: PropTypes.string.isRequired,
    tokens: PropTypes.number,
};


const mapStateToProps = ({ tokens }) => ({ tokens });

export default connect(mapStateToProps, null)(Fichero);