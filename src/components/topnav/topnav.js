// React
import React, {useState,useEffect} from 'react';

// Sub-Components
import Translate from '../translate/translate';
import {Button} from "../buttons/buttons";

// Style Sheet
import './topnav.css';

//Icon
import icon from './GWEicon.png';

export function NavButton(props){
    return(
        <Button
            text={props.text}
            link={props.link}
            extLink={props.extLink}
            class={`${
                props.class ? props.class : ''
            } ${
                props.linkPage === props.page ? 'current' : ''
            }`}
        />
    )
}

function TopNav (props){

    const [mobile,setMobile] = useState(false);
    let [expand,setExpand] = useState(0);

    function checkMobile(){
        let short = window.matchMedia(`(max-height: 500px)`).matches;
        let skinny = window.matchMedia(`(max-width: 900px)`).matches;

        if(short || skinny){
            setMobile(true);
            //setExpand(0);
        }
    }

    useEffect( ()=>{

        function handleResize(){
            setTimeout(checkMobile, 1000);
        }

        checkMobile();

        window.addEventListener('resize', handleResize);

        //mobile = window.matchMedia(`(max-height: 500px)`|| `(max-height: 500px)`).matches;
        //console.log(`Mobile: ${mobile}`);
    });

    function toggleMenu(){
        if(!expand){
            setExpand(1);
        }
        else {
            setExpand(0);
        }
    }

    return(
        <nav
            className={
                `TopNav d-flex flex-row justify-content-between ${
                    mobile ? 'mobile' : ''
                } ${
                    props.type ? props.type : ''
                }`}
            id="topNav"
        >

            <div className={'d-flex align-items-center'}>
                <div className={'icon d-none d-sm-block'}>
                    <img src={icon} alt={'The Global Warming Express Logo'}/>
                </div>

                <Translate
                    language={ props.language }
                    changeLanguage={props.changeLanguage}
                />
            </div>

            <div className={'d-flex flex-column flex-sm-row'}>

                <div className={'position-relative'}>

                    {
                        mobile ?
                            <Button
                                text={'Menu'}
                                iconType={!expand ? 'downArrow' : 'upArrow'}
                                click={toggleMenu}
                            />
                            : ''
                    }

                    {
                        expand || !mobile ?

                            <div className="navButtons d-flex flex-column flex-md-row">

                                <NavButton
                                    text={'Home'}
                                    link={'/'}
                                    linkPage={'splash'}
                                    page={props.page}
                                />

                                <NavButton
                                    text={'Sessions'}
                                    link={'/map'}
                                    linkPage={'sessions'}
                                    page={props.page}
                                />

                                <NavButton
                                    text={'Library'}
                                    link={'/library'}
                                    linkPage={'library'}
                                    page={props.page}
                                />

                                <NavButton
                                    text={'Resources'}
                                    link={'/resources'}
                                    linkPage={'resources'}
                                    page={props.page}
                                />

                                <NavButton
                                    text={'About GWE'}
                                    extLink="https://www.theglobalwarmingexpress.org/"
                                    linkPage={'aboutGWE'}
                                    page={props.page}
                                />

                            </div>

                            :''
                    }

                </div>

            </div>

        </nav>
    )
}

export default TopNav;