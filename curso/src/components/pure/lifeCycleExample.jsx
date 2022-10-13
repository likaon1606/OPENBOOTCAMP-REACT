/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia del componente');
    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente');
    }

    componentDidMount() {
        console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de redenderizarlo');
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECEIVERPROPS: Si va a recibir nuevas props');
    }

    shouldComponentUpdate(nextProps, nextState) {
        //return true / false
        /**
         * Controla si el componente debe o no actualizarse
         */
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILLUPDATE: Justo antes de actualizarse');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DIDUPDATE: Justo después de actualizarse el componente');
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: Justo antes de desaparecer');
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

LifeCycleExample.propTypes = {

};

export default LifeCycleExample;