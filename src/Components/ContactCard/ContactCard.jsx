import React, { useState } from "react";
import "./ContactCard.scss";

function ContactCard(props) {
  const { editId, setEditId } = props;

  const [inputNameValue, setInputNameValue] = useState(props.contact.name);
  const [inputPhoneValue, setInputPhoneValue] = useState(props.contact.phone);

  const nameInputChangeHandler = (event) => {
    setInputNameValue(event.target.value);
  };

  const phoneInputChangeHandler = (event) => {
    setInputPhoneValue(event.target.value);
  };

  return (
    <div className="ContactCard">
      <img className="ContactCard__image" src={`./images/person5.jpg`} alt="profile" />

      {editId === props.contact.id ? (
        <>
          <input value={inputNameValue} onChange={nameInputChangeHandler} />
          <input value={inputPhoneValue} onChange={phoneInputChangeHandler} />
          <div className="ContactCard__buttons">
            <button className="ContactCard__buttons--cancell" onClick={() => setEditId(0)}>
              Cancell
            </button>
            <button
              className="ContactCard__buttons--save"
              onClick={() => {
                props.saveEditButtonHandler(props.contact.id, inputNameValue, inputPhoneValue);
                setEditId(0);
              }}
            >
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <span className="ContactCard__title">{props.contact.name}</span>
          <span className="ContactCard__number">{props.contact.phone}</span>
          <div className="ContactCard__buttons">
            <button className="ContactCard__buttons--delete" onClick={() => props.deleteButtonHandler(props.contact.id)}>
              Delete
            </button>
            <button className="ContactCard__buttons--edit" onClick={() => setEditId(props.contact.id)}>
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ContactCard;
