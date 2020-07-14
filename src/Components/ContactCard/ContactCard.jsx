import React, { Component } from "react";
import "./ContactCard.scss";

class ContactCard extends Component {
  render() {
    return (
      <div className="ContactCard">
        <img className="ContactCard__image" src={"https://api.adorable.io/avatars/150/" + Math.random()} alt="profile" />
        <span className="ContactCard__title">Abolfazl</span>
        <span className="ContactCard__number">09220382257</span>
        <span className="ContactCard__email">abolfazlsdfsahiazar@gmail.com</span>
      </div>
    );
  }
}

export default ContactCard;
