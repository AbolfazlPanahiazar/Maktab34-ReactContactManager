import React from "react";
import "./ContactContainerBody.scss";
import ContactCard from "../ContactCard/ContactCard";

function ContactContainerBody(props) {
  return (
    <div className="ContactContainerBody">
      {props.contacts.map((contact, index) => (
        <ContactCard key={index} contact={contact} />
      ))}
    </div>
  );
}

export default ContactContainerBody;
