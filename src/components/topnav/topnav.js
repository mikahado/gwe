// React
import React, {useState,useEffect} from 'react';

// Sub-Components
import Translate from '../translate/translate';
import NavHome from '../navHome';
import AboutGWE from '../aboutGWE/aboutGWE';
import {Button} from "../buttons/buttons";

// Style Sheet
import './topnav.css';

function TopNav (props){

    function getLogo(){
        return `${process.env.PUBLIC_URL}/assets/images/logos/GWElogo.png`;
    }

    let short = window.matchMedia(`(max-height: 500px)`).matches;
    let skinny = window.matchMedia(`(max-width: 500px)`).matches;

    let mobile = false;

    if(short || skinny){
        mobile = true;
    }

    let [expand,setExpand] = useState(mobile ? 0 : 1);



    function toggleMenu(){
        if(!expand){
            setExpand(1);
        }
        else {
            setExpand(0);
        }
    }

    useEffect( ()=>{
        mobile = window.matchMedia(`(max-height: 500px)`|| `(max-height: 500px)`).matches;
        console.log(`Mobile: ${mobile}`);
    })

    return(
        <div className={`TopNav ${props.type ? props.type : ''}`} id="topNav">

            {
                mobile ?
                    <Button
                        text={'Menu'}
                        iconType={!expand ? 'downArrow' : 'upArrow'}
                        click={toggleMenu}
                    />
                : ''
            }
            <Translate
                language={ props.language }
                changeLanguage={props.changeLanguage}
            />
            {
                expand ?
                    <div className="topButtons">

                        <div className="navButtons">

                            <NavHome
                                language={ props.language }
                            />



                            {
                                props.page !== 'library' ?
                                    <Button text={'Library'} link={'/library'} />
                                    :''
                            }
                            {
                                props.page !== 'resources' ?
                                    <Button text={'Resources'} link={'/resources'} />
                                    :''
                            }

                            <AboutGWE
                                language={props.language}
                            />

                        </div>

                    </div>
                    :''

            }

        </div>
    )
}

export default TopNav;