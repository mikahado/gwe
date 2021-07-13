import React from "react";
import pageText from "../../data/pageText";
import "./translate.css";

class Translate extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.props.changeLanguage();

    if (this.props.restartPage) {
      this.props.restartPage();
    }
  }
  render() {
    return (
      <button
        className="translate"
        id={"translateButton"}
        onClick={this.handleChange}
      >
        {pageText.buttons.language.translate.get(this.props.language)}
      </button>
    );
  }
}

export default Translate;
