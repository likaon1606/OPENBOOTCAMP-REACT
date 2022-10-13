/**
 * ?Ejemplo de todos los ciclos de vida
 */
import React, { useEffect } from 'react';


const AllCycles = () => {

    useEffect(() => {
        console.log('Componente creado');

        const intervalId = setInterval(() => {
            document.title = `${new Date()}`//Cambiara el nombre de la pestaña cada que actualice
            console.log('actualización del componente');
        }, 1000); //?Cada segundo se actualiza el componente

        return () => {
            console.log('Componente va a desaparecer');
            document.title = "Tiempo detenido"
           clearInterval(intervalId);//?Cada que actualiza desaparece
        }
    }, [])

    return (
        <div>

        </div>
    );
};

export default AllCycles;