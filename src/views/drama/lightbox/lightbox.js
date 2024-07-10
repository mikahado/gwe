import React from 'react';
import {useState, useEffect} from "react";
import './lightbox.css';

export function Lightbox(props){

  //STATES
  const [skinnyWindow, setSkinnyWindow] = useState(0);

  //FUNCTIONS
  function checkDimensions() {
    const lightbox = document.getElementById("lightbox");

    if (lightbox) {
      const windowWidth = document.documentElement.clientWidth;
      const windowHeight = document.documentElement.clientHeight;

      const imgWidth = lightbox.offsetWidth;
      const imgHeight = lightbox.offsetHeight;

      const maxWidth = windowWidth * 0.85;
      const maxHeight = windowHeight * 0.85;

      if (imgWidth > maxWidth) {
        setSkinnyWindow(1);
      } else if (imgHeight > maxHeight) {
        setSkinnyWindow(0);
      }
    }
  }

  function clickHandler(e){
    console.log(e.target.id);
    if(e.target.id !== 'lightboxImg'){
      props.closeLightbox();
    }
  }

  //Life-Cycle
  useEffect(() => {
    function handleResize() {
      setTimeout(checkDimensions, 1000);
    }

    window.addEventListener("resize", handleResize);
  });

  if (props.imgSrc){
    return(

      <div id={'lightbox'} className={`lightbox ${skinnyWindow ? 'skinnyWindow' : 'wideWindow'}`} onClick={clickHandler}>
        <img id={'lightboxImg'} src={props.imgSrc} alt={''}/>
      </div>
    )
  } else {
    return null;
  }
}