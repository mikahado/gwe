import React from "react";

import "./nextMaterial.css";
import curriculum from "../../../data/curriculum/curriculum";
import pageText from "../../../data/pageText";
import { Button } from "../../../components/buttons/buttons";

export function NextMaterial(props) {
  let currentMaterial = props.sessionInfo;

  if (currentMaterial.ofParts > 1) {
    let ofParts = currentMaterial.ofParts;
    let nextMaterial;
    let other;

    if (currentMaterial.partNo < ofParts) {
      nextMaterial =
        curriculum.sessions[currentMaterial.sessionId - 1].material[
          currentMaterial.partNo
        ];
      other = "next";
    } else {
      nextMaterial =
        curriculum.sessions[currentMaterial.sessionId - 1].material[
          currentMaterial.partNo - 2
        ];
      other = "prev";
    }

    let nextId = nextMaterial.sessionInfo.materialId;
    let nextSession = nextMaterial.sessionInfo.sessionId;
    let nextPartNo = nextMaterial.sessionInfo.partNo;
    let title = nextMaterial.content.title.get(props.language);

    return (
      <div className={"nextMaterial"}>
        <div className={"d-flex flex-column align-items-center"}>
          <h1>{pageText.labels.readLabels.otherMaterial[other].get(props.language)}</h1>

          <div className={"sessionInfo"}>
            <p>
              {pageText.labels.sessionInfo.partOf(nextPartNo, ofParts, props.language)}
            </p>
            <p>{pageText.labels.sessionInfo.sessionNo(nextId, props.language)}</p>
          </div>
          <Button text={title} link={`/s${nextSession}/p${nextPartNo}`} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
