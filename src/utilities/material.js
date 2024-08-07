import React from "react";
import curriculum from "../data/curriculum/curriculum";
import { Read } from "../views/read/read";
import { Video } from "../views/video/video";
import { NextUp } from "../views/nextUp/nextUp";
import { Experiment } from "../views/experiment/experiment";
import { Drama } from "../views/drama/drama"; 
import { Awareness } from "../views/awareness/awareness";

export function materialRouter(params, language, changeLanguage) {
  function getSessionFromId(sessionId) {
    return curriculum.sessions[sessionId - 1];
  }
  function getMaterialFromSessionAndPartNo(session, partNo) {
    return session.material[partNo - 1];
  }

  let sessionId = Number(params.sessionId);
  let partNo = params.partNo ? Number(params.partNo) : 1;

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
        return (
          <Experiment
            content={content}
            sessionInfo={material.sessionInfo}
            language={language}
            changeLanguage={changeLanguage}
          />
        );

      case "drama":
        return (
          <Drama
            content={content}
            sessionInfo={material.sessionInfo}
            language={language}
            changeLanguage={changeLanguage}
          />
        );

        case "awareness":
        return (
          <Awareness
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
