import React from "react";
import "./SearchInput.scss";

function SearchInput(props) {
  return (
    <input
      onChange={props.searchInputHandler}
      value={props.searchInputValue}
      className="SearchInput"
      type="serach"
      placeholder="Looking for something..."
    />
  );
}

export default SearchInput;
