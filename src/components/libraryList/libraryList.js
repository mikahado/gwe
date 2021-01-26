import React from 'react';

// Style Sheet
import './libraryList.css';

// Media Data
import { default as get } from '../../utilities/contentGetters';



// Sub - Components
import LibraryItem from '../libraryItem/libraryItem';

import './libraryList.css';



class LibraryList extends React.Component{
    getBookCover(bookLabel){
        return `${process.env.PUBLIC_URL}/assets/book/${bookLabel}/pages/1.jpg`;
    }
    getLibraryList(){
        return get.libraryIcons().map( content =>{
            return(
                <LibraryItem
                    sessionId={content.sessionId}
                    key={content.label}
                    image={content.graphic}
                    changeSession={this.props.changeSession}
                />
            )
        })
    }
    render(){
        return(
            <div className="LibraryList" id="libaryList">
                {this.getLibraryList()}
            </div>
        )
    }
}

export default LibraryList;