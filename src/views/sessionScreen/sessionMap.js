//React
import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

// Sub-Components
import Summary from "../../components/summary/summary";
import TopNav from '../../components/topnav/topnav';
import SessionListItem from "./sessionListItem/sessionListItem";
import SplashTrain from "../splash/splashTrain/splashTrain";
import {SessionJump} from "./sessionJump/sessionJump";

// Style Sheets
import './sessionMap.css';
import './mapRepeat/mapRepeat.css';
import './mapBottom/mapBottom.css';

// Images
import trainBody from '../splash/splashTrain/newTrain.png';

//Data
import curriculum from "../../data/curriculum/curriculum";

function SessionMap(props){

    const sessionRoute = parseInt(useParams().sessionId);

    const [currentSession, setCurrentSession] = useState(sessionRoute ? sessionRoute : 1);
    const [sessionSummary, setSessionSummary] = useState('');
    const [mobile,setMobile] = useState(false);

    function checkMobile(){
        let short = window.matchMedia(`(max-height: 500px)`).matches;
        let skinny = window.matchMedia(`(max-width: 767px)`).matches;

        if(short || skinny){
            setMobile(true);
            //setExpand(0);
        }
    }
    function closeSummary(){
        setSessionSummary('');
    }
    function getBgPosition(sessionId){
        const end = 83.25;
        const increment = end / curriculum.sessions.length;

        const nextPosition = `${increment * sessionId}%`;

        return `${nextPosition} 0`;
    }
    function moveBG(session){

        const bg = document.getElementById('bg');
        bg.style.backgroundPosition = getBgPosition(session);
    }
    function moveTrain(newSession){

        function animateTrain(state){

            const train = document.getElementById('splashTrain');

            switch(state){
                case 'start':

                    train.style.animationPlayState = 'running';
                    break;
                case 'end':

                    train.style.animationPlayState = 'pauseed';
                    break;

                default: break;
            }
        }
        function animateWheels(state){
            const wheels = document.getElementsByClassName('trainWheel');
            const wheelsArray = Array.from(wheels);

            switch (state){
                case 'start':
                    if(newSession < currentSession){
                        wheelsArray.forEach(wheel => wheel.style.animationName = 'spinWheelsBack');
                    }
                    Array.from(wheels).forEach(wheel => wheel.style.animationPlayState = 'running');
                    break;
                case 'stop':
                    Array.from(wheels).forEach(wheel => {
                        wheel.style.animationPlayState = 'paused';
                        wheel.style.animationName = 'spinWheels';
                    });
                    break;
                default:
                    break;
            }

        }
        function fadeSession(state){

            const session = document.getElementById('sessionWrap');

            switch (state){
                case 'out':
                    session.style.opacity = '0';
                    break;
                case 'in':
                    session.style.opacity = '1';
                    break;
                default: break;
            }
        }

        function startWheels(){
            animateWheels('start');
        }
        function stopWheels(){
            animateWheels('stop');
        }

        function startTrain(){
            animateTrain('start');
        }
        function stopTrain(){
            animateTrain('stop');
        }

        function changeSession(){
            setCurrentSession( newSession );
        }

        function startMovement(){

            startWheels();
            moveBG(newSession);
            startTrain();
            fadeSession('out');
        }
        function stopMovement(){
            changeSession();
            stopWheels();
            stopTrain();
            fadeSession('in');

        }

        if(!mobile){
            startMovement();
            setTimeout(stopMovement, 3000);
        } else{
            changeSession();
        }
    }
    function nextSession(){
        if (currentSession < curriculum.sessions.length){
            moveTrain(currentSession + 1);
        }
    }
    function backSession(){
        if (currentSession > 1){
            moveTrain(currentSession - 1);
        }
    }

    useEffect( ()=>{

        function handleResize(){
            setTimeout(checkMobile, 1000);
        }

        checkMobile();

        window.addEventListener('resize', handleResize);

        console.log(mobile);
    });

    const session = curriculum.sessions[currentSession - 1];
    let sessionInfo = session.sessionInfo;

    return(
        <div className={`sessionMap container-fluid ${currentSession ? 'scrollLock' : ''}`}>

            {
                sessionSummary ?
                    <Summary
                        currentSession={sessionSummary}
                        closeCurrent={closeSummary}
                        language={props.language}
                    />
                    :''
            }

            <div className={'row no-gutters'}>
                <div className={'col'}>

                    <TopNav
                        language={props.language}
                        changeLanguage={props.changeLanguage}
                        page={'sessions'}
                    />

                </div>
            </div>

            <div
                id='bg'
                className={`row no-gutters`}
                style={ sessionRoute ? {backgroundPosition: getBgPosition(sessionRoute)} : {}}
            >

                <div className={'trainCol col d-none d-md-flex'}>

                    <div className={'trainWrap'}>
                        <SplashTrain/>
                        <img src={trainBody} className={'sizeTrain'} alt={''}/>
                    </div>

                </div>

                <div className={'col d-flex align-items-center justify-content-center'}>

                    <SessionListItem
                        sessionId={sessionInfo.sessionId}
                        image={sessionInfo.graphic}
                        changeSession={setSessionSummary}
                        currentSession={currentSession}
                        nextSession={nextSession}
                        backSession={backSession}
                        moveTrain={moveTrain}
                    />

                </div>
            </div>

            <div className={'row no-gutters'}>
                <div className={'col'}>

                    <SessionJump
                        moveTrain={moveTrain}
                        currentSession={currentSession}
                    />

                </div>
            </div>


        </div>
    )
}

export default SessionMap;
