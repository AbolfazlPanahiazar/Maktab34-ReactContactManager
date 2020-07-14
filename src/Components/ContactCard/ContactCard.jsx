import React, { Component } from "react";
import "./ContactCard.scss";

class ContactCard extends Component {
  render() {
    return (
      <div className="ContactCard">
        <img src={"https://api.adorable.io/avatars/163/abott@adorable"} alt="profile" />
        <span>Abolfazl</span>
        <span>09220382257</span>
      </div>
    );
  }
}

export default ContactCard;
