import React from "react";

// Style Sheet
import "./splashBubbles.css";

// Images
import bubbles from "./bubbles.png";

class SplashBubbles extends React.Component {
  render() {
    return (
      <div className="splashBubbles paused">
        <div className="bubbleContainer one">
          <div className="bubble">
            <img src={bubbles} alt={""} />
          </div>
        </div>

        <div className="bubbleContainer two">
          <div className="bubble">
            <img src={bubbles} alt={""} />
          </div>
        </div>

        <div className="bubbleContainer three">
          <div className="bubble">
            <img src={bubbles} alt={""} />
          </div>
        </div>

        <div className="bubbleContainer four">
          <div className="bubble">
            <img src={bubbles} alt={""} />
          </div>
        </div>

        <div className="bubbleContainer five">
          <div className="bubble">
            <img src={bubbles} alt={""} />
          </div>
        </div>

        <div className="bubbleContainer six">
          <div className="bubble">
            <img src={bubbles} alt={""} />
          </div>
        </div>

        {/*}

                <div className="bubbleContainer two">
                    <img className="bubble" src={bubbles}/>
                </div>

                <div className="bubbleContainer three">
                    <img className="bubble" src={bubbles}/>
                </div>

                <div className="bubbleContainer four">
                    <img className="bubble" src={bubbles}/>
                </div>

                <div className="bubbleContainer five">
                    <img className="bubble" src={bubbles}/>
                </div>

                <div className="bubbleContainer six">
                    <img className="bubble" src={bubbles}/>
                </div>


        {*/}
      </div>
    );
  }
}
export default SplashBubbles;
