import React, { useState } from "react";
import Contact from "../models/contact.class";
import ContactComponent from "./contact";
import ContactForm from "./contactForm";

import '../styles/index.scss';

const ContactListComponent = () => {
  const defaultContact = new Contact("Juanito", "Pérez");
  const defaultContact2 = new Contact("Jazmín", "Solar");
  const defaultContact3 = new Contact("Zaid", "Fuentes");

  // State of component
  const [contacts, setContacts] = useState([
    defaultContact,
    defaultContact2,
    defaultContact3,
  ]);

  // const [loading, setLoading] = useState([true]); //true, por defecto está cargando

  // useEffect(() => {
  //   console.log("Contact State has been modified");
  //   setLoading(false); //ya no está cargando
  //   return () => {
  //     console.log("ComponentList is going to unmount");
  //   };
  // }, [contacts]);

  // ? Conected or desconected BUTTON
  function conectedContact(contact) {
    console.log("complete this contact: ", contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].conected = !tempContacts[index].conected;
    setContacts(tempContacts);
  }

  // ? DELETE TASK BUTTON
  function deleteContact(contact) {
    console.log('Delete this Contact', contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  }

  // ? ADD TASKS
  function addContact(contact) {
    console.log('ADD this Contact', contact);
    
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  return (
    <div className="p-3 mb-2 bg-light text-dark">
      <div className="col-12">
        <div className="card">
          {/* Card Header (title) */}
          <div className="card-header ">
            <h5>Your Contacts:</h5>
          </div>
        </div>
        {/* Card Body (content) */}
        <div
          className="card-body"
          data-mdb-perfect-scrollbar="true"
          style={{ position: "relative", height: "400px" }}
        >
          <table>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Inline</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
            {contacts.map((contact, index) => {
                return <ContactComponent 
                key={index} 
                contact={contact}
                conected={conectedContact} 
                deleted={deleteContact}   
                >
                </ContactComponent>;
              })}
            </tbody>
          </table>
        </div>
      </div>
      <ContactForm add={addContact}></ContactForm>
    </div>
  );
};

export default ContactListComponent;
