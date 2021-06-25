import React from 'react';

export function MaterialHeader(props){

  if(props.sessionInfo){
    return(
      <div className={"materialHeader"}>
        <h1>
          <b>Session {props.sessionInfo.sessionId}</b>{
          props.partLabel !== 'hide'
            ? `- Part ${props.sessionInfo.partNo} of ${props.sessionInfo.ofParts} `
            : null
        } : <u>{props.content.title.get(props.language)}</u>
        </h1>
      </div>
    )
  } else if (props.title){
    return(
      <div className={"materialHeader"}>
        <h1>
          <u>{props.content.title.get(props.language)}</u>
        </h1>
      </div>
    )
  } else {
    return null;
  }
}