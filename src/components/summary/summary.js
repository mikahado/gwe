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
import {Button} from "../buttons/buttons";

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
                <div className='partLabel label col-xl' id={'partLabel'}>
                    <h3>Part #:<br/> {partNo} of {ofParts}</h3>
                    <hr/>
                    <span>{type}</span>
                </div>
            )
        }
        function TitleAuthor(){

            if (format === 'book'){
                return (
                    <div className="summaryInfoHeader label col-lg">
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
            <div className={'summaryEntryTop row'}>

                <div className={'summaryEntryTopInfo col'}>

                    <div className={'row'}>

                            {partLabel()}
                            <TitleAuthor />

                    </div>

                    <div className={'row'}>
                        <div className={'col'}>

                            <ExpandDetails/>

                        </div>
                    </div>

                </div>
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
                            <div className="libReadByPhoto col-lg-5">
                                <img src={ readerPhoto } alt="Narrator"/>
                            </div>
                        )
                    }
                }

                return(
                    <div className="LibraryReadBy label col">

                        {
                            reader ?

                                <div className="readByContent row">

                                    { getReaderPhoto( readerPhoto ) }

                                    <div className="libReadByName col-lg-5">
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
                                <div className="libReadByName row">
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
                <div className='summaryEntryBody row'>
                    <div className={'col'}>

                        <div className={'row'}>
                            <div className={'col'}>
                                {SummaryEntryDescription()}
                            </div>
                        </div>
                        
                        <div className={'row'}>
                            <div className={'col'}>
                                {summaryGraphic()}
                            </div>
                        </div>

                        <div className={'row'}>
                            <div className={'col'}>

                                {readBy()}
                                {format !== 'book' && runTime ? soloRunTime() :''}

                            </div>
                        </div>

                        <div className={'row'}>
                            <div className={'col'}>

                                <StartMaterial/>

                            </div>
                        </div>

                    </div>
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
        <div className='summaryEntry col'>

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
            return(
                <div className={'row'}>
                    <SummaryEntry summary={material} language={language}/>
                </div>
            )
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
                <div className="Summary controlBox row" id="Summary">
                    <div className={'col'}>

                        <div className={'sessionHeader row'}>

                            <div className={'col'}>
                                <h2 className='sessionLabel label' id={'sessionLabel'}>Session #{ session.sessionId }</h2>
                            </div>

                            <div className={'col-2'}>
                                <CloseButton closeCurrent={this.closeCurrent} type='summary'/>
                            </div>

                        </div>

                        <div className={'row'}>
                            <div className={'col'}>

                                <Button text={'Start Session'} iconType={'rightArrow'} link={`/s${this.props.currentSession}`}/>

                            </div>
                        </div>

                        <div className={'materialList row'}>
                            <div className='col'>

                                {
                                    this.getMaterialList(
                                        session.material,
                                        this.props.language
                                    )
                                }

                            </div>
                        </div>

                    </div>
                </div>
            )
        }
        else{
            return(
                <div className={'Summary controlBox noSummary'} id={'Summary'}>
                    <p className={'label'}>Click A Session to begin!</p>
                </div>
            )
        }
    }
}

export default Summary;