import React from 'react';

import pageText from "../../data/pageText";

export function MaterialHeader(props){

  if(props.sessionInfo){
    return(
      <div className={"materialHeader"}>
        <h1>
          <b>{pageText.labels.sessionInfo.sessionNo(props.sessionInfo.sessionId,props.language)}</b>{
          props.partLabel !== 'hide'
            ? `- ${pageText.labels.sessionInfo.partOf(props.sessionInfo.partNo,props.sessionInfo.ofParts, props.language)}`
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