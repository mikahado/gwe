import React from "react";

//Style Sheet
import './icons.css';

export function Icon(props){
    return(
        <div className={`icon ${props.iconType}`}/>
    )
}