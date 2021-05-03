import React from 'react';

// Style Sheet
import './libraryList.css';

// Media Data
import { default as get } from '../../../utilities/contentGetters';

// Sub - Components
import LibraryBook from "../libraryBook/libraryBook";

class LibraryBookList extends React.Component{

    getLibraryList(){
        return get.libraryBooks().map( book =>{
            return(
                <LibraryBook
                    contentId={book.contentId}
                    //key={content.label}
                    image={book.graphic}
                    changeBook={this.props.changeBook}
                    title={get.extractFromData.title(book.title,this.props.language)}
                    author={book.author}
                />
            )
        })
    }

    render(){
        return(
            <div className="LibraryList d-flex flex-wrap justify-content-center align-items-baseline" id="libraryList">
                {this.getLibraryList()}
            </div>
        )
    }
}

export default LibraryBookList;