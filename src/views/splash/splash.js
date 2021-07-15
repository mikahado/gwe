import React from "react";

// Sub-Components
//import SplashNav from '../../components/splashNav/splashNav';
//import SplashGraphics from '../../components/splashGraphics/splashGraphics';
import SplashTrain from "./splashTrain/splashTrain";
import { Button } from "../../components/buttons/buttons";

//Style Sheet
import "./splash.css";
import "./splashGraphics.css";
import pageText from "../../data/pageText";

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

  function handleLangChange(e){
    props.selectLanguage(e.target.id);
  }

  return (
    <div className={"Splash d-grid position-relative w-100"}>
      <div className={"splashBody position-relative"}>
        <div className={"menuWrap d-flex justify-content-md-center justify-content-xl-end align-items-md-start"}>
          <div className={"menu d-flex flex-column align-items-center mr-md-5 mt-md-4"}>
            <div className="splashLogo">
              <img src={getLogo()} alt={""} />
            </div>

            <Button
              text={pageText.buttons.landing.jumpOnboard.get(props.language)}
              link={"/map"}
              iconType={"rightArrow"}
            />

            <Button text={pageText.buttons.landing.teachGuide.get(props.language)} link={"/guide"} />

            <div className={'langs d-flex flex-row'}>
              {
                props.suppLangs.map( lang =>{
                  return(
                    <button
                      id={lang}
                      onClick={handleLangChange}
                      className={props.language === lang ? 'current' : null }
                    >
                      {pageText.labels.languages[lang]}
                    </button>
                  )
                })
              }
            </div>
          </div>
        </div>

        <SplashGraphics />
      </div>
    </div>
  );
}
