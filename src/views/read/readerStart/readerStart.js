import React from "react";

import pageText from "../../../data/pageText";
import { Button } from "../../../components/buttons/buttons";
import Loading from "../../../components/loading/loading";

import "./readerStart.css";

export function ReaderStart(props) {
  const content = props.content;
  const title = content.title.get(props.language);
  const subtitle = content.subtitle;
  const description = content.description.get(props.language);

  let byAuthor, reader, readerName, readerPhoto, runTime;
  if (content.byAuthor) {
    byAuthor = content.byAuthor.get(props.language);
  }
  if (content.reader) {
    reader = content.reader.get(props.language);
    readerName = reader.name;
    readerPhoto = reader.photo;
  }
  if (content.narration) {
    if (content.runTime) {
      if (content.runTime.get(props.language)) {
        runTime = content.runTime
          .get(props.language)
          .string.get(props.language);
      }
    }
  }

  function playIntro() {
    props.narrationControl("play");
  }
  function playNarration() {
    props.narrationControl("play");
  }
  function showButton() {
    function getClick() {
      if (props.content.preloads.audio.length) {
        //props.setAudioBubble(1);
        props.nextPage();
        playNarration();
      } else {
        return props.nextPage;
      }
    }

    if (props.content.narration.get(props.language, false)) {
      if (!props.narrationState) {
        return (
          <div className={"position-relative"}>
            <Button
              click={getClick}
              text={pageText.buttons.read.readToMe.get(props.language)}
              language={props.language}
              iconType={"rightArrow"}
            />
          </div>
        );
      } else {
        return (
          <div className={"label"} id={"readerStartLoading"}>
            <p>Material Loading</p>

            <div className={"readerStartLoadingWrap"}>
              <Loading loading={1} circleClass={"noBG"} />
            </div>
          </div>
        );
      }
    }
  }

  if (props.content.startPage === props.page) {
    return (
      <div className="ReaderStart lightText col-md-auto d-flex flex-column">
        <h1 className={"lightText"}>{title}</h1>

        {byAuthor ? <p>{byAuthor}</p> : ""}
        {subtitle ? <p>{subtitle}</p> : ""}
        {<p className={"startDescr"}>{description}</p>}
        {reader ? (
          <div>
            {readerPhoto ? (
              <img id="readerPhoto" src={readerPhoto} alt={`Narrator`} />
            ) : (
              ""
            )}

            <div>
              <p>{pageText.labels.readBy[props.language]}</p>
              <p>{readerName}</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {runTime ? <p className={"mt-1"}>Run-time: {runTime}</p> : ""}
        {showButton()}
        {reader ? <Button text={pageText.buttons.read.aboutThisReader.get(props.language)} click={playIntro} /> : ""}
      </div>
    );
  } else {
    return null;
  }
}
