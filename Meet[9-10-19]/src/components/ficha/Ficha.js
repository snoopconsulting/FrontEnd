import React, { Component } from 'react';
import { TYPE_X, TYPE_O} from './../../utils/constants';
import PropTypes from 'prop-types';

class Ficha extends Component {
    render() {
        return (
            <div className="ficha">
                <button>
                    { this.props.tipo === 'TYPE_X' ? 'x' : 'o'}
                </button>
            </div>
        );
    }
}

Ficha.propTypes = {
    tipo: PropTypes.string.isRequired,
};

export default Ficha;