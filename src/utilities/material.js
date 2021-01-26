// React
import React from 'react';
import {useParams} from "react-router-dom";

// Utilities & Data
import {default as get} from "./contentGetters";
import {curriculum} from "../data/curriculum";

// Sub-Components
import {Read} from "../views/read/read";
import {Video} from "../views/video/video";
import {NextUp} from "../views/nextUp/nextUp";

// Utilities
/*
export function getMaterialSummary(params,language){

    let sessionId = parseInt(params.sessionId);
    let partNo = parseInt(params.partNo ? params.partNo : 1);

    console.log(sessionId)


    let complete = false;

    let status;

    if(params.next){


    }

    if (status !== 'courseComplete'){

        return{
            status: status,
            material: session.material[ partNo - 1]
        };
    }
    else return(
        {
            status: status,
            material: ''
        }
    )
}

 */

export function MaterialRouter(props) {

    let params = useParams();
    const {language, changeLanguage} = props;

    let sessionId = parseInt(params.sessionId);
    let partNo = params.partNo ? parseInt(params.partNo) : 1;

    let session = get.sessionSummary(sessionId, language);
    let materialSummary = session.material[partNo - 1];

    if(!params.next){

        switch (materialSummary.format) {
            case('book'):
            case('discussion'):

                const content = get.readerContent(materialSummary, language);

                return (
                    <Read
                        material={materialSummary}
                        content={content.pages}
                        language={language}
                        changeLanguage={changeLanguage}
                        imgPreloads={content.imgPreloads}
                        audioPreloads={content.audioPreloads}
                    />
                )
                break;

            case('video'):

                const videoSrc = materialSummary.videoSrc;

                return (
                    <Video src={videoSrc}/>
                )
        }
    }
    else{
        let status;
        if (partNo < session.material.length) {
            partNo++;
            status = 'materialComplete';
            materialSummary = session.material[partNo - 1];

        } else if (partNo === session.material.length) {

            if (sessionId === curriculum.length){
                status = 'courseComplete';
            }
            else {
                sessionId++;
                partNo = 1;
                status = 'sessionComplete'
                session = get.sessionSummary(sessionId, language);
                materialSummary = session.material[partNo - 1];
            }
        }
        return (
            <NextUp
                status={status}
                material={materialSummary}
                language={language}
            />
        )
    }
}