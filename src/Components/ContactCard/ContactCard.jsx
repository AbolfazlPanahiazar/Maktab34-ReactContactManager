import React, { Component } from "react";
import "./ContactCard.scss";

class ContactCard extends Component {
  render() {
    return (
      <div className="ContactCard">
        <img className="ContactCard__image" src={`./images/person${Math.floor(Math.random() * 6) + 1}.jpg`} alt="profile" />
        <span className="ContactCard__title">{this.props.contact.name}</span>
        <span className="ContactCard__number">{this.props.contact.phone}</span>
      </div>
    );
  }
}

export default ContactCard;
