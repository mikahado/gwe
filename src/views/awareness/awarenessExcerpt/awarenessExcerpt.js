import React from 'react';
import './awarenessExcerpt.css';

let parse = require('html-react-parser');

export function ExcerptImg(props){
  function clickHandler(){
    props.openLightbox(props.imgSrc);
  }
  return <img src={props.imgSrc} alt={''} onClick={clickHandler}/>
}

export function AwarenessExcerpt(props){

  function parseImages(imgData){

    if (typeof imgData === 'string'){

      return <ExcerptImg imgSrc={imgData} openLightbox={props.openLightbox}/>;

    } else if (Array.isArray(imgData)){

      return(
        <div className={'row'}>
          {
            imgData.map( img =>{
            return(
            <div className={'col-md mb-2'}>
              <ExcerptImg imgSrc={img} openLightbox={props.openLightbox}/>
            </div>
            )
          })
          }
        </div>
      )
    }
  }

  return(
    <figure className={'excerpt row'}>
      {
        props.caption ?
          <figcaption className={'col-md-4 mb-2'}>{parse(props.caption.get(props.language))}</figcaption>
          :''
      }
      <div className={'col'}>
        {
          parseImages(props.imgSrc)
        }
      </div>
    </figure>
  )
}