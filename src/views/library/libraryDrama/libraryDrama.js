
import React from "react";
import {sessionIcons} from "../../sessionScreen/sessionJump/sessionJump";
//Style Sheet
import "./libraryDrama.css";
import { Link } from "react-router-dom";

function LibraryDrama(props){
  return (
    <Link to={`/drama/${props.contentId}`}>
      <button className="libraryDramaWrap">

        {sessionIcons.drama}

        <div className="dramaHeader" >
          <h2>{props.title}</h2>
        </div>

      </button>
    </Link>
  );
}

export default LibraryDrama;
