import React from "react";
import "./ContactCard.scss";

function ContactCard(props) {
  return (
    <div className="ContactCard">
      <img className="ContactCard__image" src={`./images/person${Math.floor(Math.random() * 6) + 1}.jpg`} alt="profile" />
      <span className="ContactCard__title">{props.contact.name}</span>
      <span className="ContactCard__number">{props.contact.phone}</span>
      <div className="ContactCard__buttons">
        <button className="ContactCard__buttons--delete">Delete</button>
        <button className="ContactCard__buttons--edit">Edit</button>
      </div>
    </div>
  );
}

export default ContactCard;
