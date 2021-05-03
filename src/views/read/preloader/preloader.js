import React from 'react';

import './preloader.css';

export function Preloader(props){

    function handleImgLoad(){
        props.preloadCached('img',props.preloadingImg);
    }
    function handleAudioLoad(){
        props.preloadCached('audio',props.preloadingAudio);
    }

    return(
        <div className={'preloader'}>
            <img
                src={`${props.preloadingImg}`}
                onLoad={handleImgLoad}
                alt={''}
            />
            <audio
                src={props.preloadingAudio}
                onCanPlayThrough={handleAudioLoad}
            />
        </div>
    )
}