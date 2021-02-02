import React from 'react';

//Style Sheet
import './libraryItem.css';

class LibraryItem extends React.Component{
    constructor(props){
        super(props);
        this.setBook = this.setBook.bind(this);
    }
    showImages( image ){
        if ( image !== 'No Graphic' ){
            return(
                <div className="mediaGraphic">
                    <img src={ image } alt="Book Cover"/>
                </div>
            ) 
        }
        else {
            return(
                <div className="mediaGraphic noGraphic">
                    <p>Media Graphic</p>
                </div>
            )
        }
    }
    scrollTo(){
        if ( document.getElementById('Summary') ){
            const summary = document.getElementById('Summary');
            //summary.scrollIntoView( { block: 'start', behavior: 'smooth' } );
        }
    }
    setBook(){
        this.props.changeSession(this.props.sessionId);
        setTimeout(this.scrollTo,500)
    }
    render(){
        return(
            <button 
                className="mediaListEntry"
                onClick={this.setBook}
            >

                <div className='sessionIconTitle' id="summaryMediaDets">
                    <h2 className='mediaTitle'>Session #{this.props.sessionId}</h2>
                </div>

                <div className="mediaGraphics">
                    {this.showImages( this.props.image ) }
                </div>

            </button>
        )        
    }
}

export default LibraryItem;