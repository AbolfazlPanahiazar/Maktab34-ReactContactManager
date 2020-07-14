import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="Header">
        <h1>Abolitionist ContactManager</h1>
        <p>The best Contact Manager ever =)</p>
      </header>
    );
  }
}

export default Header;
