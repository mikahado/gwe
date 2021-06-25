import React from "react";

//Style Sheet
import "./libraryDiscussion.css";
import { Link } from "react-router-dom";

class LibraryDiscussion extends React.Component {
  constructor(props) {
    super(props);
    this.setBook = this.setBook.bind(this);
  }
  showImages(image) {
    if (image !== "No Graphic") {
      return (
        <div
          className="mediaGraphic"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      );
    } else {
      return (
        <div className="mediaGraphic noGraphic">
          <p>Media Graphic</p>
        </div>
      );
    }
  }
  setBook() {
    this.props.changeBook(this.props.contentId);
  }
  render() {
    return (
      <Link to={`/read/discussion/${this.props.contentId}`}>
        <button
          className="libraryDiscussion"
          onClick={this.setBook}
          style={{ backgroundImage: `url(${this.props.image})` }}
        >
          <div className="sessionIconTitle" id="summaryMediaDets">
            <h2 className="mediaTitle">{this.props.title}</h2>
          </div>
        </button>
      </Link>
    );
  }
}

export default LibraryDiscussion;
