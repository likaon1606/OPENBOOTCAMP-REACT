import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ComponentB(estado) {
  const [conectado, setConectado] = useState(estado);
  return (
    <div>
      <h3> {conectado === false ? 'Contacto no disponible' : 'Contacto En linea'}</h3>
      <button onClick={() => setConectado(!conectado)}>{conectado === true ? 'Conectado' : 'Desconectado'}</button>
    </div>
  );
}

ComponentB.propTypes = {
  estado: PropTypes.bool,
};

export default ComponentB;