import React from 'react';

import './nextMaterial.css';
import curriculum from "../../../data/curriculum/curriculum";
import {Button} from "../../../components/buttons/buttons";

export function NextMaterial(props){

    let currentMaterial = props.sessionInfo;

    if ( currentMaterial.ofParts > 1){

        let ofParts = currentMaterial.ofParts;
        let nextMaterial;
        let other;

        if ( currentMaterial.partNo < ofParts ){

            nextMaterial = curriculum.sessions[currentMaterial.sessionId - 1].material[currentMaterial.partNo];
            other = 'Next';

        } else {
            nextMaterial = curriculum.sessions[currentMaterial.sessionId - 1].material[currentMaterial.partNo - 2];
            other = 'Previous';
        }

        let nextId = nextMaterial.sessionInfo.materialId;
        let nextSession = nextMaterial.sessionInfo.sessionId;
        let nextPartNo = nextMaterial.sessionInfo.partNo;
        let title = nextMaterial.content.title.get(props.language);

        return(
            <div className={'nextMaterial'}>
                <div className={'d-flex flex-column align-items-center'}>
                    <h1>{other} Material</h1>
                    <Button
                        text={title}
                        link={`/s${nextSession}/p${nextPartNo}`}
                    />
                    <div className={'sessionInfo'}>
                        <p>Part {nextPartNo} of {ofParts}</p>
                        <p>Session {nextId}</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        )

    } else {
        return null;
    }
}