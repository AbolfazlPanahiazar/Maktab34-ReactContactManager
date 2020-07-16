import React, { Component } from "react";
import "./CotanctContainerHeder.scss";
import SearchInput from "../SearchInput/SearchInput";

class CotanctContainerHeder extends Component {
  render() {
    return (
      <div className="CotanctContainerHeder">
        <SearchInput searchInputHandler={this.props.searchInputHandler} searchInputValue={this.props.searchInputValue} />
      </div>
    );
  }
}

export default CotanctContainerHeder;
