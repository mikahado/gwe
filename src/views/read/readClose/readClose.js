import { Button } from "../../../components/buttons/buttons";
import React from "react";

export function ReadClose(props) {
  function buildLink() {
    if (props.sessionInfo) {
      return `/map/s-${props.sessionInfo.sessionId}/p-${props.sessionInfo.partNo}`;
    } else {
      return `/library${props.librarySection ? `/section=${props.librarySection}` : '' }`;
    }
  }

  return <Button type={"close"} link={buildLink()} id={"mobileClose"} />;
}
