import React from 'react';
import PropTypes from 'prop-types';
import { ContactM } from '../../models/contact.class';


const UnicContactComponent = ({contact}) => {
    return (
        <div className='card'>
            <h2>Nombre: {contact.name}</h2>
            <h2>Apellido: { contact.lastname }</h2>
            
            <h2>email: { contact.email }</h2>
            <h3>
            
            <span  className={ contact.conected ? 'text-success' : 'text-danger'}>
             { contact.conected ? ' Contacto En Línea' : ' Contacto No Disponible'}
            </span>
            </h3>
        </div>
    );
};


UnicContactComponent.propTypes = {
    contact :PropTypes.instanceOf(ContactM)
};


export default UnicContactComponent;
