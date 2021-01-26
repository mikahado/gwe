// React
import React from 'react';

// React Components
import {
    Link
  } from "react-router-dom";

// Sub - Components
import Mascot from '../mascot/mascot';

// Style Sheet
import './congrats.css';
import pageText from '../../data/pageText';
import Sally from '../sally/sally';
import { Button } from '../button/button';

class Congrats extends React.Component{
    constructor(props) {
        super(props);
        this.readAgain=this.readAgain.bind(this);
    }

    readAgain(){
        //Set State
        this.props.changePage(1);
        //Remove Congrats Window
        const congrats = document.getElementById('complete');
        congrats.style.display = 'none';
    }

    render(){
        return(
            <div id="complete">
                <div className="completeWindow controlBox">

                    <h1 className="label">Congrats, you've completed this material!</h1>

                        <div className="congratsOptions label">

                            <Button
                                text={ 'Continue' }
                                link={ `/s${ this.props.sessionId }/p${ this.props.partNo}/next` }
                                language={ this.props.language }
                                iconType={'rightArrow'}
                            />

                            <div className={'otherOptions'}>

                                <Button
                                    text={ 'backLibrary' }
                                    link={ '/library'}
                                    language={this.props.language}
                                    iconType={'leftArrow'}
                                />

                                <Button
                                    text ={ 'readAgain' }
                                    click={ this.readAgain }
                                    language={ this.props.language }
                                    iconType={'leftArrow'}
                                />

                            </div>



                        </div>

                </div>
            </div>
        )
    }
}

export default Congrats;