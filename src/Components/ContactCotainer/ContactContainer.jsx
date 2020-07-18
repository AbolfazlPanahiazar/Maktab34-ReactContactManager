import React, { useState, useEffect } from "react";
import CotanctContainerHeder from "../CotanctContainerHeder/CotanctContainerHeder";
import ContactContainerBody from "../ContactContainerBody/ContactContainerBody";

function ContactContainer() {
  const [contacts, setContacs] = useState([
    { id: "2d51f", name: "Sam Smith", phone: "09220382257" },
    { id: "2d5d1", name: "Taylor Swift", phone: "0325148562" },
    { id: "v57je", name: "Calum Scott", phone: "9512548-89" },
    { id: "qw73c", name: "natalie Portman", phone: "036521/542" },
  ]);

  const [searchInputValue, setSearchInputValue] = useState("");

  const [filteredContacs, setFilteredContacs] = useState([...contacts]);

  const searchInputHandler = (event) => {
    setSearchInputValue(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        const newContacts = [...contacts, ...response];
        setContacs(newContacts);
      });
  }, []);

  useEffect(() => {
    const newFilteredContacts = contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(searchInputValue.toLocaleLowerCase()));
    setFilteredContacs(newFilteredContacts);
  }, [searchInputValue, contacts]);

  const deleteButtonHandler = (id) => {
    let newContacts = [...contacts];
    newContacts = newContacts.filter((contact) => contact.id !== id);
    setContacs(newContacts);
  };

  return (
    <main className="ContactContainer">
      <CotanctContainerHeder searchInputHandler={searchInputHandler} searchInputValue={searchInputValue} />
      <ContactContainerBody contacts={filteredContacs} deleteButtonHandler={deleteButtonHandler} />
    </main>
  );
}

export default ContactContainer;
