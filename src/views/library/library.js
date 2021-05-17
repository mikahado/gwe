//React
import React from 'react';

// Sub-Components
import Summary from "../../components/summary/summary";
import Sally from "../../components/sally/sally";
import LibraryBookList from "./libraryBookList/libraryBookList";

// Style Sheet
import './library.css';
import './libraryRepeat.css';
import './libraryBottom.css';

// Images
import Fluff from "./fluff.png";


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
                <img src={Fluff} alt={''}/>
            </div>

        </div>
    )
}

class Library extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentBook: '',
            windowOrientation: window.innerWidth > window.innerHeight ?
                'landscape'
                : 'portrait'
        }
        this.changeBook = this.changeBook.bind(this);
        this.closeCurrent = this.closeCurrent.bind(this);
    }
    scrollToSummary(){
        if(document.getElementById('Summary')){
            const summary = document.getElementById('Summary');
            summary.scrollIntoView( { block: 'start', behavior: 'smooth' } );
        }

    }
    changeBook( contentId ){
        this.setState( { currentBook: contentId });
        /*

        if(this.props.currentBook){
            if ( document.getElementById('Summary') ){
                const summary = document.getElementById('Summary');
                summary.style.display = 'block';
            }
            setTimeout(this.scrollToSummary, 100);
        }

         */
    }
    closeCurrent(){
        this.setState( { currentBook: '' });
    }
    componentDidMount(){
    }
    render(){
        return(
            <div id="Library" className={`row no-gutters ${this.state.currentBook ? 'scrollLock' : ''}`}>

                {
                    this.state.currentBook ?
                        <Summary
                            currentBook={this.state.currentBook}
                            closeCurrent={this.closeCurrent}
                            language={this.props.language}
                        />
                        :''
                }

                <div className={'col'}>

                    <div className={'Library'}>

                        <div className={'libraryRepeat'}>

                            <h1 className={'libraryTitle'}>Learning Library</h1>

                            <LibraryBookList
                                changeBook={this.changeBook}
                                currentBook={this.props.currentBook}
                                language={this.props.language}
                            />

                        </div>

                        <LibraryBottom
                            language={this.props.language}
                            currentBook={this.state.currentBook}
                        />



                    </div>



                </div>
            </div>
        )
    }
}

export default Library;
