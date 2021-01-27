import React from 'react';
import { Link } from "react-router-dom";

//Utilites
import { default as get } from '../../utilities/contentGetters';
import pageText from '../../data/pageText';

//Sub-Components
import CloseButton from "../closeButton/closeButton";
import {Icon} from "../icons/icons";

//Style Sheet
import './button.css';

export function Button(props){

    function getText( text, language ){

        const textData = pageText.buttons[ text ];

        if ( textData ){
            const nativeText = get.checkForLanguage( textData, language, true );

            if ( nativeText ){
                return nativeText;
            }
            
        } else {
            return text;
        }
    }

    function getType(){

        function getIcon(){
            if(props.iconType){
                return <Icon iconType={props.iconType}/>
            }
        }

        if (props.type){
            if(props.type === 'close'){
                return <CloseButton click={props.click} id={props.buttonId} class={'closeButton'}/>
            }

        } else {
            return(
                <button onClick={ props.click } id={props.id} className={`Button ${props.class}`}>
                    <span>
                        {props.iconType === 'leftArrow' ? getIcon() : ''}
                        { getText( props.text, props.language )}
                        {props.iconType !== 'leftArrow' ? getIcon() : ''}
                    </span>
                </button>
                )
            }
    }

    if(props.extLink){
        return(
            <a href={props.extLink} target={'_blank'}>
                {getType()}
            </a>
        )
    }

    if (props.link){
        return(
            <Link to={ props.link }>
                {getType()}
            </Link>
        )
    
    } else {
        return getType();
    }
}