import React, { useState, useEffect } from "react";
import CotanctContainerHeder from "../CotanctContainerHeder/CotanctContainerHeder";
import ContactContainerBody from "../ContactContainerBody/ContactContainerBody";
import AddContactForm from "../AddContactForm/AddContactForm";
import "./ContactContainer.scss";

function ContactContainer() {
  const localContacts = JSON.parse(localStorage.getItem("qarxfdvgbfhu7yfjmvi"));
  if (!localContacts) localStorage.setItem("qarxfdvgbfhu7yfjmvi", JSON.stringify([]));

  const [contacts, setContacs] = useState(localContacts);

  const [searchInputValue, setSearchInputValue] = useState("");

  const [filteredContacs, setFilteredContacs] = useState([...contacts]);

  const [addNewMode, setAddNewMode] = useState(false);

  const searchInputHandler = (event) => {
    setSearchInputValue(event.target.value);
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       const newContacts = [...contacts, ...response];
  //       setContacs(newContacts);
  //     });
  // }, []);

  useEffect(() => {
    localStorage.setItem("qarxfdvgbfhu7yfjmvi", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const newFilteredContacts = contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(searchInputValue.toLocaleLowerCase()));
    setFilteredContacs(newFilteredContacts);
  }, [searchInputValue, contacts]);

  const deleteButtonHandler = (id) => {
    let newContacts = [...contacts];
    newContacts = newContacts.filter((contact) => contact.id !== id);
    setContacs(newContacts);
  };

  const saveEditButtonHandler = (id, newName, newPhone) => {
    const newContacts = JSON.parse(JSON.stringify(contacts));
    const newContact = { id: id, name: newName, phone: newPhone };
    const theIndex = newContacts.findIndex((contact) => contact.id === id);
    newContacts[theIndex] = newContact;
    setContacs(newContacts);
  };

  const createNewContactHandler = (newName, newPhone) => {
    const newContacts = JSON.parse(JSON.stringify(contacts));
    const newContact = { id: Date.now(), name: newName, phone: newPhone };
    newContacts.push(newContact);
    setContacs(newContacts);
  };

  return (
    <main className="ContactContainer">
      <button className="ContactContainer__addButton" onClick={() => setAddNewMode(true)}>
        Add New Contact
      </button>
      <CotanctContainerHeder searchInputHandler={searchInputHandler} searchInputValue={searchInputValue} />
      <ContactContainerBody contacts={filteredContacs} deleteButtonHandler={deleteButtonHandler} saveEditButtonHandler={saveEditButtonHandler} />
      {addNewMode && <AddContactForm setAddNewMode={setAddNewMode} createNewContactHandler={createNewContactHandler} />}
    </main>
  );
}

export default ContactContainer;
