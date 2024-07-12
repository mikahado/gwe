import React, { useEffect, useState } from "react";
import { Button } from "../../components/buttons/buttons";
import './awareness.css';  
import { AwarenessExcerpt } from "./awarenessExcerpt/awarenessExcerpt";  
import { AwarenessVideo } from "./awarenessVideo";  
import { ReadClose } from "../read/readClose";
import { MaterialHeader } from "../../components/materialHeader/materialHeader";
import { Lightbox } from "./lightbox/lightbox";
import { NextMaterial } from "../read/nextMaterial/nextMaterial";
import pageText from "../../data/pageText";

let parse = require('html-react-parser');

export function Awareness(props) {

  let [lightboxSrc, setLightboxSrc] = useState('');

  let content = props.content;

  let textLabels = pageText.labels.awarenesses;  

  // Functions
  function parseSupplies(supplies) {
    if (supplies['eng']) {
      return (
        <ul>
          {supplies.get(props.language).map(supply => (
            <li>{supply}</li>
          ))}
        </ul>
      );
    } else if (Array.isArray(supplies)) {
      return (
        <div>
          <ul>
            {supplies[0].get(props.language).map(supply => (
              <li>{supply}</li>
            ))}
          </ul>
          <p><b>{textLabels.or.get(props.language)}</b></p>
          <ul>
            {supplies[1].get(props.language).map(supply => (
              <li>{supply}</li>
            ))}
          </ul>
        </div>
      );
    }
  }

  function parseBody(body) {
    function parseLines(line) {
      if (Array.isArray(line)) {
        return <ul>{line.map(subLine => parseLines(subLine))}</ul>;
      } else if (typeof line === 'string') {
        return <li>{parse(line)}</li>;
      } else {
        return <li>{line}</li>;
      }
    }
    return (
      <ul>
        {body.map(paragraph => (
          parseLines(paragraph)
        ))}
      </ul>
    );
  }

  function parseVideos(videoData) {
    if (typeof videoData === 'string') {
      return <AwarenessVideo src={videoData} />;  // Update component name to AwarenessVideo
    } else if (Array.isArray(videoData)) {
      return videoData.map(video => (
        <div className={'videos'}>
          <h2>{video.heading.get(props.language)}</h2>
          <AwarenessVideo
            src={video.videoSrc}
            transcript={video.transcript}
          />
          {video.transcript ? (
            <div className={'videoTranscript'}>
              <h3>{pageText.labels.awareness.videoTranscript.get(props.language)}</h3>
              {video.transcript.get(props.language).map(line => (
                <p>{parse(line)}</p>
              ))}
            </div>
          ) : null}
        </div>
      ));
    }
  }

  function openLightbox(imgSrc) {
    setLightboxSrc(imgSrc);
  }

  function closeLightbox() {
    setLightboxSrc('');
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={'awarenessWrap container-fluid'}>  {/* Update className to awarenessWrap */}

      <div className={'row'}>
        <div className={'col d-flex w-100 justify-content-center'}>

          <Lightbox imgSrc={lightboxSrc} closeLightbox={closeLightbox} />

          <MaterialHeader sessionInfo={props.sessionInfo} content={content} partLabel={'hide'} language={props.language} title={content.title.get(props.language)} />

          <ReadClose sessionInfo={props.sessionInfo} language={props.language} librarySection={'awareness'} />  {/* Update librarySection to awareness */}
        </div>

      </div>

      <div className={'row'}>

        {content.suppliesList ? (
          <div className={'col-lg-auto supplies d-flex justify-content-center mb-2'}>
            <section>
              <h2><b>{textLabels.supplies.get(props.language)}</b></h2>
              {parseSupplies(content.suppliesList)}
            </section>
          </div>
        ) : null}

        <div className={'col-lg body d-flex flex-column align-items-center'}>

          {content.excerpts ? (
            <section className={'container'}>
              <h2>{textLabels.fromText.get(props.language)}</h2>
              <div className={'container'}>
                {Array.isArray(content.excerpts) ? (
                  content.excerpts.map(excerpt => (
                    <AwarenessExcerpt imgSrc={excerpt.imgSrc} caption={excerpt.caption} openLightbox={openLightbox} language={props.language} />
                  ))
                ) : (
                  <AwarenessExcerpt imgSrc={content.excerpts.imgSrc} caption={content.excerpts.caption} openLightbox={openLightbox} language={props.language} />
                )}
              </div>
            </section>
          ) : null}

          <section className={'instructions'}>
            <h2><b>{textLabels.instructions.get(props.language)}</b></h2>
            {parseBody(content.body.get(props.language))}
            {console.log(content.videoSrc)}
            {content.videoSrc ? (
              parseVideos(content.videoSrc['eng'] ? content.videoSrc.get(props.language) : content.videoSrc)
            ) : null}
          </section>

          <div className={'d-flex flex-column justify-content-center align-items-center w-100'}>
            {content.pdf && content.pdf.get(props.language, false) ? (
              <div className={'w-100 d-flex justify-content-center align-items-center'}>
                <Button text={pageText.buttons.openPDF.get(props.language)} extLink={content.pdf.get(props.language)} />
              </div>
            ) : null}
            {props.sessionInfo ? (
              <div className={'d-flex flex-column align-items-center w-100'}>
                <Button text={pageText.labels.readLabels.otherMaterial.next.get(props.language)} iconType={'rightArrow'} link={`/s${props.sessionInfo.sessionId}/p${props.sessionInfo.partNo}/next`} />
                <div className={'w-100 d-flex justify-content-end'}><NextMaterial sessionInfo={props.sessionInfo} language={props.language} /></div>
              </div>
            ) : null}
          </div>
        </div>

      </div>

    </div>
  );
}
