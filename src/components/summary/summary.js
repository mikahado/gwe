// React
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

// StyleSheets
import './summary.css';
/* import './summaryEntry2.css'; */
import './summaryEntry.css'
import './libraryReadBy.css';

// Utilities
import { default as get } from '../../utilities/contentGetters';
import pageText from '../../data/pageText';

// Sub-Components
import CloseButton from '../closeButton/closeButton';
import {Button} from "../button/button";

export function SummaryEntry ( props ){

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
    function summaryEntryInfoHeader(){

        function partLabel(){
            return (
                <div className='partLabel label' id={'partLabel'}>
                    <h3>Part #:<br/> {partNo} of {ofParts}</h3>
                    <hr/>
                    <span>{type}</span>
                </div>
            )
        }
        function TitleAuthor(){

            if (format === 'book'){
                return (
                    <div className="summaryInfoHeader label">
                        <h2 className="summaryTitle">{ title }</h2>
                        <hr/>
                        <span className="summaryAuthor">{ pageText.labels.byAuthor( author, language ) }</span>
                    </div>
                )

            } else {
                return (
                    <div className="summaryInfoHeader label">
                        <h2>{ title }</h2>
                    </div>
                )
            }
        }

        return (
            <div className={'summaryEntryTop'}>
                <div className={'summaryEntryTopInfo'}>
                    {partLabel()}
                    <TitleAuthor />
                </div>
                <ExpandDetails/>
            </div>

        )
    }
    function summaryEntryDetails(){

        function SummaryEntryDescription(){
            return(

                    <p className='summaryDesc label'>{ description }</p>

            )
        }
        function summaryGraphic(){

            function checkForGraphic(){
                if ( graphic !== 'No Graphic' ){
                    return (
                        <img
                            id="summaryGraphic"
                            src={ graphic }
                            alt="Book Cover"
                        />
                    )
                }
                else{
                    return(
                        <div className="mediaGraphic noGraphic">
                            <p>Media Graphic</p>
                        </div>
                    )

                }
            }

            return(
                <div className="summaryGraphic" >
                    { checkForGraphic() }
                </div>
            )

        }
        function readBy(){

            function LibraryReadBy(){

                function getReaderPhoto(readerPhoto){
                    if ( readerPhoto ){
                        return (
                            <div className="libReadByPhoto">
                                <img src={ readerPhoto } alt="Narrator"/>
                            </div>
                        )
                    }
                }

                return(
                    <div className="LibraryReadBy label">

                        {
                            reader ?

                                <div className="readByContent">

                                    { getReaderPhoto( readerPhoto ) }

                                    <div className="libReadByName">
                                        <p>{ pageText.labels.readBy[ language ] }</p>
                                        <p>{ reader }</p>

                                        <hr/>

                                        <div className='runtime'>
                                            <p>{pageText.labels.runTime[ language ]}:</p>
                                            <p>{ runTime }</p>
                                        </div>

                                    </div>

                                </div>

                                :
                                <div className="libReadByName">
                                    <p>{ pageText.labels.narrComing[ language ] }</p>
                                </div>
                        }
                    </div>
                )
            }

            if ( format === 'book' ){

                return LibraryReadBy()
            }
        }
        function soloRunTime(){
            return (
                <div className='runtime label'>
                    <p>{pageText.labels.runTime[ language ]}:</p>
                    <p>{ runTime }</p>
                </div>
            )
        }
        function StartMaterial( props ){

            function getLink(){
                return `/s${sessionId}/p${partNo}`;
            }

            function getText(){
                switch( format ){
                    case('book'):
                        return 'Start Book';
                        break;

                    case('discussion'):
                        return 'Start Discussion';
                        break;

                    case('video'):
                        return 'Start Video';
                        break;
                }
            }

            return(
                <Button text={getText()} link={getLink()} iconType={'rightArrow'}/>
            )
        }

        if (expand){
            return(
                <div className='summaryEntryBody'>

                    {SummaryEntryDescription()}
                    {summaryGraphic()}

                    {readBy()}
                    {format !== 'book' && runTime ? soloRunTime() :''}
                    <StartMaterial/>
                </div>
            )
        }
    }
    function ExpandDetails(props){

        function handleExpand(){
            if (!expand){
                setExpand(1);
            } else {
                setExpand(0);
            }
        }
        function toggleText(){
            return (
                !expand ?
                    'Show Details'
                    :
                    'Hide Details'
            )
        }

        return (
            <Button
                text={toggleText()}
                click={handleExpand}
                iconType={!expand ? 'downArrow' : 'upArrow'}
            />
            )

    }

    return(
        <div className='summaryEntry'>
            {summaryEntryInfoHeader()}
            {summaryEntryDetails()}
        </div>
    )
}

class Summary extends React.Component{
    constructor(props){
        super(props);
        this.closeCurrent = this.closeCurrent.bind(this);
    }
    closeCurrent(){
        this.props.closeCurrent();
    }
    scrollIn(){
        if ( document.getElementById('Summary') ){
        }
        const summary = document.getElementById('Summary');
        if (summary.style.display === 'block'){
            summary.scrollIntoView({behavior: "smooth", block: "start"}); 
        }
    }
    getMaterialList( materialList, language ){

        return materialList.map( material =>{
            console.log( material )
            return <SummaryEntry summary={material} language={language}/>
        })
    }
    getSummaryGraphic(bookLabel){
        return `${process.env.PUBLIC_URL}/assets/books/${bookLabel}/pages/1.jpg`
    }
    componentDidMount(){
    }
    render(){
        if (this.props.currentSession){
            const session = get.sessionSummary( this.props.currentSession, this.props.language );
            console.log( session );
            
            return(
                <div className="Summary controlBox" id="Summary">

                    <CloseButton closeCurrent={this.closeCurrent} type='summary'/>
                    
                    <h2 className='sessionLabel label' id={'sessionLabel'}>Session #{ session.sessionId }</h2>

                    <Button text={'Start Session'} iconType={'rightArrow'} link={`/s${this.props.currentSession}`}/>

                    <div className='materialList'>

                        { 
                            this.getMaterialList( 
                                session.material, 
                                this.props.language 
                                ) 
                        }

                    </div>

                </div>
            )
        }
        else{
            return(
                <div className={'Summary controlBox'} id={'Summary'}>
                    <p className={'label'}>Click A Session to begin!</p>
                </div>
            )
        }
    }
}

export default Summary;