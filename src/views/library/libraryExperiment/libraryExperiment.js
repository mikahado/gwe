
import React from "react";
import {sessionIcons} from "../../sessionScreen/sessionJump/sessionJump";
//Style Sheet
import "./libraryExperiment.css";
import { Link } from "react-router-dom";

function LibraryExperiment(props){
  return (
    <Link to={`/experiment/id=${props.contentId}`}>
      <button className="libraryExpWrap">

        {sessionIcons.experiment}

        <div className="expHeader" >
          <h2>{props.title}</h2>
        </div>

      </button>
    </Link>
  );
}

export default LibraryExperiment;
