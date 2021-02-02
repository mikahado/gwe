//React
import React from 'react';

// Utilites
import pageText from "../../data/pageText";

// Sub-Components
import Summary from "../../components/summary/summary";
import TopNav from '../../components/topnav/topnav';
import Sally from "../../components/sally/sally";
import LibraryList from "../../components/libraryList/libraryList";

// Style Sheet
import './library.css';
import './libraryRepeat.css';
import './libraryBottom.css';
import './libraryList.css';

// Images
import Fluff from "./fluff.png";
import {default as get} from "../../utilities/contentGetters";
import LibraryItem from "../../components/libraryItem/libraryItem";


function LibraryBottom(props){
    return(
        <div className="libraryBottom">

            {/*<div className="libraryBottomBG">
                <img id="libraryBottom" src={LibraryBottomBG}/>
            </div>
            */}

            <Sally
                language={props.language}
                message={
                    props.currentBook ?
                        'summary'
                        : 'library'
                }
                addlClass={'library'}
            />

            <div className='fluff'>
                <img src={Fluff}/>
            </div>

        </div>
    )
}

class Library extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentSession: '',
            windowOrientation: window.innerWidth > window.innerHeight ?
                'landscape'
                : 'portrait'
        }
        this.changeSession = this.changeSession.bind(this);
        this.closeCurrent = this.closeCurrent.bind(this);
    }
    scrollToSummary(){
        if(document.getElementById('Summary')){
            const summary = document.getElementById('Summary');
            summary.scrollIntoView( { block: 'start', behavior: 'smooth' } );
        }

    }
    changeSession( sessionId ){
        this.setState( { currentSession: sessionId });

        if(this.props.currentBook){
            if ( document.getElementById('Summary') ){
                const summary = document.getElementById('Summary');
                summary.style.display = 'block';
            }
            setTimeout(this.scrollToSummary, 100);
        }
    }
    closeCurrent(){
        this.setState( { currentSession: '' });
    }
    componentDidMount(){
    }
    render(){
        return(
            <div id="Library" className={'container'}>
                    <div className={'row libraryBody'}>
                        <div className={'col-md-7 libraryScroll'}>

                            <h1 className={'libraryTitle'}>Learning Library</h1>

                                <LibraryList
                                    changeSession={this.changeSession}
                                    currentBook={this.props.currentBook}
                                    language={this.props.language}
                                />

                                <LibraryBottom
                                    language={this.props.language}
                                    currentBook={this.state.currentBook}
                                />

                                {/*<h1 className="libraryTitle">
                                {pageText.pageTitles.library[ this.props.language ] }
                                </h1>*/}

                        </div>

                        <div className={'col-md-5 libraryInfo'}>

                            <div className={'row'}>
                                <div className={'col'}>

                                    <TopNav
                                        language={this.props.language}
                                        changeLanguage={this.props.changeLanguage}
                                        page={'library'}
                                    />

                                </div>
                            </div>



                                    <Summary
                                        currentSession={this.state.currentSession}
                                        closeCurrent={this.closeCurrent}
                                        language={this.props.language}
                                    />



                        </div>

                    </div>

                { /*<div className={'libraryBody'}> </div>*/}

            </div>
        )
    }
}

export default Library;
