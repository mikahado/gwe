import React from 'react';

//Style Sheet
import './infoBubble.css';

export function InfoBubble(props){

        return(
            <div
                id={props.id}
                className={`infoBubble ${props.type === 'up' ? 'up' :''}`}
                style={ props.visible ? {opacity: '1'} : {opacity: '0'} }
            >
                {
                    props.type === 'up' ?
                        <div className={'arrow'}/>
                        :''
                }
                <div className={'infoMessage roundBorder'}>
                    <p>{props.message}</p>
                </div>
                {
                    props.type !== 'up' ?
                        <div className={'arrow'}/>
                        :''
                }
            </div>
        )
}