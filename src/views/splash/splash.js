import React, {useEffect, useState} from 'react';

// Sub-Components
//import SplashNav from '../../components/splashNav/splashNav';
//import SplashGraphics from '../../components/splashGraphics/splashGraphics';
import SplashTrain from "./splashTrain/splashTrain";
import {Button} from "../../components/buttons/buttons";
import Translate from "../../components/translate/translate";

//Style Sheet
import './splash.css';
import './splashGraphics.css';

function SplashNav(props){

    function getLogo(){
        return `${process.env.PUBLIC_URL}/assets/images/logos/GWElogo.png`;
    }
    function checkMobile(){

        let short = window.matchMedia(`(max-height: 500px)`).matches;
        let skinny = window.matchMedia(`(max-width: 500px)`).matches;

        if(short || skinny){
            mobile = true;
        }

    }
    function toggleMenu(){
        if(!expand){
            setExpand(1);
        }
        else {
            setExpand(0);
        }
    }

    let mobile = false;
    checkMobile();
    let [expand,setExpand] = useState(mobile ? 0 : 1);

    useEffect( ()=>{
        mobile = window.matchMedia(`(max-height: 500px)`|| `(max-height: 500px)`).matches;
        console.log(`Mobile: ${mobile}`);
    })

    return(
        <div className="splashNav col-sm-4 col-lg-2 h-100">

            <div className="splashLogo"><img src={ getLogo() }/></div>

            <Button text={'Jump Onboard'} link={'/library'} iconType={'rightArrow'}/>

            <Translate
                language={props.language}
                changeLanguage={props.changeLanguage}
            />

            {
                mobile ?
                    <Button
                        text={'Menu'}
                        iconType={!expand ? 'downArrow' : 'upArrow'}
                        click={toggleMenu}
                    />
                    : ''
            }

            {
                expand ?
                    <nav>

                        <Button text={'Resources'} link={'/resources'} id={'splashResources'} />

                        <button className="splashAboutGWE">
                            <a href="https://www.theglobalwarmingexpress.org/"
                               id="homeLink"
                               target="_blank"
                               rel="noopener noreferrer"
                            >
                                About GWE
                            </a>
                        </button>

                    </nav>
                    :''
            }

        </div>
    )
}

function SplashGraphics(){
    return(
        <div className="splashGraphics col-sm-8 col-lg-10">

            <SplashTrain/>

        </div>
    )
}

export function Splash(props){
    return(
        <div className='Splash row'>

            <SplashGraphics/>

            <SplashNav
                language={props.language}
                changeLanguage={props.changeLanguage}
            />

        </div>
    )
}