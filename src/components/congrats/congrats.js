// React
import React from "react";

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
          <h1 className="label">Congrats, you've completed this material!</h1>

          <div className="congratsOptions label">
            {this.props.sessionInfo ? (
              <Button
                text={"Continue"}
                link={`/s${this.props.sessionInfo.sessionId}/p${this.props.sessionInfo.partNo}/next`}
                language={this.props.language}
                iconType={"rightArrow"}
              />
            ) : (
              ""
            )}

            <div className={"otherOptions"}>
              <Button
                text={"readAgain"}
                click={this.readAgain}
                language={this.props.language}
                iconType={"leftArrow"}
              />

              {this.props.sessionInfo ? (
                <Button
                  text={"Back to Sessions"}
                  link={`/map/s-${this.props.sessionInfo.sessionId}/p-${this.props.sessionInfo.partNo}`}
                  language={this.props.language}
                  iconType={"leftArrow"}
                />
              ) : (
                <Button
                  text={"backLibrary"}
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
