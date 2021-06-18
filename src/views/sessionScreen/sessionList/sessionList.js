import React from "react";

// Style Sheet
import "./sessionList.css";

// Sub - Components
import SessionListItem from "../sessionListItem/sessionListItem";
import curriculum from "../../../data/curriculum/curriculum";

function SessionList(props) {
  const session = curriculum.sessions[0];
  let sessionInfo = session.sessionInfo;

  return (
    <div className={"sessionList"}>
      <SessionListItem
        sessionId={sessionInfo.sessionId}
        image={sessionInfo.graphic}
        changeSession={props.changeSession}
      />
    </div>
  );
}

export default SessionList;
