import React from 'react';
import { Link } from "react-router-dom";

//Utilites
import { default as get } from '../../utilities/contentGetters';
import pageText from '../../data/pageText';

//Sub-Components
import CloseButton from "../closeButton/closeButton";

//Style Sheet
import './buttons.css';
import './icons.css';

export function Icon(props){

    if(props.iconType === 'zoomOut'){
        return(
            <svg
                className="icon zoom out"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
            >

                <path fill-rule="evenodd"
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />

                <path
                    d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"
                />

                <path fill-rule="evenodd"
                      d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
                />

            </svg>
        )
    }
    else if(props.iconType === 'zoomIn'){
        return(
            <svg
                className="icon zoom in"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
            >
                <path fill-rule="evenodd"
                      d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                <path
                    d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                <path fill-rule="evenodd"
                      d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
            </svg>
        )
    }
    else{
        return(
            <div className={`icon ${props.iconType}`}/>
        )
    }

}

export function ZoomButton(props){

    function handleIcon(){

        if(props.zoomState === 0){
            return 'zoomIn';
        }
        else{
            return 'zoomOut';
        }
    }
    return(
        <Button
            class={'zoomButton'}
            id={'zoomButton'}
            click={props.zoomFunction}
            iconType={handleIcon()}
        />
        )

}

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