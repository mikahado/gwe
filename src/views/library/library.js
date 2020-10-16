import React from 'react';
import './library.css';
import Media from '../../mediaContent';
import Summary from '../../components/summary/summary';
import '../../components/summary/summary.css';
import LibraryList from '../../components/libraryList/libraryList';
import TopNav from '../../components/topnav/topnav';
import Mascot from '../../components/mascot/mascot';

class Library extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentBook: '',
        }
        this.selectBook = this.selectBook.bind(this);
    }
    selectBook(book){
        this.setState({currentBook: 'Global Warming Express'});
    }
    componentDidMount(){
        if(this.props.currentBook){
            const summary = document.getElementById('Summary');
            summary.style.display = 'block';
        }
    }
    render(){
        return(
                <div id="Library">

                    <TopNav/>

                    <h1 className="libraryTitle">Learning Library</h1>

                    <LibraryList
                        changeBook={this.props.changeBook}
                        currentBook={this.props.currentBook}
                    />

                    <div className="summaryBar">

                        <Summary id="Summary"
                            currentBook={this.props.currentBook}
                            closeCurrent={this.props.closeCurrent} 
                        />

                        <Mascot
                            character="penguin"
                            type="library"
                        />


                    </div>
                    



                </div>
        )
    }
}

export default Library;