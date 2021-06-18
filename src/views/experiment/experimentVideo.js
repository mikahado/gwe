import React from 'react';

export function ExperimentVideo(props){
  return(
    <iframe src={props.src}
            title={'YouTube video player'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
    />
  )
}