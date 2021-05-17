// React
import React from "react";

// Data
import curriculum from "../../../data/curriculum/curriculum";

// Style Sheet
import './sessionJump.css';

function SessionButton(props) {

    let material = props.materialData;


    let sessionInfo = material.sessionInfo;
    let sessionId = sessionInfo.sessionId;
    let partNo = material.sessionInfo.partNo;
    let materialId = sessionInfo.materialId;

    function handleClick() {
        props.moveTrain([sessionId, partNo]);
    }

    return (
            <button
                onClick={handleClick}
                className={
                    props.currentSession[0] === sessionId
                    &&
                    props.currentSession[1] === partNo
                        ?
                        'current'
                        :
                        ''
                }
            >
                {materialId}
            </button>
    )
}

export function SessionJump(props){

    return(
        <div className={'tableContents d-flex flex-column flex-md-row align-items-center'}>
            <p className={'mr-2'}>Jump To Session:</p>
            <div className='d-flex flex-column flex-md-row justify-content-around align-items-center w-100 flex-wrap'>
                {
                    curriculum.sessions.map( session =>{
                        return session.material.length > 1 ?

                            <div className={'materialWrap'}>
                                {
                                    session.material.map( material =>{
                                        return(
                                            <SessionButton
                                                materialData={material}
                                                moveTrain={props.moveTrain}
                                                currentSession={props.currentSession}
                                            />
                                        )
                                    })
                                }
                            </div>
                        :
                        <SessionButton
                            materialData={session.material[0]}
                            moveTrain={props.moveTrain}
                            currentSession={props.currentSession}
                        />
                    })
                }

            </div>

        </div>
    )
}

