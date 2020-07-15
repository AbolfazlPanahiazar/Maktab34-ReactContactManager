import React, { Component } from "react";
import "./ContactContainerBody.scss";
import ContactCard from "../ContactCard/ContactCard";

class ContactContainerBody extends Component {
  render() {
    return (
      <div className="ContactContainerBody">
        {this.props.contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default ContactContainerBody;
