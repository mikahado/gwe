// React
import React from "react";

// Data
import curriculum from "../../../data/curriculum/curriculum";

// Style Sheet
import './sessionJump.css';

function SessionButton(props){

    function handleClick(){
        props.moveTrain(props.sessionId);
    }

    return(
        <button
            onClick={handleClick}
            className={props.currentSession === props.sessionId ? 'current' : ''}
        >
            {props.sessionId}
        </button>
    )
}

export function SessionJump(props){



    return(
        <div className={'tableContents d-flex align-items-center'}>
            <p className={'mr-2'}>Jump To Session:</p>
            <div className='d-flex justify-content-between w-100 flex-wrap'>

                {
                    curriculum.sessions.map( session =>{
                        return(
                            <SessionButton
                                sessionId={session.sessionInfo.sessionId}
                                moveTrain={props.moveTrain}
                                currentSession={props.currentSession}
                            />
                        )
                    })
                }

            </div>

        </div>
    )
}

