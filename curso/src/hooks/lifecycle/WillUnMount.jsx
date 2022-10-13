/**
 * Ejemplo de uso del método componentWillUnMount para componente de clase
 * Ejemplo del uso del hooks para componente funcional
 * (Cuando el componetne va a desaparecer)
 */
import React, { Component, useEffect } from 'react';

/**
 * ?Ejemplo de componente de clase
 */


export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca');
    }

    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        );
    }
}

/**
 * ?Ejemplo de componente funcional
 */

export const WillUnMountHook = () => {
    
    useEffect(() => {
        // Aquí no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca');
        }
    }, []);

    return (
        <div>
            <h1>
                WillUnMount
            </h1>
        </div>
    );
};

