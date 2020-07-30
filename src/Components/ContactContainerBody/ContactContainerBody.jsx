import React, { useState } from "react";
import { Row } from "reactstrap";
import "./ContactContainerBody.scss";
import ContactCard from "../ContactCard/ContactCard";

function ContactContainerBody(props) {
  const [editId, setEditId] = useState(0);

  return (
    <Row className="ContactContainerBody">
      {props.contacts.map((contact, index) => (
        <ContactCard
          key={index}
          contact={contact}
          deleteButtonHandler={props.deleteButtonHandler}
          editId={editId}
          setEditId={setEditId}
          saveEditButtonHandler={props.saveEditButtonHandler}
        />
      ))}
    </Row>
  );
}

export default ContactContainerBody;
