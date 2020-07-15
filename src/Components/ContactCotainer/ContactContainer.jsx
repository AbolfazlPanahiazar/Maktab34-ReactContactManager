import React, { Component } from "react";
import CotanctContainerHeder from "../CotanctContainerHeder/CotanctContainerHeder";
import ContactContainerBody from "../ContactContainerBody/ContactContainerBody";

class ContactContainer extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { id: "2d51f", name: "Sam Smith", phone: "09220382257" },
        { id: "2d5d1", name: "Taylor Swift", phone: "0325148562" },
        { id: "v57je", name: "Calum Scott", phone: "9512548-89" },
        { id: "qw73c", name: "natalie Portman", phone: "036521/542" },
      ],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ contacts: [...this.state.contacts, ...response] });
      });
  }

  render() {
    return (
      <main className="ContactContainer">
        <CotanctContainerHeder />
        <ContactContainerBody contacts={this.state.contacts} />
      </main>
    );
  }
}

export default ContactContainer;
