import React, {useEffect, useState} from "react";

import {Button} from "../../components/buttons/buttons";

import './experiment.css';
import {ExperimentExcerpt} from "./experimentExcerpt/experimentExcerpt";
import {ExperimentVideo} from "./experimentVideo";
import {ReadClose} from "../read/readClose/readClose";
import {MaterialHeader} from "../../components/materialHeader/materialHeader";
import {Lightbox} from "./lightbox/lightbox";
import {NextMaterial} from "../read/nextMaterial/nextMaterial";

let parse = require('html-react-parser');

export function Experiment(props) {

  let [lightboxSrc,setLightboxSrc] = useState('');

  let content = props.content;

  // Functions
  function parseSupplies(supplies){

    console.log(supplies);

    if (supplies['eng']){
      return(
        <ul>
          {
            supplies.get(props.language).map(supply => {
              return <li>{supply}</li>
            })
          }
        </ul>
      )
    } else if (Array.isArray(supplies)){
      return(
        <div>
          <ul>
            {
              supplies[0].get(props.language).map( supply =>{
                return <li>{supply}</li>
              })
            }
          </ul>
          <p><b>OR:</b></p>
          <ul>
            {
              supplies[1].get(props.language).map( supply =>{
                return <li>{supply}</li>
              })
            }
          </ul>

        </div>
      )
    }
  }
  function parseBody(body){
    function parseLines(line){

      if (Array.isArray(line)) {

        return <ul>{line.map(subLine => parseLines(subLine))}</ul>

        /*

      } else if (typeof line !== 'string'){
        return <Button text={line.text} link={line.link}/>

         */

      } else if (typeof line === 'string'){
        return <li>{parse(line)}</li>
      } else {
        return <li>{line}</li>
      }
    }
    return(
      <ul>
        {
          body.map( paragraph =>{
            return parseLines(paragraph);
          })
        }
      </ul>
    )
  }
  function parseVideos(videoData){
    if (typeof videoData === 'string'){
      console.log('video string')
      return(
        <ExperimentVideo src={videoData}/>
        )
    } else if (Array.isArray(videoData)){
      return videoData.map( video =>{
        return(
          <div className={'videos'}>
            <h2>{video.heading.get(props.language)}</h2>
            <ExperimentVideo src={video.videoSrc}/>
          </div>
        )
      })
    }
  }
  function openLightbox(imgSrc){
    setLightboxSrc(imgSrc);
  }
  function closeLightbox(){
    setLightboxSrc('');
  }

  useEffect( ()=>{
    window.scrollTo(0,0)
  })
  return(
    <div className={'experimentWrap container-fluid'}>

      <div className={'row'}>
        <div className={'col d-flex w-100 justify-content-center'}>

          <Lightbox imgSrc={lightboxSrc} closeLightbox={closeLightbox}/>

          <MaterialHeader sessionInfo={props.sessionInfo} content={content} partLabel={'hide'} language={props.language} title={content.title.get(props.language)}/>

          <ReadClose sessionInfo={props.sessionInfo} language={props.language} librarySection={'experiments'}/>
        </div>

      </div>

      <div className={'row'}>

        {
          content.suppliesList ?
            <div className={'col-lg-auto supplies d-flex justify-content-center mb-2'}>
              <section>
                <h2><b>Supplies</b></h2>
                {parseSupplies(content.suppliesList)}
              </section>
            </div>
            :''
        }

        <div className={'col body d-flex flex-column align-items-center'}>

          {
            content.excerpts ?
              <section className={'container'}>
                <h2>From The Text:</h2>
                <div className={'container'}>
                  {
                    Array.isArray(content.excerpts) ?
                      content.excerpts.map( excerpt =>{
                        return(
                          <ExperimentExcerpt imgSrc={excerpt.imgSrc} caption={excerpt.caption} openLightbox={openLightbox} />
                        )
                      })
                      : <ExperimentExcerpt imgSrc={content.excerpts.imgSrc} caption={content.excerpts.caption} openLightbox={openLightbox} />
                  }
                </div>
              </section>
              :''
          }

          <section className={'instructions'}>
            <h2><b>Instructions</b></h2>
            {parseBody(content.body.get(props.language))}
            {console.log(content.videoSrc)}
            {
              content.videoSrc ?
                parseVideos(content.videoSrc)
                :''
            }
          </section>

          <div className={'d-flex justify-content-center w-100'}>
            {
              content.pdf ?
                <Button text={'Open PDF'} extLink={content.pdf}/>
                :''
            }
            {
              props.sessionInfo ?
                <div className={'d-flex flex-column align-items-center'}>
                  <Button text={'Next Material'} iconType={'rightArrow'} link={`/s${props.sessionInfo.sessionId}/p${props.sessionInfo.partNo}/next`}/>
                  <NextMaterial sessionInfo={props.sessionInfo}/>
                </div>
                :''
            }
          </div>
        </div>

      </div>

    </div>
  ) ;
}
