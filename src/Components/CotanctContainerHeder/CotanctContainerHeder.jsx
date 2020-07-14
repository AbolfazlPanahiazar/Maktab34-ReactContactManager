import React, { Component } from "react";
import "./CotanctContainerHeder.scss";
import SearchInput from "../SearchInput/SearchInput";

class CotanctContainerHeder extends Component {
  render() {
    return (
      <div className="CotanctContainerHeder">
        <SearchInput />
      </div>
    );
  }
}

export default CotanctContainerHeder;
