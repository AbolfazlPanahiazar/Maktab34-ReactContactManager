import React, { useState } from "react";
import { Card, CardImg, Button, CardTitle, CardSubtitile, Input, CardBody, Col } from "reactstrap";
import Avatar from "./person5.jpg";
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
    <Col xs="12" sm="12" md="6" lg="4" xl="3">
      <Card className="ContactCard">
        <CardImg className="ContactCard__image" src={Avatar} alt="profile" />
        <CardBody>
          {editId === props.contact.id ? (
            <>
              <Input value={inputNameValue} onChange={nameInputChangeHandler} />
              <Input value={inputPhoneValue} onChange={phoneInputChangeHandler} />
              <div className="ContactCard__buttons">
                <Button className="ContactCard__buttons--cancell" onClick={() => setEditId(0)}>
                  Cancell
                </Button>
                <Button
                  className="ContactCard__buttons--save"
                  onClick={() => {
                    props.saveEditButtonHandler(props.contact.id, inputNameValue, inputPhoneValue);
                    setEditId(0);
                  }}
                >
                  Save
                </Button>
              </div>
            </>
          ) : (
            <>
              <CardTitle className="ContactCard__title">{props.contact.name}</CardTitle>
              <CardTitle className="ContactCard__number">{props.contact.phone}</CardTitle>
              <div className="ContactCard__buttons">
                <Button className="ContactCard__buttons--delete" onClick={() => props.deleteButtonHandler(props.contact.id)}>
                  Delete
                </Button>
                <Button className="ContactCard__buttons--edit" onClick={() => setEditId(props.contact.id)}>
                  Edit
                </Button>
              </div>
            </>
          )}
        </CardBody>
      </Card>
    </Col>
  );
}

export default ContactCard;
