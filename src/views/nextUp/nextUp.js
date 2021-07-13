import React from "react";

// Sub-Components
//import { SummaryEntry } from "../../components/summary/summary";
import { Button } from "../../components/buttons/buttons";

import pageText from "../../data/pageText";

// Style Sheets
import "./nextUp.css";
import { useParams } from "react-router-dom";
import AboutGWE from "../../components/aboutGWE/aboutGWE";
import curriculum from "../../data/curriculum/curriculum";

export function NextUp(props) {
  const params = useParams();
  const status = props.status;

  function courseComplete() {
    return (
      <div className="nextUpBody">
        <h1 className={"nextUpTitle label"}>{pageText.messages.courseComplete.get(props.language)}</h1>
        <p className="label">{pageText.messages.courseComplete.get(props.language)}</p>

        <AboutGWE language={props.language} />

        <Button
          text={pageText.buttons.completions.backSessions.get(props.language)}
          link={`/map/s-${props.material.sessionInfo.sessionId}/p-${props.material.sessionInfo.partNo}`}
          language={props.language}
          iconType={"leftArrow"}
        />

        <Button
          text={pageText.buttons.completions.repeatSession}
          link={`/s${params.sessionId}`}
          language={props.language}
          iconType={"leftArrow"}
        />
      </div>
    );
  }
  function sessionComplete() {
    function repeatSession() {
      curriculum.sessions[params.sessionId - 1].material.forEach((material) => {
        console.log(material);

        if (material.content.bookMark) {
          material.content.bookMark = 0;
        }
      });
      window.location.href = `#/s${params.sessionId}/`;
    }

    return (
      <div className="nextUpBody">
        <h1 className={"nextUpTitle label"}>{pageText.messages.sessionComplete.get(props.language)}</h1>
        <p className="label">{pageText.messages.sessionCongrats.get(props.language)}</p>

        <Button
          text={pageText.buttons.completions.continueSession.get(props.language)}
          link={`/s${parseInt(params.sessionId) + 1}`}
          language={props.language}
          iconType={"rightArrow"}
        />

        <Button
          text={pageText.buttons.completions.backSessions.get(props.language)}
          link="/map"
          language={props.language}
          iconType={"leftArrow"}
        />

        <Button
          text={pageText.buttons.completions.repeatSession.get(props.language)}
          click={repeatSession}
          language={props.language}
          iconType={"leftArrow"}
        />
      </div>
    );
  }
  /*
  function nextMaterial(material) {
    return (
      <div className="nextUpBody">
        <h1 className="nextUpTitle label">Next Up:</h1>

        <div className={"row"}>
          <SummaryEntry material={props.material} language={props.language} />
        </div>

        <Button
          text="Continue"
          link={`/s${material.sessionInfo.sessionId}/p${material.sessionInfo.partNo}`}
          language={props.language}
          iconType={"rightArrow"}
        />

        <Button
          text="Back To Sessions"
          link={`/map/s-${material.sessionInfo.sessionId}/p-${material.sessionInfo.partNo}`}
          language={props.language}
          iconType={"leftArrow"}
        />
      </div>
    );
  }
   */
  function checkStatus() {
    if (status === "sessionComplete") {
      return sessionComplete();
    } else if (status === "courseComplete") {
      return courseComplete();
    } else {
      //return nextMaterial( props.material );
      window.location.href = `#/s${props.material.sessionInfo.sessionId}/p${props.material.sessionInfo.partNo}`;
    }
  }

  return (
    <div className="nextUp controlBox roundBorder darkShadow">
      {checkStatus()}
    </div>
  );
}
