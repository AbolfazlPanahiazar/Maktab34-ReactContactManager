import React from "react";
import "./CotanctContainerHeder.scss";
import SearchInput from "../SearchInput/SearchInput";

function CotanctContainerHeder(props) {
  return (
    <div className="CotanctContainerHeder">
      <SearchInput searchInputHandler={props.searchInputHandler} searchInputValue={props.searchInputValue} />
    </div>
  );
}

export default CotanctContainerHeder;
