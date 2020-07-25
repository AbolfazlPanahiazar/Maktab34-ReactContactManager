import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../Header/Header";
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
    <>
      <Header />
      <Router>
        <Route exaxt path="/add-new">
          <AddContactForm setAddNewMode={setAddNewMode} createNewContactHandler={createNewContactHandler} />
        </Route>
        <Route exact path="/">
          <main className="ContactContainer">
            <Link to="/add-new">
              <button className="ContactContainer__addButton" onClick={() => setAddNewMode(true)}>
                Add New Contact
              </button>
            </Link>
            <CotanctContainerHeder searchInputHandler={searchInputHandler} searchInputValue={searchInputValue} />
            <ContactContainerBody
              contacts={filteredContacs}
              deleteButtonHandler={deleteButtonHandler}
              saveEditButtonHandler={saveEditButtonHandler}
            />
          </main>
        </Route>
      </Router>
    </>
  );
}

export default ContactContainer;
