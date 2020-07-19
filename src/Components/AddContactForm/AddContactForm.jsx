import React from "react";
import "./AddContactForm.scss";

function AddContactForm(props) {
  return (
    <form className="AddContactForm">
      <label htmlFor="nameInput" className="AddContactForm__name">
        Name:
        <input id="nameInput" type="text" placeholder="Enter the name" />
      </label>
      <label htmlFor="phoneInput" className="AddContactForm__phone">
        Phone:
        <input id="phoneInput" type="text" placeholder="Enter the phone number" />
      </label>
      <div className="AddContactForm__buttons">
        <button className="AddContactForm__buttons--cancell">Cancell</button>
        <button className="AddContactForm__buttons--add">Add</button>
      </div>
    </form>
  );
}

export default AddContactForm;
