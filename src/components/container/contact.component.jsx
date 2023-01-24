import React from 'react';
import PropTypes from 'prop-types';
import { ContactM } from '../../models/contact.class';
import UnicContactComponent from '../pure/unicContact.component';


const ContactComponent = () => {

    const defaultContact= new ContactM('Stefano', 'Räcke','stefanoracke@gmail.com', true)
    const defaultContact2= new ContactM('Carlos', 'Fernandez','carlitosF@gmail.com', false)

    return (
        <div >
            <UnicContactComponent contact={defaultContact}></UnicContactComponent>
            

                <UnicContactComponent  contact={defaultContact2}></UnicContactComponent>
            
        </div>
    );
};




export default ContactComponent;
