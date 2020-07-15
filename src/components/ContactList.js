import React from 'react';
import Contact from "./Contact";

function ContactList({contacts}) {
    return (
        <div>
            {contacts.map(contact => <Contact {...contact} />)}
        </div>
    )
}

export default ContactList