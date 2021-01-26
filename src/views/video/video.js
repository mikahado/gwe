import React from 'react';
import CloseButton from '../../components/closeButton/closeButton';
import videos from '../../data/videos';
import './video.css';
import {Button} from "../../components/button/button";
import {Redirect, useParams,useHistory} from "react-router-dom";
import Congrats from "../../components/congrats/congrats";

import YouTube from "react-youtube";


export function Video(props){

    const history = useHistory();
    const params = useParams();

    let partNo = params.partNo ? params.partNo : 1;

    function endHandler(){
        history.push(`/s${params.sessionId}/p${partNo}/next`);
    }

    function videoSrc(){
        const video = params.videoId;
        const src = videos[ video ].src;
        return src;
    }

    return(
        <div className='videoWrap'>

            <Button type={'close'} link={'/library'}/>

            <YouTube
                videoId={'XPXeCcqsMBg'}
                className={'video'}
                containerClassName={'videoFrame'}
                onEnd={endHandler}
            />


            {/*}

            <iframe 
                className='video'
                src={ props.src }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            />

            {*/}

        </div>
    )
}