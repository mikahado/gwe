import React from "react";

// Sub-Components
//import SplashNav from '../../components/splashNav/splashNav';
//import SplashGraphics from '../../components/splashGraphics/splashGraphics';
import SplashTrain from "./splashTrain/splashTrain";
import { Button } from "../../components/buttons/buttons";

//Style Sheet
import "./splash.css";
import "./splashGraphics.css";

function SplashGraphics() {
  return (
    <div className="splashGraphics container-fluid">
      <div className={"row no-gutters h-100 w-100"}>
        <div className={"trainCol col"}>
          <div className={"trainWrap"}>
            <SplashTrain />
          </div>
        </div>

        <div className={"col-auto"} />
      </div>
    </div>
  );
}

export function Splash(props) {
  function getLogo() {
    return `${process.env.PUBLIC_URL}/assets/images/logos/GWElogo.png`;
  }

  return (
    <div className={"Splash d-grid position-relative w-100"}>
      <div className={"splashBody position-relative"}>
        <div className={"menuWrap d-flex"}>
          <div className={"menu d-flex flex-column align-items-center"}>
            <div className="splashLogo">
              <img src={getLogo()} alt={""} />
            </div>

            <Button
              text={"Jump Onboard"}
              link={"/map"}
              iconType={"rightArrow"}
            />

            <Button text={"Teacher's Guide"} link={"/guide"} />
          </div>
        </div>

        <SplashGraphics />
      </div>
    </div>
  );
}
