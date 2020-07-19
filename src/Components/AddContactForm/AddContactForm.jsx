import React, { useState } from "react";
import "./AddContactForm.scss";

function AddContactForm(props) {
  const [nameInputValue, setNameInputValue] = useState("");

  const [phoneInputValue, setPhoneInputValue] = useState("");

  const nameInputChangeHandler = (event) => {
    setNameInputValue(event.target.value);
  };

  const phoneInputChangeHandler = (event) => {
    setPhoneInputValue(event.target.value);
  };

  return (
    <form className="AddContactForm">
      <label htmlFor="nameInput" className="AddContactForm__name">
        Name:
        <input id="nameInput" type="text" placeholder="Enter the name" onChange={nameInputChangeHandler} value={nameInputValue} required />
      </label>
      <label htmlFor="phoneInput" className="AddContactForm__phone">
        Phone:
        <input id="phoneInput" type="text" placeholder="Enter the phone number" onChange={phoneInputChangeHandler} value={phoneInputValue} required />
      </label>
      <div className="AddContactForm__buttons">
        <button className="AddContactForm__buttons--cancell" onClick={() => props.setAddNewMode(false)}>
          Cancell
        </button>
        <button className="AddContactForm__buttons--add" onClick={() => props.createNewContactHandler(nameInputValue, phoneInputValue)}>
          Add
        </button>
      </div>
    </form>
  );
}

export default AddContactForm;
