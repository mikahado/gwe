// React
import React from 'react';

// StyleSheets
import './summary.css';
import './summaryEntry.css'
import './libraryReadBy.css';

// Utilities
import pageText from '../../data/pageText';

import curriculum from "../../data/curriculum/curriculum";

// Sub-Components
import CloseButton from '../closeButton/closeButton';
import {Button} from "../buttons/buttons";
import books from "../../data/books/books";

export function SummaryEntry ( props ){

    const {material, language} = props;
    const content = material ? material.content : props.content;

    //Language-Specific Values
    const title = content.title.get(language);
    const description = content.description.get(language);
    let runTimeString;
    if(content.runTime){
        runTimeString = content.runTime.get(language).string.get(language);
    }


    //Book-Specific Values
    let byAuthor;
    let reader;
    let readerName;
    let readerPhoto;

    if (content.author){
        byAuthor = content.byAuthor.get(language);
    }
    if (content.reader){
        reader = content.reader.get(language);
        readerName = reader.name;
        readerPhoto = reader.photo;
    }

    const {
        //General Info
        contentId,
        format,
        subtitle,
        type,
        graphic,
        narration,
    } = content;

    let sessionId, partNo, numParts;

    if(material){

        const sessionInfo = material.sessionInfo;

        sessionId = sessionInfo.sessionId;
        partNo = sessionInfo.partNo;
        numParts = sessionInfo.ofParts;
    }

    //Functions
    function TitleAuthor(){

        return (
            <div className="summaryInfoHeader label text-center">
                <h2 className="summaryTitle">{ title }</h2>
                {
                    subtitle ?
                        <p>{ subtitle }</p>
                        :''
                }
                {
                    byAuthor ?
                        <span className="summaryAuthor">{ byAuthor }</span>
                        :''
                }
            </div>
        )
    }
    function runTime(){

        if (runTimeString){
            return(
                <div className='runtime col-sm text-center lightText'>
                    <p>{pageText.labels.runTime[language]}:</p>
                    <p>{runTimeString}</p>
                </div>
            )
        }
    }
    function readBy() {

        if (reader) {
            return (
                <div className="LibraryReadBy">

                    <div className="readByContent">

                        <div className="libReadByName d-flex justify-content-center align-items-center row">

                            <div className={'col-sm'}>
                                <p>{pageText.labels.readBy[language]}</p>
                                <p>{readerName}</p>
                            </div>

                            {
                                readerPhoto ?
                                    <div
                                        className="libReadByPhoto medWhiteBorder"
                                        style={{backgroundImage: `url(${readerPhoto})`}}
                                    />
                                    : ''
                            }

                            {runTime()}

                        </div>
                    </div>
                </div>
            )
        } else if ( (content.format === 'book' || content.format ==='discussion') && !narration){
            return (
                <div className="libReadByName label">
                    <p>{pageText.labels.narrComing[language]}</p>
                </div>
            )
        }
    }
    function StartMaterial( props ){

        function getLink(){

            if (sessionId){
                return `/s${sessionId}/p${partNo}`;
            }
            else if (format === 'book'){
                return `/read/book/${contentId}`;
            }
        }

        function getText(){
            switch( format ){
                case('book'):
                    return 'Start Book';

                case('discussion'):
                    return 'Start Discussion';

                case('video'):
                    return 'Start Video';
                default: break;
            }
        }

        return(
            <Button text={getText()} link={getLink()} iconType={'rightArrow'}/>
        )
    }

    return(
        <div className='summaryEntry container'>

            <CloseButton closeCurrent={props.closeCurrent} type='summary'/>

            {
                partNo ?
                    <div className='partLabel label medWhiteBorder roundBorder' id={'partLabel'}>
                        <p>Session #{material.sessionInfo.materialId}</p>
                        <p>Part {partNo} of {numParts}</p>
                        <span>{type}</span>
                    </div>
                    :''
            }

            <div className={'row'}>

                <div className="summaryEntryGraphic col-md d-flex flex-column justify-content-center">
                    <img
                        id="summaryGraphic"
                        src={ graphic }
                        alt="Book Cover"
                    />
                </div>

                <div className={'col'}>

                    <div className='summaryEntryBody'>

                        <TitleAuthor/>

                        <p className='summaryDesc label text-center'>{ description }</p>

                        {readBy()}

                        {!reader && runTimeString ? runTime() :''}

                        <div className={'d-flex flex-row w-100 justify-content-around'}>

                            <StartMaterial/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Summary(props){

    let session;
    let book;
    let sessionId;
    let material;

    function closeCurrent(){
        props.closeCurrent();
    }

    function handleClick(event){

        if(event.target.id === 'Summary'){
            closeCurrent();
        }
    }

    if (props.currentSession){
        session = curriculum.sessions[props.currentSession - 1];
        sessionId = session.sessionInfo.sessionId;
        material = session.material;
    }
    else if (props.currentMaterial){
        material = curriculum.sessions[ props.currentMaterial[0] - 1 ].material[ props.currentMaterial[1] - 1 ]
    }
    else if (props.currentBook){
        book = books[props.currentBook];
    }

    if (props.currentMaterial || props.currentBook) {

        return(
            <div className="Summary controlBox" id="Summary" onClick={handleClick}>

                {
                    props.currentSession ?
                        <div className={'sessionHeader medWhiteBorder roundBorder'} onClick={''}>

                            <h2 className='sessionLabel label' id={'sessionLabel'}>Session #{ sessionId }</h2>

                            <Button
                                text={'Start Session'}
                                iconType={'rightArrow'}
                                link={`/s${sessionId}`}
                            />

                            <CloseButton closeCurrent={closeCurrent} type='summary'/>

                        </div>
                        :''
                }

                <div className={'materialList row'}>
                    <div className='col'>

                        {
                            material ?
                                <SummaryEntry
                                    material={material}
                                    language={props.language}
                                    closeCurrent={closeCurrent}
                                />
                                :
                                <SummaryEntry
                                    content={book}
                                    language={props.language}
                                    closeCurrent={closeCurrent}
                                />
                        }
                    </div>
                </div>
            </div>
        )
    } else {
    }
}

export default Summary;