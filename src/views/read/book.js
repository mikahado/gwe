import React, { useEffect, useState } from "react";
import Loading from "../../components/loading/loading";
import { PageImage } from "./read";
import { ZoomBook } from "./zoomBook";

import pageText from "../../data/pageText";

let parse = require('html-react-parser');

export function Book(props) {
  //STATES
  const [pageZoom, setPageZoom] = useState(0);
  const [skinnyWindow, setSkinnyWindow] = useState(0);
  const [skinnyPage, setSkinnyPage] = useState(0);

  //FUNCTIONS
  function checkDimensions() {
    const pageImgFrame = document.getElementById("pageImgFrame");

    if (pageImgFrame) {
      const windowWidth = document.documentElement.clientWidth;
      const windowHeight = document.documentElement.clientHeight;

      const imgWidth = pageImgFrame.offsetWidth;
      const imgHeight = pageImgFrame.offsetHeight;

      const maxWidth = windowWidth * 0.85;
      const maxHeight = windowHeight * 0.85;

      if (imgWidth > maxWidth) {
        setSkinnyWindow(1);
      } else if (imgHeight > maxHeight) {
        setSkinnyWindow(0);
      }
    }
  }
  function handleCurrentImageLoad() {
    checkDimensions();
    props.mediaLoaded("img", props.pageImg);
  }
  function handleTranslation() {
    if (props.language !== "eng") {
      function compileTranslations(translationData) {
        return translations.map((phrase) => {
          return <p>{parse(phrase)}</p>;
        });
      }

      const translations = props.content.pageData[
        props.page - 1
      ].translation.get(props.language);

      return (
        <div className={""}>
          <div className={"translation"} id={"translation"}>
            {translations ? (
              compileTranslations(translations)
            ) : (
              <p>{pageText.messages.spanishComing}</p>
            )}
          </div>
        </div>
      );
    }
  }
  function zoomPage() {
    if (pageZoom === 0) {
      const page = document.getElementById("pageImgFrame");
      setPageZoom(1);
      page.classList.add("zoom");
    } else {
      const page = document.getElementById("pageImgFrame");
      page.classList.remove("zoom");
      setPageZoom(0);
    }
  }

  //Life-Cycle
  useEffect(() => {
    function handleResize() {
      setTimeout(checkDimensions, 1000);
    }

    window.addEventListener("resize", handleResize);
  });

  if (props.page === props.content.startPage && pageZoom ){
    setPageZoom(0);
  }

  return (
    <div className={`readerPage col-lg-auto d-flex ${!skinnyWindow && skinnyPage && props.page !== props.content.startPage ? 'flex-row' : 'flex-column' } align-items-center p-0`}>
      <div className={"d-flex flex-row align-items-center"}>
        <div
          id={"pageImgFrame"}
          className={`pageImgFrame col 
                            ${pageZoom ? "zoom" : ""}
                            ${skinnyWindow ? "skinnyWindow" : ""}
                            `}
        >
          <Loading loading={props.imgLoad} />

          <PageImage
            src={props.pageImg}
            className={"pageImg"}
            imgLoaded={handleCurrentImageLoad}
            page={props.page}
          />
        </div>

        {props.page !== props.content.startPage ? (
          <ZoomBook
            visible={!skinnyWindow}
            zoomFunction={zoomPage}
            zoomState={pageZoom}
            language={props.language}
          />
        ) : (
          ""
        )}
      </div>

      {handleTranslation()}
    </div>
  );
}
