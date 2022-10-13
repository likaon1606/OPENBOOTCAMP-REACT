import React, { useEffect, useState } from 'react'

const ClassFunctional = () => {
    
    const personaInicial = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }
    
    const [estado, setEstado] = useState(personaInicial)

    useEffect(() => {
        const intervalId = setInterval(() => {
            actualizarPersona();
        }, 1000);
        return () => {
           clearInterval(intervalId);
        };
    });

    const actualizarPersona = () => {
        return setEstado({
            fecha: estado.fecha,
            edad: estado.edad + 1,
            nombre: estado.nombre,
            apellidos: estado.apellidos,
        });
    };

    return (
        <div>
             <h2>
                Hora Actual:
                {estado.fecha.toLocaleTimeString()}
            </h2>
            <h3>
                {estado.nombre} {estado.apellidos}
            </h3>
            <h1>Edad: {estado.edad}</h1>
        </div>
    );
};

export default ClassFunctional;