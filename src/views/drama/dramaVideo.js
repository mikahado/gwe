import React from 'react';

export function DramaVideo(props){
  return(
    <iframe src={props.src}
            title={'YouTube video player'}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
    />
  )
}