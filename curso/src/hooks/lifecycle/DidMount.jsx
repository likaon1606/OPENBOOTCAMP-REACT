/**
 * Ejemplo de uso del método
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 * en componente funcional
 */

import React, { Component , useEffect} from 'react';

/**
 * ?Ejemplo de tipo clase
 */

export class Didmount extends Component {
    //Todo lo asincrono, se hace dentro de DidMount
    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
    }

    render() {
        return (
            <div>
               <h1>DidMount</h1> 
            </div>
        );
    }
}

/**
 * ?Ejemplo de tipo funcional
 */

export const DidmountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)');
    }, [])//? al poner [] se ejecuta una sola vez, si no ponemos nada, se ejecuta todas las veces

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
};

