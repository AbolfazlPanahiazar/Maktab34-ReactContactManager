import React, { Component } from "react";
import "./ContactContainerBody.scss";
import ContactCard from "../ContactCard/ContactCard";

class ContactContainerBody extends Component {
  render() {
    return (
      <div className="ContactContainerBody">
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    );
  }
}

export default ContactContainerBody;
