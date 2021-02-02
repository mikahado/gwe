import React from 'react';

// Sub-Components
import { SummaryEntry } from '../../components/summary/summary';
import {Button} from "../../components/buttons/buttons";

// Data
import { default as get } from '../../utilities/contentGetters';

// Style Sheets
import './nextUp.css';
import {useParams} from "react-router-dom";
import AboutGWE from "../../components/aboutGWE/aboutGWE";

export function NextUp( props ){

    const params = useParams();
    const status = props.status;

    function courseComplete(){
        return(
            <div className='nextUpBody'>
                <h1 className={'nextUpTitle label'}>Course Complete!</h1>
                <p className='label'>
                    Congrats, you've complete this course!
                </p>

                <AboutGWE
                    language={props.language}
                />

                <Button
                    text={'backLibrary'}
                    link='/library'
                    language={props.language}
                    iconType={'leftArrow'}
                />

                <Button
                    text={'Repeat This Session'}
                    link={`/s${params.sessionId}`}
                    language={props.language}
                    iconType={'leftArrow'}
                />
            </div>
        )
    }

    function sessionComplete(){
        return (
            <div className='nextUpBody'>
                <h1 className={'nextUpTitle label'}>Session Complete!</h1>
                <p className='label'>
                    Congrats, you've complete this session!
                </p>

                <Button
                    text={'Continue to Next Session'}
                    link={`/s${parseInt(params.sessionId) + 1}`}
                    language={props.language}
                    iconType={'rightArrow'}
                />

                <Button
                    text={'backLibrary'}
                    link='/library'
                    language={props.language}
                    iconType={'leftArrow'}
                />

                <Button
                    text={'Repeat This Session'}
                    link={`/s${params.sessionId}`}
                    language={props.language}
                    iconType={'leftArrow'}
                />

            </div>
        )
    }

    function nextMaterial(materialSummary){

        return (
            <div className='nextUpBody'>

                <h1 className='nextUpTitle label'>Next Up:</h1>

                <div className={'row'}>

                    <SummaryEntry
                        summary={ materialSummary }
                        language={ props.language }
                    />

                </div>



                <Button
                    text='Continue'
                    link={`/s${materialSummary.sessionId}/p${materialSummary.partNo}`}
                    language={ props.language }
                    iconType={'rightArrow'}
                />

                <Button
                    text='backLibrary'
                    link='/library'
                    language={ props.language }
                    iconType={'leftArrow'}
                />

            </div>

        )
    }

    function checkStatus(){

        if(status === 'sessionComplete'){
            return sessionComplete();
        }
        else if(status === 'courseComplete'){
            return courseComplete();
        }
        else {
            return nextMaterial( props.material );
        }
    }

    return(
        <div className={'row'}>
            <div className='nextUp controlBox col'>
                { checkStatus() }
            </div>
        </div>
        )
}