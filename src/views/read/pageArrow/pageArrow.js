import React, {useState} from "react";
import {InfoBubble} from "../../../components/infoBubble/infoBubble";
import {Button} from "../../../components/buttons/buttons";

export function PageArrow(props){

    const [bubble1,setBubble1] = useState(1);
    const [bubble2,setBubble2] = useState(1);

    function showBubble1(){
        setBubble1(1);
    }
    function showBubble2(){
        setBubble2(1);
    }

    function hideBubble1(){
        setBubble1(0);
    }
    function hideBubble2(){
        setBubble2(0);
    }

    function nextArrow(){

        function clickNext(e){
            props.nextPage(e,true);

        }

        return(
            <div className={'col-s-1 position-relative'}>

                <Button
                    id={'nextPage'}
                    click={clickNext}
                    iconType={'pointerRight'}
                    class={props.className}
                    mouseEnter={showBubble1}
                    mouseLeave={hideBubble1}
                    mouseUp={hideBubble1}
                />

                <InfoBubble
                    message={'Next Page'}
                    id={'nextPageInfo'}
                    visible={bubble1}
                    type={'up'}
                />
            </div>
        )
    }
    function preArrow(){

        function prevPage(){
            if ( props.page > props.startPage ){
                props.changePage(props.page - 1,true);
            }
        }
        function getClass(page, startPage){

            if (page === startPage){
                return 'disabled';
            }
        }

        return(
            <div className={'col-s-1 position-relative'}>

                <Button
                    id={'prevPage'}
                    click={prevPage}
                    iconType={'pointerLeft'}
                    class={`${getClass(props.page, props.startPage)} ${props.className}`}
                    mouseEnter={showBubble2}
                    mouseLeave={hideBubble2}
                    mouseUp={hideBubble2}
                />

                {
                    props.page > props.startPage ?
                        <InfoBubble
                            message={'Previous Page'}
                            id={'nextPageInfo'}
                            visible={bubble2}
                            type={'up'}
                        />
                        :''
                }



            </div>

        )
    }

    setTimeout(hideBubble1,3000)
    setTimeout(hideBubble2,3000)

    if (props.type==='>'){
        return nextArrow();
    } else {
        return preArrow();
    }
}