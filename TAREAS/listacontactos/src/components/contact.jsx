import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";

// import '../styles/index.scss';

const ContactComponent = ({ contact, conected, deleted }) => {

    useEffect(() => {
        console.log('Created Contact');
        return () => {
            console.log(`Contact: ${contact.name} is going to un mount`);
        }
    }, [contact]);

    function contactConectedIcon() {
        if(contact.conected) {
            return (<i onClick={() => conected(contact)} className='bi-toggle-on contact-action' style={{color: 'green'}}></i>)
        } else {
            return (<i onClick={() => conected(contact)} className='bi-toggle-off contact-action' style={{color: 'grey'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <td className='align-middle'>
                <span>{contact.lastName}</span>
            </td>
            <td className='align-middle'>
            {contactConectedIcon()}
            </td>
            <td className='align-middle'>
                <i onClick={() => deleted(contact)} className='bi-trash contact-action' style={{color: 'tomato'}}></i>
            </td>
        </tr>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired, //es una tarea
    conected: PropTypes.func.isRequired,
    deleted: PropTypes.func.isRequired
};

export default ContactComponent;
