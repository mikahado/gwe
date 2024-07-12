
import React from "react";
import {sessionIcons} from "../../sessionScreen/sessionJump/sessionJump";
//Style Sheet
import "./libraryDrama.css";
import { Link } from "react-router-dom";

function LibraryDrama(props){
  return (
    <Link to={`/drama/id=${props.contentId}`}>
      <button className="libraryExpWrap">

        {sessionIcons.drama}

        <div className="expHeader" >
          <h2>{props.title}</h2>
        </div>

      </button>
    </Link>
  );
}

export default LibraryDrama;