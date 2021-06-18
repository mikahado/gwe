import React from "react";

export function Audio(props) {
  function handleAudioLoad() {
    props.setNarrationState(0);
    props.mediaLoaded("audio", props.src);
  }

  function handleEnd() {
    console.log("end");
    if (props.page !== props.startPage) {
      props.nextPage();
    } else {
      props.narrationControl("restart");
    }
  }

  let waitTimer;

  function setWaiting() {
    props.setNarrationState("waiting");
  }
  function handleWait() {
    waitTimer = setTimeout(setWaiting, 3500);
  }
  function handleResume() {
    clearTimeout(waitTimer);
  }

  return (
    <audio
      id={"narrator"}
      src={props.src}
      onEnded={handleEnd}
      onCanPlayThrough={handleAudioLoad}
      onWaiting={handleWait}
      onPlaying={handleResume}
      preload={"auto"}
    />
  );
}
