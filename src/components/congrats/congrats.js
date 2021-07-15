// React
import React from "react";
import pageText from "../../data/pageText";

// Style Sheet
import "./congrats.css";
import { Button } from "../buttons/buttons";

class Congrats extends React.Component {
  constructor(props) {
    super(props);
    this.readAgain = this.readAgain.bind(this);
  }

  readAgain() {
    //Set State
    this.props.changePage(1, true);

    //Remove Congrats Window
    const congrats = document.getElementById("complete");
    congrats.style.display = "none";
  }

  render() {
    return (
      <div id="complete">
        <div className="completeWindow controlBox">
          <h1 className="label">{pageText.messages.materialComplete.get(this.props.language)}</h1>

          <div className="congratsOptions label">
            {this.props.sessionInfo ? (
              <Button
                text={pageText.buttons.completions.continue.get(this.props.language)}
                link={`/s${this.props.sessionInfo.sessionId}/p${this.props.sessionInfo.partNo}/next`}
                language={this.props.language}
                iconType={"rightArrow"}
              />
            ) : (
              ""
            )}

            <div className={"otherOptions"}>
              <Button
                text={pageText.buttons.completions.readAgain.get(this.props.language)}
                click={this.readAgain}
                language={this.props.language}
                iconType={"leftArrow"}
              />

              {this.props.sessionInfo ? (
                <Button
                  text={pageText.buttons.completions.backSessions.get(this.props.language)}
                  link={`/map/s-${this.props.sessionInfo.sessionId}/p-${this.props.sessionInfo.partNo}`}
                  language={this.props.language}
                  iconType={"leftArrow"}
                />
              ) : (
                <Button
                  text={pageText.buttons.completions.backLibrary.get(this.props.language)}
                  link={"/library"}
                  language={this.props.language}
                  iconType={"leftArrow"}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Congrats;
