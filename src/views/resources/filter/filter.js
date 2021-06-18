import React from "react";
import { categoryLabels } from "../resourceData";

import "./filter.css";

export function Filter(props) {
  function handleChange(event) {
    props.changeFilter(props.category, props.name, event.target.checked);
  }

  return (
    <div className={"filter"}>
      <label>
        <input
          type={"checkbox"}
          onChange={handleChange}
          checked={props.checked}
        />
        {categoryLabels[props.name]}
      </label>
    </div>
  );
}
