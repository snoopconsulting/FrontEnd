import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Celda from "../../components/celda/Celda";


class Tablero extends Component {
    clickCelda = (key) => {
        alert(key)
    }
    render() {
        return (
            <div className='estilo_grilla'>
                <table>
                    <tbody>
                        <tr>
                            <td><Celda numero={1} clickCelda={this.clickCelda} /></td>
                            <td><Celda numero={2} clickCelda={this.clickCelda} /></td>
                            <td><Celda numero={3} clickCelda={this.clickCelda} /></td>
                        </tr>
                        <tr>
                            <td><Celda numero={4} clickCelda={this.clickCelda} /></td>
                            <td><Celda numero={5} clickCelda={this.clickCelda} /></td>
                            <td><Celda numero={6} clickCelda={this.clickCelda} /></td>
                        </tr>
                        <tr>
                            <td><Celda numero={7} clickCelda={this.clickCelda} /></td>
                            <td><Celda numero={8} clickCelda={this.clickCelda} /></td>
                            <td><Celda numero={9} clickCelda={this.clickCelda} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Tablero.propTypes = {

};

export default Tablero;