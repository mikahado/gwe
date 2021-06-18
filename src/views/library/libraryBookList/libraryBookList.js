import React from "react";

// Style Sheet
import "./libraryList.css";

// Media Data
import { default as get } from "../../../utilities/contentGetters";
import { experimentsArray} from "../../../data/experiments/experiments";

// Sub - Components
import LibraryBook from "../libraryBook/libraryBook";
import LibraryExperiment from "../libraryExperiment/libraryExperiment";

class LibraryBookList extends React.Component {
  getLibraryList() {
    return get.libraryBooks().map((book) => {
      return (
        <LibraryBook
          contentId={book.contentId}
          //key={content.label}
          image={book.graphic}
          changeBook={this.props.changeBook}
          title={get.extractFromData.title(book.title, this.props.language)}
          author={book.author}
        />
      );
    });
  }

  render() {
    return (
      <div id="libraryList" className={'LibraryList'}>
        <h2 className={'libSectionHeader'}>Books</h2>

        <div id="libraryList" className="d-flex flex-wrap justify-content-center align-items-baseline">
          {this.getLibraryList()}
        </div>

        <h2 className={'libSectionHeader'}>Experiments</h2>
        <div className="d-flex flex-wrap justify-content-center align-items-baseline">
          {
            experimentsArray.map( experiment =>{
              console.log(experiment)
              return(
                <LibraryExperiment
                  title={experiment.title.get(this.props.language)}
                  contentId={experiment.contentId}
                />
              )
            })
          }
        </div>

      </div>
    );
  }
}

export default LibraryBookList;
