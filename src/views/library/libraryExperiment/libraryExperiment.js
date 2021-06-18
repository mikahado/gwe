
import React from "react";

//Style Sheet
import "./libraryExperiment.css";
import { Link } from "react-router-dom";
import {expIcon} from "../../sessionScreen/sessionListItem/sessionListItem";

function LibraryExperiment(props){
  return (
    <Link to={`/experiment/id=${props.contentId}`}>
      <button className="libraryExpWrap">

        {expIcon()}

        <div className="expHeader" >
          <h2>{props.title}</h2>
        </div>

      </button>
    </Link>
  );
}

export default LibraryExperiment;
