import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Contact from "../models/contact.class";

import '../styles/index.scss';

const ContactForm = ({add}) => {

    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const phoneRef = useRef('');

    function addContact(e) {
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            lastNameRef.current.value,
            phoneRef.current.value,
            false
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-cemter align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact Name' />
                <input ref={lastNameRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Contact Last Name' />
            <button type='submit' className='btn btn-success btn-lg ms-2 mt-2'>Add</button>
            </div>
        </form>
    );
};

ContactForm.protoTypes = {
    add: PropTypes.func.isRequiered
};

export default ContactForm;