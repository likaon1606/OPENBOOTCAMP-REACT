import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact'
import ComponentB from './componentB';

function ComponentA({ contact }) {
  return (
    <div>
      <h2>Nombre: {contact.nombre}</h2>
      <h3>Apellidos: {contact.apellido}</h3>
      <h3>Email: {contact.email}</h3>
      <ComponentB estado={true} />
    </div>
  );
}

ComponentA.propTypes = {
  contacto: PropTypes.instanceOf(Contact),
};

export default ComponentA;