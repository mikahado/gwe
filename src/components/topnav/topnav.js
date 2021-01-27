// React
import React from 'react';

// Sub-Components
import Translate from '../translate/translate';
import NavHome from '../navHome';
import AboutGWE from '../aboutGWE/aboutGWE';
import {Button} from "../button/button";

// Style Sheet
import './topnav.css';

class TopNav extends React.Component{
    getLogo(){
        return `${process.env.PUBLIC_URL}/assets/images/logos/GWElogo.png`;
    }
    render(){
        return(
            <div className={`TopNav ${this.props.type ? this.props.type : ''}`} id="topNav">


                <div className="topButtons">

                    <div className="navButtons">



                        <NavHome
                            language={ this.props.language }
                        />

                        {
                            this.props.page !== 'library' ?
                                <Button text={'Library'} link={'/library'} />
                                :''
                        }
                        {
                            this.props.page !== 'resources' ?
                                <Button text={'Resources'} link={'/resources'} />
                                :''
                        }

                        <AboutGWE
                            language={this.props.language}
                        />

                    </div>

                    <Translate
                        language={ this.props.language }
                        changeLanguage={this.props.changeLanguage}
                    />

                </div>

            </div>
        )
    }
}

export default TopNav;