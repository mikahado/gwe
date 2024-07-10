import React from "react";

// Style Sheet
import "./libraryList.css";

// Media Data
import { default as get } from "../../../utilities/contentGetters";
import { experimentsArray} from "../../../data/experiments/experiments";
import { dramasArray} from "../../../data/dramas/dramas";

// Sub - Components
import LibraryBook from "../libraryBook/libraryBook";
import LibraryExperiment from "../libraryExperiment/libraryExperiment";
import LibraryDrama from "../libraryDrama/libraryDrama";
import {discussionsArray} from "../../../data/discussions/discussions";
import LibraryDiscussion from "../libraryDiscussion/libraryDiscussion";
import pageText from "../../../data/pageText";

let typeLabels = pageText.labels.materialTypes;

class LibraryBookList extends React.Component {
  getLibraryList() {
    return get.libraryBooks().map((book) => {
      return (
        <LibraryBook
          contentId={book.contentId}
          //key={content.label}
          image={book.graphic}
          changeBook={this.props.changeBook}
          title={book.title.get(this.props.language)}
          author={book.author}
        />
      );
    });
  }
  componentDidMount() {
    console.log()
    if (this.props.sectionId){
      console.log(this.props.sectionId)
      let element = document.getElementById(this.props.sectionId);
      if(element){
        element.scrollIntoView();
      }
    }
  }


  render() {
    return (
      <div id="libraryList" className={'pageBody LibraryList  p-md-2'}>
        <h2 id={'books'} className={'sectionHeader'}>{typeLabels.books.get(this.props.language)}</h2>

        <div id="libraryList" className="d-flex flex-wrap justify-content-center align-items-baseline">
          {this.getLibraryList()}
        </div>

        <h2 className={'sectionHeader'} id={'discussion'}>{pageText.labels.materialTypes.discussions.get(this.props.language)}</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-baseline">
          {
            discussionsArray.map( discussion =>{
              return(
                <LibraryDiscussion
                  contentId={discussion.contentId}
                  //key={content.label}
                  image={discussion.graphic}
                  changeBook={this.props.changeBook}
                  title={discussion.title.get(this.props.language)}
                  author={discussion.author}
                />
              )
            })
          }
        </div>

        <h2 className={'sectionHeader'} id={'experiments'}>{typeLabels.experiments.get(this.props.language)}</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-baseline">
          {
            experimentsArray.map( experiment =>{
              return(
                <LibraryExperiment
                  title={experiment.title.get(this.props.language)}
                  contentId={experiment.contentId}
                />
              )
            })
          }

        </div>

        {/* <h2 className={'sectionHeader'} id={'dramas'}>{typeLabels.dramas.get(this.props.language)}</h2> */}
        {/* <div className="d-flex flex-wrap justify-content-center align-items-baseline">
          {
            dramasArray.map( drama =>{
              return(
                <LibraryDrama
                  title={drama.title.get(this.props.language)}
                  contentId={drama.contentId}
                />
              )
            })
          }

        </div> */}

      </div>
    );
  }
}

export default LibraryBookList;
