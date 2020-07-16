import React, { Component } from "react";
import "./SearchInput.scss";

class SearchInput extends Component {
  render() {
    return <input onChange={this.props.searchInputHandler} name="searchInput" value={this.props.searchInputValue} className="SearchInput" type="serach" placeholder="Looking for something..." />;
  }
}

export default SearchInput;
