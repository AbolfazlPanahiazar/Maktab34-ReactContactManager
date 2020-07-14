import React, { Component } from "react";
import CotanctContainerHeder from "../CotanctContainerHeder/CotanctContainerHeder";
import ContactContainerBody from "../ContactContainerBody/ContactContainerBody";

class ContactContainer extends Component {
  render() {
    return (
      <main className="ContactContainer">
        <CotanctContainerHeder />
        <ContactContainerBody />
      </main>
    );
  }
}

export default ContactContainer;
