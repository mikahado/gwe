import React from "react";

import "./resourceMessage.css";
import {Button} from "../../../components/buttons/buttons";

export function ResourceMessage(props) {

  let allFilters = true;

  Object.keys(props.filters).forEach((categoryKey) => {
    Object.keys(props.filters[categoryKey]).forEach((filterKey) => {
      if (!props.filters[categoryKey][filterKey]) {
        allFilters = false;
      }
    });
  });

  function getMessage() {

    return `${
      allFilters
        ? "Currently showing all resources."
        : "Select more categories to see more results."
    }`;
  }

  return(
    <p className={"resourceMessage"}>
      {getMessage()}
      {!props.showFilters ? <Button text={'Edit results'} click={props.toggleFilters}/> : null}
    </p>
  );
}
