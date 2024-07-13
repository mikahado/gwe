
import React from "react";
import {sessionIcons} from "../../sessionScreen/sessionJump/sessionJump";
//Style Sheet
import "./libraryAwareness.css";
import { Link } from "react-router-dom";

function libraryAwareness(props){
  return (
    <Link to={`/awareness/id=${props.contentId}`}>
      <button className="libraryAwarenessWrap">

        {sessionIcons.awareness}

        <div className="awarenessHeader" >
          <h2>{props.title}</h2>
        </div>

      </button>
    </Link>
  );
}

export default libraryAwareness;
