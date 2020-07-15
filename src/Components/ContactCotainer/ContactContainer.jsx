import React, { Component } from "react";
import CotanctContainerHeder from "../CotanctContainerHeder/CotanctContainerHeder";
import ContactContainerBody from "../ContactContainerBody/ContactContainerBody";
import "./ContactContainer.scss";

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
      searchInput: "",
    };
  }

  searchInputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ contacts: [...this.state.contacts, ...response] });
      });
  }

  render() {
    const contacts = this.state.contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(this.state.searchInput.toLocaleLowerCase()));
    return (
      <main className="ContactContainer">
        <input
          onChange={this.searchInputHandler}
          type="text"
          name="searchInput"
          placeholder="Looking for someone..."
          value={this.state.searchInput}
        />
        <ContactContainerBody contacts={contacts} />
      </main>
    );
  }
}

export default ContactContainer;
