// React
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

// StyleSheets
import './summary.css';
/* import './summaryEntry2.css'; */
import './summaryEntry.css'
import './libraryReadBy.css';

// Utilities
import { default as get } from '../../../utilities/contentGetters';
import pageText from "../../../data/pageText";

//Data
import books from "../../../data/books/books";

// Sub-Components
//import CloseButton from '../closeButton/closeButton';
import {Button} from "../../../components/buttons/buttons";
import CloseButton from "../../../components/closeButton/closeButton";

export function SummaryEntry ( props ){
    /*

    const [expand, setExpand] = useState(0);

    const language = props.language;
    const {
        //General Info
        contentId,
        format,
        title,
        type,
        description,
        graphic,
        runTime,
        //Session Info
        sessionId,
        partNo,
        ofParts,
        //Book Info
        author,
        reader,
        readBy,
        readerPhoto
    } = props.summary;

    //Functions


    return(
        <div className='summaryEntry container'>

            <div className='partLabel label medWhiteBorder roundBorder' id={'partLabel'}>
                <h3>Part {partNo} of {ofParts}</h3>
                <span>{type}</span>
            </div>

            <div className={'row'}>

                <div className="summaryEntryGraphic col-md d-flex flex-column justify-content-center">
                    <img
                        id="summaryGraphic"
                        src={ graphic }
                        alt="Book Cover"
                    />
                </div>

                <div className={'col'}>
                    {summaryEntryDetails()}
                </div>

            </div>
        </div>
    )

     */
}

function BookSummary(props){

    function closeCurrent(){
        props.closeCurrent();
    }
    function summaryEntryDetails(book) {

        function TitleAuthor() {

            return (
                <div className="summaryInfoHeader label text-center">

                    <h2 className="summaryTitle">{book.title.get(props.langugage)}</h2>

                    <span className="summaryAuthor">{book.byAuthor.get(props.language)}</span>

                </div>
            )
        }
        function readBy() {

            function getReaderPhoto(readerPhoto) {
                if (readerPhoto) {
                    return (
                        <div className="libReadByPhoto medWhiteBorder" style={{backgroundImage: `url(${readerPhoto})`}}>
                            {/*<img src={ readerPhoto } alt="Narrator"/>*/}
                        </div>
                    )
                }
            }

            return (
                <div className="LibraryReadBy">

                    {
                        book.reader.get(props.language) ?

                            <div className="readByContent">

                                <div className="libReadByName d-flex justify-content-center align-items-center row">

                                    <div className={'col-sm'}>
                                        <p>{pageText.labels.readBy[props.language]}</p>
                                        <p>{book.reader.get(props.language).name}</p>
                                    </div>

                                    {getReaderPhoto(book.reader.get(props.eng).photo)}

                                    <div className='runtime col-sm'>
                                        <p>{pageText.labels.runTime[props.language]}:</p>
                                        <p>{book.runTime.get(props.language).string.get(props.language)}</p>
                                    </div>

                                </div>

                            </div>

                            :
                            <div className="libReadByName label">
                                <p>{pageText.labels.narrComing[props.language]}</p>
                            </div>
                    }
                </div>
            )
        }
        function soloRunTime(){
            return (
                <div className='runtime label'>
                    <p>{pageText.labels.runTime[ props.language ]}:</p>
                    <p>{ get.extractFromData.runTime(book.runTime,props.language) }</p>
                </div>
            )
        }
        function StartMaterial( props ){

            function getLink(){
                return `/read/book/${props.currentBook}`;
            }

            function getText(){
                return 'Start Book';
            }

            return(
                <Button text={getText()} link={getLink()} iconType={'rightArrow'}/>
            )
        }

        return(
            <div className='summaryEntryBody'>

                <TitleAuthor/>

                <p className='summaryDesc label text-center'>{ book.description.get(props.language) }</p>

                {readBy()}

                <div className={'d-flex flex-row w-100 justify-content-around'}>

                    <StartMaterial
                        currentBook={book.contentId}
                    />

                </div>

            </div>
        )
    }

    let session;
    const params = useParams();

    if (props.currentBook) {
        const book = books[props.currentBook];

        return(
            <div className="Summary controlBox" id="Summary">

                <div className='summaryEntry container'>

                    <CloseButton closeCurrent={closeCurrent} type={'summary'}/>

                    <div className={'row'}>

                        <div className="summaryEntryGraphic col-md d-flex flex-column justify-content-center">
                            <img
                                id="summaryGraphic"
                                src={ book.graphic }
                                alt="Book Cover"
                            />
                        </div>

                        <div className={'col'}>
                            {summaryEntryDetails(book)}
                        </div>

                    </div>
                </div>

            </div>
        )

    } else {
        //session = get.sessionSummary( parseInt(params.sessionId), props.language);
    }
            

}

export default BookSummary;