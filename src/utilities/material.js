// React
import React from "react";

// Utilities & Data
import curriculum from "../data/curriculum/curriculum";

// Sub-Components
import { Read } from "../views/read/read";
import { Video } from "../views/video/video";
import { NextUp } from "../views/nextUp/nextUp";
import {Experiment} from "../views/experiment/experiment";

// Utilities

export function materialRouter(params, language, changeLanguage) {
  function getSessionFromId(sessionId) {
    return curriculum.sessions[sessionId - 1];
  }
  function getMaterialFromSessionAndPartNo(session, partNo) {
    return session.material[partNo - 1];
  }

  //let params = useParams();
  //const {language, changeLanguage} = props;

  let sessionId = parseInt(params.sessionId);
  let partNo = params.partNo ? parseInt(params.partNo) : 1;

  let session = getSessionFromId(sessionId);
  let material = getMaterialFromSessionAndPartNo(session, partNo);
  let content = material.content;

  if (!params.next) {
    switch (content.format) {
      case "book":
      case "discussion":
        return (
          <Read
            content={material.content}
            sessionInfo={material.sessionInfo}
            language={language}
            changeLanguage={changeLanguage}
            key={`${sessionId}-${partNo}`}
          />
        );

      case "video":
        const videoSrc = material.videoSrc;

        return <Video src={videoSrc} />;

      case "experiment":
        return(
          <Experiment
            content={content}
            sessionInfo={material.sessionInfo}
            language={language}
            changeLanguage={changeLanguage}
          />
          );

      default:
        break;
    }
  } else if (params.next) {
    let status;

    if (partNo < session.material.length) {
      partNo++;
      status = "materialComplete";
      material = session.material[partNo - 1];
    } else if (partNo === session.material.length) {
      if (sessionId === curriculum.sessions.length) {
        status = "courseComplete";
      } else {
        sessionId++;
        partNo = 1;
        status = "sessionComplete";
        session = getSessionFromId(sessionId);
        material = getMaterialFromSessionAndPartNo(session, partNo);
      }
    }
    return <NextUp status={status} material={material} language={language} />;
  }
}
