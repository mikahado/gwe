import { Filter } from "../filter/filter";
import React from "react";

import "./filters.css";
import CloseButton from "../../../components/closeButton/closeButton";

export function Filters(props) {
  return (
    <div
      className={
        "container filters d-flex flex-column justify-content-center align-items-center position-relative"
      }
    >
      <CloseButton click={props.hideFilters}/>
      <div className={"row d-flex justify-content-center"}>

        <div
          className={
            "category d-flex flex-column align-items-center"
          }
        >
          <h3>Resource Types</h3>

          <div
            className={"d-flex flex-row flex-wrap justify-content-center"}
          >
            {Object.keys(props.filters.types).map((typeKey) => {
              return (
                <Filter
                  category={"types"}
                  changeFilter={props.changeFilter}
                  name={typeKey}
                  key={`${typeKey} Filter`}
                  checked={props.filters.types[typeKey]}
                />
              );
            })}
          </div>
        </div>

        <div
          className={
            "category d-flex flex-column align-items-center"
          }
        >
          <h3>Regions</h3>

          <div
            className={"d-flex flex-row flex-wrap justify-content-center"}
          >
          {Object.keys(props.filters.regions).map((typeKey) => {
            return (
              <Filter
                category={"regions"}
                changeFilter={props.changeFilter}
                name={typeKey}
                key={`${typeKey} Filter`}
                checked={props.filters.regions[typeKey]}
              />
            );
          })}
          </div>
        </div>
      </div>

      <div>
        <button onClick={props.showAll}>Show All</button>
        <button onClick={props.hideAll}>Hide All</button>
      </div>
    </div>
  );
}
