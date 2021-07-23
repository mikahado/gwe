import React, { useState } from "react";
import { InfoBubble } from "../../../components/infoBubble/infoBubble";
import { Button } from "../../../components/buttons/buttons";
import pageText from "../../../data/pageText";

export function ZoomBook(props) {
  const [bubble, setBubble] = useState(1);

  function handleIcon() {
    if (!props.zoomState) {
      return "zoomIn";
    } else {
      return "zoomOut";
    }
  }

  function showBubble() {
    setBubble(1);
  }

  function hideBubble() {
    setBubble(0);
  }

  setTimeout(hideBubble, 3000);

  if (props.visible) {
    return (
      <div className={"zoomWrap"}>
        <InfoBubble message={pageText.labels.readLabels.pageZoom.get(props.language)} id={"zoomInfo"} visible={bubble} />

        <Button
          id={"zoomButton"}
          class={"zoomButton"}
          iconType={handleIcon()}
          click={props.zoomFunction}
          mouseEnter={showBubble}
          mouseLeave={hideBubble}
          mouseUp={hideBubble}
        />
      </div>
    );
  } else {
    return null;
  }
}
